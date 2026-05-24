import React, { useState } from 'react';
import { Clock, ChevronRight, Send } from 'lucide-react';

const InboundContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hi! I'm interested in your inbound support services.

📋 Contact Details:
• Name: ${formData.name || 'Not provided'}
• Email: ${formData.email || 'Not provided'}
• Phone: ${formData.phone || 'Not provided'}
• Company: ${formData.company || 'Not provided'}
• Industry: ${formData.industry || 'Not specified'}

💬 Message:
${formData.message || 'No additional message'}

I'd like to discuss how your inbound support can help my business!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/14303074182?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="relative overflow-hidden py-6 sm:py-8 lg:py-10">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C5F7C] via-[#1B8A8A] to-[#A4D65E]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C5F7C]/90 via-transparent to-[#A4D65E]/90 animate-pulse"></div>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="inbound-contact-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1"/>
                <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="1" opacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#inbound-contact-grid)"/>
          </svg>
        </div>
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-32 right-1/4 w-40 h-40 bg-[#FF8C42]/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-[#00D4AA]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00D4AA]/30 to-transparent animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* Contact Form */}
          <div className="w-full">
            <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/30 shadow-2xl">
              <div className="mb-5">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                  Get Started Today
                </h2>
                <p className="text-white/90 text-base sm:text-lg font-medium">
                  Ready to never miss another call? Let's discuss your inbound support needs.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/15 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#00D4AA] focus:bg-white/20 transition-all duration-300 group-hover:border-white/50 text-sm sm:text-base font-medium"
                  />
                </div>

                <div className="group">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/15 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#00D4AA] focus:bg-white/20 transition-all duration-300 group-hover:border-white/50 text-sm sm:text-base font-medium"
                  />
                </div>

                <div className="group">
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/15 border border-white/30 text-white focus:outline-none focus:border-[#00D4AA] focus:bg-white/20 transition-all duration-300 group-hover:border-white/50 text-sm sm:text-base font-medium"
                  >
                    <option value="" className="bg-[#2C5F7C] text-white">Select Industry</option>
                    <option value="hotel-bnb" className="bg-[#2C5F7C] text-white">Hotel/B&B</option>
                    <option value="short-term-rental" className="bg-[#2C5F7C] text-white">Short-Term Rental</option>
                    <option value="nemt" className="bg-[#2C5F7C] text-white">NEMT</option>
                    <option value="black-car-taxi" className="bg-[#2C5F7C] text-white">Black Car/Taxi</option>
                    <option value="freight-dispatch" className="bg-[#2C5F7C] text-white">Freight Dispatch</option>
                    <option value="other" className="bg-[#2C5F7C] text-white">Other</option>
                  </select>
                </div>

                <div className="group">
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your needs..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/15 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#00D4AA] focus:bg-white/20 transition-all duration-300 resize-none group-hover:border-white/50 text-sm sm:text-base font-medium"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-[#FF8C42] to-[#ff6b2b] text-white px-6 py-3 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF8C42]/40 hover:scale-105 relative overflow-hidden shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b2b] to-[#FF8C42] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full space-y-4">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">Let's Connect</h3>

              <div className="space-y-3">
                <div className="group flex items-center p-3 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 hover:bg-white/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#1B8A8A] to-[#2C5F7C] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm font-semibold mb-1">Coverage</p>
                    <p className="text-white text-base sm:text-lg font-bold">24/7, 365 Days a Year</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/30 shadow-xl">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 text-center">
                Never Miss a Call Again
              </h4>
              <p className="text-sm sm:text-base text-white/90 mb-4 leading-relaxed text-center font-medium">
                Let's discuss how our inbound support team can answer every call, handle every booking,
                and keep your customers happy around the clock.
              </p>

              <div className="space-y-3">
                <a
                  href="https://calendly.com/muhammad-nassef-nilesupport/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full bg-gradient-to-r from-[#1B8A8A] to-[#00D4AA] text-white px-5 py-2.5 rounded-xl font-bold text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#1B8A8A]/40 hover:scale-105 flex items-center justify-center shadow-lg"
                >
                  <span className="flex items-center">
                    Schedule a Call
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default InboundContact;