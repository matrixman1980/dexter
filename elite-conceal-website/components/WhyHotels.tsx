'use client';

export default function WhyHotels() {
  return (
    <section className="py-24 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-neutral-900 mb-6">
            The Hidden Problem with Traditional Hotel Safes
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-neutral-700 max-w-4xl mx-auto">
            In an era where guests expect seamless luxury at every touchpoint, traditional hotel safes have become 
            an aesthetic and functional liability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-8 border-l-4 border-red-500 pl-4">
              The Problem with Conventional Safes
            </h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-neutral-900 mb-2">Visible Targets</h4>
                <p className="text-neutral-700">
                  Bulky metal boxes immediately signal "valuables stored here" to anyone entering the room—staff, 
                  service providers, or potential threats.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-neutral-900 mb-2">Design Disruption</h4>
                <p className="text-neutral-700">
                  Heavy, industrial-looking safes clash with carefully curated interior design, breaking the 
                  immersive luxury experience you've invested in creating.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-neutral-900 mb-2">Guest Frustration</h4>
                <p className="text-neutral-700">
                  Complex keypads, forgotten codes, and mechanical failures lead to front desk calls and 
                  diminished satisfaction scores.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-neutral-900 mb-2">Limited Capacity</h4>
                <p className="text-neutral-700">
                  Small openings force guests to choose what to protect, leaving larger valuables exposed or 
                  stored inadequately.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-8 border-l-4 border-amber-500 pl-4">
              The Elite Conceal™ Difference
            </h3>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg shadow-md border-2 border-amber-200">
                <h4 className="text-xl font-bold text-neutral-900 mb-2">Enhanced Guest Trust</h4>
                <p className="text-neutral-800">
                  When security is invisible, comfort is absolute. Guests feel protected without visual reminders of risk.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg shadow-md border-2 border-amber-200">
                <h4 className="text-xl font-bold text-neutral-900 mb-2">Design Synergy, Not Sacrifice</h4>
                <p className="text-neutral-800">
                  Elite Conceal™ transforms any furniture piece—bedside tables, dressers, console units—into 
                  sophisticated security without altering aesthetics.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg shadow-md border-2 border-amber-200">
                <h4 className="text-xl font-bold text-neutral-900 mb-2">Perfect for Premium Spaces</h4>
                <ul className="text-neutral-800 space-y-1 list-disc list-inside">
                  <li>Presidential and executive suites</li>
                  <li>Luxury room collections</li>
                  <li>Boutique hotel design concepts</li>
                  <li>VIP lounges and private clubs</li>
                  <li>High-end vacation rentals</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg shadow-md border-2 border-amber-200">
                <h4 className="text-xl font-bold text-neutral-900 mb-2">Guest Satisfaction Elevated</h4>
                <p className="text-neutral-800">
                  Intuitive NFC access means zero learning curve. Guests appreciate security that works 
                  effortlessly and invisibly.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-neutral-900 text-white p-12 rounded-2xl">
          <p className="text-2xl font-playfair font-bold">
            Elite Conceal™ isn't just an upgrade—it's a reimagining of what hotel security should be.
          </p>
          <p className="text-xl text-amber-400 mt-4">
            Invisible. Intelligent. Impeccable.
          </p>
        </div>
      </div>
    </section>
  );
}
