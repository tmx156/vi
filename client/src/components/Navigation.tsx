
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT" },
    { path: "/gallery", label: "GALLERY" },
    { path: "/locations", label: "LOCATIONS" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-serif font-bold text-foreground hover:text-accent transition-colors" 
            data-testid="logo-link"
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
                    : "text-muted-foreground"
                )}
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
                {location === item.path && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></div>
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-accent text-accent-foreground px-6 py-2 rounded-md text-sm font-medium hover:bg-accent/90 transition-colors"
              data-testid="nav-contact"
            >
              BOOK SESSION
            </Link>
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
              <Link
                href="/contact"
                className="block mx-3 mt-4 bg-accent text-accent-foreground px-6 py-2 rounded-md text-base font-medium text-center hover:bg-accent/90 transition-colors"
                onClick={() => setIsOpen(false)}
                data-testid="nav-mobile-contact"
              >
                BOOK SESSION
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
