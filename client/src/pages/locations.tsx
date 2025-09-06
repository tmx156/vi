import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Check } from "lucide-react";
import HomeGallery from "@/components/HomeGallery";

export default function Locations() {
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
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-serif font-bold mb-6 gradient-text" data-testid="locations-title">
              Studio Locations
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="locations-subtitle">
              Experience luxury photography at our premium studio locations across London
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
                    className="luxury-button bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold w-full"
                    data-testid={`book-studio-${index}`}
                  >
                    Book {studio.name}
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
              <h3 className="text-4xl font-serif font-light mb-6 luxury-gradient" data-testid="contact-form-title">Book Your Session</h3>
              <div className="elegant-divider w-16 mx-auto mb-8"></div>
              <p className="text-lg text-foreground/60 mb-12 font-sans leading-relaxed tracking-wide" data-testid="contact-form-subtitle">
                Ready to create something extraordinary? Connect with our atelier team to begin<br />
                your bespoke photography experience.
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
                  Send Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
