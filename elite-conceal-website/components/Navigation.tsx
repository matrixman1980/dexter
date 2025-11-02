'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-neutral-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-playfair font-bold text-amber-400">
              Elite Conceal™
            </h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('product')} className="text-neutral-200 hover:text-amber-400 transition-colors">
              Product
            </button>
            <button onClick={() => scrollToSection('technology')} className="text-neutral-200 hover:text-amber-400 transition-colors">
              Technology
            </button>
            <button onClick={() => scrollToSection('design')} className="text-neutral-200 hover:text-amber-400 transition-colors">
              Design
            </button>
            <button onClick={() => scrollToSection('use-cases')} className="text-neutral-200 hover:text-amber-400 transition-colors">
              Use Cases
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-neutral-200 hover:text-amber-400 transition-colors">
              Contact
            </button>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-amber-500 text-neutral-900 font-semibold rounded hover:bg-amber-400 transition-colors"
            >
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
