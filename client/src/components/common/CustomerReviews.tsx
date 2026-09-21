import React from 'react';

const customerReviews = [
  {
    name: 'Amulya Kulkarni',
    location: 'Mumbai, Maharashtra',
    metric: '⭐ Verified Customer',
    review: 'ALCA platform provides excellent service with fast delivery and top-quality products. Highly recommended!',
    avatar: 'https://placehold.co/600x600/185e33/FFF?text=ALCA+Product',
  },
  {
    name: 'Ajay Deshmukh',
    location: 'Ulhasnagar, Maharashtra',
    metric: '⭐ Wholesale Buyer',
    review: 'Ordered products in bulk for corporate needs. Professional service and excellent quality!',
    avatar: 'https://placehold.co/600x600/185e33/FFF?text=ALCA+Product',
  },
  {
    name: 'Shridhar Sawant',
    location: 'Solapur, Maharashtra',
    metric: '⭐ Business Partner',
    review: 'ALCA delivered our bulk order on time with exquisite packaging. Premium Indian quality!',
    avatar: 'https://placehold.co/600x600/185e33/FFF?text=ALCA+Product',
  },
  {
    name: 'Bhargavi Joshi',
    location: 'Nagpur, Maharashtra',
    metric: '⭐ Verified Customer',
    review: 'The premium products from ALCA are exceptional. Great quality and professional service.',
    avatar: 'https://placehold.co/600x600/185e33/FFF?text=ALCA+Product',
  },
  {
    name: 'Avinash Patil',
    location: 'Pune, Maharashtra',
    metric: '⭐ Event Organizer',
    review: 'We used ALCA products for our event. The guests were impressed by the quality and craftsmanship.',
    avatar: 'https://placehold.co/600x600/185e33/FFF?text=ALCA+Product',
  },
  {
    name: 'Harshini Katta',
    location: 'Nashik, Maharashtra',
    metric: '⭐ Verified Customer',
    review: 'Love the exclusive products! High quality with excellent service. Will definitely order again.',
    avatar: 'https://placehold.co/600x600/185e33/FFF?text=ALCA+Product',
  },
  {
    name: 'Sai Kiran Wagh',
    location: 'Ulhasnagar, Maharashtra',
    metric: '⭐ Bulk Customer',
    review: 'Hand-crafted products with amazing finish. Very fast delivery and top quality packaging.',
    avatar: 'https://placehold.co/600x600/185e33/FFF?text=ALCA+Product',
  },
  {
    name: 'Suma Mahajan',
    location: 'Thane, Maharashtra',
    metric: '⭐ Verified Customer',
    review: 'The premium products are exceptional. Creates a wonderful experience with professional service.',
    avatar: 'https://placehold.co/600x600/185e33/FFF?text=ALCA+Product',
  },
  {
    name: 'Prafful More',
    location: 'Kolhapur, Maharashtra',
    metric: '⭐ Event Decorator',
    review: 'Outstanding traditional design products for special occasions. Highly recommended for wholesale buyers.',
    avatar: 'https://placehold.co/600x600/185e33/FFF?text=ALCA+Product',
  },
  {
    name: 'Pavani Gawde',
    location: 'Chhatrapati Sambhajinagar, Maharashtra',
    metric: '⭐ Verified Customer',
    review: '100% natural high-quality products with excellent service. Professional and reliable!',
    avatar: 'https://placehold.co/600x600/185e33/FFF?text=ALCA+Product',
  },
  {
    name: 'Jalender Shinde',
    location: 'Navi Mumbai, Maharashtra',
    metric: '⭐ Corporate Customer',
    review: 'Extremely polite customer support and exceptional quality products. Very satisfied!',
    avatar: 'https://placehold.co/600x600/185e33/FFF?text=ALCA+Product',
  },
];

// Duplicate for continuous seamless marquee loop
const marqueeItems = [...customerReviews, ...customerReviews];

const CustomerReviews: React.FC = () => {
  return (
    <section className="py-12 bg-[#FBF6ED] border-y border-[#E6DACB] overflow-hidden w-full">
      <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
        <p className="text-[11px] font-sans font-bold text-[#C79A56] uppercase tracking-[0.25em]">
          CLIENT TESTIMONIALS
        </p>
        <h2 className="text-2xl font-serif font-bold text-[#2A1C22] mt-1">
          What Customers & Exporters Say About ALCA
        </h2>
      </div>

      {/* Moving Marquee Single Row */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee gap-5 px-4 flex">
          {marqueeItems.map((customer, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 border border-[#E6DACB] shadow-xs flex flex-col justify-between w-[300px] md:w-[340px] flex-shrink-0 hover:shadow-md transition-shadow"
            >
              <div>
                <span className="inline-block text-[11px] font-semibold text-[#5C2333] bg-[#5C2333]/10 px-2.5 py-1 rounded-md mb-3">
                  {customer.metric}
                </span>
                <p className="text-xs text-gray-700 leading-relaxed line-clamp-3 italic">
                  "{customer.review}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 mt-3 border-t border-gray-100">
                <img
                  src={encodeURI(customer.avatar)}
                  alt={customer.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#C79A56] flex-shrink-0 shadow-xs"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(customer.name)}&background=5C2333&color=fff`;
                  }}
                />
                <div>
                  <p className="text-xs font-bold text-[#2A1C22] leading-snug">{customer.name}</p>
                  <p className="text-[10px] text-gray-500">{customer.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
