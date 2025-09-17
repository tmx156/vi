import { useState, useEffect } from 'react';

interface PhotographyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'eager' | 'lazy';
  fetchpriority?: 'high' | 'low' | 'auto';
  decoding?: 'sync' | 'async' | 'auto';
  onLoad?: () => void;
  priority?: boolean;
}

export default function PhotographyImage({
  src,
  alt,
  className = '',
  style = {},
  loading = 'lazy',
  fetchpriority = 'low',
  decoding = 'async',
  onLoad,
  priority = false
}: PhotographyImageProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.includes('i.imgur.com')) {
      const imageId = originalSrc.split('/').pop()?.split('.')[0];
      if (imageId) {
        // Use reliable Imgur size suffixes
        if (isMobile) {
          return `https://i.imgur.com/${imageId}l.jpeg`; // 640x640 for mobile
        }
        return `https://i.imgur.com/${imageId}h.jpeg`; // 1024x1024 for desktop
      }
    }

    return originalSrc;
  };

  const getFallbackSrc = (originalSrc: string) => {
    if (originalSrc.includes('i.imgur.com')) {
      const imageId = originalSrc.split('/').pop()?.split('.')[0];
      if (imageId) {
        // Use medium size as fallback for reliability
        return `https://i.imgur.com/${imageId}m.jpeg`;
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
        transition: 'opacity 0.5s ease',
        // Photography-optimized rendering for best quality
        imageRendering: 'auto' as any,
        // Optimize for photography quality
        contain: 'layout style paint',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
      loading={priority ? 'eager' : loading}
      fetchPriority={priority ? 'high' : fetchpriority}
      decoding={decoding}
      onLoad={handleLoad}
      onError={handleError}
    />
  );
}
