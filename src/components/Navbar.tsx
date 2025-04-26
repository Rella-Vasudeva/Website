import React, { useState, useEffect } from 'react';
import { Menu, X, Sprout } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.replace('#', ''));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Order', href: '#order' },
    { name: 'Gallery', href: '#gallery' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-white shadow-md' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2">
            <Sprout className="h-8 w-8 text-primary-600" />
            <span className="text-xl md:text-2xl font-display font-semibold text-primary-800">
              Ganjam Biofertilizers
            </span>
          </a>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`
                    relative text-secondary-800 font-medium transition-colors
                    hover:text-primary-600
                    ${isActive ? 'text-primary-600' : ''}
                  `}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-600 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="hidden md:block">
            <a
              href="#order"
              className={`
                bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-md 
                font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5
                ${activeSection === 'order' ? 'ring-4 ring-primary-200' : ''}
              `}
            >
              Order Now
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-secondary-800 focus:outline-none p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="py-4 space-y-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`
                    block py-2 px-4 rounded-lg transition-all duration-300
                    ${isActive 
                      ? 'bg-primary-50 text-primary-600 font-medium' 
                      : 'text-secondary-800 hover:bg-gray-50 hover:text-primary-600'
                    }
                  `}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="#order"
              onClick={handleLinkClick}
              className={`
                block text-center bg-primary-600 hover:bg-primary-700 text-white 
                px-5 py-2 rounded-lg font-medium transition-all duration-300
                ${activeSection === 'order' ? 'ring-4 ring-primary-200' : ''}
              `}
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;