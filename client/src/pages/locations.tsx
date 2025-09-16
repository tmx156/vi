import { Check } from "lucide-react";

export default function Locations() {
  
  const studios = [
    {
      name: "London Studio",
      description: "Our flagship location in the heart of London, featuring state-of-the-art equipment and luxury amenities.",
      imageUrl: "https://i.imgur.com/nGTCJ8l.jpeg",
      features: [
        "3 Professional Shooting Spaces",
        "Luxury Changing Rooms",
        "Professional Hair & Makeup Station",
        "Client Lounge Area"
      ]
    },
    {
      name: "Manchester Studios",
      description: "Our contemporary space in vibrant Manchester, perfect for creative and artistic photography sessions.",
      imageUrl: "https://i.imgur.com/KFMpwj9.jpeg",
      features: [
        "2 Creative Shooting Spaces",
        "Industrial Backdrop Options",
        "Natural Light Studio",
        "Props & Wardrobe Selection"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 luxury-gradient tracking-wide" data-testid="locations-title">
              OUR STUDIOS
            </h1>
            <div className="elegant-divider w-16 mx-auto mb-6"></div>
            <p className="text-base text-foreground/60 max-w-2xl mx-auto font-sans leading-relaxed tracking-wide" data-testid="locations-subtitle">
              Discover our carefully curated photography spaces designed to bring your vision to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            {studios.map((studio, index) => (
              <div key={studio.name} className="premium-card overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={studio.imageUrl}
                    alt={`${studio.name} interior`}
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                    data-testid={`studio-image-${index}`}
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl md:text-3xl font-serif font-light mb-4 luxury-gradient" data-testid={`studio-name-${index}`}>
                    {studio.name.toUpperCase()}
                  </h3>
                  <p className="text-foreground/60 mb-8 leading-relaxed" data-testid={`studio-description-${index}`}>
                    {studio.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-lg font-serif mb-4 text-accent tracking-wide">STUDIO FEATURES</h4>
                    <ul className="space-y-3 text-foreground/70">
                      {studio.features.map((feature, featureIndex) => (
                        <li key={feature} className="flex items-center" data-testid={`studio-feature-${index}-${featureIndex}`}>
                          <Check className="text-accent mr-3" size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>


    </div>
  );
}
