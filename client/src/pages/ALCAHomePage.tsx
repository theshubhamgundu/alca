import { useNavigate } from 'react-router-dom'

const businesses = [
  {
    path: '/celebrations',
    number: '01',
    name: 'WOW Magical Celebrations',
    category: 'Events & Decor',
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=85',
    accent: '#8B1A1A',
  },
  {
    path: '/catering',
    number: '02',
    name: 'Veg & Nonveg Catering',
    category: 'Food & Catering',
    image:
      'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=85',
    accent: '#8A570F',
  },
  {
    path: '/crafts',
    number: '03',
    name: 'Customised Crafts & Gifts',
    category: 'Gifts & Crafts',
    image:
      'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1000&q=85',
    accent: '#68408F',
  },
  {
    path: '/designer-studio',
    number: '04',
    name: 'Designer Studio',
    category: 'Fashion & Design',
    image:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85',
    accent: '#2F6042',
  },
  {
    path: '/beauty',
    number: '05',
    name: 'Luxury Makeup & Beauty',
    category: 'Beauty & Wellness',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=85',
    accent: '#934467',
  },
  {
    path: '/supply',
    number: '06',
    name: 'Supply & Manufacturing',
    category: 'Supply & Manufacturing',
    image:
      'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1000&q=85',
    accent: '#527332',
  },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <main className="min-h-screen bg-[#F7F5EF] text-[#171A17]">

      {/* HEADER */}
      <header className="border-b border-black/[0.08]">
        <div className="mx-auto flex h-[76px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">

          <div>
            <div className="font-serif text-[28px] leading-none tracking-[-0.05em]">
              ALCA
            </div>

            <div className="mt-1 text-[7px] uppercase tracking-[0.28em] text-black/40">
              Businesses
            </div>
          </div>

          <a
            href="tel:9010995180"
            className="text-[9px] uppercase tracking-[0.18em] text-black/60 transition hover:text-black"
          >
            Contact
          </a>

        </div>
      </header>


      {/* TITLE */}
      <section className="mx-auto max-w-[1500px] px-5 pb-14 pt-16 sm:px-8 lg:px-12 lg:pb-20 lg:pt-24">

        <div className="flex items-end justify-between">

          <div>
            <div className="mb-5 text-[8px] uppercase tracking-[0.3em] text-black/40">
              ALCA
            </div>

            <h1 className="font-serif text-[52px] leading-[0.9] tracking-[-0.045em] sm:text-[72px] lg:text-[92px]">
              Our businesses
            </h1>
          </div>

          <span className="hidden text-[9px] uppercase tracking-[0.2em] text-black/35 sm:block">
            06
          </span>

        </div>

      </section>


      {/* BUSINESS LIST */}
      <section className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

        <div className="border-t border-black/[0.12]">

          {businesses.map((business) => (

            <button
              key={business.path}
              onClick={() => navigate(business.path)}
              className="group relative grid w-full items-center border-b border-black/[0.12] py-7 text-left transition-all duration-500 hover:px-3 sm:py-8 lg:grid-cols-[70px_1fr_360px_90px] lg:gap-8 lg:py-10"
            >

              {/* NUMBER */}
              <span className="mb-3 text-[9px] tracking-[0.2em] text-black/35 lg:mb-0">
                {business.number}
              </span>


              {/* NAME */}
              <div>

                <div className="mb-2 text-[8px] uppercase tracking-[0.22em] text-black/40">
                  {business.category}
                </div>

                <h2 className="font-serif text-[31px] leading-none tracking-[-0.025em] sm:text-[38px] lg:text-[46px]">
                  {business.name}
                </h2>

              </div>


              {/* IMAGE */}
              <div className="relative mt-6 h-[190px] overflow-hidden sm:h-[250px] lg:mt-0 lg:h-[170px]">

                <img
                  src={business.image}
                  alt={business.name}
                  className="h-full w-full object-cover grayscale-[15%] transition duration-700 group-hover:scale-105"
                />

                <div
                  className="absolute bottom-0 left-0 h-[4px] w-full"
                  style={{ backgroundColor: business.accent }}
                />

              </div>


              {/* ARROW */}
              <div className="absolute right-0 top-8 flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.12] text-lg transition-all duration-300 group-hover:border-black group-hover:bg-[#171A17] group-hover:text-white lg:static lg:h-12 lg:w-12">
                ↗
              </div>

            </button>

          ))}

        </div>

      </section>


      {/* FOOTER */}
      <footer className="mx-auto max-w-[1500px] px-5 pb-10 pt-20 sm:px-8 lg:px-12 lg:pt-28">

        <div className="flex flex-col justify-between gap-8 border-t border-black/[0.1] pt-7 sm:flex-row sm:items-center">

          <div>
            <div className="font-serif text-2xl tracking-[-0.04em]">
              ALCA
            </div>

            <p className="mt-2 text-[8px] uppercase tracking-[0.22em] text-black/35">
              6 businesses
            </p>
          </div>

          <div className="flex gap-8 text-[8px] uppercase tracking-[0.2em] text-black/40">
            <a
              href="tel:9010995180"
              className="transition hover:text-black"
            >
              9010995180
            </a>

            <a
              href="https://wa.me/919010995180"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-black"
            >
              WhatsApp ↗
            </a>
          </div>

        </div>

      </footer>

    </main>
  )
}