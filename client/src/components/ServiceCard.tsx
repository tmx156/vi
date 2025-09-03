import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
}

export default function ServiceCard({ title, description, imageUrl, className }: ServiceCardProps) {
  return (
    <div className={cn("premium-card group cursor-pointer", className)}>
      <div className="image-overlay h-96 relative">
        <img 
          src={imageUrl} 
          alt={`${title} photography session`} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          data-testid={`service-image-${title.toLowerCase()}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-2xl font-serif font-light mb-3 text-white tracking-wide" data-testid={`service-title-${title.toLowerCase()}`}>
            {title}
          </h3>
          <div className="w-12 h-px bg-accent mb-4"></div>
        </div>
      </div>
      <div className="p-8">
        <p className="text-foreground/70 mb-8 font-sans leading-relaxed tracking-wide text-sm" data-testid={`service-description-${title.toLowerCase()}`}>
          {description}
        </p>
        <div className="flex items-center text-accent group-hover:text-foreground transition-colors duration-300">
          <span className="text-xs font-medium tracking-widest uppercase">Explore Collection</span>
          <svg 
            className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
