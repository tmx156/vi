import { useEffect, useState } from 'react';

export function useMobilePerformance() {
  // Use immediate mobile detection to avoid hydration mismatch
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return false;
  });
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const [connectionType, setConnectionType] = useState<'slow' | 'fast' | 'unknown'>('unknown');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const checkReducedMotion = () => {
      setIsReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };

    const checkDeviceCapabilities = () => {
      // Detect low-end devices for additional optimizations
      const lowEnd = navigator.hardwareConcurrency <= 2 ||
                    (navigator as any).deviceMemory <= 2 ||
                    /Android.*Chrome\/[.0-9]* (Mobile|mini)/.test(navigator.userAgent);
      setIsLowEndDevice(lowEnd);
    };

    const checkConnectionType = () => {
      // @ts-ignore - connection API is experimental
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (connection) {
        const effectiveType = connection.effectiveType;
        if (effectiveType === 'slow-2g' || effectiveType === '2g') {
          setConnectionType('slow');
        } else if (effectiveType === '3g' || effectiveType === '4g') {
          setConnectionType('fast');
        } else {
          setConnectionType('unknown');
        }
      }
    };

    // Initial checks
    checkMobile();
    checkReducedMotion();
    checkDeviceCapabilities();
    checkConnectionType();

    // Listen for resize events
    window.addEventListener('resize', checkMobile);
    
    // Listen for motion preference changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', checkReducedMotion);

    // Listen for connection changes
    // @ts-ignore
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection) {
      connection.addEventListener('change', checkConnectionType);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', checkReducedMotion);
      if (connection) {
        connection.removeEventListener('change', checkConnectionType);
      }
    };
  }, []);

  return { isMobile, isReducedMotion, isLowEndDevice, connectionType };
}

export function useIntersectionObserver() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasIntersected) {
          setIsIntersecting(true);
          setHasIntersected(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const elements = document.querySelectorAll('.reveal-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [hasIntersected]);

  return { isIntersecting, hasIntersected };
}
