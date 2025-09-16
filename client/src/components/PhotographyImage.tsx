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

  const getHighQualitySrc = (originalSrc: string) => {
    // For photography company - always use highest quality available
    if (originalSrc.includes('i.imgur.com')) {
      const imageId = originalSrc.split('/').pop()?.split('.')[0];
      if (imageId) {
        // Use Vercel Image Optimization for better performance
        return `/_vercel/image?url=${encodeURIComponent(`https://i.imgur.com/${imageId}.jpeg`)}&w=1920&q=90`;
      }
    }

    return originalSrc;
  };

  const getFallbackSrc = (originalSrc: string) => {
    if (originalSrc.includes('i.imgur.com')) {
      const imageId = originalSrc.split('/').pop()?.split('.')[0];
      if (imageId) {
        // Use full resolution JPEG as fallback
        return `https://i.imgur.com/${imageId}.jpeg`;
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
      src={getHighQualitySrc(src)}
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
