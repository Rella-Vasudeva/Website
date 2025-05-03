import React from 'react';
import { Sprout, Leaf, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30 bg-fixed" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/90 via-transparent to-primary-50/80" />
      
      {/* Animated circles */}
      <div className="absolute left-1/4 top-1/4 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo and Title */}
          <div className="flex items-center gap-4 mb-8 animate-fade-in">
            <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg">
              <Sprout className="h-12 w-12 text-primary-600" />
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-800 tracking-tight">
              Ganjam Biofertilizers
            </h1>
          </div>
          
          {/* Subtitle */}
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-secondary-800 mb-8 leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Premium Organic Fertilizers for Better Yield
          </h2>
          
          {/* Description with certification badge */}
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <p className="text-xl md:text-2xl text-secondary-700 leading-relaxed">
                    Transform your farm with our high-quality organic fertilizers. 
                    State certified, sustainably produced, and packed with nutrients 
                    for optimal crop growth.
                  </p>
                </div>
                <div className="hidden md:flex flex-col items-center bg-primary-50 p-4 rounded-xl">
                  <Shield className="h-12 w-12 text-primary-600 mb-2" />
                  <span className="text-primary-800 font-semibold text-center">State Certified Quality</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Leaf className="h-5 w-5" />
              View Products
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm text-primary-800 font-medium rounded-xl hover:bg-white/90 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;