import { useLocation } from 'wouter';

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center px-6">
      <div className="text-center max-w-lg mx-auto">
        <h1 className="text-8xl md:text-9xl font-serif font-light mb-8 luxury-gradient">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-serif font-light mb-6 text-foreground/80">
          Page Not Found
        </h2>
        <div className="elegant-divider w-16 mx-auto mb-8"></div>
        <p className="text-base text-foreground/60 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => setLocation('/')}
          className="premium-button px-8 py-3 text-sm font-medium text-background bg-accent hover:bg-accent/90 transition-all duration-300 rounded-lg"
        >
          RETURN HOME
        </button>
      </div>
    </div>
  );
}