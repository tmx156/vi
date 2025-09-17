import { useState, useEffect, useRef, memo } from 'react';

interface UltraOptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  onLoad?: () => void;
}

const UltraOptimizedImage = memo(function UltraOptimizedImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  width,
  height,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
  onLoad
}: UltraOptimizedImageProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority || loading === 'eager');
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Mobile and connection detection
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return false;
  });

  const [connectionType, setConnectionType] = useState<'fast' | 'slow'>('fast');

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    const checkConnection = () => {
      if ('connection' in navigator) {
        const conn = (navigator as any).connection;
        const effectiveType = conn?.effectiveType;
        setConnectionType(effectiveType === 'slow-2g' || effectiveType === '2g' || effectiveType === '3g' ? 'slow' : 'fast');
      }
    };

    checkMobile();
    checkConnection();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!priority && loading === 'lazy' && imgRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.disconnect();
          }
        },
        {
          rootMargin: isMobile ? '50px' : '100px' // Smaller preload margin on mobile
        }
      );

      observerRef.current.observe(imgRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [priority, loading, isMobile]);

  // Generate optimized Imgur URLs with aggressive mobile optimization
  const getOptimizedSrc = (originalSrc: string) => {
    if (!originalSrc.includes('imgur.com')) {
      return originalSrc;
    }

    const imgurId = originalSrc.match(/imgur\.com\/(.+)\.(jpeg|jpg|png)/)?.[1];
    if (!imgurId) return originalSrc;

    if (isMobile) {
      // Mobile: Use smaller sizes based on connection
      if (connectionType === 'slow') {
        return `https://i.imgur.com/${imgurId}s.jpeg`; // 320x320 - ultra small for slow connections
      }
      return `https://i.imgur.com/${imgurId}m.jpeg`; // 640x640 for mobile
    }

    // Desktop: High quality
    return `https://i.imgur.com/${imgurId}h.jpeg`; // 1024x1024
  };

  const generateSrcSet = (originalSrc: string, format: 'webp' | 'avif' | 'jpeg' = 'jpeg') => {
    if (!originalSrc.includes('imgur.com')) {
      return undefined;
    }

    const imgurId = originalSrc.match(/imgur\.com\/(.+)\.(jpeg|jpg|png)/)?.[1];
    if (!imgurId) return undefined;

    const ext = format === 'jpeg' ? 'jpeg' : format;

    // Optimized srcset with fewer variants for faster selection
    if (isMobile) {
      return [
        `https://i.imgur.com/${imgurId}s.${ext} 320w`,
        `https://i.imgur.com/${imgurId}m.${ext} 640w`
      ].join(', ');
    }

    return [
      `https://i.imgur.com/${imgurId}m.${ext} 640w`,
      `https://i.imgur.com/${imgurId}l.${ext} 1024w`,
      `https://i.imgur.com/${imgurId}h.${ext} 1280w`
    ].join(', ');
  };

  const handleError = () => {
    setImageError(true);
  };

  const handleLoad = () => {
    setImageLoaded(true);
    onLoad?.();
  };

  // Don't render anything until in view (for lazy loading)
  if (!isInView) {
    return (
      <div
        ref={imgRef}
        className={`bg-secondary/20 ${className}`}
        style={{ width, height }}
      />
    );
  }

  if (imageError) {
    return (
      <div className={`bg-secondary/30 flex items-center justify-center ${className}`}>
        <span className="text-foreground/40 text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <picture className={className}>
      {/* AVIF for best compression (when supported) */}
      {generateSrcSet(src, 'avif') && (
        <source
          srcSet={generateSrcSet(src, 'avif')}
          sizes={sizes}
          type="image/avif"
        />
      )}

      {/* WebP for good compression */}
      {generateSrcSet(src, 'webp') && (
        <source
          srcSet={generateSrcSet(src, 'webp')}
          sizes={sizes}
          type="image/webp"
        />
      )}

      {/* JPEG fallback */}
      {generateSrcSet(src, 'jpeg') && (
        <source
          srcSet={generateSrcSet(src, 'jpeg')}
          sizes={sizes}
          type="image/jpeg"
        />
      )}

      {/* Main image element */}
      <img
        ref={imgRef}
        src={getOptimizedSrc(src)}
        alt={alt}
        className={`${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        loading={loading}
        fetchPriority={fetchPriority}
        width={width}
        height={height}
        onError={handleError}
        onLoad={handleLoad}
        decoding="async"
        style={{
          contentVisibility: loading === 'lazy' ? 'auto' : undefined,
          willChange: 'auto'
        }}
      />

      {/* Loading placeholder */}
      {!imageLoaded && !imageError && (
        <div
          className={`absolute inset-0 bg-gradient-to-r from-secondary/10 via-secondary/20 to-secondary/10 animate-pulse`}
          style={{
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite'
          }}
        />
      )}

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </picture>
  );
});

export default UltraOptimizedImage;