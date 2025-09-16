import { useState } from 'react';

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

  // Generate WebP and responsive versions
  const getOptimizedSrc = (originalSrc: string, format: 'webp' | 'jpeg' = 'jpeg') => {
    if (!originalSrc.includes('imgur.com')) {
      return originalSrc; // Return original if not Imgur
    }

    // Extract Imgur ID from URL
    const imgurId = originalSrc.match(/imgur\.com\/(.+)\.(jpeg|jpg|png)/)?.[1];
    if (!imgurId) return originalSrc;

    // Generate different sizes and formats
    if (format === 'webp') {
      return `https://i.imgur.com/${imgurId}.webp`;
    }

    return `https://i.imgur.com/${imgurId}.jpeg`;
  };

  const getSrcSet = (originalSrc: string) => {
    if (!originalSrc.includes('imgur.com')) {
      return undefined; // No srcset for non-Imgur images
    }

    const imgurId = originalSrc.match(/imgur\.com\/(.+)\.(jpeg|jpg|png)/)?.[1];
    if (!imgurId) return undefined;

    // Imgur size suffixes: s=90x90, b=160x160, t=160x160, m=320x320, l=640x640, h=1024x1024
    return [
      `https://i.imgur.com/${imgurId}m.jpeg 320w`,
      `https://i.imgur.com/${imgurId}l.jpeg 640w`,
      `https://i.imgur.com/${imgurId}h.jpeg 1024w`,
      `https://i.imgur.com/${imgurId}.jpeg 1200w`
    ].join(', ');
  };

  const getWebpSrcSet = (originalSrc: string) => {
    if (!originalSrc.includes('imgur.com')) {
      return undefined;
    }

    const imgurId = originalSrc.match(/imgur\.com\/(.+)\.(jpeg|jpg|png)/)?.[1];
    if (!imgurId) return undefined;

    return [
      `https://i.imgur.com/${imgurId}m.webp 320w`,
      `https://i.imgur.com/${imgurId}l.webp 640w`,
      `https://i.imgur.com/${imgurId}h.webp 1024w`,
      `https://i.imgur.com/${imgurId}.webp 1200w`
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