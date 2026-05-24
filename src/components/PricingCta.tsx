import React from 'react';
import { ArrowRight, Calculator } from 'lucide-react';

const PricingCta = () => {
  return (
    <section id="pricing" className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Teal gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B8A8A] via-[#2C5F7C] to-[#0a4f4f]"></div>

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-16 right-1/4 w-40 h-40 bg-[#00D4AA]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 left-1/4 w-32 h-32 bg-[#A4D65E]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-[#FF8C42]/8 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/15 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 border border-white/25 shadow-xl">
          <Calculator className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Pricing That Fits
          <span className="block bg-gradient-to-r from-[#00D4AA] to-[#A4D65E] bg-clip-text text-transparent">
            Your Business
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto font-medium">
          Every campaign is different. Pricing depends on your industry, team size, and goals — so we build a custom plan around you, not the other way around.
        </p>

        {/* CTA Button */}
        <a
          href="https://calendly.com/muhammad-nassef-nilesupport/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-gradient-to-r from-[#FF8C42] to-[#ff6b2b] text-white px-8 py-4 sm:px-10 sm:py-5 lg:px-12 lg:py-5 rounded-full font-bold text-base sm:text-lg lg:text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF8C42]/40 hover:scale-105 relative overflow-hidden shadow-xl inline-block"
        >
          <span className="relative z-10 flex items-center justify-center">
            Get a Custom Quote
            <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b2b] to-[#FF8C42] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
      </div>
    </section>
  );
};

export default PricingCta;