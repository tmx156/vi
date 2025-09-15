import { useState, useEffect } from 'react';

interface MobileOptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'eager' | 'lazy';
  fetchpriority?: 'high' | 'low' | 'auto';
  decoding?: 'sync' | 'async' | 'auto';
  onLoad?: () => void;
}

export default function MobileOptimizedImage({
  src,
  alt,
  className = '',
  style = {},
  loading = 'lazy',
  fetchpriority = 'low',
  decoding = 'async',
  onLoad
}: MobileOptimizedImageProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const getOptimizedSrc = (originalSrc: string) => {
    if (!isMobile) return originalSrc;

    // For photography company - prioritize quality over file size
    if (originalSrc.includes('i.imgur.com')) {
      const imageId = originalSrc.split('/').pop()?.split('.')[0];
      if (imageId) {
        const screenWidth = window.innerWidth;
        const pixelRatio = window.devicePixelRatio || 1;
        
        // Use much higher quality images for photography portfolio
        if (screenWidth <= 480) {
          // Small screens - use 'l' size minimum for photography quality
          return `https://i.imgur.com/${imageId}l.webp`;
        } else if (screenWidth <= 768) {
          // Mobile screens - use 'h' size for high quality
          return `https://i.imgur.com/${imageId}h.webp`;
        } else {
          // Tablet screens - use full resolution
          return `https://i.imgur.com/${imageId}.webp`;
        }
      }
    }

    return originalSrc;
  };

  const getFallbackSrc = (originalSrc: string) => {
    if (!isMobile) return originalSrc;

    if (originalSrc.includes('i.imgur.com')) {
      const imageId = originalSrc.split('/').pop()?.split('.')[0];
      if (imageId) {
        const screenWidth = window.innerWidth;
        
        // Use high quality JPEG fallbacks for photography
        if (screenWidth <= 480) {
          return `https://i.imgur.com/${imageId}l.jpeg`;
        } else if (screenWidth <= 768) {
          return `https://i.imgur.com/${imageId}h.jpeg`;
        } else {
          return `https://i.imgur.com/${imageId}.jpeg`;
        }
      }
    }

    return originalSrc;
  };

  const handleLoad = () => {
    setImageLoaded(true);
    onLoad?.();
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.target as HTMLImageElement;
    if (img.src !== getFallbackSrc(src)) {
      img.src = getFallbackSrc(src);
    }
  };

  return (
    <img
      src={getOptimizedSrc(src)}
      alt={alt}
      className={className}
      style={{
        ...style,
        opacity: imageLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease',
        // Mobile-specific optimizations for photography quality
        ...(isMobile && {
          imageRendering: 'auto' as any, // Best quality for photography
          contain: 'layout style paint',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        })
      }}
      loading={loading}
      fetchPriority={fetchpriority}
      decoding={decoding}
      onLoad={handleLoad}
      onError={handleError}
    />
  );
}
