export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20cloud%20kitchen%20interior%20with%20professional%20chefs%20preparing%20fresh%20pizzas%20clean%20hygienic%20cooking%20environment%20stainless%20steel%20equipment%20organized%20workspace%20professional%20food%20preparation%20restaurant%20kitchen%20bright%20lighting%20quality%20standards&width=800&height=900&seq=about001&orientation=portrait"
                alt="Rapha Pizza House Kitchen"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#FFC300] text-[#8B0000] p-6 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold">₹49</p>
              <p className="text-sm font-semibold">Starting From</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-block bg-[#8B0000]/10 text-[#8B0000] px-4 py-2 rounded-full font-bold text-sm mb-4">
              ABOUT US
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#8B0000] mb-6">
              Welcome to Rapha Pizza House
            </h2>
            <div className="w-24 h-1 bg-[#FFC300] mb-6"></div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Rapha Pizza House is a cloud kitchen in Gajuwaka serving fresh, affordable pizzas starting at just <strong className="text-[#8B0000]">₹49 snacks</strong> and <strong className="text-[#8B0000]">₹100 pizzas</strong>.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              We focus on students, families, and office customers looking for hygienic and budget-friendly food with fast delivery.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#8B0000] rounded-full flex items-center justify-center">
                  <i className="ri-restaurant-2-line text-white text-xl"></i>
                </div>
                <span className="font-semibold text-gray-800">Fresh Food</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#8B0000] rounded-full flex items-center justify-center">
                  <i className="ri-shield-check-line text-white text-xl"></i>
                </div>
                <span className="font-semibold text-gray-800">Hygienic</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#8B0000] rounded-full flex items-center justify-center">
                  <i className="ri-price-tag-3-line text-white text-xl"></i>
                </div>
                <span className="font-semibold text-gray-800">Affordable</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#8B0000] rounded-full flex items-center justify-center">
                  <i className="ri-truck-line text-white text-xl"></i>
                </div>
                <span className="font-semibold text-gray-800">Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}