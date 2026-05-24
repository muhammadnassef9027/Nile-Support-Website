import React from 'react';
import { Hotel, Truck, Headphones, CalendarCheck, MessageSquareWarning, Moon, Radio, ClipboardList, Bell, AlertTriangle } from 'lucide-react';

const InboundServices = () => {
  const serviceColumns = [
    {
      title: "Hospitality (Hotels & B&Bs)",
      icon: Hotel,
      color: "from-[#1B8A8A] to-[#00D4AA]",
      services: [
        { icon: Headphones, name: "24/7 Guest Support", desc: "Professional guest assistance around the clock for reservations, inquiries, and concierge requests" },
        { icon: CalendarCheck, name: "Reservation Handling", desc: "Seamless booking management, modifications, and confirmations across all channels" },
        { icon: MessageSquareWarning, name: "Complaints & Escalations", desc: "Swift resolution of guest issues with proper escalation protocols and follow-up" },
        { icon: Moon, name: "After-Hours Coverage", desc: "Complete nighttime and weekend coverage so your front desk never goes unmanned" }
      ]
    },
    {
      title: "Dispatch & Logistics",
      icon: Truck,
      color: "from-[#FF8C42] to-[#1B8A8A]",
      services: [
        { icon: Radio, name: "24/7 Dispatch Support", desc: "Round-the-clock dispatch coordination for NEMT, black car, and freight operations" },
        { icon: ClipboardList, name: "Booking & Scheduling", desc: "Efficient trip booking, driver assignment, and schedule optimization" },
        { icon: Bell, name: "Customer Updates", desc: "Real-time status updates to customers on ETAs, delays, and trip changes" },
        { icon: AlertTriangle, name: "Emergency Handling", desc: "Priority handling of urgent situations with established emergency protocols" }
      ]
    }
  ];

  return (
    <section id="services" className="relative overflow-hidden py-8 sm:py-12 lg:py-16">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"></div>
        <div className="absolute top-20 right-16 w-56 h-56 bg-gradient-to-br from-[#1B8A8A]/20 to-[#00D4AA]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-12 w-44 h-44 bg-gradient-to-br from-[#FF8C42]/15 to-[#A4D65E]/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-8">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.18) 1px, transparent 0)`,
            backgroundSize: '46px 46px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 sm:mb-3 leading-tight">
            Inbound Support
            <span className="block bg-gradient-to-r from-[#00D4AA] to-[#A4D65E] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-sm sm:text-sm lg:text-base xl:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium">
            Dedicated inbound support tailored to your industry — from guest services to dispatch operations
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {serviceColumns.map((column, colIndex) => {
            const ColIcon = column.icon;
            return (
              <div key={colIndex} className="group">
                {/* Column Header */}
                <div className="flex items-center mb-5 sm:mb-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${column.color} rounded-2xl flex items-center justify-center mr-3 shadow-lg`}>
                    <ColIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{column.title}</h3>
                </div>

                {/* Service Items */}
                <div className="space-y-3 sm:space-y-4">
                  {column.services.map((service, index) => {
                    const SvcIcon = service.icon;
                    return (
                      <div
                        key={index}
                        className="group/item bg-gray-800/60 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-gray-600/30 hover:border-[#00D4AA]/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                      >
                        <div className="flex items-start">
                          <div className={`flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-r ${column.color} rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover/item:scale-110 transition-transform duration-200 shadow-md`}>
                            <SvcIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base font-bold text-white mb-1 group-hover/item:text-[#00D4AA] transition-colors duration-200">
                              {service.name}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-medium">
                              {service.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InboundServices;