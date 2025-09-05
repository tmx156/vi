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
      imageUrl: "https://i.imgur.com/7pArum1.jpeg"
    },
    {
      title: "MATERNITY",
      description: "Sophisticated portraiture celebrating the profound beauty of motherhood with artistic elegance and timeless grace.",
      imageUrl: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
    },
    {
      title: "FAMILY",
      description: "Exquisite family portraits capturing authentic connections and timeless bonds with refined artistic vision.",
      imageUrl: "https://i.imgur.com/ZyMjl2z.jpeg"
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

      {/* Testimonials Section */}
      <section className="py-32 bg-gradient-to-b from-secondary to-background">
        <div className="max-w-7xl mx-auto px-8">
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
            <div className="reveal-up visible premium-card p-8 text-center">
              <div className="mb-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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

            <div className="reveal-up visible premium-card p-8 text-center md:mt-12">
              <div className="mb-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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

            <div className="reveal-up visible premium-card p-8 text-center">
              <div className="mb-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-32 px-8">
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
        </div>
      </section>
    </div>
  );
}
