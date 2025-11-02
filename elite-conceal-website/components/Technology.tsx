'use client';

export default function Technology() {
  return (
    <section id="technology" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-neutral-900 mb-6">
            Invisible on the Outside. Impenetrable on the Inside.
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-neutral-700 max-w-4xl mx-auto">
            Elite Conceal™ combines cutting-edge security technology with refined elegance. Advanced protection 
            that operates silently in the background, ensuring both guest privacy and hotel peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-10 rounded-2xl text-white">
            <h3 className="text-3xl font-bold mb-6 text-amber-400">NFC Card Locking Mechanism</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-2">Contactless Simplicity</h4>
                <p className="text-neutral-300">
                  Each guest receives a programmed NFC card—similar to their room key—providing instant, secure 
                  access with a simple tap. No codes to memorize, no keys to misplace.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-2">Military-Grade Encryption</h4>
                <p className="text-neutral-300">
                  Advanced NFC technology ensures that only authorized cards can unlock the drawer. Each card is 
                  uniquely encoded and can be instantly deactivated upon checkout.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-2">Seamless Integration</h4>
                <p className="text-neutral-300">
                  Works alongside your existing room key system or as a standalone security solution. Compatible 
                  with major hotel management platforms.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-10 rounded-2xl border-2 border-amber-200">
            <h3 className="text-3xl font-bold mb-6 text-neutral-900">Optional Digital Access Tracking</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-2 text-neutral-900">Staff Control & Oversight</h4>
                <p className="text-neutral-800">
                  Monitor access events with optional digital tracking systems. Know exactly when the safe was 
                  accessed, providing both security and accountability.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-2 text-neutral-900">Housekeeping & Maintenance Protocols</h4>
                <p className="text-neutral-800">
                  Master access cards for authorized staff ensure smooth operations while maintaining complete 
                  security logs.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-2 text-neutral-900">Guest Privacy First</h4>
                <p className="text-neutral-800">
                  All tracking features are designed to protect your hotel's interests while respecting guest 
                  confidentiality. No content monitoring—only access timestamps.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-neutral-50 p-6 rounded-xl border-2 border-neutral-200">
            <div className="text-3xl mb-3">🔐</div>
            <h4 className="text-lg font-bold mb-2 text-neutral-900">Tamper-Proof Design</h4>
            <p className="text-neutral-700 text-sm">
              Reinforced construction and concealed mechanisms make forced entry virtually impossible without 
              major structural damage.
            </p>
          </div>

          <div className="bg-neutral-50 p-6 rounded-xl border-2 border-neutral-200">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="text-lg font-bold mb-2 text-neutral-900">Reliable Power System</h4>
            <p className="text-neutral-700 text-sm">
              Low-energy consumption with backup systems to ensure 24/7 access reliability.
            </p>
          </div>

          <div className="bg-neutral-50 p-6 rounded-xl border-2 border-neutral-200">
            <div className="text-3xl mb-3">🛡️</div>
            <h4 className="text-lg font-bold mb-2 text-neutral-900">Silent Operation</h4>
            <p className="text-neutral-700 text-sm">
              No beeps, no lights, no sounds. Complete discretion from activation to access.
            </p>
          </div>

          <div className="bg-neutral-50 p-6 rounded-xl border-2 border-neutral-200">
            <div className="text-3xl mb-3">🔒</div>
            <h4 className="text-lg font-bold mb-2 text-neutral-900">Auto-Lock Technology</h4>
            <p className="text-neutral-700 text-sm">
              Automatically secures after closing, eliminating the risk of guests forgetting to lock.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center bg-neutral-900 text-white p-12 rounded-2xl">
          <p className="text-2xl font-playfair font-bold">
            Elite Conceal™ delivers enterprise-level security wrapped in hospitality-grade elegance.
          </p>
          <p className="text-xl text-amber-400 mt-4">
            Protection your guests will trust. Technology you'll depend on.
          </p>
        </div>
      </div>
    </section>
  );
}
