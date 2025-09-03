import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Check } from "lucide-react";

export default function Locations() {
  const studios = [
    {
      name: "Mayfair Studio",
      description: "Our flagship location in the heart of Mayfair, featuring state-of-the-art equipment and luxury amenities.",
      address: "15 Berkeley Square, Mayfair, London W1J 6QQ",
      phone: "+44 20 7493 5555",
      email: "mayfair@vipphotoshoots.com",
      imageUrl: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      features: [
        "3 Professional Shooting Spaces",
        "Luxury Changing Rooms",
        "Professional Hair & Makeup Station",
        "Client Lounge Area"
      ]
    },
    {
      name: "Shoreditch Studio",
      description: "Our contemporary space in trendy Shoreditch, perfect for creative and artistic photography sessions.",
      address: "42 Rivington Street, Shoreditch, London EC2A 3BN",
      phone: "+44 20 7739 3333",
      email: "shoreditch@vipphotoshoots.com",
      imageUrl: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
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

          {/* Investment Guide */}
          <section className="py-24 bg-gradient-to-b from-secondary to-background mb-24">
            <div className="max-w-7xl mx-auto px-8">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-serif font-light mb-8 luxury-gradient tracking-wide">
                  INVESTMENT GUIDE
                </h2>
                <div className="elegant-divider w-24 mx-auto mb-8"></div>
                <p className="text-lg text-foreground/60 max-w-3xl mx-auto font-sans leading-relaxed tracking-wide">
                  Luxury photography experiences crafted with meticulous attention to detail,<br />
                  representing an investment in your personal legacy
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="premium-card p-8 text-center">
                  <h3 className="text-2xl font-serif font-light mb-4 text-accent">BOUDOIR</h3>
                  <div className="w-12 h-px bg-accent/40 mx-auto mb-6"></div>
                  <div className="text-3xl font-serif luxury-gradient mb-4">£850</div>
                  <ul className="text-foreground/70 font-sans text-sm space-y-2">
                    <li>• 90-minute private session</li>
                    <li>• Professional styling consultation</li>
                    <li>• 20+ edited digital images</li>
                    <li>• Luxury presentation box</li>
                    <li>• Print release included</li>
                  </ul>
                </div>

                <div className="premium-card p-8 text-center">
                  <h3 className="text-2xl font-serif font-light mb-4 text-accent">MATERNITY</h3>
                  <div className="w-12 h-px bg-accent/40 mx-auto mb-6"></div>
                  <div className="text-3xl font-serif luxury-gradient mb-4">£750</div>
                  <ul className="text-foreground/70 font-sans text-sm space-y-2">
                    <li>• 60-minute session</li>
                    <li>• Partner included</li>
                    <li>• 15+ edited digital images</li>
                    <li>• Wardrobe assistance</li>
                    <li>• Online gallery access</li>
                  </ul>
                </div>

                <div className="premium-card p-8 text-center">
                  <h3 className="text-2xl font-serif font-light mb-4 text-accent">FAMILY</h3>
                  <div className="w-12 h-px bg-accent/40 mx-auto mb-6"></div>
                  <div className="text-3xl font-serif luxury-gradient mb-4">£650</div>
                  <ul className="text-foreground/70 font-sans text-sm space-y-2">
                    <li>• 45-minute session</li>
                    <li>• Up to 6 family members</li>
                    <li>• 12+ edited digital images</li>
                    <li>• Multiple outfit changes</li>
                    <li>• Digital download included</li>
                  </ul>
                </div>

                <div className="premium-card p-8 text-center">
                  <h3 className="text-2xl font-serif font-light mb-4 text-accent">BESTIE</h3>
                  <div className="w-12 h-px bg-accent/40 mx-auto mb-6"></div>
                  <div className="text-3xl font-serif luxury-gradient mb-4">£950</div>
                  <ul className="text-foreground/70 font-sans text-sm space-y-2">
                    <li>• 2-hour dynamic session</li>
                    <li>• Up to 4 friends</li>
                    <li>• 25+ edited digital images</li>
                    <li>• Creative set designs</li>
                    <li>• Individual portraits included</li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-16">
                <p className="text-foreground/60 font-sans text-sm mb-8">
                  All sessions include pre-consultation, professional editing, and lifetime cloud storage.<br />
                  Custom packages and corporate rates available upon request.
                </p>
                <div className="premium-button px-12 py-4 text-sm font-medium tracking-widest text-accent-foreground inline-block cursor-pointer">
                  REQUEST CUSTOM QUOTE
                </div>
              </div>
            </div>
          </section>

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
