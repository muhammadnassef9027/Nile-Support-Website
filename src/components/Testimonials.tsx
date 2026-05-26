import React from 'react';
import { Star, BadgeCheck, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      stars: 5,
      quote: "Muhammed and his team are very professional and result oriented — they were able to achieve exactly what me, my team and I asked of them and within the deadline we set for them. I recommend them to anyone who's looking for calling services.",
      author: "Rob",
      verified: true,
      rating: "5.0",
      badge: "Short-Term Trial · Cold Calling Campaign"
    },
    {
      stars: 5,
      quote: "Genuinely the smoothest, most efficient, responsive, and overall best freelancer I could've hired. Muhammad helped me with a variety of tasks and all were completed to a level above perfection.",
      author: "Zac",
      verified: true,
      rating: "5.0",
      badge: "Cold Caller · Telesales Campaign"
    },
    {
      stars: 5,
      quote: "Muhammad was professional, reliable, and easy to work with. He helped with lead generation and communicated clearly throughout the project. I'd recommend him.",
      author: "Hesham E., CEO & Founder",
      verified: true,
      rating: "5.0",
      badge: "Lead Generation · Oct 2025"
    },
    {
      stars: 5,
      quote: "I engaged Muhammad and his team at Nile Support to run cold calling campaigns, and I was thoroughly impressed by the results they delivered. Their communication was clear, efficient, and easy to manage throughout the process. I highly recommend their services.",
      author: "Mohamed A., Head of Business Development",
      verified: true,
      rating: "5.0",
      badge: "Cold Calling & Lead Generation · Oct 2025"
    }
  ];

  return (
    <section id="testimonials" className="relative overflow-hidden py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1B8A8A] via-[#00D4AA] to-[#FF8C42]"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-[#00D4AA]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#FF8C42]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Real reviews from verified Upwork clients
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-8 relative overflow-hidden hover:-translate-y-1"
            >
              {/* Subtle gradient accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1B8A8A] via-[#00D4AA] to-[#FF8C42] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Verified Badge */}
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <div className="flex items-center bg-[#14a800]/10 px-3 py-1.5 rounded-full">
                  <BadgeCheck className="w-4 h-4 text-[#14a800] mr-1.5" />
                  <span className="text-[#14a800] text-xs sm:text-sm font-bold">Verified Upwork Client</span>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4 sm:mb-5">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-[#14a800] fill-[#14a800]" />
                ))}
                <span className="ml-2 text-sm sm:text-base font-bold text-gray-700">{testimonial.rating} ★</span>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-6 font-medium">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <p className="text-gray-900 font-bold text-sm sm:text-base">
                  — {testimonial.author}
                </p>
              </div>

              {/* Badge */}
              <div className="mt-4 sm:mt-5">
                <span className="inline-block bg-gradient-to-r from-[#1B8A8A]/10 to-[#00D4AA]/10 text-[#1B8A8A] text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full border border-[#1B8A8A]/20">
                  {testimonial.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#1B8A8A] via-[#2C5F7C] to-[#1B8A8A] shadow-xl">
          {/* Decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D4AA]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FF8C42]/8 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 lg:p-10 gap-6 sm:gap-8">
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                Join 100+ businesses growing with Nile Support
              </h3>
              <p className="text-white/80 text-sm sm:text-base font-medium">
                See how our outbound sales team can help you close more deals
              </p>
            </div>
            <a
              href="https://calendly.com/muhammad-nassef-nilesupport/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-shrink-0 bg-white text-[#1B8A8A] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/30 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Book Free Strategy Call
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;