import { useState, useEffect } from 'react';

interface UltraFastMobileHeroProps {
  children?: React.ReactNode;
}

export default function UltraFastMobileHero({ children }: UltraFastMobileHeroProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    // Initialize with correct mobile state
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return false;
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fixed hero image URLs using reliable Imgur sizes
  const getOptimizedHeroSrc = () => {
    const imageId = 'MRGNjyI';

    if (isMobile) {
      // Mobile: use medium size for fast loading
      return `https://i.imgur.com/${imageId}l.jpeg`; // 640x640
    }
    // Desktop: use high quality
    return `https://i.imgur.com/${imageId}h.jpeg`; // 1024x1024
  };

  const getFallbackSrc = () => {
    const imageId = 'MRGNjyI';
    // Fallback to original Imgur URL
    return `https://i.imgur.com/${imageId}.jpeg`;
  };

  // Preload critical hero image for faster LCP
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = getOptimizedHeroSrc();
    link.fetchPriority = 'high';
    document.head.appendChild(link);

    if (process.env.NODE_ENV === 'development') {
      console.log(`🚀 Preloading hero image: ${getOptimizedHeroSrc()}`);
    }

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, [isMobile]);

  return (
    <section className="relative w-full h-screen min-h-screen overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={getOptimizedHeroSrc()}
          alt="Luxury Photography Hero"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          onLoad={() => {
            setImageLoaded(true);
            if (process.env.NODE_ENV === 'development') {
              console.log(`🖼️ Hero image loaded: ${isMobile ? 'Mobile' : 'Desktop'} version`);
            }
          }}
          onError={(e) => {
            if (process.env.NODE_ENV === 'development') {
              console.warn('⚠️ Hero image failed, trying fallback');
            }
            const img = e.target as HTMLImageElement;
            if (!imageError) {
              setImageError(true);
              img.src = getFallbackSrc();
            }
          }}
          style={{
            opacity: imageLoaded ? 1 : 0.8,
            transition: 'opacity 0.3s ease'
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
      </div>

      {/* Hero Content - Simple and Stable */}
      <div className="relative z-20 h-full px-4 py-8">
        {children}
      </div>
    </section>
  );
}
