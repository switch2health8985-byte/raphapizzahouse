export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-[#FFF8F0] to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#8B0000] mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-[#FFC300] mx-auto mb-4"></div>
          <p className="text-gray-700 text-lg">
            Get in Touch with Rapha Pizza House
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#8B0000] rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-phone-fill text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#8B0000] mb-3">
                    Call Us
                  </h3>
                  <a href="tel:8985624073" className="text-gray-700 text-lg hover:text-[#8B0000] transition-colors block mb-2 cursor-pointer">
                    8985624073
                  </a>
                  <a href="tel:9108162047" className="text-gray-700 text-lg hover:text-[#8B0000] transition-colors block cursor-pointer">
                    9108162047
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-whatsapp-fill text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#8B0000] mb-3">
                    WhatsApp Order
                  </h3>
                  <a 
                    href="https://wa.me/918985624073?text=Hi%20Rapha%20Pizza%20House!%20I%20want%20to%20order"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all duration-300 cursor-pointer"
                  >
                    <i className="ri-whatsapp-fill text-xl"></i>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#8B0000] rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-fill text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#8B0000] mb-3">
                    Visit Us
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Rapha Pizza House<br />
                    Sivababa Nilayam<br />
                    Dr.No.10-1-57<br />
                    Gajuwaka, Visakhapatnam – 530026
                  </p>
                </div>
              </div>
            </div>

            {/* Timing */}
            <div className="bg-gradient-to-r from-[#8B0000] to-[#A00000] rounded-2xl p-8 shadow-lg text-white">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-time-fill text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    Opening Hours
                  </h3>
                  <p className="text-white/90 text-lg">
                    Grand Opening: March 1st, 2026
                  </p>
                  <p className="text-white/90 text-lg">
                    Daily: 11:00 AM – 11:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.8!2d83.2!3d17.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQyJzAwLjAiTiA4M8KwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '600px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rapha Pizza House Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}