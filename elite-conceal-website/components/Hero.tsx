'use client';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(255 255 255 / 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-sm font-semibold tracking-wide">
            WHERE SECURITY MEETS DESIGN EXCELLENCE
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
          Redefining Hotel Security<br />
          Through <span className="text-amber-400">Invisible Luxury</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Introducing Elite Conceal™ – the world's first completely undetectable luxury safe chest, 
          designed exclusively for premium hotels and boutique hospitality spaces.
        </p>
        
        <p className="text-lg text-neutral-400 mb-12 max-w-3xl mx-auto">
          Elevate your guest experience with security that disappears into elegance. No visible locks. 
          No bulky metal boxes. Just seamless protection crafted for the modern luxury hotel.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-amber-500 text-neutral-900 font-bold text-lg rounded-lg hover:bg-amber-400 transition-all transform hover:scale-105 shadow-lg"
          >
            Request a Demo
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-transparent border-2 border-amber-500 text-amber-400 font-bold text-lg rounded-lg hover:bg-amber-500/10 transition-all"
          >
            Contact Sales Team
          </button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-neutral-800/50 backdrop-blur-sm p-6 rounded-lg border border-neutral-700">
            <div className="text-3xl mb-2">🔒</div>
            <h3 className="text-xl font-bold mb-2 text-amber-400">100% Invisible</h3>
            <p className="text-neutral-300">No visible locks, keypads, or hardware. Perfect integration with luxury furniture.</p>
          </div>
          <div className="bg-neutral-800/50 backdrop-blur-sm p-6 rounded-lg border border-neutral-700">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="text-xl font-bold mb-2 text-amber-400">NFC Access</h3>
            <p className="text-neutral-300">Advanced contactless technology. No keys to lose, no codes to forget.</p>
          </div>
          <div className="bg-neutral-800/50 backdrop-blur-sm p-6 rounded-lg border border-neutral-700">
            <div className="text-3xl mb-2">✨</div>
            <h3 className="text-xl font-bold mb-2 text-amber-400">Seamless Design</h3>
            <p className="text-neutral-300">Custom finishes to match any furniture style. Blends perfectly with your suite.</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
