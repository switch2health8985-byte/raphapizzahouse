export default function Delivery() {
  const deliveryFeatures = [
    {
      icon: 'ri-map-pin-range-line',
      title: 'Delivery within 3–4 kms',
      description: 'Fast delivery to your doorstep'
    },
    {
      icon: 'ri-shopping-bag-3-line',
      title: 'Minimum order ₹149',
      description: 'Low minimum order value'
    },
    {
      icon: 'ri-gift-line',
      title: 'Free delivery above ₹250',
      description: 'No delivery charges on orders above ₹250'
    },
    {
      icon: 'ri-store-2-line',
      title: 'Self pickup available',
      description: 'Pick up your order and save more'
    }
  ];

  return (
    <section id="delivery" className="py-20 px-6 bg-gradient-to-b from-white to-[#FFF8F0]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#8B0000] mb-4">
            Delivery Information
          </h2>
          <div className="w-24 h-1 bg-[#FFC300] mx-auto mb-4"></div>
          <p className="text-gray-700 text-lg">
            Quick & Convenient Delivery Options
          </p>
        </div>

        {/* Delivery Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {deliveryFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#8B0000] to-[#A00000] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <i className={`${feature.icon} text-4xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-[#8B0000] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Delivery Image */}
        <div className="mt-16 relative rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
          <img
            src="https://readdy.ai/api/search-image?query=food%20delivery%20person%20on%20scooter%20delivering%20pizza%20boxes%20fast%20delivery%20service%20professional%20uniform%20helmet%20thermal%20bag%20urban%20street%20background%20motion%20blur%20speed%20efficient%20service%20modern%20delivery%20concept&width=1200&height=500&seq=delivery001&orientation=landscape"
            alt="Fast Delivery"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B0000]/80 to-transparent flex items-center">
            <div className="text-white p-12">
              <h3 className="font-serif text-4xl font-bold mb-4">
                Fast & Fresh Delivery
              </h3>
              <p className="text-xl mb-6">
                Your pizza reaches you hot and fresh!
              </p>
              <button className="bg-[#FFC300] text-[#8B0000] px-8 py-3 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-lg whitespace-nowrap cursor-pointer">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}