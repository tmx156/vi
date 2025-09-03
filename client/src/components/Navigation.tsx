import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/gallery", label: "Gallery" },
    { path: "/locations", label: "Locations" },
  ];

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="glass-effect rounded-full px-8 py-4">
        <div className="flex items-center space-x-8">
          <Link 
            href="/" 
            className="text-2xl font-serif font-bold gradient-text" 
            data-testid="logo-link"
          >
            VIP Photoshoots
          </Link>
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "nav-link transition-colors duration-300",
                  location === item.path
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                )}
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
