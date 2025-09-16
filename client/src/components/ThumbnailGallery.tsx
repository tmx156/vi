import { useState } from 'react';
import { useLocation } from 'wouter';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export default function ThumbnailGallery() {
  const [, setLocation] = useLocation();

  const galleryImages: GalleryImage[] = [
    {
      id: "boudoir-1",
      src: "https://i.imgur.com/HskrxZR.jpeg",
      alt: "Luxury boudoir photography session",
      category: "boudoir"
    },
    {
      id: "maternity-1",
      src: "https://i.imgur.com/lpEdOD6.jpeg",
      alt: "Elegant maternity photography portrait",
      category: "maternity"
    },
    {
      id: "family-1",
      src: "https://i.imgur.com/rv8GyqO.jpeg",
      alt: "Luxury family portrait session",
      category: "family"
    },
    {
      id: "bestie-1",
      src: "https://i.imgur.com/nUwpbIB.jpeg",
      alt: "Luxury bestie photography experience",
      category: "bestie"
    },
    {
      id: "boudoir-2",
      src: "https://i.imgur.com/g5NKulQ.jpeg",
      alt: "Artistic boudoir photography",
      category: "boudoir"
    },
    {
      id: "maternity-2",
      src: "https://i.imgur.com/f7NYTlM.jpeg",
      alt: "Studio maternity photography",
      category: "maternity"
    },
    {
      id: "family-2",
      src: "https://i.imgur.com/ZgBJ4pz.jpeg",
      alt: "Luxury family photography",
      category: "family"
    },
    {
      id: "bestie-2",
      src: "https://i.imgur.com/b467THz.jpeg",
      alt: "Professional friends photography",
      category: "bestie"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-full">
      {galleryImages.map((image, index) => (
        <div
          key={image.id}
          className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
          onClick={() => setLocation('/gallery')}
          style={{
            animationDelay: `${index * 0.1}s`
          }}
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg premium-card">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />
            {/* Subtle overlay with category */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-serif text-sm tracking-wide capitalize">
                  {image.category}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}