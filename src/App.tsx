import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Story from './components/Story';
import Team from './components/Team';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
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
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;