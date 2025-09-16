import { Link } from "wouter";

export default function Privacy() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-background to-secondary">
      {/* Header */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-light mb-8 luxury-gradient tracking-wide">
            PRIVACY POLICY
          </h1>
          <div className="elegant-divider w-24 mx-auto mb-8"></div>
          <p className="text-lg text-foreground/60 font-sans leading-relaxed tracking-wide">
            Your privacy is of utmost importance to us. This policy outlines how we collect, use, and protect your personal information.
          </p>
          <p className="text-sm text-foreground/50 mt-4">
            Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="premium-card p-12 space-y-8">
            
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-serif font-light mb-6 text-accent tracking-wide">INTRODUCTION</h2>
              <p className="text-foreground/70 font-sans leading-relaxed">
                VIP Photoshoots ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website or use our photography services.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-serif font-light mb-6 text-accent tracking-wide">INFORMATION WE COLLECT</h2>
              
              <h3 className="text-xl font-serif font-light mb-4 text-foreground tracking-wide">Personal Information</h3>
              <p className="text-foreground/70 font-sans leading-relaxed mb-4">
                We may collect the following types of personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 font-sans ml-4">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Photography preferences and requirements</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Communication preferences</li>
                <li>Photographs and images (as part of our services)</li>
              </ul>

              <h3 className="text-xl font-serif font-light mb-4 text-foreground tracking-wide mt-8">Technical Information</h3>
              <p className="text-foreground/70 font-sans leading-relaxed mb-4">
                We automatically collect certain technical information when you visit our website:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 font-sans ml-4">
                <li>IP address and browser information</li>
                <li>Pages visited and time spent on our website</li>
                <li>Device information and operating system</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="text-2xl font-serif font-light mb-6 text-accent tracking-wide">HOW WE USE YOUR INFORMATION</h2>
              <p className="text-foreground/70 font-sans leading-relaxed mb-4">
                We use your personal information for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 font-sans ml-4">
                <li>Providing photography services and consultations</li>
                <li>Processing bookings and payments</li>
                <li>Communicating about your sessions and services</li>
                <li>Improving our website and services</li>
                <li>Marketing communications (with your consent)</li>
                <li>Legal compliance and dispute resolution</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="text-2xl font-serif font-light mb-6 text-accent tracking-wide">INFORMATION SHARING</h2>
              <p className="text-foreground/70 font-sans leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 font-sans ml-4">
                <li>With your explicit consent</li>
                <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights, property, or safety</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-serif font-light mb-6 text-accent tracking-wide">DATA SECURITY</h2>
              <p className="text-foreground/70 font-sans leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, 
                and regular security assessments.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-serif font-light mb-6 text-accent tracking-wide">YOUR RIGHTS</h2>
              <p className="text-foreground/70 font-sans leading-relaxed mb-4">
                Under UK GDPR and data protection laws, you have the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 font-sans ml-4">
                <li>Right to access your personal information</li>
                <li>Right to rectify inaccurate information</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to withdraw consent</li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-serif font-light mb-6 text-accent tracking-wide">COOKIES</h2>
              <p className="text-foreground/70 font-sans leading-relaxed">
                Our website uses cookies to enhance your browsing experience. You can control cookie settings through 
                your browser preferences. For more detailed information about our cookie usage, please refer to our 
                Cookie Policy.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-serif font-light mb-6 text-accent tracking-wide">CONTACT US</h2>
              <p className="text-foreground/70 font-sans leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-accent/5 p-6 rounded-lg">
                <p className="text-foreground/70 font-sans">
                  <strong>Email:</strong> privacy@vipphotoshoots.com<br />
                  <strong>Phone:</strong> +44 20 7493 5555<br />
                  <strong>Address:</strong> 15 Berkeley Square, Mayfair, London W1J 6QQ
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="text-2xl font-serif font-light mb-6 text-accent tracking-wide">CHANGES TO THIS POLICY</h2>
              <p className="text-foreground/70 font-sans leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by 
                posting the new policy on our website and updating the "Last updated" date. Your continued use of 
                our services after such changes constitutes acceptance of the updated policy.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            href="/" 
            className="premium-button px-8 py-3 text-sm font-medium tracking-widest text-accent-foreground inline-block"
          >
            RETURN TO HOME
          </Link>
        </div>
      </section>

    </div>
  );
}
