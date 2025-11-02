'use client';

import { useState } from 'react';

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    property: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your interest! Our team will contact you shortly.');
    setFormData({ name: '', email: '', property: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Upgrade Your Rooms to Invisible Luxury
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            Your guests deserve security that reflects the excellence of your property. Elite Conceal™ is ready to 
            transform your suites, enhance guest trust, and elevate your brand.
          </p>
          <p className="text-lg text-neutral-400 mt-6 max-w-3xl mx-auto">
            Whether you're renovating, building new, or simply seeking to modernize your security infrastructure—Elite 
            Conceal™ is the intelligent choice for the future of hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-8 text-amber-400">Why Partner with Elite Conceal™?</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-amber-500 mr-3 text-2xl">✓</span>
                <p className="text-neutral-300 text-lg">White-glove installation and support</p>
              </div>
              <div className="flex items-start">
                <span className="text-amber-500 mr-3 text-2xl">✓</span>
                <p className="text-neutral-300 text-lg">Custom design consultation included</p>
              </div>
              <div className="flex items-start">
                <span className="text-amber-500 mr-3 text-2xl">✓</span>
                <p className="text-neutral-300 text-lg">Scalable solutions for properties of any size</p>
              </div>
              <div className="flex items-start">
                <span className="text-amber-500 mr-3 text-2xl">✓</span>
                <p className="text-neutral-300 text-lg">Ongoing maintenance and service packages</p>
              </div>
              <div className="flex items-start">
                <span className="text-amber-500 mr-3 text-2xl">✓</span>
                <p className="text-neutral-300 text-lg">Dedicated hospitality account management</p>
              </div>
            </div>

            <div className="mt-12 bg-neutral-800/50 backdrop-blur-sm p-8 rounded-xl border border-neutral-700">
              <h4 className="text-2xl font-bold mb-4 text-amber-400">Contact Information</h4>
              <div className="space-y-3 text-neutral-300">
                <p className="flex items-center">
                  <span className="mr-3">📧</span>
                  <a href="mailto:hospitality@eliteconceal.com" className="hover:text-amber-400 transition-colors">
                    hospitality@eliteconceal.com
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="mr-3">🌐</span>
                  <span>www.eliteconceal.com/hotels</span>
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <h3 className="text-3xl font-bold mb-6 text-neutral-900">Request a Demo</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-neutral-900"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-neutral-900"
                    placeholder="john@hotel.com"
                  />
                </div>

                <div>
                  <label htmlFor="property" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Property Name *
                  </label>
                  <input
                    type="text"
                    id="property"
                    name="property"
                    value={formData.property}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-neutral-900"
                    placeholder="Grand Luxury Hotel"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-neutral-900"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-neutral-900"
                    placeholder="Tell us about your property and requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-amber-500 text-neutral-900 font-bold text-lg rounded-lg hover:bg-amber-400 transition-all transform hover:scale-105 shadow-lg"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-3xl font-playfair font-bold mb-2">
            Elite Conceal™ – Where Security Meets Design Excellence
          </p>
          <p className="text-xl text-amber-400">
            Invisible Protection for Discerning Guests. Luxury That Hides in Plain Sight.
          </p>
        </div>
      </div>
    </section>
  );
}
