
import { useEffect, useRef } from 'react';

interface WebGLHeroProps {
  children?: React.ReactNode;
}

export default function WebGLHero({ children }: WebGLHeroProps) {
  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://i.imgur.com/XYIL0pL.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}
