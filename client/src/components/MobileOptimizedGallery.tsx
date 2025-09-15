import { useState, useEffect, useMemo } from 'react';
import { useMobileBundle, useMobileImageLoader } from '@/hooks/use-mobile-bundle';
import MobileOptimizedImage from './MobileOptimizedImage';
import PhotographyImage from './PhotographyImage';
import { cn } from '@/lib/utils';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category?: string;
  mobileSrc?: string;
  lowEndSrc?: string;
}

interface MobileOptimizedGalleryProps {
  images: GalleryImage[];
  className?: string;
  maxImages?: number;
  showFilters?: boolean;
}

export default function MobileOptimizedGallery({ 
  images, 
  className = '', 
  maxImages,
  showFilters = true
}: MobileOptimizedGalleryProps) {
  const { isMobile, isLowEndDevice, connectionType } = useMobileBundle();
  const [visibleImages, setVisibleImages] = useState<GalleryImage[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");

  // Mobile-optimized categories (fewer options for better UX)
  const categories = [
    { id: "all", label: "All" },
    { id: "boudoir", label: "Boudoir" },
    { id: "maternity", label: "Maternity" },
    { id: "family", label: "Family" },
    { id: "bestie", label: "Bestie" },
  ];

  // Memoized filtered images for performance
  const filteredImages = useMemo(() => {
    if (activeFilter === "all") return images;
    return images.filter(image => image.category === activeFilter);
  }, [images, activeFilter]);

  useEffect(() => {
    // For photography company - prioritize quality over quantity
    let imageLimit = filteredImages.length;
    
    if (isLowEndDevice) {
      imageLimit = Math.min(maxImages || 3, 4); // Further reduced for bigger images
    } else if (isMobile) {
      imageLimit = Math.min(maxImages || 6, 8); // Reduced for bigger images
    } else if (connectionType === 'slow') {
      imageLimit = Math.min(maxImages || 4, 6); // Reduced for bigger images
    }

    setVisibleImages(filteredImages.slice(0, imageLimit));
  }, [filteredImages, isMobile, isLowEndDevice, connectionType, maxImages]);

  const handleImageLoad = () => {
    setLoadedCount(prev => prev + 1);
  };

  // Progressive loading for slow connections - fewer images but higher quality
  const shouldLoadImage = (index: number) => {
    if (connectionType === 'slow') {
      return index < 3; // Load only 3 high-quality images initially
    }
    return true;
  };

  return (
    <div className={`w-full gallery-container ${className}`}>
      {/* Mobile-Optimized Filters */}
      {showFilters && (
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={cn(
                  "px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200",
                  "mobile-filter-button touch-manipulation select-none", // Mobile optimizations
                  activeFilter === category.id
                    ? "bg-accent text-accent-foreground shadow-md"
                    : "bg-secondary text-foreground hover:bg-accent hover:text-accent-foreground"
                )}
                data-testid={`mobile-filter-${category.id}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Gallery Grid Container - Bigger Images */}
      <div className="gallery-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {visibleImages.map((image, index) => {
          if (!shouldLoadImage(index)) {
            return (
              <div 
                key={image.id}
                className="aspect-[4/5] sm:aspect-square bg-muted animate-pulse rounded-2xl overflow-hidden"
                style={{ 
                  contain: 'layout style paint',
                  transform: 'translateZ(0)'
                }}
              />
            );
          }

          return (
            <div
              key={image.id}
              className="aspect-[4/5] sm:aspect-square overflow-hidden rounded-2xl group cursor-pointer mobile-optimized"
              style={{
                contain: 'layout style paint',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
              }}
            >
              <PhotographyImage
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading={index < 2 ? 'eager' : 'lazy'}
                fetchpriority={index < 2 ? 'high' : 'low'}
                priority={index < 2}
                onLoad={handleImageLoad}
              />
            </div>
          );
        })}
      </div>
      
      {/* Load more button for slow connections */}
      {connectionType === 'slow' && loadedCount >= 3 && loadedCount < visibleImages.length && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => {
              // Load next batch of high-quality images
              const nextBatch = visibleImages.slice(loadedCount, loadedCount + 3);
              setVisibleImages(prev => [...prev, ...nextBatch]);
            }}
            className="px-8 py-4 bg-accent text-accent-foreground rounded-full text-sm font-medium tracking-widest hover:scale-105 transition-all duration-300 shadow-lg"
          >
            LOAD MORE IMAGES
          </button>
        </div>
      )}
    </div>
  );
}
