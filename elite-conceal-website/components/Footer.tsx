'use client';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-playfair font-bold text-amber-400 mb-4">Elite Conceal™</h3>
            <p className="text-neutral-400 leading-relaxed">
              Where Security Meets Design Excellence. Invisible protection for discerning guests.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('product')} className="hover:text-amber-400 transition-colors">
                  Product Overview
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('technology')} className="hover:text-amber-400 transition-colors">
                  Technology & Security
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('design')} className="hover:text-amber-400 transition-colors">
                  Design & Craftsmanship
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('use-cases')} className="hover:text-amber-400 transition-colors">
                  Use Cases
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-amber-400 transition-colors">
                  Installation Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-amber-400 transition-colors">
                  Design Consultation
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-amber-400 transition-colors">
                  Support & Maintenance
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-amber-400 transition-colors">
                  Partnership Opportunities
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hospitality@eliteconceal.com" className="hover:text-amber-400 transition-colors">
                  hospitality@eliteconceal.com
                </a>
              </li>
              <li className="text-neutral-400">
                www.eliteconceal.com/hotels
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm mb-4 md:mb-0">
              © 2025 Elite Conceal™. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button onClick={() => scrollToSection('contact')} className="text-neutral-500 hover:text-amber-400 transition-colors">
                Privacy Policy
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-neutral-500 hover:text-amber-400 transition-colors">
                Terms & Conditions
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-neutral-500 hover:text-amber-400 transition-colors">
                Press & Media
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
