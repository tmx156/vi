import GalleryGrid from "@/components/GalleryGrid";

export default function Gallery() {
  const galleryImages = [
    {
      id: "boudoir-1",
      src: "https://images.unsplash.com/photo-1594736797933-d0c3c3d69e92?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
      alt: "Luxury boudoir photography",
      category: "boudoir"
    },
    {
      id: "maternity-1",
      src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
      alt: "Elegant maternity photography",
      category: "maternity"
    },
    {
      id: "family-1",
      src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Luxury family portrait",
      category: "family"
    },
    {
      id: "bestie-1",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
      alt: "Luxury bestie photography",
      category: "bestie"
    },
    {
      id: "boudoir-2",
      src: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
      alt: "Artistic boudoir photography",
      category: "boudoir"
    },
    {
      id: "maternity-2",
      src: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
      alt: "Studio maternity photography",
      category: "maternity"
    },
    {
      id: "family-2",
      src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Luxury family photography",
      category: "family"
    },
    {
      id: "bestie-2",
      src: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
      alt: "Professional friends photography",
      category: "bestie"
    },
    {
      id: "boudoir-3",
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
      alt: "Luxury boudoir styling",
      category: "boudoir"
    },
    {
      id: "maternity-3",
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
      alt: "Professional maternity portrait",
      category: "maternity"
    },
    {
      id: "family-3",
      src: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Studio family photography",
      category: "family"
    },
    {
      id: "bestie-3",
      src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
      alt: "Glamorous friends photoshoot",
      category: "bestie"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-serif font-bold mb-6 gradient-text" data-testid="gallery-title">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="gallery-subtitle">
              Explore our collection of luxury photography experiences across all our signature services
            </p>
          </div>

          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </div>
  );
}
