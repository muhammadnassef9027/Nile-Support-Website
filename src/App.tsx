import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Story from './components/Story';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import PricingCta from './components/PricingCta';
import TrustCompliance from './components/TrustCompliance';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Story />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <PricingCta />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;