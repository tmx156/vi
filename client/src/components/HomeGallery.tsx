import { useEffect } from "react";
import { useLocation } from "wouter";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export default function HomeGallery() {
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
      src: "https://i.imgur.com/3o48Gu2.jpeg",
      alt: "Artistic boudoir photography",
      category: "boudoir"
    },
    {
      id: "maternity-2",
      src: "https://i.imgur.com/XeOfcMQ.jpeg",
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

  // Intersection Observer for reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const galleryElement = document.querySelector('.home-gallery-section');
    if (galleryElement) {
      observer.observe(galleryElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-8 relative overflow-hidden home-gallery-section reveal-up">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 luxury-gradient tracking-wide">
            FEATURED WORK
          </h2>
          <div className="elegant-divider w-16 mx-auto mb-6"></div>
          <p className="text-base text-foreground/60 max-w-2xl mx-auto font-sans leading-relaxed tracking-wide">
            A glimpse into our signature collections, where luxury meets artistry
          </p>
        </div>

        {/* 2x4 Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
              style={{
                animationDelay: `${index * 0.05}s`
              }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg premium-card">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
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

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button
            onClick={() => setLocation('/gallery')}
            className="text-accent font-sans text-sm tracking-widest hover:text-foreground transition-colors duration-300 underline decoration-1 underline-offset-4 cursor-pointer"
          >
            VIEW FULL PORTFOLIO
          </button>
        </div>
      </div>
    </section>
  );
}
