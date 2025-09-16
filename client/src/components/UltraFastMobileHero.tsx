import { useState, useEffect } from 'react';

interface UltraFastMobileHeroProps {
  children?: React.ReactNode;
}

export default function UltraFastMobileHero({ children }: UltraFastMobileHeroProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [highQualityLoaded, setHighQualityLoaded] = useState(false);
  
  // Ultra-fast LCP strategy with instant placeholder - Full resolution for photography
  const instantPlaceholder = 'https://i.imgur.com/MRGNjyIm.webp'; // Medium placeholder for instant LCP
  const mobileOptimized = 'https://i.imgur.com/MRGNjyI.webp'; // Full resolution WebP
  const fallbackJpeg = 'https://i.imgur.com/MRGNjyI.jpeg'; // Full resolution JPEG

  // Preload critical resources immediately
  useEffect(() => {
    // Preload the instant placeholder
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = instantPlaceholder;
    link.fetchPriority = 'high';
    document.head.appendChild(link);

    // Preload mobile optimized image
    const mobileLink = document.createElement('link');
    mobileLink.rel = 'preload';
    mobileLink.as = 'image';
    mobileLink.href = mobileOptimized;
    mobileLink.fetchPriority = 'high';
    document.head.appendChild(mobileLink);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-screen overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={mobileOptimized}
          alt="Luxury Photography Hero"
          className="w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.src = fallbackJpeg;
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Hero Content - Simple and Stable */}
      <div className="relative z-10 h-full px-4 py-8">
        {children}
      </div>
    </section>
  );
}
