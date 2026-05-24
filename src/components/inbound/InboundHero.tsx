import React from 'react';
import { ArrowRight, Headphones, Clock, PhoneIncoming, Users } from 'lucide-react';

const InboundHero = () => {
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[800px] max-h-[900px] sm:min-h-[850px] sm:max-h-[950px] lg:min-h-[900px] lg:max-h-[1000px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B8A8A] via-[#2C5F7C] to-[#0a3d3d]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-[#00D4AA]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-[#A4D65E]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-[#FF8C42]/8 rounded-full blur-2xl animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 sm:pt-44 lg:pt-48">
        <div className="text-center max-w-5xl w-full mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center bg-white/15 backdrop-blur-md rounded-full px-4 py-2 mb-6 sm:mb-8 border border-white/25">
            <Headphones className="w-4 h-4 text-[#00D4AA] mr-2" />
            <span className="text-white/90 text-xs sm:text-sm font-semibold">24/7 Inbound Support Solutions</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Never Miss a Call.<br />
            <span className="bg-gradient-to-r from-[#00D4AA] to-[#A4D65E] bg-clip-text text-transparent">
              Never Lose a Customer.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto font-medium">
            24/7 inbound support for hotels, B&Bs, and dispatch operations — we answer as your business.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 sm:mb-12">
            <a
              href="https://calendly.com/muhammad-nassef-nilesupport/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-[#FF8C42] to-[#ff6b2b] text-white px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-full font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF8C42]/40 hover:scale-105 relative overflow-hidden shadow-xl inline-block"
            >
              <span className="relative z-10 flex items-center justify-center">
                Book Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b2b] to-[#FF8C42] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#services"
              onClick={scrollToServices}
              className="group border-2 border-white/40 text-white px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-full font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:bg-white/15 hover:border-white/60 hover:scale-105 inline-block"
            >
              <span className="flex items-center justify-center">
                See How It Works
              </span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto">
            {[
              { icon: PhoneIncoming, number: "24/7", label: "Coverage" },
              { icon: Clock, number: "<30s", label: "Avg Response" },
              { icon: Users, number: "98%", label: "Call Answer Rate" },
              { icon: Headphones, number: "50+", label: "Support Agents" }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-md rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/40 shadow-2xl">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-white drop-shadow-lg" />
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-1 drop-shadow-lg">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-white/90 font-semibold drop-shadow-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InboundHero;