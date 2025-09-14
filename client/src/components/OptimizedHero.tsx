import { useEffect, useState, useRef } from 'react';
import { useMobileLCP, useLCPOptimization } from '@/hooks/use-mobile-lcp';

interface OptimizedHeroProps {
  children?: React.ReactNode;
}

export default function OptimizedHero({ children }: OptimizedHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isMobile, isLowEndDevice } = useMobileLCP();
  const lcpElement = useLCPOptimization();
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Mark as loaded when component mounts
    setIsLoaded(true);
    
    // Only apply mobile optimizations on mobile devices
    if (isMobile && imgRef.current) {
      const img = imgRef.current;
      
      // Optimize for mobile LCP only
      img.style.contain = 'layout style paint';
      img.style.willChange = 'auto';
      
      // Reduce paint complexity on low-end devices
      if (isLowEndDevice) {
        img.style.filter = 'none';
        img.style.transform = 'translateZ(0)';
      }
    } else if (!isMobile && imgRef.current) {
      // Desktop optimizations - remove mobile-specific styles
      const img = imgRef.current;
      img.style.contain = '';
      img.style.willChange = '';
      img.style.filter = '';
      img.style.transform = '';
    }
  }, [isMobile, isLowEndDevice]);

  return (
    <section className="hero-section">
      {/* Critical LCP image - mobile optimized */}
      <img
        ref={imgRef}
        src="https://i.imgur.com/MRGNjyI.jpeg"
        alt=""
        className="hero-bg"
        loading="eager"
        fetchpriority="high"
        decoding="sync"
        onLoad={() => setIsLoaded(true)}
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',
          ...(isMobile ? {
            willChange: 'auto',
            contain: 'layout style paint'
          } : {})
        }}
      />
      
      {/* Dark overlay */}
      <div className="hero-overlay"></div>
      
      {/* Hero content */}
      <div className="hero-content">
        {children}
      </div>
    </section>
  );
}
