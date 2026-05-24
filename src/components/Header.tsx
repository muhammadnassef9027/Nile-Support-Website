import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const isInbound = location.pathname === '/inbound';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = isInbound
        ? ['home', 'services', 'pricing', 'contact']
        : ['home', 'about', 'story', 'why-choose-us', 'services', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInbound]);

  const outboundNavItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Story', id: 'story' },
    { name: 'Why Choose Us', id: 'why-choose-us' },
    { name: 'Services', id: 'services' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Contact', id: 'contact' }
  ];

  const inboundNavItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Contact', id: 'contact' }
  ];

  const navItems = isInbound ? inboundNavItems : outboundNavItems;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white shadow-lg border-b border-gray-100'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 sm:h-28">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href={isInbound ? '/inbound' : '/'} onClick={(e) => { e.preventDefault(); navigate(isInbound ? '/inbound' : '/'); }}>
              <img
                src="/Logo-navbar.png"
                alt="Nile Support LLC"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 transform group-hover:scale-110 transition-all duration-300 bg-transparent"
              />
            </a>
          </div>

          {/* Service Toggle */}
          <div className={`flex items-center rounded-full p-1 transition-all duration-300 ${
            isScrolled ? 'bg-gray-100' : 'bg-white/15 backdrop-blur-md'
          }`}>
            <button
              onClick={() => navigate('/')}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                !isInbound
                  ? 'bg-gradient-to-r from-[#1B8A8A] to-[#00D4AA] text-white shadow-md'
                  : isScrolled
                    ? 'text-gray-600 hover:text-gray-900'
                    : 'text-white/80 hover:text-white'
              }`}
            >
              Outbound Sales
            </button>
            <button
              onClick={() => navigate('/inbound')}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                isInbound
                  ? 'bg-gradient-to-r from-[#1B8A8A] to-[#00D4AA] text-white shadow-md'
                  : isScrolled
                    ? 'text-gray-600 hover:text-gray-900'
                    : 'text-white/80 hover:text-white'
              }`}
            >
              Inbound Support
            </button>
          </div>

          {/* Main Navigation Container */}
          <div className="hidden lg:flex flex-1 items-center justify-center space-x-24 px-8">
            {/* Navigation Links */}
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative font-medium transition-all duration-300 hover:scale-105 group ${
                    activeSection === item.id
                      ? 'text-[#1B8A8A]'
                      : isScrolled
                        ? 'text-gray-700 hover:text-[#1B8A8A]'
                        : 'text-white hover:text-gray-200'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#00D4AA] to-[#1B8A8A] transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              ))}
            </nav>

            {/* Consultation Button */}
            <a
              href="https://calendly.com/muhammad-nassef-nilesupport/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#FF8C42] to-[#ff6b2b] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-[#FF8C42]/30 hover:scale-105 group inline-block"
            >
              <span className="flex items-center">
                Get Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden ml-auto p-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white shadow-xl border-t border-gray-100`}>
        <div className="px-6 py-6 space-y-4">
          {/* Mobile Toggle */}
          <div className="flex items-center rounded-full p-1 bg-gray-100 mb-4">
            <button
              onClick={() => { navigate('/'); setIsMenuOpen(false); }}
              className={`flex-1 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                !isInbound
                  ? 'bg-gradient-to-r from-[#1B8A8A] to-[#00D4AA] text-white shadow-md'
                  : 'text-gray-600'
              }`}
            >
              Outbound Sales
            </button>
            <button
              onClick={() => { navigate('/inbound'); setIsMenuOpen(false); }}
              className={`flex-1 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                isInbound
                  ? 'bg-gradient-to-r from-[#1B8A8A] to-[#00D4AA] text-white shadow-md'
                  : 'text-gray-600'
              }`}
            >
              Inbound Support
            </button>
          </div>

          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block text-base font-medium ${
                activeSection === item.id
                  ? 'text-[#1B8A8A]'
                  : 'text-gray-700 hover:text-[#1B8A8A]'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;