'use client';

export default function Design() {
  return (
    <section id="design" className="py-24 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-neutral-900 mb-6">
            Luxury That Hides in Plain Sight
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-neutral-700 max-w-4xl mx-auto">
            Elite Conceal™ is where master craftsmanship meets invisible innovation. Every detail has been refined 
            to ensure that security never compromises style.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-neutral-900 mb-8">Aesthetic Excellence</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-bold text-neutral-900 mb-3">Invisible Integration</h4>
                <p className="text-neutral-700">
                  The ultimate design achievement: a safe that completely disappears. No external hardware, no 
                  visible locks, no aesthetic compromise. Elite Conceal™ transforms existing furniture into secure 
                  storage without any visual indication of its presence.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-bold text-neutral-900 mb-3">Premium Materials</h4>
                <p className="text-neutral-700">
                  Constructed from high-grade materials with luxury finishes that complement the finest hotel 
                  interiors. Each unit reflects the same attention to detail you demand in every aspect of your property.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-bold text-neutral-900 mb-3">Customizable to Your Vision</h4>
                <p className="text-neutral-700 mb-3">Available in multiple finishes, sizes, and configurations:</p>
                <ul className="text-neutral-700 space-y-1 list-disc list-inside">
                  <li>Dark walnut and ebony finishes</li>
                  <li>Brushed metal and contemporary lacquers</li>
                  <li>Custom color matching available</li>
                  <li>Drawer dimensions tailored to furniture specifications</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-neutral-900 mb-8">Crafted for Elegance</h3>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border-2 border-amber-200">
                <h4 className="text-xl font-bold text-neutral-900 mb-3">Seamless Furniture Pairing</h4>
                <p className="text-neutral-800 mb-3">Elite Conceal™ is designed to integrate with:</p>
                <ul className="text-neutral-800 space-y-1 list-disc list-inside">
                  <li>Designer bedside tables</li>
                  <li>Executive desk units</li>
                  <li>Dresser and console furniture</li>
                  <li>Custom millwork and built-ins</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border-2 border-amber-200">
                <h4 className="text-xl font-bold text-neutral-900 mb-3">Interior Design Partnership</h4>
                <p className="text-neutral-800">
                  Work with our design team to ensure perfect aesthetic harmony. We collaborate with hotel 
                  architects and interior designers to create solutions that enhance—never interrupt—your vision.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border-2 border-amber-200">
                <h4 className="text-xl font-bold text-neutral-900 mb-3">Spacious & Functional</h4>
                <p className="text-neutral-800 mb-3">The double chest design provides generous storage capacity:</p>
                <ul className="text-neutral-800 space-y-1 list-disc list-inside">
                  <li>Accommodates jewelry cases, watches, and accessories</li>
                  <li>Secures passports, documents, and cash</li>
                  <li>Protects tablets, laptops, and devices</li>
                  <li>Stores personal items discreetly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-neutral-900 text-white p-8 rounded-xl text-center">
            <div className="text-4xl mb-4">✨</div>
            <h4 className="text-xl font-bold mb-3 text-amber-400">Handcrafted Precision</h4>
            <p className="text-neutral-300">
              Every Elite Conceal™ unit undergoes rigorous quality control to meet luxury hospitality standards.
            </p>
          </div>

          <div className="bg-neutral-900 text-white p-8 rounded-xl text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h4 className="text-xl font-bold mb-3 text-amber-400">Long-Term Durability</h4>
            <p className="text-neutral-300">
              Built to withstand thousands of access cycles while maintaining silent, smooth operation.
            </p>
          </div>

          <div className="bg-neutral-900 text-white p-8 rounded-xl text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h4 className="text-xl font-bold mb-3 text-amber-400">Sustainable Sourcing</h4>
            <p className="text-neutral-300">
              Responsibly sourced materials and manufacturing processes aligned with modern hospitality values.
            </p>
          </div>
        </div>

        <div className="text-center bg-neutral-900 text-white p-12 rounded-2xl">
          <p className="text-2xl font-playfair font-bold">
            When security becomes art, your guests experience something extraordinary.
          </p>
          <p className="text-xl text-amber-400 mt-4">
            Elite Conceal™—crafted for elegance and invisibility.
          </p>
        </div>
      </div>
    </section>
  );
}
