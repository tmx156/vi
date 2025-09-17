export default function About() {



  return (
    <div className="min-h-screen pt-16">
      <section className="pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-6 sm:mb-8 luxury-gradient tracking-wide leading-tight" data-testid="about-title">
              ABOUT VIP PHOTOSHOOTS
            </h1>
            <div className="elegant-divider w-12 sm:w-16 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl text-foreground/70 mb-6 sm:mb-8 leading-relaxed font-sans tracking-wide" data-testid="about-intro">
              Founded in 2019 on the belief that everyone deserves to experience something special, VIP Photoshoots has become one of London's most distinguished photography studios.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-foreground/60 mb-6 sm:mb-8 leading-relaxed font-sans" data-testid="about-description">
              Our photography studios, nestled in the heart of London and Manchester, combined with our internationally acclaimed team of photographers, hair stylists and makeup artists, create an environment where outstanding photography prevails. We specialize in capturing the unique essence of our clients through professional portraits that become lasting legacies.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-foreground/60 mb-8 sm:mb-12 leading-relaxed font-sans">
              Each session is a bespoke journey, meticulously crafted to reflect your unique narrative. From corporate executives to celebrated artists, our diverse clientele trusts us to create imagery that defines their personal and professional legacy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
              <div className="text-center premium-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-accent mb-2 sm:mb-3" data-testid="stat-sessions">15,000+</div>
                <div className="text-xs sm:text-sm text-foreground/60 tracking-widest uppercase">Luxury Sessions</div>
              </div>
              <div className="text-center premium-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-accent mb-2 sm:mb-3" data-testid="stat-years">5</div>
                <div className="text-xs sm:text-sm text-foreground/60 tracking-widest uppercase">Years Excellence</div>
              </div>
              <div className="text-center premium-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-accent mb-2 sm:mb-3" data-testid="stat-satisfaction">100%</div>
                <div className="text-xs sm:text-sm text-foreground/60 tracking-widest uppercase">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}
