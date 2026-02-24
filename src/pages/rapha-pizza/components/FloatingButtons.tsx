export default function FloatingButtons() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/918985624073?text=Hi%20Rapha%20Pizza%20House!%20I%20want%20to%20order', '_blank');
  };

  const handleOrderNow = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 left-6 w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 z-50 flex items-center justify-center hover:scale-110 animate-pulse cursor-pointer"
        aria-label="WhatsApp"
      >
        <i className="ri-whatsapp-fill text-3xl"></i>
      </button>

      {/* Floating Order Now Button */}
      <button
        onClick={handleOrderNow}
        className="fixed bottom-6 right-6 bg-[#FFC300] text-[#8B0000] px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-[#8B0000] hover:text-white transition-all duration-300 z-50 hover:scale-105 whitespace-nowrap cursor-pointer"
      >
        <i className="ri-shopping-cart-fill mr-2"></i>
        Order Now
      </button>
    </>
  );
}