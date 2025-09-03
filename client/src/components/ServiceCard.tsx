import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
}

export default function ServiceCard({ title, description, imageUrl, className }: ServiceCardProps) {
  return (
    <div className={cn("service-card bg-card rounded-2xl overflow-hidden group cursor-pointer", className)}>
      <img 
        src={imageUrl} 
        alt={`${title} photography session`} 
        className="w-full h-64 object-cover"
        data-testid={`service-image-${title.toLowerCase()}`}
      />
      <div className="p-8">
        <h3 className="text-2xl font-serif font-semibold mb-4 gradient-text" data-testid={`service-title-${title.toLowerCase()}`}>
          {title}
        </h3>
        <p className="text-muted-foreground mb-6" data-testid={`service-description-${title.toLowerCase()}`}>
          {description}
        </p>
        <div className="flex items-center text-accent">
          <span className="text-sm font-medium">Explore Collection</span>
          <svg 
            className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
