import { Button } from "@/components/ui/button";
import WebGLHero from "@/components/WebGLHero";
import UltraFastMobileHero from "@/components/UltraFastMobileHero";
import ServiceCard from "@/components/ServiceCard";
import HomeGallery from "@/components/HomeGallery";
import Navigation from "@/components/Navigation";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { useEffect, useState } from "react";

interface HomeProps {
  onBookingClick?: () => void;
}

export default function Home({ onBookingClick }: HomeProps = {}) {
  // Mobile performance optimizations
  const { isMobile, isReducedMotion, isLowEndDevice, connectionType } = useMobilePerformance();

  // Scroll to booking form function
  const scrollToBooking = () => {
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
      bookingForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  // JotForm scripts are now loaded at app level to persist across route changes

  useEffect(() => {
    // Skip animations on mobile or low-end devices for better performance
    if (isMobile || isReducedMotion || isLowEndDevice) {
      // On mobile, immediately show all elements without animations
      const revealElements = document.querySelectorAll('.reveal-up');
      revealElements.forEach((el) => {
        el.classList.add('visible');
        // Disable all transitions and animations on mobile
        (el as HTMLElement).style.transition = 'none';
        (el as HTMLElement).style.animation = 'none';
        // Add mobile optimization class
        el.classList.add('mobile-optimized');
      });
      
      // Disable video on slow connections
      if (connectionType === 'slow') {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
          video.style.display = 'none';
        });
      }
      return;
    }

    // Add scroll trigger for reveal animations on desktop only
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const revealElements = document.querySelectorAll('.reveal-up');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isMobile, isReducedMotion]);


  const services = [
    {
      title: "BOUDOIR",
      description: "Intimate, empowering sessions that celebrate your confidence and beauty in an environment of absolute luxury and discretion.",
      imageUrl: "https://i.imgur.com/7pArum1.jpeg"
    },
    {
      title: "MATERNITY",
      description: "Sophisticated portraiture celebrating the profound beauty of motherhood with artistic elegance and timeless grace.",
      imageUrl: "https://i.imgur.com/rHUmzP5.jpeg"
    },
    {
      title: "FAMILY",
      description: "Exquisite family portraits capturing authentic connections and timeless bonds with refined artistic vision.",
      imageUrl: "https://i.imgur.com/7IsYo4b.jpeg"
    },
    {
      title: "BESTIE",
      description: "Celebrate extraordinary friendships with dynamic sessions that capture the unique essence of your bond.",
      imageUrl: "https://i.imgur.com/CP7vmIf.jpeg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation onBookingClick={onBookingClick} />

      {/* Hero Section - Ultra-fast LCP for mobile */}
      {isMobile ? (
        <UltraFastMobileHero>
          <div className="flex flex-col h-full justify-between">
            <div className="flex flex-col justify-center flex-1">
              <div className="text-center">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light mb-6 luxury-gradient leading-none tracking-wider" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'}} data-testid="hero-title">
                  PREMIER LUXURY<br />
                  <span className="font-normal italic">PHOTOGRAPHY STUDIO</span>
                </h1>
                <div className="elegant-divider w-24 mx-auto"></div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl luxury-gradient max-w-xl mx-auto font-serif font-semibold tracking-wider leading-relaxed mb-4" data-testid="hero-description">
                Specializing in Boudoir · Maternity · Family · Bestie Photography
              </p>
            </div>
          </div>
        </UltraFastMobileHero>
      ) : (
        <WebGLHero>
        <div className="flex flex-col h-full">
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-light mb-6 luxury-gradient leading-none tracking-wider" data-testid="hero-title">
              PREMIER LUXURY<br />
              <span className="font-normal italic">PHOTOGRAPHY STUDIO</span>
            </h1>
            <div className="elegant-divider w-24 mx-auto"></div>
          </div>
          <div className="pb-12">
            <p className="text-lg text-foreground/70 max-w-xl mx-auto font-sans font-medium tracking-wide leading-relaxed" data-testid="hero-description">
              Specializing in Boudoir · Maternity · Family · Bestie Photography
            </p>
          </div>
        </div>
        </WebGLHero>
      )}

      {/* Embedded JotForm Section - Positioned right after hero */}
      <section id="booking-form" className="w-full bg-background py-8">
        <div className="w-full -ml-4">
          <iframe
            id="JotFormIFrame-252563602964360"
            title="Book Your Session"
            allowTransparency={true}
            allow="geolocation; microphone; camera"
            src="https://form.jotform.com/252563602964360"
            frameBorder="0"
            style={{
              height: '1200px',
              width: '100%',
              border: 'none'
            }}
            scrolling="no"
            loading="eager"
            className="w-full"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-0 md:px-8">
          <div className="text-center mb-24 reveal-up visible">
            <h2 className="text-5xl md:text-6xl font-serif font-light mb-8 luxury-gradient tracking-wide" data-testid="services-title">
              SIGNATURE COLLECTIONS
            </h2>
            <div className="elegant-divider w-24 mx-auto mb-8"></div>
            <p className="text-lg text-foreground/60 max-w-3xl mx-auto font-sans leading-relaxed tracking-wide" data-testid="services-subtitle">
              Each session is meticulously crafted with uncompromising attention to detail,<br />
              ensuring your vision transcends into an extraordinary reality
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="reveal-up visible">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  imageUrl={service.imageUrl}
                  onBookingClick={scrollToBooking}
                />
              </div>
            ))}
          </div>
          </div>

        {/* CTA Section - Header Only */}
        <div className="text-center mt-16 reveal-up visible relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
                 style={{ backgroundImage: "url('https://i.imgur.com/QFajmcc.jpeg')" }}>
            </div>
          <div className="premium-card p-12 w-full max-w-none mx-auto relative z-10">
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 luxury-gradient leading-tight tracking-wide">
                  READY TO FIND YOUR<br />
                  <span className="italic font-normal">Perfect Studio?</span>
                </h2>
              <div className="elegant-divider w-24 mx-auto mb-8"></div>
              <p className="text-lg text-foreground/60 mb-12 font-sans leading-relaxed tracking-wide max-w-2xl mx-auto">
                  Let us connect you with the ideal luxury photography studio<br />
                  that matches your vision and style perfectly
                </p>
          </div>
        </div>
      </section>


      {/* Home Gallery Section */}
      <HomeGallery />

      {/* Statistics Section */}
      <section className="py-16 md:py-32 bg-gradient-to-b from-background via-secondary to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
             style={{ backgroundImage: "url('https://i.imgur.com/nGTCJ8l.jpeg')" }}>
        </div>
        <div className="max-w-7xl mx-auto px-0 md:px-8 relative z-10">
          <div className="text-center mb-24 reveal-up visible">
            <h2 className="text-5xl md:text-6xl font-serif font-light mb-8 luxury-gradient tracking-wide">
              BY THE NUMBERS
            </h2>
            <div className="elegant-divider w-24 mx-auto mb-8"></div>
            <p className="text-lg text-foreground/60 max-w-3xl mx-auto font-sans leading-relaxed tracking-wide">
              Our commitment to excellence reflected in every milestone achieved
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            <div className="text-center reveal-up visible">
              <div className="premium-card p-8 h-48 flex flex-col justify-center">
                <div className="text-4xl md:text-5xl font-serif font-light luxury-gradient mb-4">500+</div>
                <h3 className="text-lg font-serif text-accent mb-2 tracking-wider">HAPPY CLIENTS</h3>
                <p className="text-foreground/60 text-sm">Luxury photography sessions delivered</p>
              </div>
            </div>

            <div className="text-center reveal-up visible">
              <div className="premium-card p-8 h-48 flex flex-col justify-center">
                <div className="text-4xl md:text-5xl font-serif font-light luxury-gradient mb-4">5+</div>
                <h3 className="text-lg font-serif text-accent mb-2 tracking-wider">YEARS</h3>
                <p className="text-foreground/60 text-sm">Of premium photography excellence</p>
              </div>
            </div>

            <div className="text-center reveal-up visible">
              <div className="premium-card p-8 h-48 flex flex-col justify-center">
                <div className="text-4xl md:text-5xl font-serif font-light luxury-gradient mb-4">15+</div>
                <h3 className="text-lg font-serif text-accent mb-2 tracking-wider">AWARDS</h3>
                <p className="text-foreground/60 text-sm">Industry recognition and accolades</p>
              </div>
            </div>

            <div className="text-center reveal-up visible">
              <div className="premium-card p-8 h-48 flex flex-col justify-center">
                <div className="text-4xl md:text-5xl font-serif font-light luxury-gradient mb-4">100%</div>
                <h3 className="text-lg font-serif text-accent mb-2 tracking-wider">SATISFACTION</h3>
                <p className="text-foreground/60 text-sm">Client satisfaction guarantee</p>
              </div>
            </div>
          </div>

          {/* Stats CTA */}
          <div className="text-center mt-16 reveal-up visible">
            <div className="premium-card p-8 max-w-xl mx-auto">
              <h3 className="text-xl font-serif font-light mb-4 luxury-gradient tracking-wide">
                JOIN OUR LUXURY CLIENTELE
              </h3>
              <p className="text-foreground/60 mb-6 font-sans text-sm tracking-wide">
                Be part of our exclusive community of satisfied clients
              </p>
              <Button
                onClick={scrollToBooking}
                className="premium-button px-8 py-3 text-sm font-medium tracking-widest text-accent-foreground cursor-pointer"
              >
                START YOUR JOURNEY
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-32 bg-gradient-to-b from-background to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
             style={{ backgroundImage: "url('https://i.imgur.com/KFMpwj9.jpeg')" }}>
        </div>
        <div className="max-w-7xl mx-auto px-0 md:px-8 relative z-10">
          <div className="text-center mb-24 reveal-up visible">
            <h2 className="text-5xl md:text-6xl font-serif font-light mb-8 luxury-gradient tracking-wide" data-testid="process-title">
              THE ATELIER EXPERIENCE
            </h2>
            <div className="elegant-divider w-24 mx-auto mb-8"></div>
            <p className="text-lg text-foreground/60 max-w-4xl mx-auto font-sans leading-relaxed tracking-wide" data-testid="process-subtitle">
              From initial consultation to final presentation, every moment is orchestrated<br />
              with meticulous attention to luxury and artistic excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center reveal-up visible premium-card p-12 group">
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto relative overflow-hidden rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <div className="absolute top-4 left-4 w-8 h-8 bg-accent/90 flex items-center justify-center rounded-full">
                    <span className="text-sm font-serif font-light text-accent-foreground tracking-wider">I</span>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-light mb-6 tracking-wide" data-testid="step-1-title">CONSULTATION</h3>
              <div className="w-12 h-px bg-accent/40 mx-auto mb-6"></div>
              <p className="text-foreground/60 font-sans leading-relaxed tracking-wide text-sm" data-testid="step-1-description">
                An intimate dialogue to understand your vision, aesthetic preferences, and craft a bespoke experience tailored to your unique story.
              </p>
            </div>

            <div className="text-center reveal-up visible premium-card p-12 md:mt-12 group">
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto relative overflow-hidden rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="absolute top-4 left-4 w-8 h-8 bg-accent/90 flex items-center justify-center rounded-full">
                    <span className="text-sm font-serif font-light text-accent-foreground tracking-wider">II</span>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-light mb-6 tracking-wide" data-testid="step-2-title">ATELIER SESSION</h3>
              <div className="w-12 h-px bg-accent/40 mx-auto mb-6"></div>
              <p className="text-foreground/60 font-sans leading-relaxed tracking-wide text-sm" data-testid="step-2-description">
                An immersive photography experience within our luxury atelier, featuring master-class lighting artistry and refined creative direction.
              </p>
            </div>

            <div className="text-center reveal-up visible premium-card p-12 group">
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto relative overflow-hidden rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <div className="absolute top-4 left-4 w-8 h-8 bg-accent/90 flex items-center justify-center rounded-full">
                    <span className="text-sm font-serif font-light text-accent-foreground tracking-wider">III</span>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-light mb-6 tracking-wide" data-testid="step-3-title">CURATION</h3>
              <div className="w-12 h-px bg-accent/40 mx-auto mb-6"></div>
              <p className="text-foreground/60 font-sans leading-relaxed tracking-wide text-sm" data-testid="step-3-description">
                Receive your meticulously edited collection via our exclusive digital gallery, with bespoke print and framing options available.
              </p>
            </div>
          </div>

          {/* Process CTA */}
          <div className="text-center mt-16 reveal-up visible">
            <div className="premium-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif font-light mb-4 luxury-gradient tracking-wide">
                EXPERIENCE THE ATELIER DIFFERENCE
              </h3>
              <p className="text-foreground/60 mb-6 font-sans text-sm tracking-wide">
                Ready to begin your luxury photography journey? Book your consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={scrollToBooking}
                  className="premium-button px-8 py-3 text-sm font-medium tracking-widest text-accent-foreground cursor-pointer"
                >
                  BOOK CONSULTATION
                </Button>
                <Button
                  onClick={() => window.location.href = '/about'}
                  className="px-8 py-3 text-sm font-medium tracking-widest text-foreground border border-accent/50 hover:bg-accent/10 transition-all duration-300 cursor-pointer"
                >
                  LEARN MORE
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom fade overlay for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
      </section>

      {/* Additional Gallery Section */}
      <section className="py-16 md:py-24 px-0 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 luxury-gradient tracking-wide">
              FEATURED PORTFOLIO
            </h2>
            <div className="elegant-divider w-16 mx-auto mb-6"></div>
            <p className="text-base text-foreground/60 max-w-2xl mx-auto font-sans leading-relaxed tracking-wide">
              Discover more of our signature work across all photography categories
            </p>
          </div>

          {/* Additional Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {[
              { src: "https://i.imgur.com/at3tBrT.jpeg", alt: "Luxury family portrait", category: "family" },
              { src: "https://i.imgur.com/qDxWCbT.jpeg", alt: "Luxury family photography", category: "family" },
              { src: "https://i.imgur.com/13FUUst.jpeg", alt: "Luxury bestie photography", category: "bestie" },
              { src: "https://i.imgur.com/TtZomX5.jpeg", alt: "Professional friends photography", category: "bestie" },
              { src: "https://i.imgur.com/v1l1YoN.jpeg", alt: "Luxury boudoir photography", category: "boudoir" },
              { src: "https://i.imgur.com/ocClmHz.jpeg", alt: "Luxury boudoir styling", category: "boudoir" },
              { src: "https://i.imgur.com/q6JDXQ6.jpeg", alt: "Elegant maternity photography", category: "maternity" },
              { src: "https://i.imgur.com/ug5k3AN.jpeg", alt: "Sophisticated maternity portrait", category: "maternity" }
            ].map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg premium-card">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-serif text-sm tracking-wide capitalize">
                        {image.category}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <button
              onClick={scrollToBooking}
              className="premium-button px-8 py-3 text-sm font-medium tracking-widest text-accent-foreground hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              BOOK YOUR SESSION
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-32 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-0 md:px-8 relative z-10">
          <div className="text-center mb-24 reveal-up visible">
            <h2 className="text-5xl md:text-6xl font-serif font-light mb-8 luxury-gradient tracking-wide">
              CLIENT TESTIMONIALS
            </h2>
            <div className="elegant-divider w-24 mx-auto mb-8"></div>
            <p className="text-lg text-foreground/60 max-w-3xl mx-auto font-sans leading-relaxed tracking-wide">
              The voices of our distinguished clientele speak to our commitment<br />
              to excellence and artistry in every capture
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="reveal-up visible premium-card p-8 text-center group">
              <div className="relative mb-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground/70 font-sans leading-relaxed mb-6 italic">
                  "VIP Photoshoots exceeded every expectation. The attention to detail and artistic vision created portraits that are truly works of art. An absolutely extraordinary experience."
                </p>
                <h4 className="font-serif text-lg text-accent mb-1">Isabella Hartwell</h4>
                <p className="text-foreground/50 text-sm tracking-wider">CREATIVE DIRECTOR</p>
              </div>
            </div>

            <div className="reveal-up visible premium-card p-8 text-center md:mt-12 group">
              <div className="relative mb-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground/70 font-sans leading-relaxed mb-6 italic">
                  "From consultation to final delivery, every moment was luxurious. The team's professionalism and creativity produced stunning maternity portraits that I will treasure forever."
                </p>
                <h4 className="font-serif text-lg text-accent mb-1">Charlotte Pemberton</h4>
                <p className="text-foreground/50 text-sm tracking-wider">ENTREPRENEUR</p>
              </div>
            </div>

            <div className="reveal-up visible premium-card p-8 text-center group">
              <div className="relative mb-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground/70 font-sans leading-relaxed mb-6 italic">
                  "The family portraits captured our essence beautifully. The luxury studio environment and photographer's expertise created an experience that felt both comfortable and extraordinary."
                </p>
                <h4 className="font-serif text-lg text-accent mb-1">Victoria & James Morrison</h4>
                <p className="text-foreground/50 text-sm tracking-wider">PRIVATE CLIENTS</p>
              </div>
            </div>
          </div>

          {/* Testimonials CTA */}
          <div className="text-center mt-16 reveal-up visible">
            <div className="premium-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif font-light mb-4 luxury-gradient tracking-wide">
                READY TO JOIN OUR HAPPY CLIENTS?
              </h3>
              <p className="text-foreground/60 mb-6 font-sans text-sm tracking-wide">
                Experience the same level of excellence and artistry that our clients rave about
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={scrollToBooking}
                  className="premium-button px-8 py-3 text-sm font-medium tracking-widest text-accent-foreground cursor-pointer"
                >
                  BOOK YOUR SESSION
                </Button>
                <Button
                  onClick={() => window.location.href = '/gallery'}
                  className="px-8 py-3 text-sm font-medium tracking-widest text-foreground border border-accent/50 hover:bg-accent/10 transition-all duration-300 cursor-pointer"
                >
                  READ MORE REVIEWS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 md:py-32 px-0 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 reveal-up visible">
            <h2 className="text-5xl md:text-6xl font-serif font-light mb-8 luxury-gradient tracking-wide">
              AWARDS & RECOGNITION
            </h2>
            <div className="elegant-divider w-24 mx-auto mb-8"></div>
            <p className="text-lg text-foreground/60 max-w-3xl mx-auto font-sans leading-relaxed tracking-wide">
              Our commitment to excellence has been recognized by the industry's<br />
              most prestigious institutions and publications
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-12 items-center">
            <div className="reveal-up visible text-center">
              <div className="premium-card p-8 h-48 flex flex-col justify-center">
                <h3 className="font-serif text-lg text-accent mb-2">BRITISH PHOTOGRAPHY</h3>
                <h4 className="font-serif text-2xl luxury-gradient mb-2">AWARDS</h4>
                <p className="text-foreground/60 text-sm tracking-wider">PORTRAIT PHOTOGRAPHER<br />OF THE YEAR 2024</p>
              </div>
            </div>

            <div className="reveal-up visible text-center">
              <div className="premium-card p-8 h-48 flex flex-col justify-center">
                <h3 className="font-serif text-lg text-accent mb-2">LONDON LUXURY</h3>
                <h4 className="font-serif text-2xl luxury-gradient mb-2">LIFESTYLE</h4>
                <p className="text-foreground/60 text-sm tracking-wider">BEST PHOTOGRAPHY<br />STUDIO 2024</p>
              </div>
            </div>

            <div className="reveal-up visible text-center">
              <div className="premium-card p-8 h-48 flex flex-col justify-center">
                <h3 className="font-serif text-lg text-accent mb-2">PROFESSIONAL</h3>
                <h4 className="font-serif text-2xl luxury-gradient mb-2">PHOTOGRAPHERS</h4>
                <p className="text-foreground/60 text-sm tracking-wider">EXCELLENCE IN<br />PORTRAITURE 2023</p>
              </div>
            </div>

            <div className="reveal-up visible text-center">
              <div className="premium-card p-8 h-48 flex flex-col justify-center">
                <h3 className="font-serif text-lg text-accent mb-2">VOGUE FEATURED</h3>
                <h4 className="font-serif text-2xl luxury-gradient mb-2">ARTIST</h4>
                <p className="text-foreground/60 text-sm tracking-wider">RECOMMENDED<br />PHOTOGRAPHER 2024</p>
              </div>
            </div>
          </div>

          {/* Awards CTA */}
          <div className="text-center mt-16 reveal-up visible">
            <div className="premium-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif font-light mb-4 luxury-gradient tracking-wide">
                WORK WITH AWARD-WINNING PHOTOGRAPHERS
              </h3>
              <p className="text-foreground/60 mb-6 font-sans text-sm tracking-wide">
                Trust your precious moments to industry-recognized professionals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={scrollToBooking}
                  className="premium-button px-8 py-3 text-sm font-medium tracking-widest text-accent-foreground cursor-pointer"
                >
                  BOOK CONSULTATION
                </Button>
                <Button
                  onClick={() => window.location.href = '/about'}
                  className="px-8 py-3 text-sm font-medium tracking-widest text-foreground border border-accent/50 hover:bg-accent/10 transition-all duration-300 cursor-pointer"
                >
                  VIEW AWARDS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}