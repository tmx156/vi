import { Link } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Terms() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, serviceType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', serviceType: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Header */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-light mb-8 luxury-gradient tracking-wide">
            TERMS OF SERVICE
          </h1>
          <div className="elegant-divider w-24 mx-auto mb-8"></div>
          <p className="text-lg text-foreground/60 font-sans leading-relaxed tracking-wide">
            These terms govern your use of our photography services and website. Please read them carefully.
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
                Welcome to VIP Photoshoots. These Terms of Service ("Terms") govern your use of our website and 
                photography services. By accessing our website or booking our services, you agree to be bound by 
                these Terms.
              </p>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-2xl font-serif font-light mb-6 text-accent tracking-wide">OUR SERVICES</h2>
              <p className="text-foreground/70 font-sans leading-relaxed mb-4">
                VIP Photoshoots provides luxury photography services including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 font-sans ml-4">
                <li>Boudoir photography sessions</li>
                <li>Maternity portraits</li>
                <li>Family photography</li>
                <li>Bestie photography sessions</li>
                <li>Corporate headshots</li>
                <li>Editorial photography</li>
                <li>Consultation services</li>
              </ul>
            </div>

            {/* Booking and Payment */}
            <div>
              <h2 className="text-2xl font-serif font-light mb-6 text-accent tracking-wide">BOOKING AND PAYMENT</h2>
              
              <h3 className="text-xl font-serif font-light mb-4 text-foreground tracking-wide">Booking Process</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 font-sans ml-4 mb-6">
                <li>All bookings require a consultation to discuss your requirements</li>
                <li>A non-refundable deposit is required to secure your session</li>
                <li>Full payment is due before the photography session</li>
                <li>Bookings are subject to availability</li>
              </ul>

              <h3 className="text-xl font-serif font-light mb-4 text-foreground tracking-wide">Payment Terms</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 font-sans ml-4">
                <li>We accept major credit cards and bank transfers</li>
                <li>All prices are quoted in British Pounds (GBP)</li>
                <li>Payment processing is handled securely through third-party providers</li>
                <li>Additional charges may apply for rush orders or special requests</li>
              </ul>
            </div>

            {/* Cancellation and Refunds */}
            <div>
              <h2 className="text-2xl font-serif font-light mb-6 text-accent tracking-wide">CANCELLATION AND REFUNDS</h2>
              
              <h3 className="text-xl font-serif font-light mb-4 text-foreground tracking-wide">Cancellation Policy</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 font-sans ml-4 mb-6">
                <li>Cancellations made 48+ hours before the session: Full refund minus deposit</li>
                <li>Cancellations made 24-48 hours before the session: 50% refund</li>
                <li>Cancellations made less than 24 hours before the session: No refund</li>
                <li>Deposits are non-refundable in all cases</li>
              </ul>

              <h3 className="text-xl font-serif font-light mb-4 text-foreground tracking-wide">Rescheduling</h3>
              <p className="text-foreground/70 font-sans leading-relaxed">
                Sessions may be rescheduled up to 48 hours before the original date, subject to availability. 
                Rescheduling fees may apply for changes made less than 48 hours in advance.
              </p>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-serif font-light mb-6 text-accent tracking-wide">INTELLECTUAL PROPERTY</h2>
              
              <h3 className="text-xl font-serif font-light mb-4 text-foreground tracking-wide">Photography Rights</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 font-sans ml-4 mb-6">
                <li>VIP Photoshoots retains copyright to all photographs</li>
                <li>Clients receive a license to use photographs for personal use</li>
                <li>Commercial use requires additional licensing agreement</li>
                <li>Photographs may be used in our portfolio and marketing materials</li>
              </ul>

              <h3 className="text-xl font-serif font-light mb-4 text-foreground tracking-wide">Client Responsibilities</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 font-sans ml-4">
                <li>Clients must not edit or alter photographs without permission</li>
                <li>Proper attribution must be given when sharing photographs</li>
                <li>Unauthorized commercial use is prohibited</li>
              </ul>
            </div>

            {/* Privacy and Confidentiality */}
            <div>
              <h2 className="text-2xl font-serif font-light mb-6 text-accent tracking-wide">PRIVACY AND CONFIDENTIALITY</h2>
              <p className="text-foreground/70 font-sans leading-relaxed mb-4">
                We are committed to maintaining the privacy and confidentiality of our clients:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 font-sans ml-4">
                <li>All personal information is handled in accordance with our Privacy Policy</li>
                <li>Photographs are stored securely and never shared without consent</li>
                <li>Client information is never sold or shared with third parties</li>
                <li>We maintain strict confidentiality for all boudoir and intimate sessions</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-serif font-light mb-6 text-accent tracking-wide">LIMITATION OF LIABILITY</h2>
              <p className="text-foreground/70 font-sans leading-relaxed">
                VIP Photoshoots' liability is limited to the amount paid for the photography services. We are not 
                liable for any indirect, incidental, or consequential damages. In case of technical issues or 
                equipment failure, we will make reasonable efforts to reschedule or provide alternative solutions.
              </p>
            </div>

            {/* Force Majeure */}
            <div>
              <h2 className="text-2xl font-serif font-light mb-6 text-accent tracking-wide">FORCE MAJEURE</h2>
              <p className="text-foreground/70 font-sans leading-relaxed">
                We are not liable for delays or cancellations due to circumstances beyond our control, including 
                but not limited to natural disasters, government restrictions, or health emergencies. In such cases, 
                we will work with clients to reschedule sessions at no additional cost.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-serif font-light mb-6 text-accent tracking-wide">GOVERNING LAW</h2>
              <p className="text-foreground/70 font-sans leading-relaxed">
                These Terms are governed by English law and subject to the jurisdiction of the English courts. 
                Any disputes will be resolved through binding arbitration or in the courts of England and Wales.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-serif font-light mb-6 text-accent tracking-wide">CONTACT US</h2>
              <p className="text-foreground/70 font-sans leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-accent/5 p-6 rounded-lg">
                <p className="text-foreground/70 font-sans">
                  <strong>Email:</strong> legal@vipphotoshoots.com<br />
                  <strong>Phone:</strong> +44 20 7493 5555<br />
                  <strong>Address:</strong> 15 Berkeley Square, Mayfair, London W1J 6QQ
                </p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl font-serif font-light mb-6 text-accent tracking-wide">CHANGES TO TERMS</h2>
              <p className="text-foreground/70 font-sans leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be posted on our website 
                and will take effect immediately. Your continued use of our services after changes are posted 
                constitutes acceptance of the modified Terms.
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

      {/* Consultation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="premium-card max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-accent/10">
              <h3 className="text-2xl font-serif font-light luxury-gradient tracking-wide">
                BOOK CONSULTATION
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <p className="text-foreground/60 mb-6 font-sans text-sm tracking-wide">
                Book a complimentary 30-minute consultation to discuss your vision and connect you with the perfect studio
              </p>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-900/20 border border-green-500/30 text-green-400 text-sm text-center">
                  ✅ Thank you! We'll contact you within 24 hours to schedule your consultation.
                </div>
              )}
              
              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 text-red-400 text-sm text-center">
                  ❌ Something went wrong. Please try again or contact us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white border-2 border-accent/20 rounded cursor-text text-black focus:border-accent"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white border-2 border-accent/20 rounded cursor-text text-black focus:border-accent"
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-white border-2 border-accent/20 rounded cursor-text text-black focus:border-accent"
                />
                <Select value={formData.serviceType} onValueChange={handleSelectChange}>
                  <SelectTrigger className="w-full px-4 py-3 bg-white border-2 border-accent/20 rounded cursor-pointer text-black focus:border-accent">
                    <SelectValue placeholder="Select Service Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="boudoir" className="text-black">Boudoir</SelectItem>
                    <SelectItem value="maternity" className="text-black">Maternity</SelectItem>
                    <SelectItem value="family" className="text-black">Family</SelectItem>
                    <SelectItem value="bestie" className="text-black">Bestie</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 bg-accent text-accent-foreground rounded text-lg font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'SUBMITTING...' : 'BOOK FREE CONSULTATION'}
                </Button>
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
