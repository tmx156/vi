import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  onBookingClick?: () => void;
}

export default function Navigation({ onBookingClick }: NavigationProps) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT" },
    { path: "/gallery", label: "GALLERY" },
    { path: "/locations", label: "LOCATIONS" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50 mobile-nav">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-serif font-light luxury-gradient tracking-wider hover:brightness-110 transition-all duration-300"
            data-testid="logo-link"
            style={{
              textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
              letterSpacing: '0.1em'
            }}
          >
            VIP PHOTOSHOOTS
          </Link>

           {/* Desktop Navigation */}
           <div className="hidden md:flex items-center space-x-8">
             {navItems.map((item) => (
               <Link
                 key={item.path}
                 href={item.path}
                 className={cn(
                   "text-sm font-medium transition-colors hover:text-accent relative py-2",
                   location === item.path
                     ? "text-accent"
                     : "text-foreground/70"
                 )}
                 data-testid={`nav-${item.label.toLowerCase()}`}
               >
                 {item.label}
                 {location === item.path && (
                   <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></div>
                 )}
               </Link>
             ))}

             {/* Book Session Button */}
             <button
               onClick={onBookingClick}
               className="premium-button px-6 py-2 text-sm font-medium text-background bg-accent hover:bg-accent/90 transition-all duration-300 rounded-lg"
             >
               BOOK SESSION
             </button>
           </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "block px-3 py-2 text-base font-medium transition-colors rounded-md",
                    location === item.path
                      ? "text-accent bg-accent/10"
                      : "text-muted-foreground hover:text-accent hover:bg-accent/5"
                  )}
                  onClick={() => setIsOpen(false)}
                  data-testid={`nav-mobile-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Book Session Button */}
              <button
                onClick={() => {
                  onBookingClick?.();
                  setIsOpen(false);
                }}
                className="w-full mt-4 premium-button px-4 py-3 text-sm font-medium text-background bg-accent hover:bg-accent/90 transition-all duration-300 rounded-lg"
              >
                BOOK SESSION
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}