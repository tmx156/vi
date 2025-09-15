interface MobileHeroProps {
  children?: React.ReactNode;
}

export default function MobileHero({ children }: MobileHeroProps) {
  // Ultra-fast LCP strategy: Tiny placeholder → Progressive enhancement
  const placeholderColor = 'linear-gradient(135deg, #1a1a2e, #16213e)'; // Instant render
  const posterUrl = 'https://i.imgur.com/MRGNjyIm.jpeg'; // Tiny 'm' size for instant poster
  const videoUrl = 'https://d1q70pf5vjeyhc.cloudfront.net/predictions/349b3be9e3314770ae89b8fe0620c835/1.mp4'; // Your existing video

  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{
        height: '100vh',
        minHeight: '100vh',
        width: '100vw',
        maxWidth: '100vw',
        background: placeholderColor, // Instant LCP candidate
        contain: 'layout style paint',
        margin: 0,
        padding: 0,
        border: 'none',
        outline: 'none'
      }}
    >
      {/* Optimized video for mobile - loads after initial paint */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none" // Don't preload - load after LCP
        poster={posterUrl} // Tiny poster image
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          objectPosition: 'center center',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          contain: 'layout style paint',
          width: '100vw',
          height: '100vh',
          minWidth: '100%',
          minHeight: '100%',
          border: 'none',
          outline: 'none',
          margin: 0,
          padding: 0
        }}
        onLoadStart={() => {
          // Video started loading - good for metrics
          console.log('Video load started');
        }}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Minimal overlay - positioned to the right */}
      <div
        className="absolute inset-0 bg-black/20"
        style={{
          contain: 'layout style paint',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          background: 'linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.4) 100%)',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 40% 100%)'
        }}
      />

      {/* Critical content - renders immediately on gradient background */}
      <div
        className="relative z-20 text-center w-full max-w-sm mx-auto px-4 py-8"
        style={{
          contain: 'layout style paint',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        {children}
      </div>
    </section>
  );
}
