export default function About() {
  const teamMembers = [
    {
      name: "Alexander Reynolds",
      role: "Lead Photographer & Creative Director",
      description: "Award-winning photographer with 10+ years of experience in luxury portraiture and fashion photography.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Sophia Martinez",
      role: "Senior Portrait Photographer",
      description: "Specializes in boudoir and maternity photography, known for creating intimate and empowering experiences.",
      imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b789?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "James Wellington",
      role: "Family & Lifestyle Photographer",
      description: "Expert in capturing authentic family moments and creating comfortable environments for natural expressions.",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl font-serif font-bold mb-8 gradient-text" data-testid="about-title">
                About VIP Photoshoots
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="about-intro">
                Founded on the belief that every individual deserves to feel extraordinary, VIP Photoshoots has become London's premier destination for luxury photography experiences.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="about-description">
                Our state-of-the-art studio, combined with our team of award-winning photographers, creates an environment where artistry meets luxury. We specialize in capturing the essence of our clients through sophisticated portraiture that tells their unique story.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-sessions">500+</div>
                  <div className="text-sm text-muted-foreground">Luxury Sessions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-years">5</div>
                  <div className="text-sm text-muted-foreground">Years Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-satisfaction">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="VIP Photoshoots luxury studio interior" 
                className="rounded-2xl shadow-2xl"
                data-testid="studio-image"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold mb-6" data-testid="team-title">Our Creative Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="team-subtitle">
              Meet the talented artists behind every exceptional photograph
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="text-center">
                <img 
                  src={member.imageUrl} 
                  alt={`${member.name} at VIP Photoshoots`} 
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
                  data-testid={`team-member-image-${index}`}
                />
                <h3 className="text-2xl font-serif font-semibold mb-2" data-testid={`team-member-name-${index}`}>
                  {member.name}
                </h3>
                <p className="text-accent mb-4" data-testid={`team-member-role-${index}`}>
                  {member.role}
                </p>
                <p className="text-muted-foreground" data-testid={`team-member-description-${index}`}>
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
