import { Button } from "@/components/ui/button";
import WebGLHero from "@/components/WebGLHero";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  const services = [
    {
      title: "Boudoir",
      description: "Intimate, empowering sessions that celebrate your confidence and beauty in a luxurious, private setting.",
      imageUrl: "https://images.unsplash.com/photo-1594736797933-d0c3c3d69e92?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Maternity",
      description: "Celebrating the miracle of life with sophisticated portraits that capture this precious moment forever.",
      imageUrl: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Family",
      description: "Timeless family portraits that capture the love, connection, and unique dynamics of your family.",
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Bestie",
      description: "Celebrate friendship with dynamic, fun sessions that capture the unique bond between best friends.",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with WebGL */}
      <WebGLHero>
        <h1 className="text-7xl md:text-8xl font-serif font-bold mb-6 gradient-text leading-tight" data-testid="hero-title">
          Define Your<br />Luxury Moment
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light" data-testid="hero-subtitle">
          London's Premier Luxury Photography Studio
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="hero-description">
          Specializing in Boudoir, Maternity, Family & Bestie Photography
        </p>
        <Button 
          className="luxury-button bg-accent text-accent-foreground px-12 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300"
          data-testid="book-session-button"
        >
          Book Your Session
        </Button>
      </WebGLHero>

      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-5xl font-serif font-bold mb-6" data-testid="services-title">Our Signature Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="services-subtitle">
              Each session is crafted with meticulous attention to detail, ensuring your vision becomes an extraordinary reality
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-5xl font-serif font-bold mb-6" data-testid="process-title">The VIP Experience</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="process-subtitle">
              From consultation to final delivery, every step is designed for luxury and excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center fade-in">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-foreground">01</span>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4" data-testid="step-1-title">Consultation</h3>
              <p className="text-muted-foreground" data-testid="step-1-description">
                Personal consultation to understand your vision, style preferences, and create a customized experience.
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-foreground">02</span>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4" data-testid="step-2-title">Studio Session</h3>
              <p className="text-muted-foreground" data-testid="step-2-description">
                Professional photography session in our luxury studio with expert lighting and artistic direction.
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-foreground">03</span>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4" data-testid="step-3-title">Luxury Delivery</h3>
              <p className="text-muted-foreground" data-testid="step-3-description">
                Receive your professionally edited images in a premium digital gallery with print options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-serif font-bold mb-6 gradient-text" data-testid="cta-title">Ready to Create Magic?</h2>
          <p className="text-xl text-muted-foreground mb-12" data-testid="cta-subtitle">
            Let's bring your vision to life with our signature luxury photography experience
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              className="luxury-button bg-accent text-accent-foreground px-12 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300"
              data-testid="book-consultation-button"
            >
              Book Consultation
            </Button>
            <Button 
              variant="outline"
              className="luxury-button border border-accent text-accent px-12 py-4 rounded-full text-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              data-testid="view-portfolio-button"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
