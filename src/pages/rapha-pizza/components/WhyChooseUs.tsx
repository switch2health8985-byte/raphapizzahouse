export default function WhyChooseUs() {
  const features = [
    {
      icon: 'ri-leaf-line',
      title: 'Freshly Prepared',
      description: 'Every pizza is made fresh to order with quality ingredients',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: 'ri-star-smile-line',
      title: 'Premium Ingredients',
      description: 'We use only the finest and freshest ingredients',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: 'ri-price-tag-3-line',
      title: 'Affordable Pricing',
      description: 'Best quality at budget-friendly prices starting ₹49',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: 'ri-time-line',
      title: 'Fast Delivery',
      description: 'Quick delivery within 3-4 kms radius',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Hygienic Kitchen',
      description: 'Maintained with highest hygiene standards',
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#8B0000] mb-4">
            Why Choose Us?
          </h2>
          <div className="w-24 h-1 bg-[#FFC300] mx-auto mb-4"></div>
          <p className="text-gray-700 text-lg">
            What Makes Rapha Pizza House Special
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer border border-gray-100"
            >
              {/* Icon */}
              <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                <i className={`${feature.icon} text-3xl text-white`}></i>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-[#8B0000] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-[#FFC300]/20 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#8B0000] to-[#A00000] rounded-3xl p-12 shadow-2xl">
          <h3 className="font-serif text-4xl font-bold text-white mb-4">
            Ready to Order?
          </h3>
          <p className="text-white/90 text-lg mb-8">
            Experience the best budget pizza in Gajuwaka
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#FFC300] text-[#8B0000] px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-xl hover:scale-105 whitespace-nowrap cursor-pointer">
              <i className="ri-phone-fill mr-2"></i>
              Call Now: 8985624073
            </button>
            <button className="bg-white text-[#8B0000] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#FFC300] transition-all duration-300 shadow-xl hover:scale-105 whitespace-nowrap cursor-pointer">
              <i className="ri-whatsapp-fill mr-2"></i>
              WhatsApp Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}