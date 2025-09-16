import { Link } from "wouter";
import { Mail } from "lucide-react";

interface FooterProps {
  onBookingClick?: () => void;
}

export default function Footer({ onBookingClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-card border-t border-border/20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div>
              <Link href="/" className="text-3xl font-serif font-light luxury-gradient tracking-wide mb-6 block">
                VIP PHOTOSHOOTS
              </Link>
              <p className="text-foreground/60 font-sans leading-relaxed">
                London's premier luxury photography atelier, crafting extraordinary visual narratives since 2019.
              </p>
            </div>



            {/* Contact & Booking */}
            <div>
              <h3 className="text-xl font-serif font-light mb-6 text-accent tracking-wide">CONTACT</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-accent" size={16} />
                  <a href="mailto:info@vipphotoshoots.co.uk" className="text-foreground/70 hover:text-accent transition-colors duration-300 font-sans text-sm">
                    info@vipphotoshoots.co.uk
                  </a>
                </div>

                <button
                  onClick={onBookingClick}
                  className="premium-button px-6 py-3 text-sm font-medium text-background bg-accent hover:bg-accent/90 transition-all duration-300 rounded-lg w-full mt-6"
                >
                  BOOK YOUR SESSION
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 py-8">
          <div className="flex justify-center">
            <div className="text-foreground/50 font-sans text-sm">
              © {currentYear} VIP Photoshoots. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}