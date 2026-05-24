import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Story from './components/Story';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Outbound = () => {
  return (
    <>
      <Hero />
      <About />
      <Story />
      <WhyChooseUs />
      <Services />
      <Pricing />
      <Contact />
    </>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Outbound />
      <Footer />
    </div>
  );
}

export default App;