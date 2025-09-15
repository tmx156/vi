import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import HomeGallery from "@/components/HomeGallery";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";
import { useState, useEffect } from "react";

// Type declarations for JotForm scripts
declare global {
  interface Window {
    jotformEmbedHandler?: (selector: string, base: string) => void;
    JotformFeedback?: new (config: {
      formId: string;
      base: string;
      windowTitle: string;
      backgroundColor: string;
      fontColor: string;
      type: string;
      height: number;
      width: number;
      openOnLoad: boolean;
    }) => void;
  }
}


export default function Locations() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // JotForm scripts are now loaded at app level to persist across route changes
  
  const studios = [
    {
      name: "London Studio",
      description: "Our flagship location in the heart of London, featuring state-of-the-art equipment and luxury amenities.",
      imageUrl: "https://i.imgur.com/nGTCJ8l.jpeg",
      features: [
        "3 Professional Shooting Spaces",
        "Luxury Changing Rooms",
        "Professional Hair & Makeup Station",
        "Client Lounge Area"
      ]
    },
    {
      name: "Manchester Studios",
      description: "Our contemporary space in vibrant Manchester, perfect for creative and artistic photography sessions.",
      imageUrl: "https://i.imgur.com/KFMpwj9.jpeg",
      features: [
        "2 Creative Shooting Spaces",
        "Industrial Backdrop Options",
        "Natural Light Studio",
        "Props & Wardrobe Selection"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation onBookSession={() => setIsModalOpen(true)} />
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-serif font-bold mb-6 gradient-text" data-testid="locations-title">
              Our Studios
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="locations-subtitle">
              Discover our carefully curated photography spaces designed to bring your vision to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            {studios.map((studio, index) => (
              <div key={studio.name} className="bg-card rounded-2xl overflow-hidden">
                <img 
                  src={studio.imageUrl} 
                  alt={`${studio.name} interior`} 
                  className="w-full h-64 object-cover"
                  data-testid={`studio-image-${index}`}
                />
                <div className="p-8">
                  <h3 className="text-3xl font-serif font-bold mb-4 gradient-text" data-testid={`studio-name-${index}`}>
                    {studio.name}
                  </h3>
                  <p className="text-muted-foreground mb-8" data-testid={`studio-description-${index}`}>
                    {studio.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Studio Features</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {studio.features.map((feature, featureIndex) => (
                        <li key={feature} className="flex items-center" data-testid={`studio-feature-${index}-${featureIndex}`}>
                          <Check className="text-accent mr-2" size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    onClick={() => setIsModalOpen(true)}
                    className="luxury-button bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold w-full"
                    data-testid={`book-studio-${index}`}
                  >
                    BOOK STUDIO
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Work Gallery */}
          <HomeGallery />

          {/* JotForm Contact Section */}
          <div className="premium-glass p-4 md:p-16">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-4xl font-serif font-light mb-6 luxury-gradient" data-testid="contact-form-title">Get In Touch</h3>
              <div className="elegant-divider w-16 mx-auto mb-8"></div>
              <p className="text-lg text-foreground/60 mb-12 font-sans leading-relaxed tracking-wide" data-testid="contact-form-subtitle">
                Ready to start your photography journey? We'd love to hear about your vision<br />
                and help you create something beautiful together.
              </p>
              
              {/* JotForm Iframe Embed - Mobile Responsive */}
              <div className="w-full overflow-hidden rounded-lg">
                <iframe
                  id="JotFormIFrame-locations-252563602964360"
                  title="Clone of Form"
                  onLoad={() => window.parent.scrollTo(0,0)}
                  allowTransparency={true}
                  allow="geolocation; microphone; camera; fullscreen; payment"
                  src="https://form.jotform.com/252563602964360"
                  frameBorder="0"
                  style={{ 
                    width: '100%', 
                    height: '600px', 
                    border: 'none',
                    borderRadius: '8px'
                  }}
                  scrolling="no"
                >
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Floating CTA */}
      {!isModalOpen && (
        <div className="fixed bottom-8 right-8 z-50">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="premium-button px-6 py-3 text-sm font-medium tracking-widest text-accent-foreground shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            GET CONSULTATION
          </button>
        </div>
      )}
    </div>
  );
}
