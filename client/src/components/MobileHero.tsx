interface MobileHeroProps {
  children?: React.ReactNode;
}

export default function MobileHero({ children }: MobileHeroProps) {
  // Use better quality image for mobile - imgur 'l' size for better quality
  const imageUrl = 'https://i.imgur.com/MRGNjyIl.jpeg'; // 'l' = large size (~300-400KB - better quality)
  
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ 
        background: '#0f0f19',
        height: '100vh',
        minHeight: '100vh'
      }}
    >
      {/* Critical LCP image - mobile optimized with smaller size */}
      <img
        src={imageUrl}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
        decoding="sync"
        style={{
          imageRendering: '-webkit-optimize-contrast'
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Hero content */}
      <div className="relative z-20 text-center w-full max-w-sm mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
