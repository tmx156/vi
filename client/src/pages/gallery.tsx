import GalleryGrid from "@/components/GalleryGrid";
import Navigation from "@/components/Navigation";
import { useState } from "react";

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      {/* Consultation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="premium-card max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-accent/10">
              <h3 className="text-2xl font-serif font-light luxury-gradient tracking-wide">
                FREE CONSULTATION
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-foreground/60 hover:text-accent transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <p className="text-foreground/60 mb-6 font-sans text-sm tracking-wide">
                Book a complimentary 30-minute consultation to discuss your vision and connect you with the perfect studio
              </p>

              <form className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white border-2 border-accent/20 rounded cursor-text text-black focus:border-accent"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white border-2 border-accent/20 rounded cursor-text text-black focus:border-accent"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-white border-2 border-accent/20 rounded cursor-text text-black focus:border-accent"
                />

                <select className="w-full px-4 py-3 bg-white border-2 border-accent/20 rounded cursor-pointer text-black focus:border-accent">
                  <option value="">Select Service Type</option>
                  <option value="boudoir">Boudoir</option>
                  <option value="maternity">Maternity</option>
                  <option value="family">Family</option>
                  <option value="bestie">Bestie</option>
                </select>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-accent text-accent-foreground rounded text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  BOOK FREE CONSULTATION
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

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
