interface MobileHeroProps {
  children?: React.ReactNode;
}

export default function MobileHero({ children }: MobileHeroProps) {
  // Use WebP format for mobile - better compression and quality
  const imageUrl = 'https://i.imgur.com/MRGNjyIl.webp'; // 'l' = large size with WebP compression
  
  return (
    <section 
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ 
        height: '100vh',
        minHeight: '100vh',
        width: '100vw',
        maxWidth: '100vw'
      }}
    >
      {/* Critical LCP image - mobile optimized for maximum screen coverage */}
      <img
        src={imageUrl}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchpriority="high"
        decoding="sync"
        style={{
          imageRendering: '-webkit-optimize-contrast',
          objectPosition: '60% center',
          width: '100vw',
          height: '100vh',
          minWidth: '100%',
          minHeight: '100%',
          transform: 'scale(1.1)',
          transformOrigin: 'center center'
        }}
      />
      
      {/* Minimal overlay for text readability - very light for maximum image visibility */}
      <div className="absolute inset-0 bg-black/15" />
      
      {/* Hero content - positioned to ensure visibility */}
      <div className="relative z-20 text-center w-full max-w-sm mx-auto px-4 py-8">
        {children}
      </div>
    </section>
  );
}
