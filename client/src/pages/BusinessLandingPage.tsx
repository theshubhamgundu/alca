import React, { useEffect, useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useGetAllBusinessesQuery } from '../redux/api/business.api';
import { useGetPageSectionsQuery } from '../redux/api/pageSection.api';
import Loader from '../components/common/Loader';
import { Business } from '../redux/api/business.api';
import { PageSection } from '../redux/api/pageSection.api';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const BusinessLandingPage: React.FC = () => {
  const { businessSlug } = useParams<{ businessSlug: string }>();
  const { data: businessesData, isLoading: businessesLoading } = useGetAllBusinessesQuery();
  
  const business = useMemo(() => {
    return businessesData?.businesses?.find((b: Business) => b.slug === businessSlug);
  }, [businessesData, businessSlug]);

  const { data: sectionsData, isLoading: sectionsLoading } = useGetPageSectionsQuery(business?.id || '', {
    skip: !business?.id,
  });

  useEffect(() => {
    if (business) {
      // Inject CSS variables for theming
      const root = document.documentElement;
      root.style.setProperty('--business-primary', business.primary_color || '#185e33');
      root.style.setProperty('--business-secondary', business.secondary_color || '#C79A56');
      document.title = `${business.name} | ALCA`;
    }
    
    return () => {
      // Clean up theming
      const root = document.documentElement;
      root.style.removeProperty('--business-primary');
      root.style.removeProperty('--business-secondary');
      document.title = 'ALCA';
    };
  }, [business]);

  if (businessesLoading || sectionsLoading) {
    return <Loader />;
  }

  if (!business) {
    return <Navigate to="/404" replace />;
  }

  const sections = sectionsData?.sections?.filter((s: PageSection) => s.is_active) || [];

  const renderSection = (section: PageSection) => {
    switch (section.section_type) {
      case 'Hero':
        return (
          <section key={section.id} className="relative bg-[var(--business-primary)] text-white overflow-hidden py-24 md:py-32">
            <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${section.content.image_url})` }}></div>
            <div className="container mx-auto px-4 relative z-10 text-center">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">{section.content.title}</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">{section.content.subtitle}</p>
              {section.content.cta_text && (
                <a href={section.content.cta_link || '#'} className="inline-block bg-[var(--business-secondary)] text-white px-8 py-3 rounded-full font-bold text-lg hover:opacity-90 transition shadow-lg">
                  {section.content.cta_text}
                </a>
              )}
            </div>
          </section>
        );
      case 'About':
        return (
          <section key={section.id} className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center max-w-3xl">
              <h2 className="text-3xl font-serif font-bold mb-6 text-[var(--business-primary)]">{section.content.title}</h2>
              <div className="text-gray-700 leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: section.content.body }} />
            </div>
          </section>
        );
      case 'Services':
         return (
          <section key={section.id} className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-serif font-bold mb-12 text-[var(--business-primary)]">{section.content.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {section.content.services?.map((service: any, index: number) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                    {service.icon_url && <img src={service.icon_url} alt="" className="w-16 h-16 mx-auto mb-4" />}
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      case 'Gallery':
         return (
          <section key={section.id} className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-serif font-bold mb-12 text-[var(--business-primary)]">{section.content.title}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {section.content.images?.map((img: string, index: number) => (
                  <div key={index} className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                    <img src={img} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      case 'CTA':
         return (
          <section key={section.id} className="py-16 bg-[var(--business-secondary)] text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-serif font-bold mb-6">{section.content.title}</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">{section.content.subtitle}</p>
              {section.content.cta_text && (
                <a href={section.content.cta_link || '#'} className="inline-block bg-white text-[var(--business-secondary)] px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-50 transition shadow-lg">
                  {section.content.cta_text}
                </a>
              )}
            </div>
          </section>
         );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Business Header (Optional if using global nav, but good for dedicated feel) */}
      <div className="bg-[var(--business-primary)] text-white py-2 px-4 text-sm flex justify-between items-center">
        <div className="flex items-center gap-4">
          {business.contact_phone && <span className="flex items-center gap-1"><FaPhone size={12}/> {business.contact_phone}</span>}
          {business.contact_email && <span className="flex items-center gap-1 hidden md:flex"><FaEnvelope size={12}/> {business.contact_email}</span>}
        </div>
        <div>
          <span>{business.name}</span>
        </div>
      </div>

      <main className="flex-grow">
        {sections.length > 0 ? (
          sections.map(renderSection)
        ) : (
          <div className="py-32 text-center text-gray-500">
            <p>Landing page content coming soon.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default BusinessLandingPage;
