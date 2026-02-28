export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#8B0000] to-[#6B0000] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="font-serif text-3xl font-bold mb-4">
              Rapha Pizza House
            </h3>
            <p className="text-white/80 mb-4">
              Best Budget Pizza in Gajuwaka. Fresh, Hygienic & Pocket Friendly.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/918985624073" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#FFC300] hover:text-[#8B0000] transition-all duration-300 cursor-pointer">
                <i className="ri-whatsapp-fill text-xl"></i>
              </a>
              <a href="tel:8985624073" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#FFC300] hover:text-[#8B0000] transition-all duration-300 cursor-pointer">
                <i className="ri-phone-fill text-xl"></i>
              </a>
              <a href="#menu" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#FFC300] hover:text-[#8B0000] transition-all duration-300 cursor-pointer">
                <i className="ri-restaurant-2-fill text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-white/80 hover:text-[#FFC300] transition-colors cursor-pointer">
                  Menu
                </a>
              </li>
              <li>
                <a href="#combos" className="text-white/80 hover:text-[#FFC300] transition-colors cursor-pointer">
                  Combo Offers
                </a>
              </li>
              <li>
                <a href="#offers" className="text-white/80 hover:text-[#FFC300] transition-colors cursor-pointer">
                  Grand Opening Offers
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-[#FFC300] transition-colors cursor-pointer">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-[#FFC300] transition-colors cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Info</h4>
            <div className="space-y-3 text-white/80">
              <p className="flex items-start gap-2">
                <i className="ri-map-pin-fill text-[#FFC300] mt-1"></i>
                <span>Sivababa Nilayam, Dr.No.10-1-57<br />Gajuwaka, Visakhapatnam – 530026</span>
              </p>
              <p className="flex items-center gap-2">
                <i className="ri-phone-fill text-[#FFC300]"></i>
                <span>9108162047 / 8985624703</span>
              </p>
              <p className="flex items-center gap-2">
                <i className="ri-time-fill text-[#FFC300]"></i>
                <span>11:00 AM – 11:00 PM</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/80 text-center md:text-left">
            © {currentYear} Rapha Pizza House – Gajuwaka. All Rights Reserved.
          </p>
          <a 
            href="https://readdy.ai/?ref=logo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/60 hover:text-[#FFC300] transition-colors text-sm cursor-pointer"
          >
            Powered by Readdy
          </a>
        </div>
      </div>
    </footer>
  );
}