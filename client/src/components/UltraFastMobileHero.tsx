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
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);

    // Preload mobile optimized image
    const mobileLink = document.createElement('link');
    mobileLink.rel = 'preload';
    mobileLink.as = 'image';
    mobileLink.href = mobileOptimized;
    mobileLink.fetchPriority = 'high';
    mobileLink.crossOrigin = 'anonymous';
    document.head.appendChild(mobileLink);
  }, []);

  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{
        height: '100dvh',
        minHeight: '100dvh',
        width: '100vw',
        maxWidth: '100vw',
        background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
        contain: 'layout style paint',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        margin: 0,
        padding: 0,
        border: 'none',
        outline: 'none'
      }}
    >
      {/* INSTANT LCP: Tiny placeholder loads immediately */}
      <img
        src={instantPlaceholder}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          objectPosition: 'center center',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          contain: 'layout style paint',
          width: '100vw',
          height: '100vh',
          minWidth: '100%',
          minHeight: '100%',
          border: 'none',
          outline: 'none',
          margin: 0,
          padding: 0,
          imageRendering: 'auto',
          opacity: 1,
          filter: 'blur(1px)',
          scale: '1.05',
          willChange: 'auto'
        }}
        loading="eager"
        fetchPriority="high"
        decoding="sync"
        onLoad={() => setImageLoaded(true)}
      />

      {/* HIGH QUALITY: Mobile-optimized image loads after placeholder */}
      <img
        src={mobileOptimized}
        alt="Luxury Photography Hero"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          objectPosition: 'center center',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          contain: 'layout style paint',
          width: '100vw',
          height: '100vh',
          minWidth: '100%',
          minHeight: '100%',
          border: 'none',
          outline: 'none',
          margin: 0,
          padding: 0,
          imageRendering: 'auto',
          opacity: highQualityLoaded ? 1 : 0,
          transition: 'opacity 0.4s ease-in-out',
          willChange: 'auto'
        }}
        loading="eager"
        fetchPriority="high"
        decoding="sync"
        onLoad={() => setHighQualityLoaded(true)}
        onError={(e) => {
          // Fallback to JPEG if WebP fails
          const img = e.target as HTMLImageElement;
          if (img.src !== fallbackJpeg) {
            img.src = fallbackJpeg;
          }
        }}
      />

      {/* Enhanced overlay for better visual quality */}
      <div
        className="absolute inset-0"
        style={{
          contain: 'layout style paint',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          background: `
            linear-gradient(to right, 
              rgba(0,0,0,0.05) 0%, 
              rgba(0,0,0,0.15) 40%, 
              rgba(0,0,0,0.25) 70%, 
              rgba(0,0,0,0.35) 100%
            )
          `,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 35% 100%)',
          willChange: 'auto'
        }}
      />
      
      {/* Additional subtle gradient overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          contain: 'layout style paint',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          background: `
            radial-gradient(ellipse at center, 
              transparent 0%, 
              rgba(0,0,0,0.1) 70%, 
              rgba(0,0,0,0.2) 100%
            )
          `,
          opacity: 0.6,
          willChange: 'auto'
        }}
      />

      {/* Critical content - renders immediately on gradient background */}
      <div
        className="relative z-20 text-center w-full max-w-sm mx-auto px-4 py-8"
        style={{
          contain: 'layout style paint',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          willChange: 'auto'
        }}
      >
        {children}
      </div>
    </section>
  );
}
