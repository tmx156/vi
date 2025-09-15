import { useEffect, useState } from 'react';

interface MobileBundleConfig {
  isMobile: boolean;
  isLowEndDevice: boolean;
  connectionType: 'slow' | 'fast' | 'unknown';
}

export function useMobileBundle() {
  const [config, setConfig] = useState<MobileBundleConfig>({
    isMobile: false,
    isLowEndDevice: false,
    connectionType: 'unknown'
  });

  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth <= 768;
      const isLowEndDevice = navigator.hardwareConcurrency <= 2 ||
                            (navigator as any).deviceMemory <= 2 ||
                            /Android.*Chrome\/[.0-9]* (Mobile|mini)/.test(navigator.userAgent);
      
      // @ts-ignore - connection API is experimental
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      let connectionType: 'slow' | 'fast' | 'unknown' = 'unknown';
      
      if (connection) {
        const effectiveType = connection.effectiveType;
        if (effectiveType === 'slow-2g' || effectiveType === '2g') {
          connectionType = 'slow';
        } else if (effectiveType === '3g' || effectiveType === '4g') {
          connectionType = 'fast';
        }
      }

      setConfig({ isMobile, isLowEndDevice, connectionType });
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return config;
}

// Mobile-optimized component loader
export function createMobileOptimizedComponent<T extends React.ComponentType<any>>(
  Component: T,
  options: {
    mobileFallback?: React.ComponentType<any>;
    lowEndFallback?: React.ComponentType<any>;
    lazyLoad?: boolean;
    priority?: 'high' | 'low';
  } = {}
) {
  return function MobileOptimizedWrapper(props: React.ComponentProps<T>) {
    const { isMobile, isLowEndDevice, connectionType } = useMobileBundle();
    const [shouldLoad, setShouldLoad] = useState(!options.lazyLoad);

    useEffect(() => {
      if (options.lazyLoad) {
        // Delay loading on slow connections
        const delay = connectionType === 'slow' ? 1000 : 300;
        const timer = setTimeout(() => setShouldLoad(true), delay);
        return () => clearTimeout(timer);
      }
    }, [connectionType, options.lazyLoad]);

    if (!shouldLoad) {
      return null;
    }

    // Use fallback components for low-end devices
    if (isLowEndDevice && options.lowEndFallback) {
      return <options.lowEndFallback {...props} />;
    }

    // Use mobile fallback for mobile devices
    if (isMobile && options.mobileFallback) {
      return <options.mobileFallback {...props} />;
    }

    return <Component {...props} />;
  };
}

// Mobile-optimized image loader
export function useMobileImageLoader(src: string, options: {
  mobileSrc?: string;
  lowEndSrc?: string;
  priority?: 'high' | 'low';
} = {}) {
  const { isMobile, isLowEndDevice, connectionType } = useMobileBundle();
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    if (isLowEndDevice && options.lowEndSrc) {
      setImageSrc(options.lowEndSrc);
    } else if (isMobile && options.mobileSrc) {
      setImageSrc(options.mobileSrc);
    } else {
      setImageSrc(src);
    }
  }, [isMobile, isLowEndDevice, src, options.mobileSrc, options.lowEndSrc]);

  return {
    src: imageSrc,
    priority: options.priority || (connectionType === 'slow' ? 'low' : 'high'),
    loading: connectionType === 'slow' ? 'lazy' : 'eager'
  };
}
