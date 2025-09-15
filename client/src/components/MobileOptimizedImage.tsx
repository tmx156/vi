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

    // Convert imgur URLs to mobile versions with WebP for better compression
    if (originalSrc.includes('i.imgur.com')) {
      const imageId = originalSrc.split('/').pop()?.split('.')[0];
      if (imageId) {
        // Use 'l' size with WebP for mobile (better compression and quality)
        return `https://i.imgur.com/${imageId}l.webp`;
      }
    }

    return originalSrc;
  };

  const handleLoad = () => {
    setImageLoaded(true);
    onLoad?.();
  };

  return (
    <img
      src={getOptimizedSrc(src)}
      alt={alt}
      className={className}
      style={{
        ...style,
        opacity: imageLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }}
      loading={loading}
      fetchPriority={fetchpriority}
      decoding={decoding}
      onLoad={handleLoad}
    />
  );
}
