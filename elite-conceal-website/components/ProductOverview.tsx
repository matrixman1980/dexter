'use client';

export default function ProductOverview() {
  return (
    <section id="product" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-neutral-900 mb-6">
            Elite Conceal™: The Next Generation of Hotel Security
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-neutral-700 max-w-4xl mx-auto leading-relaxed">
            Elite Conceal™ represents a paradigm shift in hospitality security. This is not a traditional safe—it's 
            an invisible double chest drawer that transforms ordinary furniture into a fortress of discretion.
          </p>
        </div>

        <div className="mb-16 bg-neutral-50 p-8 rounded-2xl">
          <p className="text-lg text-neutral-800 leading-relaxed max-w-4xl mx-auto">
            Engineered for the world's finest hotels, Elite Conceal™ seamlessly integrates into premium furniture, 
            offering 100% invisible, NFC-secured storage. Even the lock mechanism remains completely undetectable 
            from the outside, ensuring valuables stay concealed, silent, and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 rounded-xl text-white shadow-xl">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold mb-4 text-amber-400">Absolute Invisibility</h3>
            <p className="text-neutral-300 leading-relaxed">
              No visible locks, keypads, or hardware. Perfect integration with luxury furniture design.
            </p>
          </div>

          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 rounded-xl text-white shadow-xl">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4 text-amber-400">NFC Card Access Only</h3>
            <p className="text-neutral-300 leading-relaxed">
              Advanced contactless technology. No keys to lose, no codes to forget. Simply tap and access.
            </p>
          </div>

          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 rounded-xl text-white shadow-xl">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-2xl font-bold mb-4 text-amber-400">Seamless Design Integration</h3>
            <p className="text-neutral-300 leading-relaxed">
              Custom finishes and sizes to match any furniture style. Blends perfectly with your suite aesthetic.
            </p>
          </div>

          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 rounded-xl text-white shadow-xl">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold mb-4 text-amber-400">Next-Level Security</h3>
            <p className="text-neutral-300 leading-relaxed">
              Undetectable by design means uncompromised protection. What they can't see, they can't target.
            </p>
          </div>

          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 rounded-xl text-white shadow-xl">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold mb-4 text-amber-400">Luxury Craftsmanship</h3>
            <p className="text-neutral-300 leading-relaxed">
              Premium materials and meticulous construction. Built to reflect the standards of five-star hospitality.
            </p>
          </div>

          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 rounded-xl text-white shadow-xl">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-amber-400">Effortless Management</h3>
            <p className="text-neutral-300 leading-relaxed">
              Simple installation, easy maintenance, and programmable NFC cards for seamless guest turnover.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-neutral-800 font-semibold italic max-w-4xl mx-auto">
            Elite Conceal™ isn't just a safe. It's a statement about the kind of experience you provide—one where 
            security and sophistication exist in perfect harmony.
          </p>
        </div>
      </div>
    </section>
  );
}
