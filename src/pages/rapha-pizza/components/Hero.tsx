export default function Hero() {
  const handleSwiggyZomato = () => {
    alert('Opening Swiggy & Zomato links...');
  };

  const handleCall = () => {
    window.location.href = 'tel:9108162047';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/918985624073?text=Hi%20Rapha%20Pizza%20House!%20I%20want%20to%20order', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=premium%20delicious%20cheese%20stretch%20pizza%20with%20melted%20mozzarella%20fresh%20basil%20tomatoes%20on%20wooden%20board%20professional%20food%20photography%20warm%20lighting%20appetizing%20restaurant%20quality%20italian%20style%20margherita%20pizza%20close%20up%20shot%20with%20steam%20rising%20golden%20crust%20vibrant%20colors%20mouth%20watering%20presentation%20rustic%20background%20culinary%20art%20gourmet%20style&width=1920&height=1080&seq=hero001&orientation=landscape"
          alt="Premium Pizza"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Grand Opening Badge */}
        <div className="inline-flex items-center gap-2 bg-[#FFC300] text-[#8B0000] px-6 py-3 rounded-full font-bold text-lg mb-6 animate-bounce shadow-lg">
          <i className="ri-fire-fill text-2xl"></i>
          <span>Grand Opening – March 1st</span>
          <i className="ri-fire-fill text-2xl"></i>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
          Rapha Pizza House
        </h1>

        {/* Tagline */}
        <p className="text-3xl md:text-4xl text-[#FFC300] font-bold mb-4">
          Best Budget Pizza in Gajuwaka
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-white text-lg md:text-xl">
          <div className="flex items-center gap-2">
            <i className="ri-checkbox-circle-fill text-[#FFC300] text-2xl"></i>
            <span className="font-semibold">Fresh</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-checkbox-circle-fill text-[#FFC300] text-2xl"></i>
            <span className="font-semibold">Hygienic</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-checkbox-circle-fill text-[#FFC300] text-2xl"></i>
            <span className="font-semibold">Pocket Friendly</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={handleSwiggyZomato}
            className="bg-[#FFC300] text-[#8B0000] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#8B0000] hover:text-white transition-all duration-300 shadow-xl hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-restaurant-2-fill mr-2"></i>
            Order Now on Swiggy & Zomato
          </button>
          <button
            onClick={handleCall}
            className="bg-white text-[#8B0000] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#8B0000] hover:text-white transition-all duration-300 shadow-xl hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-phone-fill mr-2"></i>
            Call & WhatsApp Order
          </button>
        </div>

        {/* Contact Info */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto shadow-2xl">
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div>
              <p className="text-[#8B0000] font-bold mb-2 flex items-center gap-2">
                <i className="ri-phone-line"></i>
                Phone Numbers:
              </p>
              <p className="text-gray-800 font-bold text-xl">9108162047</p>
              <p className="text-gray-800 font-bold text-xl">8985624703</p>
            </div>
            <div>
              <p className="text-[#8B0000] font-bold mb-2 flex items-center gap-2">
                <i className="ri-map-pin-line"></i>
                Address:
              </p>
              <p className="text-gray-800 text-sm leading-relaxed">
                Sivababa Nilayam, Dr.No.10-1-57<br />
                Gajuwaka, Visakhapatnam – 530026
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-[#8B0000] text-white px-4 py-2 rounded-full font-semibold whitespace-nowrap">
              Minimum Order: ₹149
            </span>
            <span className="bg-[#FFC300] text-[#8B0000] px-4 py-2 rounded-full font-semibold whitespace-nowrap">
              Free Delivery above ₹250
            </span>
          </div>
        </div>

        {/* Direct Order Encouragement */}
        <div className="mt-8 text-white text-xl font-bold animate-pulse">
          <i className="ri-gift-fill text-[#FFC300] mr-2"></i>
          Order Direct & Save More 🍕
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-white text-3xl"></i>
      </div>
    </section>
  );
}