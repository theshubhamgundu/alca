import React from 'react';
import { FaFire, FaGlobe, FaHeart, FaLeaf } from 'react-icons/fa';
import { usePageSEO } from '../hooks/usePageSEO';
import { webPageSchema, breadcrumbSchema } from '../seo/schemas';

const craftsmanshipPillars = [
  {
    icon: <FaLeaf className="w-6 h-6 text-[#C79A56]" />,
    title: '100% Eco-Friendly high-quality',
    description:
      'We handcraft all our products using pure natural high-quality, ensuring a clean, non-toxic, and soot-free burn for your home and family.',
  },
  {
    icon: <FaFire className="w-6 h-6 text-[#C79A56]" />,
    title: 'Artisanal Hand-Pouring',
    description:
      'Every single product, premium, and service is hand-crafted in small batches by master product artisans in Maharashtra, India with meticulous care.',
  },
  {
    icon: <FaHeart className="w-6 h-6 text-[#C79A56]" />,
    title: 'Premium Quality',
    description:
      'Infused with premium materials and high-quality components that enhance value and provide exceptional user experience.',
  },
  {
    icon: <FaGlobe className="w-6 h-6 text-[#C79A56]" />,
    title: 'Global Export Excellence',
    description:
      'We supply luxury decorative products to wholesalers, retailers, event planners, and international importers with custom bulk packaging.',
  },
];

const AboutPage: React.FC = () => {
  usePageSEO({
    title: 'About ALCA | Luxury Decorative & exclusive product Exporter',
    description:
      'ALCA is a trusted exporter and supplier of handcrafted decorative products, high-quality premium products, coffee collection products, and luxury gift sets from Maharashtra, India.',
    canonical: '/about',
    keywords:
      'ALCA about us, decorative product exporter india, exclusive product supplier, high-quality products manufacturer, luxury product exporter maharashtra',
    schema: [
      webPageSchema({
        url: '/about',
        name: 'About ALCA',
        description:
          'Learn about ALCA — handcrafted decorative, exclusive, and high-quality product exporter and supplier from Maharashtra, India.',
        breadcrumb: [
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about' },
        ],
      }),
      breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' },
      ]),
    ],
  });

  return (
    <div className="bg-[#FBF6ED] min-h-screen text-[#2A1C22]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2A1C22] via-[#5C2333] to-[#3E1622] text-white py-20 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-[#C79A56]/20 text-[#F2C879] rounded-full text-xs font-semibold uppercase tracking-widest mb-4 border border-[#C79A56]/40">
            About ALCA
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight mb-4 leading-tight">
            Handcrafted Luxury & Premium Quality
          </h1>
          <p className="text-base sm:text-lg text-[#E6DACB] max-w-2xl mx-auto font-light leading-relaxed">
            ALCA is a premier exporter and supplier of handcrafted decorative products, exclusive high-quality items, premium products, and bespoke gift collections from Ulhasnagar, Maharashtra, India.
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold text-[#C79A56] uppercase tracking-widest block mb-2">Our Essence & Vision</span>
            <h2 className="text-3xl font-serif font-bold text-[#2A1C22] mb-4">
              Illuminating Spaces with Elegance & Tradition
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              At ALCA, product making is an artisanal ritual. We blend traditional Indian heritage motifs with contemporary premium designs and high-quality materials.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm">
              Whether you are looking to elevate your home decor, source premium products, or find quality items for wholesale export across the globe, ALCA delivers exceptional craftsmanship and sustainable quality.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <img
              src="/images/products/ALCA services artisanal rituals 1.png"
              alt="ALCA Artisanal Collection"
              className="w-full h-80 object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://placehold.co/600x600/185e33/FFF?text=ALCA+Product';
              }}
            />
          </div>
        </div>
      </section>

      {/* Pillars of Excellence */}
      <section className="bg-white py-16 border-t border-[#E6DACB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-[#2A1C22]">
              Why Choose ALCA?
            </h2>
            <p className="mt-2 text-gray-600 max-w-xl mx-auto text-sm">
              Crafted with passion, pure ingredients, and international export standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {craftsmanshipPillars.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FBF6ED] border border-[#E6DACB] hover:border-[#C79A56] transition-colors shadow-sm"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-xs">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-[#2A1C22] mb-2 font-serif">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Callout Section */}
      <section className="py-14 bg-[#5C2333] text-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif font-bold mb-3">Looking for Bulk & Export Inquiries?</h3>
          <p className="text-[#E6DACB] text-sm mb-6">
            We partner with global importers, hotel chains, corporate gifting experts, and retailers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:pranita311096@gmail.com"
              className="px-6 py-3 bg-[#C79A56] text-white font-bold text-sm rounded-full hover:bg-[#A97D3F] transition-colors shadow-md"
            >
              Request a Quote
            </a>
            <a
              href="tel:+917304888197"
              className="px-6 py-3 bg-white text-[#2A1C22] font-bold text-sm rounded-full hover:bg-gray-100 transition-colors shadow-md"
            >
              Call +91 7304888197
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
