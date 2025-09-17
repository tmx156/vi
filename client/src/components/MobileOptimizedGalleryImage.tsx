import { useState, useEffect, useRef } from 'react';
import { perfMonitor } from '../utils/performanceMonitor';
import { connectionDetector, type ConnectionSpeed } from '../utils/connectionDetector';

interface MobileOptimizedGalleryImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  onClick?: () => void;
}

export default function MobileOptimizedGalleryImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  onClick
}: MobileOptimizedGalleryImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [loadStartTime, setLoadStartTime] = useState(0);
  const [connectionSpeed, setConnectionSpeed] = useState<ConnectionSpeed>('unknown');
  const [blurLoaded, setBlurLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const blurRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Monitor connection speed
  useEffect(() => {
    setConnectionSpeed(connectionDetector.getConnectionSpeed());

    const handleConnectionChange = (speed: ConnectionSpeed) => {
      setConnectionSpeed(speed);
    };

    connectionDetector.onConnectionChange(handleConnectionChange);
    return () => connectionDetector.removeConnectionListener(handleConnectionChange);
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!imgRef.current || loading === 'eager') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setLoadStartTime(performance.now());
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0.1
      }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [loading]);

  const getBlurPlaceholder = (originalSrc: string) => {
    if (!originalSrc.includes('i.imgur.com')) return originalSrc;

    const imageId = originalSrc.split('/').pop()?.split('.')[0];
    if (!imageId) return originalSrc;

    // Ultra-tiny placeholder using Imgur's 's' suffix (90x90px, ~2-4KB)
    return `https://i.imgur.com/${imageId}s.jpeg`;
  };

  const getOptimizedSrc = (originalSrc: string) => {
    if (!originalSrc.includes('i.imgur.com')) return originalSrc;

    const imageId = originalSrc.split('/').pop()?.split('.')[0];
    if (!imageId) return originalSrc;

    // Use Imgur's size suffixes based on device and connection
    if (isMobile) {
      // Mobile: use smaller sizes based on connection
      if (connectionSpeed === 'slow') {
        return `https://i.imgur.com/${imageId}m.jpeg`; // 320x320
      }
      return `https://i.imgur.com/${imageId}l.jpeg`; // 640x640
    }

    // Desktop: use larger sizes
    if (connectionSpeed === 'slow') {
      return `https://i.imgur.com/${imageId}l.jpeg`; // 640x640
    }
    return `https://i.imgur.com/${imageId}h.jpeg`; // 1024x1024
  };

  const getFallbackSrc = (originalSrc: string) => {
    if (!originalSrc.includes('i.imgur.com')) return originalSrc;

    const imageId = originalSrc.split('/').pop()?.split('.')[0];
    if (!imageId) return originalSrc;

    // Fallback to medium size for reliability
    return `https://i.imgur.com/${imageId}m.jpeg`;
  };

  const handleLoad = () => {
    setImageLoaded(true);
    if (loadStartTime > 0) {
      perfMonitor.monitorImageLoad(getOptimizedSrc(src), loadStartTime);
    }
  };

  const handleError = () => {
    if (!imageError) {
      setImageError(true);
      // Try fallback
      if (imgRef.current) {
        imgRef.current.src = getFallbackSrc(src);
      }
    }
  };

  return (
    <div
      className={`relative aspect-[3/4] overflow-hidden rounded-lg ${className}`}
      onClick={onClick}
    >
      {/* Ultra-fast blur placeholder (loads immediately) */}
      <img
        ref={blurRef}
        src={getBlurPlaceholder(src)}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ${
          blurLoaded && !imageLoaded ? 'opacity-100 blur-sm scale-105' : 'opacity-0'
        }`}
        loading="eager"
        decoding="async"
        onLoad={() => setBlurLoaded(true)}
        style={{
          filter: 'blur(8px)',
          transform: 'scale(1.05)',
        }}
      />

      {/* Loading placeholder */}
      {!blurLoaded && !imageLoaded && (
        <div className="absolute inset-0 bg-secondary/20 animate-pulse" />
      )}

      {/* High quality image */}
      {isInView && (
        <img
          ref={imgRef}
          src={getOptimizedSrc(src)}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={loading}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          style={{
            // Performance optimizations
            contentVisibility: loading === 'lazy' ? 'auto' : undefined,
            containIntrinsicSize: '300px 400px',
          }}
        />
      )}

      {/* Error state */}
      {imageError && !imageLoaded && (
        <div className="absolute inset-0 bg-secondary/30 flex items-center justify-center">
          <span className="text-foreground/40 text-sm">Image unavailable</span>
        </div>
      )}
    </div>
  );
}