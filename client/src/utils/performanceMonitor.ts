// Performance monitoring utilities for image optimization
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Monitor Largest Contentful Paint
  monitorLCP(): void {
    if (typeof window === 'undefined') return;

    try {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.set('LCP', lastEntry.startTime);

        // Log to console for debugging (development only)
        if (process.env.NODE_ENV === 'development') {
          console.log(`🎯 LCP: ${Math.round(lastEntry.startTime)}ms`);
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('LCP monitoring not supported');
      }
    }
  }

  // Monitor Cumulative Layout Shift
  monitorCLS(): void {
    if (typeof window === 'undefined') return;

    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        this.metrics.set('CLS', clsValue);
        if (process.env.NODE_ENV === 'development') {
          console.log(`📊 CLS: ${clsValue.toFixed(4)}`);
        }
      });

      observer.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('CLS monitoring not supported');
      }
    }
  }

  // Monitor image loading performance
  monitorImageLoad(src: string, startTime: number): void {
    const loadTime = performance.now() - startTime;
    const imageType = this.getImageType(src);

    if (process.env.NODE_ENV === 'development') {
      console.log(`🖼️ Image loaded: ${imageType} - ${Math.round(loadTime)}ms`);
    }

    const key = `image_${imageType}`;
    const existing = this.metrics.get(key) || 0;
    this.metrics.set(key, existing + loadTime);
  }

  // Monitor network savings from optimization
  trackImageOptimization(originalSize: string, optimizedSrc: string): void {
    const isMobile = window.innerWidth <= 768;
    const qualityReduction = isMobile ? 'mobile_aggressive' : 'desktop_moderate';

    if (process.env.NODE_ENV === 'development') {
      console.log(`📉 Image optimization: ${qualityReduction} - ${optimizedSrc}`);
    }
  }

  private getImageType(src: string): string {
    if (src.includes('fm=webp')) return 'webp';
    if (src.includes('_vercel/image')) return 'optimized';
    if (src.includes('imgur.com')) return 'imgur';
    return 'other';
  }

  // Get current metrics
  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  // Report performance summary
  reportSummary(): void {
    const metrics = this.getMetrics();
    const isMobile = window.innerWidth <= 768;

    if (process.env.NODE_ENV === 'development') {
      console.group(`📊 Performance Summary (${isMobile ? 'Mobile' : 'Desktop'})`);

      if (metrics.LCP) {
        const lcpGrade = metrics.LCP < 2500 ? '🟢 Good' : metrics.LCP < 4000 ? '🟡 Needs Improvement' : '🔴 Poor';
        console.log(`LCP: ${Math.round(metrics.LCP)}ms ${lcpGrade}`);
      }

      if (metrics.CLS) {
        const clsGrade = metrics.CLS < 0.1 ? '🟢 Good' : metrics.CLS < 0.25 ? '🟡 Needs Improvement' : '🔴 Poor';
        console.log(`CLS: ${metrics.CLS.toFixed(4)} ${clsGrade}`);
      }

      console.groupEnd();
    }
  }
}

// Initialize performance monitoring
export const perfMonitor = PerformanceMonitor.getInstance();

// Auto-start monitoring when imported
if (typeof window !== 'undefined') {
  perfMonitor.monitorLCP();
  perfMonitor.monitorCLS();

  // Report summary after 5 seconds
  setTimeout(() => {
    perfMonitor.reportSummary();
  }, 5000);
}