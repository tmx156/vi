import { useState } from "react";
import MobileOptimizedGalleryImage from "../components/MobileOptimizedGalleryImage";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(6); // Start with only 6 images for slow connections
  const galleryImages = [
    // Family Images
    {
      id: "family-1",
      src: "https://i.imgur.com/CPb8mAP.jpeg",
      alt: "Luxury family portrait",
      category: "family"
    },
    {
      id: "family-2",
      src: "https://i.imgur.com/qDxWCbT.jpeg",
      alt: "Luxury family photography",
      category: "family"
    },
    {
      id: "family-3",
      src: "https://i.imgur.com/ZgBJ4pz.jpeg",
      alt: "Studio family photography",
      category: "family"
    },
    {
      id: "family-4",
      src: "https://i.imgur.com/OYGgBkV.jpeg",
      alt: "Intimate family moment",
      category: "family"
    },
    {
      id: "family-5",
      src: "https://i.imgur.com/SrLbxYt.jpeg",
      alt: "Beautiful family portrait",
      category: "family"
    },
    {
      id: "family-6",
      src: "https://i.imgur.com/rv8GyqO.jpeg",
      alt: "Luxury family session",
      category: "family"
    },
    {
      id: "family-7",
      src: "https://i.imgur.com/ZyMjl2z.jpeg",
      alt: "Elegant family photography",
      category: "family"
    },
    // Maternity Images
    {
      id: "maternity-1",
      src: "https://i.imgur.com/lpEdOD6.jpeg",
      alt: "Elegant maternity photography",
      category: "maternity"
    },
    {
      id: "maternity-2",
      src: "https://i.imgur.com/Jx47Iyr.jpeg",
      alt: "Studio maternity photography",
      category: "maternity"
    },
    {
      id: "maternity-3",
      src: "https://i.imgur.com/FOyTS6j.jpeg",
      alt: "Beautiful maternity portrait",
      category: "maternity"
    },
    {
      id: "maternity-4",
      src: "https://i.imgur.com/8EuISn2.jpeg",
      alt: "Elegant maternity photography",
      category: "maternity"
    },
    {
      id: "maternity-5",
      src: "https://i.imgur.com/ZU1tDwt.jpeg",
      alt: "Luxury maternity session",
      category: "maternity"
    },
    {
      id: "maternity-6",
      src: "https://i.imgur.com/ug5k3AN.jpeg",
      alt: "Sophisticated maternity portrait",
      category: "maternity"
    },
    {
      id: "maternity-7",
      src: "https://i.imgur.com/rS794ix.jpeg",
      alt: "Artistic maternity photography",
      category: "maternity"
    },
    {
      id: "maternity-8",
      src: "https://i.imgur.com/q6JDXQ6.jpeg",
      alt: "Professional maternity portrait",
      category: "maternity"
    },
    // Boudoir Images
    {
      id: "boudoir-1",
      src: "https://i.imgur.com/v1l1YoN.jpeg",
      alt: "Luxury boudoir photography",
      category: "boudoir"
    },
    {
      id: "boudoir-2",
      src: "https://i.imgur.com/RkMwCQS.jpeg",
      alt: "Artistic boudoir photography",
      category: "boudoir"
    },
    {
      id: "boudoir-3",
      src: "https://i.imgur.com/HskrxZR.jpeg",
      alt: "Luxury boudoir styling",
      category: "boudoir"
    },
    {
      id: "boudoir-4",
      src: "https://i.imgur.com/JmjTg5I.jpeg",
      alt: "Elegant boudoir portrait",
      category: "boudoir"
    },
    {
      id: "boudoir-5",
      src: "https://i.imgur.com/Qoyk9nV.jpeg",
      alt: "Luxury boudoir experience",
      category: "boudoir"
    },
    {
      id: "boudoir-6",
      src: "https://i.imgur.com/MmZ32Iw.jpeg",
      alt: "Sophisticated boudoir portrait",
      category: "boudoir"
    },
    {
      id: "boudoir-7",
      src: "https://i.imgur.com/sz34KWy.jpeg",
      alt: "Elegant boudoir photography",
      category: "boudoir"
    },
    {
      id: "boudoir-8",
      src: "https://i.imgur.com/DIz3Al9.jpeg",
      alt: "Luxury boudoir portrait",
      category: "boudoir"
    },
    // Cosplay Images
    {
      id: "cosplay-1",
      src: "https://i.imgur.com/U5Hw3hz.jpeg",
      alt: "Luxury cosplay photography",
      category: "cosplay"
    },
    {
      id: "cosplay-2",
      src: "https://i.imgur.com/nF3sCiW.jpeg",
      alt: "Professional cosplay photography",
      category: "cosplay"
    },
    {
      id: "cosplay-3",
      src: "https://i.imgur.com/uemFXbr.jpeg",
      alt: "Creative cosplay portrait",
      category: "cosplay"
    },
    {
      id: "cosplay-4",
      src: "https://i.imgur.com/Smf9Oel.jpeg",
      alt: "Artistic cosplay photography",
      category: "cosplay"
    },
    {
      id: "cosplay-5",
      src: "https://i.imgur.com/BxJNnz3.jpeg",
      alt: "Elegant cosplay portrait",
      category: "cosplay"
    },
    {
      id: "cosplay-6",
      src: "https://i.imgur.com/AMxhBA5.jpeg",
      alt: "Sophisticated cosplay photography",
      category: "cosplay"
    },
    {
      id: "cosplay-7",
      src: "https://i.imgur.com/zvgjszf.jpeg",
      alt: "Luxury cosplay session",
      category: "cosplay"
    },
    {
      id: "cosplay-8",
      src: "https://i.imgur.com/A5op4eb.jpeg",
      alt: "Studio cosplay photography",
      category: "cosplay"
    },
    {
      id: "cosplay-9",
      src: "https://i.imgur.com/HPMDBQo.jpeg",
      alt: "Creative cosplay portrait",
      category: "cosplay"
    },
    {
      id: "cosplay-10",
      src: "https://i.imgur.com/eUzYfaG.jpeg",
      alt: "Professional cosplay session",
      category: "cosplay"
    },
    {
      id: "cosplay-11",
      src: "https://i.imgur.com/Z613NeN.jpeg",
      alt: "Artistic cosplay photography",
      category: "cosplay"
    },
    {
      id: "cosplay-12",
      src: "https://i.imgur.com/tsbFlvz.jpeg",
      alt: "Elegant cosplay portrait",
      category: "cosplay"
    },
    {
      id: "cosplay-13",
      src: "https://i.imgur.com/ImH46Dt.jpeg",
      alt: "Luxury cosplay photography",
      category: "cosplay"
    },
    {
      id: "cosplay-14",
      src: "https://i.imgur.com/p2iPF0J.jpeg",
      alt: "Sophisticated cosplay session",
      category: "cosplay"
    },
    {
      id: "cosplay-15",
      src: "https://i.imgur.com/Ot1XYnL.jpeg",
      alt: "Premium cosplay photography",
      category: "cosplay"
    },
    // Executive Images
    {
      id: "executive-1",
      src: "https://i.imgur.com/IymoHWG.jpeg",
      alt: "Professional executive headshot",
      category: "executive"
    },
    {
      id: "executive-2",
      src: "https://i.imgur.com/mf6Nrgi.jpeg",
      alt: "Corporate executive portrait",
      category: "executive"
    },
    {
      id: "executive-3",
      src: "https://i.imgur.com/SNd0WEh.jpeg",
      alt: "Business executive photography",
      category: "executive"
    },
    {
      id: "executive-4",
      src: "https://i.imgur.com/Yc9tmNX.jpeg",
      alt: "Executive headshot session",
      category: "executive"
    },
    {
      id: "executive-5",
      src: "https://i.imgur.com/3lpynkM.jpeg",
      alt: "Professional portrait photography",
      category: "executive"
    },
    {
      id: "executive-6",
      src: "https://i.imgur.com/ifDH39E.jpeg",
      alt: "Corporate headshot photography",
      category: "executive"
    },
    {
      id: "executive-7",
      src: "https://i.imgur.com/jhvxtMo.jpeg",
      alt: "Executive portrait session",
      category: "executive"
    },
    {
      id: "executive-8",
      src: "https://i.imgur.com/QsVdbXA.jpeg",
      alt: "Business professional headshot",
      category: "executive"
    },
    {
      id: "executive-9",
      src: "https://i.imgur.com/85dDr7L.jpeg",
      alt: "Corporate executive portrait",
      category: "executive"
    },
    {
      id: "executive-10",
      src: "https://i.imgur.com/7sM3PTm.jpeg",
      alt: "Professional executive photography",
      category: "executive"
    },
    {
      id: "executive-11",
      src: "https://i.imgur.com/UULlN1g.jpeg",
      alt: "Executive headshot portrait",
      category: "executive"
    }
  ];

  const categories = ['all', 'family', 'maternity', 'boudoir', 'cosplay', 'executive'];

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  // Show only a subset for slow connections
  const visibleImages = filteredImages.slice(0, visibleCount);
  const hasMoreImages = visibleCount < filteredImages.length;

  const loadMoreImages = () => {
    setVisibleCount(prev => Math.min(prev + 6, filteredImages.length));
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-serif font-light mb-8 luxury-gradient tracking-wide" data-testid="gallery-title">
              PORTFOLIO COLLECTION
            </h1>
            <div className="elegant-divider w-24 mx-auto mb-8"></div>
            <p className="text-lg text-foreground/60 max-w-4xl mx-auto font-sans leading-relaxed tracking-wide" data-testid="gallery-subtitle">
              A curated selection from our extensive archive of luxury photography experiences,<br />
              showcasing the artistry and sophistication that defines our signature aesthetic
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  selectedCategory === category
                    ? 'bg-accent text-background'
                    : 'text-foreground/60 hover:text-accent border border-accent/30 hover:border-accent'
                }`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleImages.map((image, index) => (
              <div
                key={image.id}
                className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
                style={{
                  animationDelay: `${index * 0.05}s`
                }}
              >
                <MobileOptimizedGalleryImage
                  src={image.src}
                  alt={image.alt}
                  className="premium-card"
                  loading={index < 8 ? 'eager' : 'lazy'} // Load first 8 images eagerly for better LCP
                  onClick={() => setSelectedImage(image.src)}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-serif text-sm tracking-wide capitalize">
                      {image.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button for Slow Connections */}
          {hasMoreImages && (
            <div className="flex justify-center mt-12">
              <button
                onClick={loadMoreImages}
                className="px-8 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-colors duration-300"
              >
                Load More Images ({filteredImages.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors duration-300 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
