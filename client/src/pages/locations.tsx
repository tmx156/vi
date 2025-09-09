import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Check } from "lucide-react";
import HomeGallery from "@/components/HomeGallery";
import Navigation from "@/components/Navigation";
import { useState } from "react";

export default function Locations() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const studios = [
    {
      name: "London Studio",
      description: "Our flagship location in the heart of London, featuring state-of-the-art equipment and luxury amenities.",
      address: "15 Berkeley Square, Mayfair, London W1J 6QQ",
      phone: "+44 20 7493 5555",
      email: "london@vipphotoshoots.com",
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
      address: "42 Rivington Street, Manchester M1 3BN",
      phone: "+44 161 7739 3333",
      email: "manchester@vipphotoshoots.com",
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
                  <p className="text-muted-foreground mb-6" data-testid={`studio-description-${index}`}>
                    {studio.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <MapPin className="text-accent mr-3" size={16} />
                      <span data-testid={`studio-address-${index}`}>{studio.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="text-accent mr-3" size={16} />
                      <span data-testid={`studio-phone-${index}`}>{studio.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="text-accent mr-3" size={16} />
                      <span data-testid={`studio-email-${index}`}>{studio.email}</span>
                    </div>
                  </div>

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

          {/* Contact Form */}
          <div className="premium-glass p-16">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-4xl font-serif font-light mb-6 luxury-gradient" data-testid="contact-form-title">Get In Touch</h3>
              <div className="elegant-divider w-16 mx-auto mb-8"></div>
              <p className="text-lg text-foreground/60 mb-12 font-sans leading-relaxed tracking-wide" data-testid="contact-form-subtitle">
                Ready to start your photography journey? We'd love to hear about your vision<br />
                and help you create something beautiful together.
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full px-6 py-4 bg-background border border-border rounded-lg focus:border-accent focus:outline-none"
                    data-testid="input-full-name"
                  />
                  <Input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-6 py-4 bg-background border border-border rounded-lg focus:border-accent focus:outline-none"
                    data-testid="input-email"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-6 py-4 bg-background border border-border rounded-lg focus:border-accent focus:outline-none"
                    data-testid="input-phone"
                  />
                  <Select>
                    <SelectTrigger 
                      className="w-full px-6 py-4 bg-background border border-border rounded-lg focus:border-accent focus:outline-none"
                      data-testid="select-service"
                    >
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="boudoir">Boudoir Photography</SelectItem>
                      <SelectItem value="maternity">Maternity Photography</SelectItem>
                      <SelectItem value="family">Family Photography</SelectItem>
                      <SelectItem value="bestie">Bestie Photography</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Textarea 
                  placeholder="Tell us about your vision..." 
                  rows={4} 
                  className="w-full px-6 py-4 bg-background border border-border rounded-lg focus:border-accent focus:outline-none"
                  data-testid="textarea-message"
                />
                <Button 
                  type="submit" 
                  className="luxury-button bg-accent text-accent-foreground px-12 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300"
                  data-testid="submit-inquiry"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="premium-card max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-accent/10">
              <h3 className="text-2xl font-serif font-light luxury-gradient tracking-wide">
                FREE CONSULTATION
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-foreground/60 hover:text-accent transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <p className="text-foreground/60 mb-6 font-sans text-sm tracking-wide">
                Book a complimentary 30-minute consultation to discuss your vision and connect you with the perfect studio
              </p>

              <form className="space-y-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white border-2 border-accent/20 rounded cursor-text text-black focus:border-accent"
                />

                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white border-2 border-accent/20 rounded cursor-text text-black focus:border-accent"
                />

                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-white border-2 border-accent/20 rounded cursor-text text-black focus:border-accent"
                />

                <Select>
                  <SelectTrigger className="w-full px-4 py-3 bg-white border-2 border-accent/20 rounded cursor-pointer text-black focus:border-accent">
                    <SelectValue placeholder="Select Service Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="boudoir" className="text-black">Boudoir</SelectItem>
                    <SelectItem value="maternity" className="text-black">Maternity</SelectItem>
                    <SelectItem value="family" className="text-black">Family</SelectItem>
                    <SelectItem value="bestie" className="text-black">Bestie</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  type="submit"
                  className="w-full px-8 py-3 bg-accent text-accent-foreground rounded text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  BOOK FREE CONSULTATION
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="premium-button px-6 py-3 text-sm font-medium tracking-widest text-accent-foreground shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          GET CONSULTATION
        </button>
      </div>
    </div>
  );
}
