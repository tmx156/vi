import Navigation from "@/components/Navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const teamMembers = [
    {
      name: "Alexander Reynolds",
      role: "Lead Photographer & Creative Director",
      description: "Award-winning photographer with 15+ years of experience in luxury portraiture. Trained at Central Saint Martins and former Vogue contributor.",
      credentials: "MA Photography, Royal College of Art",
      specialties: ["Fashion Portrait", "Editorial", "Celebrity Photography"],
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Sophia Martinez",
      role: "Senior Portrait Photographer",
      description: "Specializes in boudoir and maternity photography, creating intimate and empowering experiences. International award winner.",
      credentials: "BA Fine Arts, Parsons School of Design",
      specialties: ["Boudoir", "Maternity", "Fine Art Portraiture"],
      imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "James Wellington",
      role: "Family & Lifestyle Photographer",
      description: "Expert in capturing authentic family moments with natural, documentary-style approach. Former photojournalist.",
      credentials: "BA Photojournalism, London College of Communication",
      specialties: ["Family Portraits", "Lifestyle", "Children Photography"],
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Isabella Chen",
      role: "Luxury Styling Director",
      description: "Former fashion stylist for Harper's Bazaar and Elle. Curates wardrobes and sets for each photography session.",
      credentials: "Styling Diploma, Fashion Institute of Technology",
      specialties: ["Luxury Styling", "Wardrobe Curation", "Set Design"],
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, serviceType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', serviceType: '' });
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitStatus('');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation onBookSession={() => setIsModalOpen(true)} />
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl font-serif font-light mb-8 luxury-gradient tracking-wide" data-testid="about-title">
                ABOUT VIP PHOTOSHOOTS
              </h1>
              <div className="elegant-divider w-16 mb-8"></div>
              <p className="text-xl text-foreground/70 mb-8 leading-relaxed font-sans tracking-wide" data-testid="about-intro">
                Founded in 2019 on the unwavering belief that every individual deserves to experience the extraordinary, VIP Photoshoots has ascended to become London's most distinguished luxury photography atelier.
              </p>
              <p className="text-lg text-foreground/60 mb-8 leading-relaxed font-sans" data-testid="about-description">
                Our state-of-the-art studios, nestled in the heart of Mayfair and the creative pulse of Shoreditch, combined with our team of internationally acclaimed photographers, create sanctuaries where artistry transcends the ordinary. We specialize in capturing the ineffable essence of our distinguished clientele through sophisticated portraiture that becomes timeless legacy.
              </p>
              <p className="text-lg text-foreground/60 mb-12 leading-relaxed font-sans">
                Each session is a bespoke journey, meticulously crafted to reflect your unique narrative. From Fortune 500 executives to celebrated artists, our diverse clientele trusts us to create imagery that defines their personal and professional legacy.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-12">
                <div className="text-center premium-card p-6">
                  <div className="text-4xl font-serif font-light text-accent mb-3" data-testid="stat-sessions">1,200+</div>
                  <div className="text-sm text-foreground/60 tracking-widest uppercase">Luxury Sessions</div>
                </div>
                <div className="text-center premium-card p-6">
                  <div className="text-4xl font-serif font-light text-accent mb-3" data-testid="stat-years">5</div>
                  <div className="text-sm text-foreground/60 tracking-widest uppercase">Years Excellence</div>
                </div>
                <div className="text-center premium-card p-6">
                  <div className="text-4xl font-serif font-light text-accent mb-3" data-testid="stat-satisfaction">99%</div>
                  <div className="text-sm text-foreground/60 tracking-widest uppercase">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="VIP Photoshoots luxury studio interior" 
                className="rounded-2xl shadow-2xl"
                data-testid="studio-image"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-serif font-light mb-8 luxury-gradient tracking-wide">
              OUR PHILOSOPHY
            </h2>
            <div className="elegant-divider w-24 mx-auto mb-8"></div>
            <p className="text-lg text-foreground/60 max-w-4xl mx-auto font-sans leading-relaxed tracking-wide">
              We believe that luxury is not merely an aesthetic choice, but a philosophy of excellence<br />
              that permeates every aspect of the creative process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="premium-card p-12">
              <h3 className="text-3xl font-serif font-light mb-6 luxury-gradient">ARTISTRY</h3>
              <div className="w-12 h-px bg-accent/40 mb-6"></div>
              <p className="text-foreground/70 font-sans leading-relaxed tracking-wide">
                Every photograph is a masterpiece in its own right. Our artists approach each session with the dedication of Renaissance masters, ensuring that technical precision meets emotional resonance in perfect harmony.
              </p>
            </div>
            <div className="premium-card p-12">
              <h3 className="text-3xl font-serif font-light mb-6 luxury-gradient">INTIMACY</h3>
              <div className="w-12 h-px bg-accent/40 mb-6"></div>
              <p className="text-foreground/70 font-sans leading-relaxed tracking-wide">
                True luxury lies in the personal connection. We create an environment of absolute trust and comfort, allowing authentic beauty to emerge naturally. Each session becomes a transformative experience.
              </p>
            </div>
            <div className="premium-card p-12">
              <h3 className="text-3xl font-serif font-light mb-6 luxury-gradient">LEGACY</h3>
              <div className="w-12 h-px bg-accent/40 mb-6"></div>
              <p className="text-foreground/70 font-sans leading-relaxed tracking-wide">
                We don't simply take photographs; we create heirlooms. Each image is crafted to transcend time, becoming treasured artifacts that tell the story of who you are at this moment in history.
              </p>
            </div>
            <div className="premium-card p-12">
              <h3 className="text-3xl font-serif font-light mb-6 luxury-gradient">EXCELLENCE</h3>
              <div className="w-12 h-px bg-accent/40 mb-6"></div>
              <p className="text-foreground/70 font-sans leading-relaxed tracking-wide">
                Perfection is not a destination but a journey. From the initial consultation to the final delivery, every detail is scrutinized, refined, and elevated to meet our uncompromising standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-serif font-light mb-8 luxury-gradient tracking-wide" data-testid="team-title">
              MASTER ARTISANS
            </h2>
            <div className="elegant-divider w-24 mx-auto mb-8"></div>
            <p className="text-lg text-foreground/60 max-w-3xl mx-auto font-sans leading-relaxed tracking-wide" data-testid="team-subtitle">
              Meet the distinguished artists and visionaries behind every<br />
              extraordinary photographic experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="premium-card group cursor-pointer">
                <div className="image-overlay relative mb-6">
                  <img 
                    src={member.imageUrl} 
                    alt={`${member.name} at VIP Photoshoots`} 
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    data-testid={`team-member-image-${index}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-light mb-2 text-accent" data-testid={`team-member-name-${index}`}>
                    {member.name}
                  </h3>
                  <p className="text-foreground/60 text-sm tracking-wider uppercase mb-4" data-testid={`team-member-role-${index}`}>
                    {member.role}
                  </p>
                  <p className="text-foreground/70 text-sm font-sans leading-relaxed mb-4" data-testid={`team-member-description-${index}`}>
                    {member.description}
                  </p>
                  <div className="text-xs text-foreground/50 mb-3">
                    <strong>Credentials:</strong> {member.credentials}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, i) => (
                      <span key={i} className="text-xs bg-accent/10 text-accent px-2 py-1 tracking-wider">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-900/20 border border-green-500/30 text-green-400 text-sm text-center">
                  ✅ Thank you! We'll contact you within 24 hours to schedule your consultation.
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 text-red-400 text-sm text-center">
                  ❌ Something went wrong. Please try again or contact us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white border-2 border-accent/20 rounded cursor-text text-black focus:border-accent"
                />

                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white border-2 border-accent/20 rounded cursor-text text-black focus:border-accent"
                />

                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-white border-2 border-accent/20 rounded cursor-text text-black focus:border-accent"
                />

                <Select value={formData.serviceType} onValueChange={handleSelectChange}>
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
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 bg-accent text-accent-foreground rounded text-lg font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'SUBMITTING...' : 'BOOK FREE CONSULTATION'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button 
          onClick={() => setIsModalOpen(true)}
          className="premium-button px-6 py-3 text-sm font-medium tracking-widest text-accent-foreground shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          GET CONSULTATION
        </Button>
      </div>
    </div>
  );
}
