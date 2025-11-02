'use client';

export default function UseCases() {
  const useCases = [
    {
      icon: '🏨',
      title: 'Five-Star Hotels',
      description: 'Transform your premium suites with security that matches your standards. Elite Conceal™ elevates presidential suites, penthouse accommodations, and executive floors with invisible protection that reinforces your commitment to guest privacy and luxury.',
      perfect: [
        'Presidential and royal suites',
        'Executive club floors',
        'Signature room collections',
        'High-value accommodation tiers'
      ]
    },
    {
      icon: '🌴',
      title: 'Luxury Resorts & Destination Properties',
      description: 'In settings where every detail matters, Elite Conceal™ ensures security never interrupts the escape. From beachfront villas to mountain retreats, provide guests with peace of mind that blends seamlessly with paradise.',
      perfect: [
        'Private villa accommodations',
        'Overwater bungalows and cabanas',
        'Spa retreat suites',
        'All-inclusive luxury properties'
      ]
    },
    {
      icon: '🏛️',
      title: 'Boutique Hotels & Design Properties',
      description: 'Your property is a work of art. Elite Conceal™ ensures security infrastructure never compromises your unique aesthetic vision. Perfect for design-forward hotels where every element is intentionally curated.',
      perfect: [
        'Boutique design hotels',
        'Historic property renovations',
        'Themed luxury accommodations',
        'Architecturally significant spaces'
      ]
    },
    {
      icon: '💼',
      title: 'Private Clubs & VIP Lounges',
      description: 'Extend invisible security beyond guest rooms. Elite Conceal™ enhances private lounges, executive meeting spaces, and members-only areas where discretion is paramount.',
      perfect: [
        'Airport VIP lounges',
        'Private member clubs',
        'Executive conference suites',
        'High-roller gaming areas'
      ]
    },
    {
      icon: '🏡',
      title: 'Luxury Vacation Rentals',
      description: 'Property managers and luxury homeowners demand the same invisible security for short-term rental properties and private estates. Elite Conceal™ delivers hotel-grade protection without the hotel aesthetic.',
      perfect: [
        'High-end vacation rental properties',
        'Serviced luxury apartments',
        'Private estate guest suites',
        'Corporate housing programs'
      ]
    }
  ];

  return (
    <section id="use-cases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-neutral-900 mb-6">
            Designed for the World's Finest Properties
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-neutral-700 max-w-4xl mx-auto">
            Elite Conceal™ adapts to any luxury environment where discretion, design, and security converge.
          </p>
        </div>

        <div className="space-y-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden shadow-xl ${
                index % 2 === 0
                  ? 'bg-gradient-to-br from-neutral-900 to-neutral-800 text-white'
                  : 'bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200'
              }`}
            >
              <div className="p-8 md:p-12">
                <div className="flex items-start gap-6">
                  <div className="text-6xl flex-shrink-0">{useCase.icon}</div>
                  <div className="flex-1">
                    <h3
                      className={`text-3xl font-bold mb-4 ${
                        index % 2 === 0 ? 'text-amber-400' : 'text-neutral-900'
                      }`}
                    >
                      {useCase.title}
                    </h3>
                    <p
                      className={`text-lg mb-6 leading-relaxed ${
                        index % 2 === 0 ? 'text-neutral-300' : 'text-neutral-800'
                      }`}
                    >
                      {useCase.description}
                    </p>
                    <div>
                      <h4
                        className={`text-xl font-bold mb-3 ${
                          index % 2 === 0 ? 'text-amber-400' : 'text-neutral-900'
                        }`}
                      >
                        Perfect for:
                      </h4>
                      <ul
                        className={`grid grid-cols-1 md:grid-cols-2 gap-2 ${
                          index % 2 === 0 ? 'text-neutral-300' : 'text-neutral-800'
                        }`}
                      >
                        {useCase.perfect.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-neutral-900 text-white p-12 rounded-2xl">
          <p className="text-2xl font-playfair font-bold">
            Wherever luxury and discretion meet, Elite Conceal™ belongs.
          </p>
          <p className="text-xl text-amber-400 mt-4">
            One solution. Infinite applications.
          </p>
        </div>
      </div>
    </section>
  );
}
