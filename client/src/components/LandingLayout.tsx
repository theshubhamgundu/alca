import NavBar from './NavBar'

interface Service { icon: string; title: string; desc: string }
interface Feature { icon: string; text: string }
interface LandingLayoutProps {
  businessName: string
  fullName: string
  tagline: string
  subtagline: string
  category: string
  accent: string
  accentRgb: string
  phone: string
  handle: string
  footerSlogan: string
  heroIcon: React.ReactNode
  services: Service[]
  features: Feature[]
  whyUs: { stat: string; label: string }[]
}

const categoryImages: Record<string, string[]> = {
  'Events & Decor': ['https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=85', 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=700&q=85', 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=700&q=85'],
  'Food & Catering': ['https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=700&q=85', 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=700&q=85', 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=700&q=85'],
  'Gifts & Crafts': ['https://images.unsplash.com/photo-1602523961358-f9f03dd557db?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=85', 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=700&q=85', 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=700&q=85'],
  'Fashion & Design': ['https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=85', 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=700&q=85', 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=85'],
  'Beauty & Wellness': ['https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=85', 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=85', 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=85'],
  'Supply & Manufacturing': ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=85', 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=700&q=85', 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=700&q=85'],
}

export default function LandingLayout({
  businessName, fullName, tagline, subtagline, category, accent, accentRgb,
  phone, handle, footerSlogan, services, features,
}: LandingLayoutProps) {
  const images = categoryImages[category] || categoryImages['Supply & Manufacturing']
  const process = ['Share your brief', 'Shape the details', 'Enjoy the result']

  return (
    <div className="business-page" style={{ '--accent': accent, '--accent-rgb': accentRgb } as React.CSSProperties}>
      <NavBar businessName={businessName} accent={accent} />
      <main>
        <section className="store-hero page-width">
          <div className="hero-copy">
            <div className="breadcrumb">ALCA <span>/</span> {category}</div>
            <h1>{fullName}</h1>
            <p className="hero-tagline">{tagline}</p>
            <p className="hero-description">{subtagline}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={`https://wa.me/91${phone}`} target="_blank" rel="noopener noreferrer">Start an enquiry <span aria-hidden="true">→</span></a>
              <a className="button button-secondary" href={`tel:${phone}`}>Call {phone} <span aria-hidden="true">↗</span></a>
            </div>
            <div className="hero-assurances"><span>Tailored service</span><span>Trusted locally</span><span>Quality assured</span></div>
          </div>
          <figure className="hero-image"><img src={images[0]} alt={`${category} by ${businessName}`} /><figcaption><span>{category}</span><strong>Made around you</strong></figcaption></figure>
        </section>
        <section className="page-width collection-section">
          <div className="section-heading"><div><div className="section-kicker">The collection</div><h2>Made for your moment</h2></div><p>Explore considered services and thoughtful details, designed around what you need.</p></div>
          <div className="service-grid">{services.map((service, index) => <article className="service-card" key={service.title}><div className="service-card-number">{String(index + 1).padStart(2, '0')}</div><h3>{service.title}</h3><p>{service.desc}</p><a className="service-link" style={{ color: accent }} href={`https://wa.me/91${phone}`} target="_blank" rel="noopener noreferrer">Enquire now <span aria-hidden="true">→</span></a></article>)}</div>
        </section>
        <section className="process-section"><div className="page-width process-inner"><div className="section-heading"><div><div className="section-kicker">How it works</div><h2>Simple from first hello.</h2></div><p>Clear steps, thoughtful guidance, and a finished result that feels exactly right.</p></div><div className="process-grid">{process.map((step, index) => <div className="process-card" key={step}><span>0{index + 1}</span><strong>{step}</strong><p>{['Tell us what you need, when you need it, and what matters most.', 'We recommend the right options, refine the details, and keep you informed.', 'We deliver with care and stay close until everything is complete.'][index]}</p></div>)}</div></div></section>
        <section className="page-width principles-section"><div className="principles-image"><img src={images[1]} alt={`${category} detail`} loading="lazy" /></div><div className="principles-copy"><div className="section-kicker">Why clients return</div><h2>Good work feels personal.</h2><p>From the first conversation to the final detail, we combine local understanding with dependable execution.</p><div className="principles-list">{features.slice(0, 6).map((feature, index) => <div key={feature.text}><span>{String(index + 1).padStart(2, '0')}</span><strong>{feature.text}</strong></div>)}</div></div></section>
        <section className="page-width inquiry-section"><div className="inquiry-inner"><div><div className="section-kicker light">Personal service</div><h2>Let’s make it yours.</h2><p>Tell us what you have in mind and we’ll help shape the right experience.</p></div><a className="button button-light" href={`https://wa.me/91${phone}`} target="_blank" rel="noopener noreferrer">Chat on WhatsApp <span aria-hidden="true">↗</span></a></div></section>
      </main>
      <footer className="site-footer"><div className="page-width footer-grid"><div><div className="footer-name">ALCA</div><p>{footerSlogan}</p></div><div><div className="footer-label">Enquiries</div><a href={`tel:${phone}`}>{phone}</a><div className="footer-handle">{handle}</div></div><div><div className="footer-label">ALCA family</div><a href="/">Explore all businesses <span aria-hidden="true">↗</span></a></div></div><div className="page-width footer-bottom"><span>© 2024 ALCA</span><span>Made with care, built on trust.</span></div></footer>
    </div>
  )
}
