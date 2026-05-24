import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InboundHero from '../components/inbound/InboundHero';
import InboundServices from '../components/inbound/InboundServices';
import InboundPricing from '../components/inbound/InboundPricing';
import InboundContact from '../components/inbound/InboundContact';

const Inbound = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <InboundHero />
      <InboundServices />
      <InboundPricing />
      <InboundContact />
      <Footer />
    </div>
  );
};

export default Inbound;