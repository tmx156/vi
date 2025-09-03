import GalleryGrid from "@/components/GalleryGrid";

export default function Gallery() {
  const galleryImages = [
    // Featured Portfolio Images
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
    },
    // Additional Portfolio Images
    {
      id: "boudoir-4",
      src: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
      alt: "Elegant boudoir portrait",
      category: "boudoir"
    },
    {
      id: "maternity-4",
      src: "https://images.unsplash.com/photo-1586107962156-7b29df739ec1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
      alt: "Artistic maternity session",
      category: "maternity"
    },
    {
      id: "family-4",
      src: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Intimate family moment",
      category: "family"
    },
    {
      id: "bestie-4",
      src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
      alt: "Creative friendship photography",
      category: "bestie"
    },
    {
      id: "boudoir-5",
      src: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
      alt: "Luxury boudoir experience",
      category: "boudoir"
    },
    {
      id: "maternity-5",
      src: "https://images.unsplash.com/photo-1544861853-4f13a4ad3952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
      alt: "Sophisticated maternity portrait",
      category: "maternity"
    }
  ];

  return (
    <div className="min-h-screen">
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

          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </div>
  );
}
