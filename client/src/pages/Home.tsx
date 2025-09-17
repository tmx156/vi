import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import ThumbnailGallery from '@/components/ThumbnailGallery';
import Navigation from '@/components/Navigation';

export default function Home() {
  const [, setLocation] = useLocation();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Scroll to booking form function
  const scrollToBooking = () => {
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
      bookingForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // If no booking form on this page, navigate to home3 where the form is
      setLocation('/home3');
    }
  };

  useEffect(() => {
    // Check if mobile to disable video on mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile && videoRef.current) {
      // Lazy load video after page load for better LCP
      const timer = setTimeout(() => {
        const video = videoRef.current;
        if (video && !video.src) {
          video.src = "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69b27dbc4ff2b87d38afc35f1c9a91d8d&profile_id=164&oauth2_token_id=57447761";
          video.load();
          video.onloadeddata = () => setVideoLoaded(true);
        }
      }, 1000); // Load video 1 second after page load

      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  return (
    <div className="min-h-screen">
      <Navigation onBookingClick={scrollToBooking} />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background - Image on mobile, Video on desktop */}
        {isMobile ? (
          <img
            src="https://i.imgur.com/HskrxZR.jpeg"
            alt="VIP Photoshoots Hero Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
            loading="eager"
            fetchPriority="high"
          />
        ) : (
          <>
            {/* Poster image shown until video loads */}
            <img
              src="https://i.imgur.com/HskrxZR.jpeg"
              alt="VIP Photoshoots Hero Background"
              className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${
                videoLoaded ? 'opacity-0' : 'opacity-100'
              }`}
              loading="eager"
              fetchPriority="high"
            />
            {/* Video loads after page is ready */}
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${
                videoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              preload="none"
            />
          </>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
          <h1 className="hero-title text-6xl md:text-8xl font-serif font-light mb-8 luxury-gradient tracking-wider" style={{
            textShadow: '2px 2px 8px rgba(0,0,0,0.6), 0 0 20px rgba(0,0,0,0.4)',
            letterSpacing: '0.05em'
          }}>
            VIP PHOTOSHOOTS
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-12 font-light leading-relaxed">
            Luxury Photography Experience
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={scrollToBooking}
              className="premium-button px-8 py-4 text-lg font-medium text-background bg-accent hover:bg-accent/90 transition-all duration-300 rounded-lg"
            >
              BOOK SESSION
            </button>
            <button
              onClick={() => setLocation('/gallery')}
              className="px-8 py-4 text-lg font-medium text-foreground/90 border-2 border-foreground/30 hover:border-accent hover:text-accent transition-all duration-300 rounded-lg"
            >
              VIEW PORTFOLIO
            </button>
            <button
              onClick={() => setLocation('/about')}
              className="px-8 py-4 text-lg font-medium text-foreground/90 border-2 border-foreground/30 hover:border-accent hover:text-accent transition-all duration-300 rounded-lg"
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 luxury-gradient tracking-wide">
              FEATURED WORK
            </h2>
            <div className="elegant-divider w-16 mx-auto mb-6"></div>
            <p className="text-base text-foreground/60 max-w-2xl mx-auto font-sans leading-relaxed tracking-wide">
              A glimpse into our signature collections, where luxury meets artistry
            </p>
          </div>

          <ThumbnailGallery />

          {/* Call to Action */}
          <div className="text-center mt-12">
            <button
              onClick={scrollToBooking}
              className="text-accent font-sans text-sm tracking-widest hover:text-foreground transition-colors duration-300 underline decoration-1 underline-offset-4 cursor-pointer"
            >
              BOOK YOUR SESSION
            </button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 luxury-gradient">
              PHOTOGRAPHY SERVICES
            </h2>
            <div className="elegant-divider w-16 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { title: 'BOUDOIR', desc: 'Intimate & Elegant', image: 'https://i.imgur.com/HskrxZR.jpeg' },
              { title: 'MATERNITY', desc: 'Beautiful Moments', image: 'https://i.imgur.com/lpEdOD6.jpeg' },
              { title: 'FAMILY', desc: 'Treasured Memories', image: 'https://i.imgur.com/rv8GyqO.jpeg' },
              { title: 'COSPLAY', desc: 'Creative Characters', image: 'https://i.imgur.com/BxJNnz3.jpeg' },
              { title: 'EXECUTIVE', desc: 'Professional Portraits', image: 'https://i.imgur.com/3lpynkM.jpeg' },
            ].map((service, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => setLocation('/gallery')}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg premium-card mb-4">
                  <img
                    src={service.image}
                    alt={`${service.title} photography service`}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-serif text-sm tracking-wide">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-serif text-center luxury-gradient">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}