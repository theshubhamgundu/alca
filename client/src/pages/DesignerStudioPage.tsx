import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageSEO } from '../hooks/usePageSEO';
import { webPageSchema } from '../seo/schemas';
import { FaArrowLeft, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const DesignerStudioPage: React.FC = () => {
  const navigate = useNavigate();

  usePageSEO({
    title: 'ALCA Designer Studio',
    description: 'Professional design services for fashion, interiors, and creative solutions with expert craftsmanship.',
    canonical: '/designer-studio',
    keywords: 'designer studio, fashion design, interior design, creative design, professional design services',
  });

  return (
    <div className="min-h-screen w-full bg-[#FBF6ED]">
      <section className="pt-20 pb-16 px-6 max-w-7xl mx-auto">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[#E91E63] hover:text-[#AD1457] mb-8 transition-colors"
        >
          <FaArrowLeft /> Back to Home
        </button>
        
        <div className="text-center">
          <div className="text-6xl mb-6">👗</div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#E91E63] mb-4">
            ALCA Designer Studio
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Professional design services for fashion, interiors, and creative solutions with expert craftsmanship.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="tel:+917304888197"
              className="flex items-center gap-2 bg-[#E91E63] text-white px-6 py-3 rounded-full hover:bg-[#AD1457] transition-colors"
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignerStudioPage;