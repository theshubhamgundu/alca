import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageSEO } from '../hooks/usePageSEO';
import { webPageSchema } from '../seo/schemas';
import { FaArrowLeft, FaPhone, FaEnvelope, FaWhatsapp, FaHeart, FaCalendar, FaGift, FaStar } from 'react-icons/fa';

const CelebrationsPage: React.FC = () => {
  const navigate = useNavigate();

  usePageSEO({
    title: 'ALCA WOW – Magical Celebrations | Event Planning & Management',
    description: 'Complete event planning and celebration services to make your special moments truly magical. Weddings, birthdays, anniversaries, and corporate events.',
    canonical: '/celebrations',
    keywords: 'event planning, celebrations, wedding planning, birthday parties, anniversary events, corporate celebrations',
    schema: [
      webPageSchema({
        url: '/celebrations',
        name: 'ALCA WOW – Magical Celebrations',
        description: 'Complete event planning and celebration services to make your special moments truly magical.',
        breadcrumb: [
          { name: 'Home', url: '/' },
          { name: 'Magical Celebrations', url: '/celebrations' }
        ],
      }),
    ],
  });

  const services = [
    {
      icon: '💒',
      title: 'Wedding Planning',
      description: 'Complete wedding planning from engagement to reception with traditional and modern themes'
    },
    {
      icon: '🎂',
      title: 'Birthday Celebrations',
      description: 'Memorable birthday parties for all ages with customized themes and entertainment'
    },
    {
      icon: '💖',
      title: 'Anniversary Events',
      description: 'Romantic anniversary celebrations and milestone commemorations with personalized touches'
    },
    {
      icon: '🏢',
      title: 'Corporate Events',
      description: 'Professional corporate celebrations, award ceremonies, and team building events'
    },
    {
      icon: '🎊',
      title: 'Festival Celebrations',
      description: 'Traditional festival celebrations with authentic decorations and cultural programs'
    },
    {
      icon: '🎓',
      title: 'Special Occasions',
      description: 'Graduation parties, housewarming, baby showers, and other milestone celebrations'
    }
  ];

  const features = [
    { icon: <FaHeart />, title: 'Personalized Planning', description: 'Every event tailored to your vision' },
    { icon: <FaCalendar />, title: 'End-to-End Management', description: 'Complete event coordination and execution' },
    { icon: <FaGift />, title: 'Creative Themes', description: 'Unique and innovative celebration concepts' },
    { icon: <FaStar />, title: 'Memorable Experiences', description: 'Creating unforgettable moments' }
  ];

  return (
    <div className="min-h-screen w-full bg-[#FBF6ED]">
      
      {/* Header Section */}
      <section className="pt-20 pb-16 px-6 max-w-7xl mx-auto">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[#4A148C] hover:text-[#6A1B9A] mb-8 transition-colors"
        >
          <FaArrowLeft /> Back to Home
        </button>
        
        <div className="text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#4A148C] mb-4">
            ALCA WOW – Magical Celebrations
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Complete event planning and celebration services to make your special moments truly magical and unforgettable.
          </p>
          
          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="tel:+917304888197"
              className="flex items-center gap-2 bg-[#4A148C] text-white px-6 py-3 rounded-full hover:bg-[#6A1B9A] transition-colors"
            >
              <FaPhone /> Call Now
            </a>
            <a 
              href="https://wa.me/917304888197"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a 
              href="mailto:pranita311096@gmail.com"
              className="flex items-center gap-2 bg-gray-600 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors"
            >
              <FaEnvelope /> Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-[#2A1C22] text-center mb-12">Our Celebration Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="text-4xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-xl font-serif font-bold mb-3 text-[#4A148C] text-center">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-[#2A1C22] text-center mb-12">Why Choose ALCA Celebrations?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-3xl text-[#4A148C] mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-serif font-bold mb-2 text-[#2A1C22]">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-[#4A148C] to-[#6A1B9A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Event Planning Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Consultation</h3>
              <p className="text-sm opacity-90">Understanding your vision and requirements</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-2">Planning</h3>
              <p className="text-sm opacity-90">Detailed planning and timeline creation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">Design</h3>
              <p className="text-sm opacity-90">Creative design and theme development</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-2">Execution</h3>
              <p className="text-sm opacity-90">Flawless event execution and management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#4A148C] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Plan Your Magical Celebration?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let's create unforgettable memories together. Contact us for a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+917304888197"
              className="flex items-center gap-2 bg-white text-[#4A148C] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold"
            >
              <FaPhone /> +91 7304888197
            </a>
            <a 
              href="mailto:pranita311096@gmail.com"
              className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#4A148C] transition-colors font-semibold"
            >
              <FaEnvelope /> pranita311096@gmail.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CelebrationsPage;