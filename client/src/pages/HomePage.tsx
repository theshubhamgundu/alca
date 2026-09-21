import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageSEO } from '../hooks/usePageSEO';
import { webPageSchema } from '../seo/schemas';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  usePageSEO({
    title: 'ALCA Multi-Business Platform | Catering, Events, Design & More',
    description: 'Discover ALCA comprehensive services: premium catering, magical celebrations, custom crafts, designer studio, luxury makeup, and manufacturing solutions.',
    canonical: '/',
    keywords: 'alca platform, catering services, event planning, custom crafts, designer studio, makeup services, manufacturing, celebrations',
    schema: [
      webPageSchema({
        url: '/',
        name: 'ALCA Platform',
        description: 'Welcome to ALCA, your premium platform for high-quality products and professional services.',
        breadcrumb: [{ name: 'Home', url: '/' }],
      }),
    ],
  });

  const businessCards = [
    {
      id: 1,
      title: 'ALCA Veg & Non-Veg Catering',
      description: 'Premium catering services with delicious vegetarian and non-vegetarian menu options for all events',
      icon: '🍽️',
      color: '#B71C1C',
      route: '/catering'
    },
    {
      id: 2,
      title: 'ALCA WOW – Magical Celebrations',
      description: 'Complete event planning and celebration services to make your special moments truly magical',
      icon: '🎉',
      color: '#4A148C',
      route: '/celebrations'
    },
    {
      id: 3,
      title: 'ALCA Customised Unique Crafts & Gifts',
      description: 'Handcrafted personalized gifts and unique craft items tailored to your special requirements',
      icon: '🎁',
      color: '#2E7D32',
      route: '/crafts-gifts'
    },
    {
      id: 4,
      title: 'ALCA Designer Studio',
      description: 'Professional design services for fashion, interiors, and creative solutions with expert craftsmanship',
      icon: '👗',
      color: '#E91E63',
      route: '/designer-studio'
    },
    {
      id: 5,
      title: 'ALCA Luxury Makeup & Beauty',
      description: 'Premium beauty and makeup services for weddings, events, and special occasions',
      icon: '💄',
      color: '#FF5722',
      route: '/makeup-beauty'
    },
    {
      id: 6,
      title: 'ALCA Supply & Manufacturing',
      description: 'Quality supply chain and manufacturing solutions for businesses across various industries',
      icon: '🌿',
      color: '#388E3C',
      route: '/supply-manufacturing'
    }
  ];

  return (
    <div className="min-h-screen w-full bg-[#FBF6ED]">
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#185e33] mb-4">ALCA Multi-Business Platform</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Discover our comprehensive range of services - from catering and celebrations to design, beauty, crafts, and manufacturing solutions.
        </p>
      </section>

      {/* Business Cards Grid */}
      <section className="pb-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessCards.map((card) => (
            <div
              key={card.id}
              onClick={() => navigate(card.route)}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer transform hover:-translate-y-2"
            >
              <div 
                className="w-16 h-16 rounded-full mb-6 flex items-center justify-center text-3xl shadow-md transition-transform group-hover:scale-110 mx-auto"
                style={{ backgroundColor: `${card.color}15`, color: card.color }}
              >
                {card.icon}
              </div>
              <h3 
                className="text-xl font-serif font-bold mb-3 text-center"
                style={{ color: card.color }}
              >
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default HomePage;