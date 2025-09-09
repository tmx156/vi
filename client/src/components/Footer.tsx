import { Link } from "wouter";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-card border-t border-border/20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link href="/" className="text-3xl font-serif font-light luxury-gradient tracking-wide mb-6 block">
                VIP PHOTOSHOOTS
              </Link>
              <p className="text-foreground/60 font-sans leading-relaxed mb-8">
                London's premier luxury photography atelier, crafting extraordinary visual narratives since 2019.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 border border-accent/30 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                  <Instagram size={16} />
                </a>
                <a href="#" className="w-10 h-10 border border-accent/30 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                  <Facebook size={16} />
                </a>
                <a href="#" className="w-10 h-10 border border-accent/30 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                  <Twitter size={16} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-serif font-light mb-6 text-accent tracking-wide">COLLECTIONS</h3>
              <ul className="space-y-4">
                <li><Link href="/gallery" className="text-foreground/70 hover:text-accent transition-colors duration-300 font-sans tracking-wide text-sm">Boudoir Photography</Link></li>
                <li><Link href="/gallery" className="text-foreground/70 hover:text-accent transition-colors duration-300 font-sans tracking-wide text-sm">Maternity Portraits</Link></li>
                <li><Link href="/gallery" className="text-foreground/70 hover:text-accent transition-colors duration-300 font-sans tracking-wide text-sm">Family Sessions</Link></li>
                <li><Link href="/gallery" className="text-foreground/70 hover:text-accent transition-colors duration-300 font-sans tracking-wide text-sm">Bestie Photography</Link></li>
                <li><Link href="/gallery" className="text-foreground/70 hover:text-accent transition-colors duration-300 font-sans tracking-wide text-sm">Corporate Headshots</Link></li>
                <li><Link href="/gallery" className="text-foreground/70 hover:text-accent transition-colors duration-300 font-sans tracking-wide text-sm">Editorial Work</Link></li>
              </ul>
            </div>

            {/* Information */}
            <div>
              <h3 className="text-xl font-serif font-light mb-6 text-accent tracking-wide">INFORMATION</h3>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-foreground/70 hover:text-accent transition-colors duration-300 font-sans tracking-wide text-sm">About the Atelier</Link></li>
                <li><Link href="/about" className="text-foreground/70 hover:text-accent transition-colors duration-300 font-sans tracking-wide text-sm">Our Philosophy</Link></li>
                <li><Link href="/about" className="text-foreground/70 hover:text-accent transition-colors duration-300 font-sans tracking-wide text-sm">Master Artisans</Link></li>
                <li><Link href="/locations" className="text-foreground/70 hover:text-accent transition-colors duration-300 font-sans tracking-wide text-sm">Studio Locations</Link></li>
                <li><a href="#" className="text-foreground/70 hover:text-accent transition-colors duration-300 font-sans tracking-wide text-sm">Investment Guide</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-accent transition-colors duration-300 font-sans tracking-wide text-sm">Client Testimonials</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-serif font-light mb-6 text-accent tracking-wide">CONTACT</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-accent mt-1" size={16} />
                  <div>
                    <p className="text-foreground/70 font-sans text-sm leading-relaxed">
                      15 Berkeley Square<br />
                      Mayfair, London W1J 6QQ
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-accent" size={16} />
                  <a href="tel:+442074935555" className="text-foreground/70 hover:text-accent transition-colors duration-300 font-sans text-sm">
                    +44 20 7493 5555
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-accent" size={16} />
                  <a href="mailto:studio@vipphotoshoots.com" className="text-foreground/70 hover:text-accent transition-colors duration-300 font-sans text-sm">
                    studio@vipphotoshoots.com
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-serif font-light mb-4 text-accent tracking-wide">STUDIO HOURS</h4>
                <div className="text-foreground/60 font-sans text-sm space-y-1">
                  <p>Monday - Friday: 9:00 - 18:00</p>
                  <p>Saturday: 10:00 - 16:00</p>
                  <p>Sunday: By Appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-foreground/50 font-sans text-sm">
              © {currentYear} VIP Photoshoots. All rights reserved.
            </div>
            <div className="flex space-x-8 text-foreground/50 font-sans text-sm">
              <Link href="/privacy" className="hover:text-accent transition-colors duration-300">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-accent transition-colors duration-300">Terms of Service</Link>
              <a href="#" className="hover:text-accent transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}