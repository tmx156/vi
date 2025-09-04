
import { useEffect, useRef } from 'react';
import { initializeHeroCanvas } from '@/lib/webgl-utils';

interface WebGLHeroProps {
  children?: React.ReactNode;
}

export default function WebGLHero({ children }: WebGLHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const cleanup = initializeHeroCanvas(canvasRef.current);
    
    return cleanup;
  }, []);

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="https://d1q70pf5vjeyhc.cloudfront.net/predictions/349b3be9e3314770ae89b8fe0620c835/1.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-15"
        data-testid="hero-canvas"
      />
      
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}
