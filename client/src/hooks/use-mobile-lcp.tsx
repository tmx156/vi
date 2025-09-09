import { useEffect, useState } from 'react';

export function useMobileLCP() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      // Detect low-end devices for additional optimizations
      const lowEnd = navigator.hardwareConcurrency <= 2 || 
                    navigator.deviceMemory <= 2 ||
                    /Android.*Chrome\/[.0-9]* (Mobile|mini)/.test(navigator.userAgent);
      setIsLowEndDevice(lowEnd);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return { isMobile, isLowEndDevice };
}

export function useLCPOptimization() {
  const [lcpElement, setLcpElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Find and optimize the LCP element
    const heroImage = document.querySelector('.hero-bg') as HTMLImageElement;
    if (heroImage) {
      setLcpElement(heroImage);
      
      // Optimize the LCP element
      heroImage.style.willChange = 'auto';
      heroImage.style.contain = 'layout style paint';
      
      // Preload the image if not already loaded
      if (!heroImage.complete) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = heroImage.src;
        link.fetchPriority = 'high';
        document.head.appendChild(link);
      }
    }
  }, []);

  return lcpElement;
}
