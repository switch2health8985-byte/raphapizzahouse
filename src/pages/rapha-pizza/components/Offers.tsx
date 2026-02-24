export default function Offers() {
  const offers = [
    {
      icon: 'ri-gift-2-fill',
      title: 'Buy 1 Get 1',
      description: 'on 7 inch Veg Pizza',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: 'ri-percent-fill',
      title: '40% OFF',
      description: 'up to ₹80 on online orders',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: 'ri-cake-3-fill',
      title: 'Free Dip',
      description: 'for first 100 customers',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="offers" className="py-20 px-6 bg-[#8B0000] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-[#FFC300] text-[#8B0000] px-8 py-3 rounded-full font-bold text-lg mb-6 animate-pulse shadow-xl">
            <i className="ri-fire-fill text-2xl"></i>
            <span>Opening Week Special – Limited Time Only!</span>
            <i className="ri-fire-fill text-2xl"></i>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">
            Grand Opening Offers
          </h2>
          <div className="w-24 h-1 bg-[#FFC300] mx-auto mb-4"></div>
          <p className="text-white/90 text-xl font-semibold">
            Valid from March 1 – March 7
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-2xl group cursor-pointer"
            >
              <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${offer.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                <i className={`${offer.icon} text-4xl text-white`}></i>
              </div>
              <h3 className="text-3xl font-bold text-[#8B0000] mb-3">
                {offer.title}
              </h3>
              <p className="text-gray-700 text-lg font-semibold">
                {offer.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-[#FFC300] text-[#8B0000] px-12 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-[#8B0000] transition-all duration-300 shadow-2xl hover:scale-105 whitespace-nowrap cursor-pointer">
            <i className="ri-shopping-cart-fill mr-2"></i>
            Grab These Offers Now!
          </button>
        </div>
      </div>
    </section>
  );
}