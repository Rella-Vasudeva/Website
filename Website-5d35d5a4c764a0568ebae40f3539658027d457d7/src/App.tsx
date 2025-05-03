import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import OrderSection from './components/OrderSection';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-primary-50/50 to-white scroll-smooth">
      <div className="relative z-10">
        <Navbar />
        <main className="relative">
          <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-fixed opacity-5 pointer-events-none" />
          <Hero />
          <Products />
          <Benefits />
          <Process />
          <Testimonials />
          <OrderSection />
          <Gallery />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
}

export default App;