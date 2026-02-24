const combos = [
  {
    name: 'Student Combo',
    price: '₹149',
    items: '7 inch Veg Pizza + Fries',
    badge: 'Best Seller',
    image: 'https://readdy.ai/api/search-image?query=student%20meal%20combo%20with%20small%20vegetarian%20pizza%20and%20crispy%20french%20fries%20on%20wooden%20tray%20professional%20food%20photography%20appetizing%20presentation%20simple%20clean%20background%20restaurant%20quality%20budget%20friendly%20meal%20delicious%20look&width=800&height=600&seq=combo001&orientation=landscape',
    color: 'from-green-500 to-green-600'
  },
  {
    name: 'Non-Veg Combo',
    price: '₹199',
    items: '7 inch Non-Veg Pizza + Fries',
    badge: 'Popular',
    image: 'https://readdy.ai/api/search-image?query=chicken%20pizza%20combo%20with%20small%20pepperoni%20pizza%20and%20golden%20french%20fries%20on%20wooden%20board%20professional%20food%20photography%20appetizing%20presentation%20simple%20clean%20background%20restaurant%20quality%20value%20meal%20delicious%20look&width=800&height=600&seq=combo002&orientation=landscape',
    color: 'from-red-500 to-red-600'
  },
  {
    name: 'Family Combo',
    price: '₹299',
    items: '9 inch Veg + Chicken Buns',
    badge: 'Family Pack',
    image: 'https://readdy.ai/api/search-image?query=family%20meal%20combo%20with%20large%20vegetarian%20pizza%20and%20chicken%20buns%20on%20wooden%20table%20professional%20food%20photography%20appetizing%20presentation%20simple%20clean%20background%20restaurant%20quality%20sharing%20meal%20delicious%20look&width=800&height=600&seq=combo003&orientation=landscape',
    color: 'from-orange-500 to-orange-600'
  },
  {
    name: 'Party Combo',
    price: '₹399',
    items: '9 inch Non-Veg + Fries + 2 Chicken Buns',
    badge: 'Party Special',
    image: 'https://readdy.ai/api/search-image?query=party%20feast%20combo%20with%20large%20chicken%20pizza%20french%20fries%20and%20chicken%20buns%20on%20wooden%20platter%20professional%20food%20photography%20appetizing%20presentation%20simple%20clean%20background%20restaurant%20quality%20celebration%20meal%20delicious&width=800&height=600&seq=combo004&orientation=landscape',
    color: 'from-purple-500 to-purple-600'
  }
];

export default function Combos() {
  return (
    <section id="combos" className="py-20 px-6 bg-gradient-to-b from-[#FFF8F0] to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#FFC300] text-[#8B0000] px-6 py-2 rounded-full font-bold text-sm mb-4">
            <i className="ri-star-fill mr-2"></i>
            VALUE DEALS
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#8B0000] mb-4">
            Combo Offers
          </h2>
          <div className="w-24 h-1 bg-[#FFC300] mx-auto mb-4"></div>
          <p className="text-gray-700 text-lg">
            Save More with Our Special Combos
          </p>
        </div>

        {/* Combos Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {combos.map((combo, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
            >
              {/* Golden Badge */}
              <div className={`absolute top-4 left-4 z-10 bg-gradient-to-r ${combo.color} text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2`}>
                <i className="ri-medal-fill text-lg"></i>
                {combo.badge}
              </div>

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={combo.image}
                  alt={combo.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-serif text-3xl font-bold text-[#8B0000] mb-3">
                  {combo.name}
                </h3>
                <p className="text-gray-700 text-lg mb-4 flex items-start gap-2">
                  <i className="ri-restaurant-line text-[#FFC300] text-xl mt-1"></i>
                  <span>{combo.items}</span>
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Only at</p>
                    <span className="text-4xl font-bold text-[#8B0000]">
                      {combo.price}
                    </span>
                  </div>
                  <button className="bg-[#FFC300] text-[#8B0000] px-8 py-3 rounded-full font-bold text-lg hover:bg-[#8B0000] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}