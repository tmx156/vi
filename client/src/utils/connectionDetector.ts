// Connection speed detection and adaptive quality for slow internet users
export type ConnectionSpeed = 'slow' | 'fast' | 'unknown';

export class ConnectionDetector {
  private static instance: ConnectionDetector;
  private connectionSpeed: ConnectionSpeed = 'unknown';
  private callbacks: ((speed: ConnectionSpeed) => void)[] = [];

  static getInstance(): ConnectionDetector {
    if (!ConnectionDetector.instance) {
      ConnectionDetector.instance = new ConnectionDetector();
    }
    return ConnectionDetector.instance;
  }

  constructor() {
    this.detectConnection();
  }

  private detectConnection(): void {
    if (typeof window === 'undefined') return;

    // Method 1: Navigator Connection API (Chrome/Edge)
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;

    if (connection) {
      this.analyzeConnectionAPI(connection);

      // Listen for connection changes
      connection.addEventListener('change', () => {
        this.analyzeConnectionAPI(connection);
      });
    } else {
      // Method 2: Image download speed test
      this.performSpeedTest();
    }
  }

  private analyzeConnectionAPI(connection: any): void {
    const effectiveType = connection.effectiveType;
    const downlink = connection.downlink; // Mbps
    const rtt = connection.rtt; // ms

    // Determine if connection is slow
    const isSlow =
      effectiveType === 'slow-2g' ||
      effectiveType === '2g' ||
      (effectiveType === '3g' && downlink < 1.5) ||
      rtt > 300;

    const newSpeed: ConnectionSpeed = isSlow ? 'slow' : 'fast';
    this.updateConnectionSpeed(newSpeed);

    console.log(`🌐 Connection: ${effectiveType}, ${downlink}Mbps, ${rtt}ms RTT → ${newSpeed}`);
  }

  private performSpeedTest(): void {
    const startTime = performance.now();
    const testImage = new Image();

    // Use a small test image (approximately 50KB)
    testImage.src = `https://i.imgur.com/MRGNjyIm.jpeg?cache=${Date.now()}`;

    testImage.onload = () => {
      const loadTime = performance.now() - startTime;
      const speed: ConnectionSpeed = loadTime > 1000 ? 'slow' : 'fast';
      this.updateConnectionSpeed(speed);

      console.log(`🌐 Speed test: ${Math.round(loadTime)}ms → ${speed} connection`);
    };

    testImage.onerror = () => {
      this.updateConnectionSpeed('unknown');
    };

    // Timeout after 3 seconds
    setTimeout(() => {
      if (this.connectionSpeed === 'unknown') {
        this.updateConnectionSpeed('slow'); // Assume slow if test takes too long
      }
    }, 3000);
  }

  private updateConnectionSpeed(speed: ConnectionSpeed): void {
    if (this.connectionSpeed !== speed) {
      this.connectionSpeed = speed;
      this.callbacks.forEach(callback => callback(speed));
    }
  }

  public getConnectionSpeed(): ConnectionSpeed {
    return this.connectionSpeed;
  }

  public onConnectionChange(callback: (speed: ConnectionSpeed) => void): void {
    this.callbacks.push(callback);
  }

  public removeConnectionListener(callback: (speed: ConnectionSpeed) => void): void {
    this.callbacks = this.callbacks.filter(cb => cb !== callback);
  }

  // Get adaptive image quality based on connection
  public getAdaptiveQuality(baseQuality: number): number {
    switch (this.connectionSpeed) {
      case 'slow':
        return Math.max(25, baseQuality - 20); // Reduce quality by 20 for slow connections
      case 'fast':
        return baseQuality;
      default:
        return baseQuality - 10; // Conservative approach for unknown connections
    }
  }

  // Get adaptive image width based on connection
  public getAdaptiveWidth(baseWidth: number): number {
    switch (this.connectionSpeed) {
      case 'slow':
        return Math.max(300, Math.floor(baseWidth * 0.7)); // 70% width for slow connections
      case 'fast':
        return baseWidth;
      default:
        return Math.floor(baseWidth * 0.85); // 85% width for unknown connections
    }
  }
}

// Global instance
export const connectionDetector = ConnectionDetector.getInstance();