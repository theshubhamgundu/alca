import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageSEO } from '../hooks/usePageSEO';
import { webPageSchema } from '../seo/schemas';
import { FaArrowLeft, FaPhone, FaEnvelope, FaWhatsapp, FaUtensils, FaUsers, FaClock, FaStar } from 'react-icons/fa';

const CateringPage: React.FC = () => {
  const navigate = useNavigate();

  usePageSEO({
    title: 'ALCA Veg & Non-Veg Catering | Premium Catering Services',
    description: 'Professional catering services for all events with delicious vegetarian and non-vegetarian menu options. Perfect for weddings, corporate events, and celebrations.',
    canonical: '/catering',
    keywords: 'catering services, veg catering, non-veg catering, event catering, wedding catering, corporate catering',
    schema: [
      webPageSchema({
        url: '/catering',
        name: 'ALCA Veg & Non-Veg Catering',
        description: 'Professional catering services for all events with delicious vegetarian and non-vegetarian menu options.',
        breadcrumb: [
          { name: 'Home', url: '/' },
          { name: 'Catering Services', url: '/catering' }
        ],
      }),
    ],
  });

  const services = [
    {
      icon: '🥘',
      title: 'Vegetarian Menu',
      description: 'Authentic Indian vegetarian dishes with regional specialties and modern fusion options'
    },
    {
      icon: '🍖',
      title: 'Non-Vegetarian Menu',
      description: 'Delicious chicken, mutton, and seafood preparations with traditional and contemporary flavors'
    },
    {
      icon: '🎂',
      title: 'Wedding Catering',
      description: 'Complete wedding catering solutions with traditional ceremonies and reception menus'
    },
    {
      icon: '🏢',
      title: 'Corporate Events',
      description: 'Professional catering for corporate meetings, conferences, and office celebrations'
    },
    {
      icon: '🎉',
      title: 'Party Catering',
      description: 'Birthday parties, anniversaries, and special occasion catering with customized menus'
    },
    {
      icon: '🍱',
      title: 'Lunch Box Service',
      description: 'Daily tiffin service and bulk lunch box delivery for offices and institutions'
    }
  ];

  const features = [
    { icon: <FaUtensils />, title: 'Fresh Ingredients', description: 'Only the finest and freshest ingredients' },
    { icon: <FaUsers />, title: 'Experienced Chefs', description: 'Professional chefs with years of experience' },
    { icon: <FaClock />, title: 'Timely Service', description: 'Always on time with guaranteed service' },
    { icon: <FaStar />, title: 'Quality Guaranteed', description: 'Maintaining highest quality standards' }
  ];

  return (
    <div className="min-h-screen w-full bg-[#FBF6ED]">
      
      {/* Header Section */}
      <section className="pt-20 pb-16 px-6 max-w-7xl mx-auto">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[#B71C1C] hover:text-[#8B1538] mb-8 transition-colors"
        >
          <FaArrowLeft /> Back to Home
        </button>
        
        <div className="text-center">
          <div className="text-6xl mb-6">🍽️</div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#B71C1C] mb-4">
            ALCA Veg & Non-Veg Catering
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Premium catering services with delicious vegetarian and non-vegetarian menu options for all types of events and celebrations.
          </p>
          
          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="tel:+917304888197"
              className="flex items-center gap-2 bg-[#B71C1C] text-white px-6 py-3 rounded-full hover:bg-[#8B1538] transition-colors"
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
        <h2 className="text-3xl font-serif font-bold text-[#2A1C22] text-center mb-12">Our Catering Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="text-4xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-xl font-serif font-bold mb-3 text-[#B71C1C] text-center">
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
          <h2 className="text-3xl font-serif font-bold text-[#2A1C22] text-center mb-12">Why Choose ALCA Catering?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-3xl text-[#B71C1C] mb-4 flex justify-center">
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

      {/* Contact Section */}
      <section className="py-16 bg-[#B71C1C] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Book Our Catering Services?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us today for a customized quote and menu planning for your event.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+917304888197"
              className="flex items-center gap-2 bg-white text-[#B71C1C] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold"
            >
              <FaPhone /> +91 7304888197
            </a>
            <a 
              href="mailto:pranita311096@gmail.com"
              className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#B71C1C] transition-colors font-semibold"
            >
              <FaEnvelope /> pranita311096@gmail.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CateringPage;