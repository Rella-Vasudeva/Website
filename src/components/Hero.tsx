import React from 'react';
import { Sprout, Leaf, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image and overlay remain unchanged */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20 bg-fixed" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-green-100/80" />
      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
        {/* Logo and Title */}
        <div className="flex flex-col items-center gap-2 mb-8 animate-fade-in">
          <div className="bg-white/90 backdrop-blur-lg p-4 rounded-2xl shadow-xl mb-2">
            <Sprout className="h-14 w-14 text-primary-600" aria-label="Ganjam Biofertilizers Logo" />
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-primary-800 tracking-tight text-center drop-shadow-lg">
            Ganjam Biofertilizers
          </h1>
        </div>
        {/* Enhanced Unified Card Container with matching border-radius */}
        <div className="w-full max-w-5xl bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-green-200 flex flex-col md:flex-row p-0 md:p-0 animate-fade-in transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl">
          {/* Left: Description and Buttons */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start p-8 md:p-14">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-800 mb-6 leading-tight text-center md:text-left">
              Premium Organic Fertilizers for Better Yield
            </h2>
            <p className="text-xl md:text-2xl text-secondary-700 leading-relaxed mb-8 text-center md:text-left">
              Transform your farm with our high-quality organic fertilizers. State certified, sustainably produced, and packed with nutrients for optimal crop growth.
            </p>
            <div className="flex flex-row gap-4 w-full md:w-auto justify-center md:justify-start">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-green-600 via-green-500 to-lime-500 text-white font-bold rounded-3xl shadow-xl hover:from-green-700 hover:to-lime-600 hover:scale-105 active:scale-95 transition-all duration-200 text-lg border-2 border-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                <Leaf className="h-5 w-5" aria-label="View Products" />
                View Products
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center px-10 py-4 bg-white/60 backdrop-blur-md text-green-900 font-semibold rounded-3xl border-2 border-green-200 shadow-md hover:bg-white/80 hover:border-green-400 hover:scale-105 active:scale-95 transition-all duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-green-100"
              >
                Learn More
              </a>
            </div>
          </div>
          {/* Vertical Divider */}
          <div className="hidden md:block w-px bg-gradient-to-b from-green-200 via-green-300 to-green-100 my-10 rounded-full" />
          {/* Right: Certification */}
          <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-green-50/80 via-green-100/80 to-white/60 rounded-b-3xl md:rounded-b-none md:rounded-r-3xl p-8 md:p-14 border-t md:border-t-0 md:border-l border-green-100">
            <Shield className="h-20 w-20 text-primary-600 mb-4" aria-label="State Certified Quality" />
            <h3 className="text-2xl font-bold text-primary-800 mb-2 text-center">State Certified Quality</h3>
            <p className="text-secondary-600 text-center text-lg">
              Our products meet the highest standards of organic certification
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// Tailwind CSS Animations (add to your global CSS if not present):
// .animate-gradient-move { background-size: 200% 200%; animation: gradientMove 8s ease-in-out infinite; }
// @keyframes gradientMove { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
// .animate-float { animation: float 6s ease-in-out infinite; }
// .animate-float-slow { animation: float 12s ease-in-out infinite; }
// @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }