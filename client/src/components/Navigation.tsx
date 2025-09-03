import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT" },
    { path: "/gallery", label: "GALLERY" },
    { path: "/locations", label: "LOCATIONS" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6">
      <div className="max-w-7xl mx-auto px-8">
        <div className="premium-glass px-12 py-6">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="text-3xl font-serif font-light luxury-gradient tracking-wide" 
              data-testid="logo-link"
            >
              VIP PHOTOSHOOTS
            </Link>
            <div className="flex items-center space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "font-sans text-sm font-medium tracking-widest transition-all duration-500 relative",
                    location === item.path
                      ? "text-accent"
                      : "text-foreground/80 hover:text-accent"
                  )}
                  data-testid={`nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                  {location === item.path && (
                    <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                  )}
                </Link>
              ))}
              <Link
                href="/contact"
                className="premium-button px-8 py-3 text-sm font-medium tracking-wide text-accent-foreground"
                data-testid="nav-contact"
              >
                BOOK SESSION
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
