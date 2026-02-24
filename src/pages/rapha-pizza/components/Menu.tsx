const menuItems = [
  {
    category: '7 Inch Pizzas',
    items: [
      {
        name: 'Veg Pizza',
        price: '₹100',
        image: 'https://readdy.ai/api/search-image?query=delicious%20vegetarian%20pizza%20with%20colorful%20bell%20peppers%20mushrooms%20olives%20onions%20corn%20fresh%20mozzarella%20cheese%20golden%20crust%20professional%20food%20photography%20appetizing%20presentation%20simple%20clean%20background%20restaurant%20quality%20italian%20style%20top%20view%20vibrant%20colors&width=600&height=600&seq=veg7001&orientation=squarish',
        type: 'veg'
      },
      {
        name: 'Non-Veg Pizza',
        price: '₹150',
        image: 'https://readdy.ai/api/search-image?query=mouth%20watering%20chicken%20pizza%20with%20grilled%20chicken%20pieces%20pepperoni%20melted%20cheese%20herbs%20golden%20crust%20professional%20food%20photography%20appetizing%20presentation%20simple%20clean%20background%20restaurant%20quality%20italian%20style%20top%20view%20delicious%20look&width=600&height=600&seq=nonveg7001&orientation=squarish',
        type: 'non-veg'
      }
    ]
  },
  {
    category: '9 Inch Pizzas',
    items: [
      {
        name: 'Veg Pizza',
        price: '₹140',
        image: 'https://readdy.ai/api/search-image?query=large%20vegetarian%20pizza%20with%20fresh%20vegetables%20tomatoes%20capsicum%20mushrooms%20olives%20sweet%20corn%20mozzarella%20cheese%20golden%20brown%20crust%20professional%20food%20photography%20appetizing%20simple%20background%20restaurant%20quality%20top%20view%20colorful%20presentation&width=600&height=600&seq=veg9001&orientation=squarish',
        type: 'veg'
      },
      {
        name: 'Non-Veg Pizza',
        price: '₹200',
        image: 'https://readdy.ai/api/search-image?query=large%20chicken%20pepperoni%20pizza%20with%20meat%20toppings%20grilled%20chicken%20melted%20mozzarella%20herbs%20golden%20crust%20professional%20food%20photography%20appetizing%20presentation%20simple%20background%20restaurant%20quality%20italian%20style%20top%20view%20delicious&width=600&height=600&seq=nonveg9001&orientation=squarish',
        type: 'non-veg'
      }
    ]
  },
  {
    category: 'Snacks',
    items: [
      {
        name: 'Chicken Bun',
        price: '₹49',
        image: 'https://readdy.ai/api/search-image?query=golden%20brown%20chicken%20bun%20soft%20bread%20filled%20with%20spicy%20chicken%20filling%20professional%20food%20photography%20appetizing%20presentation%20simple%20clean%20background%20restaurant%20quality%20indian%20style%20snack%20delicious%20look%20warm%20lighting&width=600&height=600&seq=chickenbun001&orientation=squarish',
        type: 'non-veg'
      },
      {
        name: 'French Fries',
        price: '₹69',
        image: 'https://readdy.ai/api/search-image?query=crispy%20golden%20french%20fries%20in%20red%20paper%20cone%20perfectly%20fried%20potato%20fries%20professional%20food%20photography%20appetizing%20presentation%20simple%20clean%20background%20restaurant%20quality%20fast%20food%20style%20delicious%20look%20warm%20lighting&width=600&height=600&seq=fries001&orientation=squarish',
        type: 'veg'
      }
    ]
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#8B0000] mb-4">
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-[#FFC300] mx-auto mb-4"></div>
          <p className="text-gray-700 text-lg">
            Fresh, Delicious & Affordable
          </p>
        </div>

        {/* Menu Categories */}
        {menuItems.map((category, idx) => (
          <div key={idx} className="mb-16">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#8B0000] mb-8 text-center">
              {category.category}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Type Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                      item.type === 'veg' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-red-500 text-white'
                    }`}>
                      {item.type === 'veg' ? '🌱 VEG' : '🍗 NON-VEG'}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">
                      {item.name}
                    </h4>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-[#8B0000]">
                        {item.price}
                      </span>
                      <button className="bg-[#FFC300] text-[#8B0000] px-6 py-2 rounded-full font-bold hover:bg-[#8B0000] hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}