import React from 'react';
import { usePageSEO } from '../hooks/usePageSEO';

const CateringPage: React.FC = () => {
  usePageSEO({
    title: 'ALCA Catering | Curated Culinary Experiences',
    description: 'Elevate your event with ALCA catering. Professional, premium culinary solutions tailored for weddings, corporate, and private celebrations.',
    canonical: '/catering',
  });

  const services = [
    { title: 'Vegetarian Classics', desc: 'Authentic flavors, modernized.' },
    { title: 'Non-Vegetarian Delights', desc: 'Rich, aromatic, and curated.' },
    { title: 'Wedding Packages', desc: 'Seamless, elegant service.' },
    { title: 'Corporate Events', desc: 'Professional catering solutions.' },
    { title: 'Private Parties', desc: 'Tailored for special occasions.' },
    { title: 'Lunch Box Service', desc: 'Daily, fresh, delicious.' }
  ];

  return (
    <main className="min-h-screen bg-[#FDFCF8] text-[#1a1a1a]">
      {/* Hero */}
      <section className="h-[60vh] flex flex-col justify-center items-center text-center px-6 border-b border-[#E5E5E5]">
        <span className="text-sm tracking-[0.3em] uppercase text-[#8B7355] font-medium mb-4">
          Culinary Artistry
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6 text-[#1a1a1a]">
          Catering Excellence
        </h1>
        <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-10">
          From intimate gatherings to grand celebrations, we deliver curated culinary experiences defined by quality and precision.
        </p>
        <a href="tel:+917304888197" className="px-10 py-4 bg-[#1a1a1a] text-white hover:bg-[#333] transition-all uppercase tracking-widest text-sm">
          Inquire Now
        </a>
      </section>

      {/* Services */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif font-medium mb-16 text-center">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-[#E5E5E5]">
          {services.map((s, i) => (
            <div key={i} className="p-10 border-r border-b border-[#E5E5E5] hover:bg-[#FAF9F6] transition-colors">
              <h3 className="text-xl font-serif mb-3">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer CTA */}
      <section className="py-24 px-6 text-center bg-[#1a1a1a] text-white">
        <h2 className="text-3xl font-serif font-medium mb-8">Ready to curate your menu?</h2>
        <div className="flex justify-center gap-6">
          <a href="tel:+917304888197" className="text-sm uppercase tracking-widest hover:text-[#C79A56]">Call: +91 7304888197</a>
          <a href="mailto:pranita311096@gmail.com" className="text-sm uppercase tracking-widest hover:text-[#C79A56]">Email: pranita311096@gmail.com</a>
        </div>
      </section>
    </main>
  );
};

export default CateringPage;
