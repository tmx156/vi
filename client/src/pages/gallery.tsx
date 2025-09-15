import GalleryGrid from "@/components/GalleryGrid";
import MobileOptimizedGallery from "@/components/MobileOptimizedGallery";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";
import { useState, useEffect } from "react";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isMobile, isLowEndDevice, connectionType } = useMobilePerformance();
  const galleryImages = [
    // Featured Portfolio Images
    {
      id: "boudoir-1",
      src: "https://i.imgur.com/v1l1YoN.jpeg",
      alt: "Luxury boudoir photography",
      category: "boudoir"
    },
    {
      id: "maternity-1",
      src: "https://i.imgur.com/lpEdOD6.jpeg",
      alt: "Elegant maternity photography",
      category: "maternity"
    },
    {
      id: "family-1",
      src: "https://i.imgur.com/CPb8mAP.jpeg",
      alt: "Luxury family portrait",
      category: "family"
    },
    {
      id: "bestie-1",
      src: "https://i.imgur.com/nUwpbIB.jpeg",
      alt: "Luxury bestie photography",
      category: "bestie"
    },
    {
      id: "boudoir-2",
      src: "https://i.imgur.com/RkMwCQS.jpeg",
      alt: "Artistic boudoir photography",
      category: "boudoir"
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
    {
      id: "family-2",
      src: "https://i.imgur.com/qDxWCbT.jpeg",
      alt: "Luxury family photography",
      category: "family"
    },
    {
      id: "bestie-2",
      src: "https://i.imgur.com/CP7vmIf.jpeg",
      alt: "Professional friends photography",
      category: "bestie"
    },
    {
      id: "boudoir-3",
      src: "https://i.imgur.com/HskrxZR.jpeg",
      alt: "Luxury boudoir styling",
      category: "boudoir"
    },
    {
      id: "family-3",
      src: "https://i.imgur.com/ZgBJ4pz.jpeg",
      alt: "Studio family photography",
      category: "family"
    },
    {
      id: "bestie-3",
      src: "https://i.imgur.com/TtZomX5.jpeg",
      alt: "Glamorous friends photoshoot",
      category: "bestie"
    },
    // Additional Portfolio Images
    {
      id: "boudoir-4",
      src: "https://i.imgur.com/JmjTg5I.jpeg",
      alt: "Elegant boudoir portrait",
      category: "boudoir"
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
    {
      id: "bestie-4",
      src: "https://i.imgur.com/13FUUst.jpeg",
      alt: "Creative friendship photography",
      category: "bestie"
    },
    {
      id: "bestie-5",
      src: "https://i.imgur.com/WoBCaWp.jpeg",
      alt: "Elegant friends portrait",
      category: "bestie"
    },
    {
      id: "bestie-6",
      src: "https://i.imgur.com/mDhO35Q.jpeg",
      alt: "Luxury bestie session",
      category: "bestie"
    },
    {
      id: "bestie-7",
      src: "https://i.imgur.com/tpQW5n2.jpeg",
      alt: "Sophisticated friendship photography",
      category: "bestie"
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
  ];

  return (
    <div className="min-h-screen">
      <Navigation onBookSession={() => setIsModalOpen(true)} />
      <section className="pt-32 pb-24 px-6">
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

          {isMobile ? (
            <MobileOptimizedGallery 
              images={galleryImages.map(img => ({
                id: img.id,
                src: img.src,
                alt: img.alt,
                category: img.category,
                mobileSrc: img.src.replace('.jpeg', 'm.webp'),
                lowEndSrc: img.src.replace('.jpeg', 's.jpeg')
              }))}
              maxImages={isLowEndDevice ? 4 : connectionType === 'slow' ? 6 : 8}
              showFilters={true}
            />
          ) : (
            <GalleryGrid images={galleryImages} />
          )}
        </div>
      </section>

      {/* Unified Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="premium-button px-6 py-3 text-sm font-medium tracking-widest text-accent-foreground shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          GET CONSULTATION
        </button>
      </div>
    </div>
  );
}
