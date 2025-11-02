'use client';

export default function Comparison() {
  const comparisons = [
    {
      feature: 'Visibility',
      elite: '100% invisible—completely concealed within furniture',
      traditional: 'Highly visible metal box—obvious target'
    },
    {
      feature: 'Design Integration',
      elite: 'Seamless furniture integration with custom finishes',
      traditional: 'Bulky, industrial appearance disrupts room design'
    },
    {
      feature: 'Access Method',
      elite: 'NFC card tap—intuitive and modern',
      traditional: 'Keypads or mechanical keys—outdated and failure-prone'
    },
    {
      feature: 'Guest Experience',
      elite: 'Effortless, zero learning curve',
      traditional: 'Frequent confusion, forgotten codes, front desk calls'
    },
    {
      feature: 'Security Level',
      elite: 'Undetectable = unsuspected. Advanced NFC encryption',
      traditional: 'Visible target. Code-based vulnerabilities'
    },
    {
      feature: 'Storage Capacity',
      elite: 'Spacious double chest design',
      traditional: 'Limited interior space and narrow openings'
    },
    {
      feature: 'Aesthetic Impact',
      elite: 'Enhances room luxury and sophistication',
      traditional: 'Detracts from premium interior design'
    },
    {
      feature: 'Maintenance',
      elite: 'Minimal—reliable NFC technology with few moving parts',
      traditional: 'Mechanical failures, battery replacements, service calls'
    },
    {
      feature: 'Staff Management',
      elite: 'Optional digital tracking and master access control',
      traditional: 'Manual key management or code resets'
    },
    {
      feature: 'Guest Perception',
      elite: 'Premium, modern, trust-building',
      traditional: 'Standard, institutional, security-reminder'
    },
    {
      feature: 'Brand Alignment',
      elite: 'Reflects luxury, innovation, and attention to detail',
      traditional: 'Standard industry commodity'
    }
  ];

  return (
    <section className="py-24 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-neutral-900 mb-6">
            Elite Conceal™ vs. Traditional Hotel Safes
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-neutral-700 max-w-4xl mx-auto">
            See why forward-thinking hotels are making the switch to invisible security.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white">
                  <th className="px-6 py-6 text-left text-lg font-bold">Feature</th>
                  <th className="px-6 py-6 text-left text-lg font-bold text-amber-400">Elite Conceal™</th>
                  <th className="px-6 py-6 text-left text-lg font-bold text-neutral-400">Traditional Hotel Safe</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-neutral-200 ${
                      index % 2 === 0 ? 'bg-neutral-50' : 'bg-white'
                    }`}
                  >
                    <td className="px-6 py-5 font-bold text-neutral-900">{item.feature}</td>
                    <td className="px-6 py-5 text-neutral-800">
                      <div className="flex items-start">
                        <span className="text-green-600 mr-2 text-xl">✓</span>
                        <span>{item.elite}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-neutral-600">
                      <div className="flex items-start">
                        <span className="text-red-500 mr-2 text-xl">✗</span>
                        <span>{item.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center bg-gradient-to-br from-neutral-900 to-neutral-800 text-white p-12 rounded-2xl shadow-xl">
          <p className="text-2xl font-playfair font-bold mb-4">
            Elite Conceal™ isn't just better—it's a different category entirely.
          </p>
          <p className="text-xl text-amber-400">
            Move beyond outdated security and embrace the future of hospitality protection.
          </p>
        </div>
      </div>
    </section>
  );
}
