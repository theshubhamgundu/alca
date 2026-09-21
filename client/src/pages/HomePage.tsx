import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageSEO } from '../hooks/usePageSEO';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  usePageSEO({
    title: 'ALCA Platform | Premium Services & Bespoke Creations',
    description: 'Elevate your experience with ALCA. We specialize in luxury catering, magical event planning, artisan crafts, designer studio services, and bespoke beauty.',
    canonical: '/',
  });

  const services = [
    { title: 'Catering Excellence', desc: 'Curated culinary experiences.', icon: '🍽️', color: 'bg-red-50 text-red-600', route: '/catering', image: 'https://picsum.photos/seed/catering/800/600' },
    { title: 'Magical Events', desc: 'Crafting unforgettable moments.', icon: '✨', color: 'bg-purple-50 text-purple-600', route: '/celebrations', image: 'https://picsum.photos/seed/events/800/600' },
    { title: 'Artisan Crafts', desc: 'Unique, handmade treasures.', icon: '🎁', color: 'bg-green-50 text-green-600', route: '/crafts-gifts', image: 'https://picsum.photos/seed/crafts/800/600' },
    { title: 'Designer Studio', desc: 'Bespoke design, tailored fit.', icon: '👗', color: 'bg-pink-50 text-pink-600', route: '/designer-studio', image: 'https://picsum.photos/seed/designer/800/600' },
    { title: 'Luxury Beauty', desc: 'Expert makeup & styling.', icon: '💄', color: 'bg-orange-50 text-orange-600', route: '/makeup-beauty', image: 'https://picsum.photos/seed/beauty/800/600' },
    { title: 'Supply Solutions', desc: 'Manufacturing excellence.', icon: '🌿', color: 'bg-emerald-50 text-emerald-600', route: '/supply-manufacturing', image: 'https://picsum.photos/seed/supply/800/600' },
  ];

  return (
    <main className="min-h-screen bg-[#FDFCF8] text-[#1a1a1a]">
      {/* Immersive Hero */}
      <section className="relative h-[85vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#E8E4DA] opacity-30"></div>
        <div className="relative z-10 max-w-3xl">
          <span className="text-sm tracking-[0.3em] uppercase text-[#8B7355] font-medium mb-4 block">
            Crafting Extraordinary Experiences
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-medium text-[#1a1a1a] mb-8 leading-[0.9]">
            ALCA Platform
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 font-light leading-relaxed">
            Where craftsmanship meets elegance. Discover our premium services, tailored to your unique requirements.
          </p>
          <button 
            onClick={() => navigate('/products')}
            className="group relative px-10 py-4 bg-[#1a1a1a] text-white rounded-none hover:bg-[#333] transition-all duration-300 uppercase tracking-widest text-sm"
          >
            Explore Collection
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#1a1a1a]">Our Expertise</h2>
          <p className="text-gray-500 max-w-sm mt-4 md:mt-0">
            A boutique platform offering curated solutions across diverse disciplines, united by a commitment to perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[300px] gap-6">
          {services.map((s, i) => (
            <div 
              key={i} 
              onClick={() => navigate(s.route)}
              className={`group relative overflow-hidden cursor-pointer flex flex-col justify-end ${i === 0 || i === 5 ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/90 z-10"></div>
              
              <div className="relative z-20 text-white p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className={`w-10 h-10 ${s.color.replace('bg-', 'bg-white/90')} rounded-none flex items-center justify-center text-lg mb-4`}>
                  {s.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-serif mb-2">{s.title}</h3>
                <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm leading-relaxed max-w-xs">{s.desc}</p>
                <span className="text-white font-medium text-xs tracking-widest uppercase border-b border-white pb-1 group-hover:border-[#C79A56] group-hover:text-[#C79A56] transition-colors">
                  Discover
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
