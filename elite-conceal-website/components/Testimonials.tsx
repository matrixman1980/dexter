'use client';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "A Game-Changer for Guest Satisfaction",
      text: "We installed Elite Conceal™ in our presidential suites, and the response has been remarkable. Guests don't even realize they have a safe until they need it—and that's exactly the point. It's invisible luxury at its finest.",
      author: "General Manager",
      property: "Five-Star Urban Hotel"
    },
    {
      quote: "Finally, Security That Matches Our Design",
      text: "As a boutique property, every design element matters. Traditional safes always felt like a compromise. Elite Conceal™ solved that problem completely. Our interior designer was thrilled.",
      author: "Owner",
      property: "Boutique Design Hotel"
    },
    {
      quote: "Guests Love the Modern Experience",
      text: "The NFC access is brilliant. No more late-night calls about forgotten safe codes. Our guest satisfaction scores improved within the first quarter of installation.",
      author: "Director of Operations",
      property: "Luxury Beach Resort"
    },
    {
      quote: "Invisible, Intelligent, Impressive",
      text: "Elite Conceal™ aligns perfectly with our commitment to innovation and discretion. It's a conversation piece with our VIP guests—in the best possible way.",
      author: "Hospitality Director",
      property: "Private Members Club"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-neutral-900 mb-6">
            Trusted by Leading Hospitality Partners
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-neutral-700 max-w-4xl mx-auto">
            Don't just take our word for it. Discover how Elite Conceal™ is transforming guest experiences at 
            properties around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 rounded-2xl shadow-xl text-white relative"
            >
              <div className="absolute top-6 left-6 text-6xl text-amber-500/20 font-serif">"</div>
              <div className="relative z-10 pt-8">
                <h3 className="text-2xl font-bold mb-4 text-amber-400">{testimonial.quote}</h3>
                <p className="text-neutral-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-neutral-700 pt-4">
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-neutral-400 text-sm">{testimonial.property}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-br from-amber-50 to-amber-100 p-12 rounded-2xl border-2 border-amber-200">
          <h3 className="text-3xl font-playfair font-bold text-neutral-900 mb-4">
            Join the Elite Standard
          </h3>
          <p className="text-xl text-neutral-800 mb-6">
            Become a partner property and experience the difference invisible security makes.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-amber-500 text-neutral-900 font-bold text-lg rounded-lg hover:bg-amber-400 transition-all transform hover:scale-105 shadow-lg"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
