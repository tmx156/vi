import { Button } from "@/components/ui/button";
import WebGLHero from "@/components/WebGLHero";
import ServiceCard from "@/components/ServiceCard";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Add scroll trigger for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal-up');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "BOUDOIR",
      description: "Intimate, empowering sessions that celebrate your confidence and beauty in an environment of absolute luxury and discretion.",
      imageUrl: "https://images.unsplash.com/photo-1594736797933-d0c3c3d69e92?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
    },
    {
      title: "MATERNITY",
      description: "Sophisticated portraiture celebrating the profound beauty of motherhood with artistic elegance and timeless grace.",
      imageUrl: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
    },
    {
      title: "FAMILY",
      description: "Exquisite family portraits capturing authentic connections and timeless bonds with refined artistic vision.",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
    },
    {
      title: "BESTIE",
      description: "Celebrate extraordinary friendships with dynamic sessions that capture the unique essence of your bond.",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with WebGL */}
      <WebGLHero>
        <div className="reveal-up visible">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light mb-8 luxury-gradient leading-none tracking-wider" data-testid="hero-title">
            DEFINE YOUR<br />
            <span className="font-normal italic">Luxury</span>
          </h1>
          <div className="elegant-divider w-32 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-foreground/70 mb-6 font-sans font-light tracking-wide" data-testid="hero-subtitle">
            LONDON'S PREMIER LUXURY PHOTOGRAPHY ATELIER
          </p>
          <p className="text-base text-foreground/60 mb-16 max-w-2xl mx-auto font-sans tracking-wide leading-relaxed" data-testid="hero-description">
            Specializing in Boudoir · Maternity · Family · Bestie Photography
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <Button 
              className="premium-button px-12 py-4 text-sm font-medium tracking-widest text-accent-foreground"
              data-testid="book-session-button"
            >
              BOOK YOUR SESSION
            </Button>
            <button className="text-accent font-sans text-sm tracking-widest hover:text-foreground transition-colors duration-300 underline decoration-1 underline-offset-4">
              VIEW PORTFOLIO
            </button>
          </div>
        </div>
      </WebGLHero>

      {/* Services Section */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className={`reveal-up visible ${index % 2 === 0 ? 'lg:mt-12' : ''}`}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  imageUrl={service.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-7xl mx-auto px-8">
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
            <div className="text-center reveal-up visible premium-card p-12">
              <div className="w-24 h-24 border border-accent/30 flex items-center justify-center mx-auto mb-8 relative">
                <span className="text-2xl font-serif font-light text-accent tracking-wider">I</span>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-serif font-light mb-6 tracking-wide" data-testid="step-1-title">CONSULTATION</h3>
              <div className="w-12 h-px bg-accent/40 mx-auto mb-6"></div>
              <p className="text-foreground/60 font-sans leading-relaxed tracking-wide text-sm" data-testid="step-1-description">
                An intimate dialogue to understand your vision, aesthetic preferences, and craft a bespoke experience tailored to your unique story.
              </p>
            </div>

            <div className="text-center reveal-up visible premium-card p-12 md:mt-12">
              <div className="w-24 h-24 border border-accent/30 flex items-center justify-center mx-auto mb-8 relative">
                <span className="text-2xl font-serif font-light text-accent tracking-wider">II</span>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-serif font-light mb-6 tracking-wide" data-testid="step-2-title">ATELIER SESSION</h3>
              <div className="w-12 h-px bg-accent/40 mx-auto mb-6"></div>
              <p className="text-foreground/60 font-sans leading-relaxed tracking-wide text-sm" data-testid="step-2-description">
                An immersive photography experience within our luxury atelier, featuring master-class lighting artistry and refined creative direction.
              </p>
            </div>

            <div className="text-center reveal-up visible premium-card p-12">
              <div className="w-24 h-24 border border-accent/30 flex items-center justify-center mx-auto mb-8 relative">
                <span className="text-2xl font-serif font-light text-accent tracking-wider">III</span>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-serif font-light mb-6 tracking-wide" data-testid="step-3-title">CURATION</h3>
              <div className="w-12 h-px bg-accent/40 mx-auto mb-6"></div>
              <p className="text-foreground/60 font-sans leading-relaxed tracking-wide text-sm" data-testid="step-3-description">
                Receive your meticulously edited collection via our exclusive digital gallery, with bespoke print and framing options available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="reveal-up visible">
            <h2 className="text-6xl md:text-7xl font-serif font-light mb-12 luxury-gradient leading-tight tracking-wide" data-testid="cta-title">
              READY TO CREATE<br />
              <span className="italic font-normal">Excellence?</span>
            </h2>
            <div className="elegant-divider w-32 mx-auto mb-12"></div>
            <p className="text-xl text-foreground/60 mb-16 font-sans leading-relaxed tracking-wide max-w-3xl mx-auto" data-testid="cta-subtitle">
              Transform your vision into an extraordinary reality with our signature<br />
              luxury photography experience
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Button 
                className="premium-button px-16 py-5 text-sm font-medium tracking-widest text-accent-foreground"
                data-testid="book-consultation-button"
              >
                BOOK CONSULTATION
              </Button>
              <button className="text-accent font-sans text-sm tracking-widest hover:text-foreground transition-colors duration-300 underline decoration-1 underline-offset-4">
                VIEW COMPLETE PORTFOLIO
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
