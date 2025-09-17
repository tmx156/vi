import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  width?: number;
  height?: number;
  sizes?: string;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  width,
  height,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Mobile detection
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Generate optimized versions using reliable Imgur sizes
  const getOptimizedSrc = (originalSrc: string, format: 'webp' | 'jpeg' = 'jpeg') => {
    if (!originalSrc.includes('imgur.com')) {
      return originalSrc; // Return original if not Imgur
    }

    // Extract Imgur ID from URL
    const imgurId = originalSrc.match(/imgur\.com\/(.+)\.(jpeg|jpg|png)/)?.[1];
    if (!imgurId) return originalSrc;

    // Use Imgur's reliable size suffixes
    if (isMobile) {
      return `https://i.imgur.com/${imgurId}l.jpeg`; // 640x640 for mobile
    }
    return `https://i.imgur.com/${imgurId}h.jpeg`; // 1024x1024 for desktop
  };

  const getSrcSet = (originalSrc: string, format: 'webp' | 'jpeg' = 'jpeg') => {
    if (!originalSrc.includes('imgur.com')) {
      return undefined; // No srcset for non-Imgur images
    }

    const imgurId = originalSrc.match(/imgur\.com\/(.+)\.(jpeg|jpg|png)/)?.[1];
    if (!imgurId) return undefined;

    // Use Imgur's size suffixes for responsive images
    return [
      `https://i.imgur.com/${imgurId}m.jpeg 320w`, // 320x320
      `https://i.imgur.com/${imgurId}l.jpeg 640w`, // 640x640
      `https://i.imgur.com/${imgurId}h.jpeg 1024w`, // 1024x1024
    ].join(', ');
  };

  const getWebpSrcSet = (originalSrc: string) => {
    if (!originalSrc.includes('imgur.com')) {
      return undefined;
    }

    const imgurId = originalSrc.match(/imgur\.com\/(.+)\.(jpeg|jpg|png)/)?.[1];
    if (!imgurId) return undefined;

    // WebP versions using Imgur size suffixes
    return [
      `https://i.imgur.com/${imgurId}m.webp 320w`, // 320x320
      `https://i.imgur.com/${imgurId}l.webp 640w`, // 640x640
      `https://i.imgur.com/${imgurId}h.webp 1024w`, // 1024x1024
    ].join(', ');
  };

  const handleError = () => {
    setImageError(true);
  };

  const handleLoad = () => {
    setImageLoaded(true);
  };

  if (imageError) {
    return (
      <div className={`bg-secondary/30 flex items-center justify-center ${className}`}>
        <span className="text-foreground/40 text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <picture>
      {/* WebP format for modern browsers */}
      {getWebpSrcSet(src) && (
        <source
          srcSet={getWebpSrcSet(src)}
          sizes={sizes}
          type="image/webp"
        />
      )}

      {/* JPEG fallback */}
      {getSrcSet(src) && (
        <source
          srcSet={getSrcSet(src)}
          sizes={sizes}
          type="image/jpeg"
        />
      )}

      {/* Main image element */}
      <img
        src={getOptimizedSrc(src)}
        alt={alt}
        className={`${className} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        loading={loading}
        fetchPriority={fetchPriority}
        width={width}
        height={height}
        onError={handleError}
        onLoad={handleLoad}
        decoding="async"
        style={{
          contentVisibility: loading === 'lazy' ? 'auto' : undefined,
        }}
      />

      {/* Loading placeholder */}
      {!imageLoaded && !imageError && (
        <div className={`absolute inset-0 bg-secondary/20 animate-pulse ${className}`} />
      )}
    </picture>
  );
}