import { useState } from "react";
import { cn } from "@/lib/utils";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Work" },
    { id: "boudoir", label: "Boudoir" },
    { id: "maternity", label: "Maternity" },
    { id: "family", label: "Family" },
    { id: "cosplay", label: "Cosplay" },
    { id: "executive", label: "Executive" },
  ];

  const filteredImages = activeFilter === "all" 
    ? images 
    : images.filter(image => image.category === activeFilter);

  return (
    <div>
      {/* Gallery Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={cn(
              "px-6 py-3 rounded-full font-medium transition-all",
              activeFilter === category.id
                ? "bg-accent text-accent-foreground"
                : "bg-secondary text-foreground hover:bg-accent hover:text-accent-foreground"
            )}
            data-testid={`filter-${category.id}`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="gallery-item rounded-2xl overflow-hidden cursor-pointer"
            data-testid={`gallery-item-${image.id}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
