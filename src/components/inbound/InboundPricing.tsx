import React from 'react';
import { CheckCircle, Star, Users, TrendingUp, Shield, Clock } from 'lucide-react';

const InboundPricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$1,290",
      period: "/month",
      subtitle: "1 agent",
      description: "Ideal for small hotels, B&Bs, or single-operator dispatch businesses",
      features: [
        "1 dedicated inbound agent",
        "Business hours coverage",
        "Call handling & message taking",
        "Daily call logs & reports",
        "CRM updates",
        "Escalation protocols"
      ],
      popular: false,
      color: "from-[#1B8A8A] to-[#00D4AA]",
      icon: Users
    },
    {
      name: "Growth",
      price: "$1,180",
      period: "/agent/month",
      subtitle: "2-4 agents",
      description: "Best for boutique hotel chains or small fleets needing consistent coverage",
      features: [
        "2-4 dedicated inbound agents",
        "Extended hours coverage",
        "Call handling & message taking",
        "Daily call logs & reports",
        "CRM updates",
        "Escalation protocols",
        "Dedicated team leader (shared)",
        "Weekly performance reviews"
      ],
      popular: true,
      color: "from-[#FF8C42] to-[#1B8A8A]",
      icon: TrendingUp
    },
    {
      name: "Scale",
      price: "$985",
      period: "/agent/month",
      subtitle: "5-9 agents",
      description: "For larger operations requiring extended or 24/7 coverage",
      features: [
        "5-9 dedicated inbound agents",
        "Extended or 24/7 coverage",
        "Call handling & message taking",
        "Daily call logs & reports",
        "CRM updates & integration",
        "Escalation protocols",
        "Dedicated team leader (exclusive)",
        "Weekly strategy calls",
        "Custom reporting dashboard"
      ],
      popular: false,
      color: "from-[#00D4AA] to-[#FF8C42]",
      icon: Shield
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      subtitle: "10+ agents",
      description: "Full-time dedicated teams for large hospitality groups or logistics companies",
      features: [
        "10+ dedicated inbound agents",
        "24/7 full coverage",
        "Call handling & message taking",
        "Real-time dashboard & analytics",
        "CRM integration & management",
        "Escalation protocols",
        "Dedicated team leader & QA specialist",
        "Weekly strategy calls",
        "Custom reporting dashboard",
        "Priority recruiting for scaling"
      ],
      popular: false,
      color: "from-[#2C5F7C] to-[#1B8A8A]",
      icon: Clock
    }
  ];

  const includedFeatures = [
    "Trained inbound agents",
    "CRM management",
    "Daily reporting",
    "Quality assurance"
  ];

  return (
    <section id="pricing" className="relative w-full overflow-hidden flex items-center py-4 sm:py-6 lg:py-8 min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[380px]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-[#1B8A8A]/5"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #1B8A8A 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="absolute top-16 right-1/4 w-24 h-24 bg-[#00D4AA]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-[#FF8C42]/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 w-full">
        <div className="py-1 sm:py-2 lg:py-3">
          {/* Header */}
          <div className="text-center mb-2 sm:mb-3 lg:mb-4">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">
              Inbound Support
              <span className="block bg-gradient-to-r from-[#1B8A8A] to-[#00D4AA] bg-clip-text text-transparent">
                Plans
              </span>
            </h2>

            <p className="text-xs sm:text-sm lg:text-sm xl:text-base text-gray-700 max-w-4xl mx-auto leading-relaxed mb-2 font-medium">
              Flexible plans built around your call volume and coverage needs.
            </p>

            {/* Included Features */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-2 sm:p-3 lg:p-4 border border-gray-200 max-w-4xl mx-auto shadow-md mb-2 sm:mb-3 lg:mb-4">
              <h3 className="text-xs sm:text-sm lg:text-sm font-bold text-gray-900 mb-1">All plans include:</h3>
              <div className="flex flex-wrap justify-center gap-1 sm:gap-2 lg:gap-3">
                {includedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center bg-[#1B8A8A]/15 px-2 py-1 sm:px-2 sm:py-1 rounded-full border border-[#1B8A8A]/20 text-xs">
                    <CheckCircle className="h-3 w-3 text-[#1B8A8A] mr-1" />
                    <span className="text-gray-700 text-xs font-semibold">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-3">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <div key={index} className="relative group">
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-[#FF8C42] to-[#ff6b2b] text-white px-2 py-1 rounded-full text-xs font-bold flex items-center shadow-md border-2 border-white whitespace-nowrap">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Card */}
                  <div className={`relative bg-white rounded-2xl border transition-all duration-300 hover:scale-102 hover:shadow-lg h-full overflow-hidden mt-0 ${
                    plan.popular
                      ? 'border-[#FF8C42]/60 shadow-md ring-1 ring-[#FF8C42]/20'
                      : 'border-gray-200 hover:border-[#1B8A8A]/40 shadow-sm'
                  }`}>
                    {/* Popular card background accent */}
                    {plan.popular && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF8C42] to-[#ff6b2b]"></div>
                    )}

                    {/* Glow effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${plan.color} rounded-2xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                    <div className="relative p-3 sm:p-3 lg:p-4 h-full flex flex-col">
                      {/* Icon and Header */}
                      <div className="text-center mb-2 sm:mb-3 lg:mb-3">
                        <div className={`w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-2 group-hover:scale-105 transition-transform duration-200 shadow-sm`}>
                          <Icon className="h-4 w-4 text-white" />
                        </div>
                        <h3 className="text-sm sm:text-sm lg:text-base font-bold text-gray-900 mb-1">{plan.name}</h3>

                        {/* Price Display */}
                        <div className="mb-1 sm:mb-2">
                          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                            {plan.price}
                          </div>
                          <div className="text-xs sm:text-xs text-gray-600 font-medium">
                            {plan.period}
                          </div>
                        </div>

                        <p className="text-gray-500 text-xs sm:text-xs leading-relaxed font-medium mb-1">{plan.subtitle}</p>
                        <p className="text-gray-600 text-xs sm:text-xs leading-relaxed font-medium">{plan.description}</p>
                      </div>

                      {/* Features */}
                      <ul className="space-y-1 mb-2 sm:mb-3 flex-grow text-xs">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="h-3 w-3 text-[#00D4AA] mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-xs leading-relaxed font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <div className="mt-auto">
                        <a
                          href={`https://wa.me/14303074182?text=Hi! I'm interested in the ${plan.name} plan (${plan.price}${plan.period}) for inbound support. I'd like to learn more.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full py-2 px-2 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105 shadow-sm block text-center ${
                            plan.popular
                              ? 'bg-gradient-to-r from-[#FF8C42] to-[#ff6b2b] text-white'
                              : 'bg-gradient-to-r from-[#1B8A8A] to-[#00D4AA] text-white'
                          }`}
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InboundPricing;