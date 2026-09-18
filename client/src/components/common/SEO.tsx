import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  noindex?: boolean;
  ogType?: string;
  ogImage?: string;
  jsonLd?: object | object[];
}

const DOMAIN = 'https://alca.in';

const DEFAULT_TITLE = 'ALCA | Luxury Decorative, exclusive & premium product Exporter & Supplier from India';
const DEFAULT_DESCRIPTION =
  'ALCA is a trusted exporter and supplier of handcrafted decorative products, exclusive products, high-quality products, flower products, premium products, coffee products and luxury gift products from Maharashtra, India.';
const DEFAULT_KEYWORDS =
  'decorative product exporter india, exclusive product supplier india, high-quality product exporter, premium product manufacturer india, flower product supplier, coffee product exporter, luxury product exporter, gift product supplier, handmade product exporter india, premium products manufacturer, product exporter maharashtra, product supplier india';
const DEFAULT_OG_IMAGE = `${DOMAIN}https://placehold.co/600x600/185e33/FFF?text=ALCA+Product`;

export const SEO: React.FC<SEOProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonicalPath = '',
  noindex = false,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  jsonLd,
}) => {
  const canonicalUrl = canonicalPath
    ? `${DOMAIN}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`
    : DOMAIN;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Robots Directive */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}

      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="ALCA" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

