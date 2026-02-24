import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Combos from './components/Combos';
import Offers from './components/Offers';
import About from './components/About';
import Delivery from './components/Delivery';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function RaphaPizza() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FFF8F0] min-h-screen">
      <Hero />
      <Menu />
      <Combos />
      <Offers />
      <About />
      <Delivery />
      <WhyChooseUs />
      <Contact />
      <Footer />
      <FloatingButtons />
      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 w-12 h-12 bg-[#8B0000] text-white rounded-full shadow-lg hover:bg-[#A00000] transition-all duration-300 z-40 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <i className="ri-arrow-up-line text-xl"></i>
        </button>
      )}
    </div>
  );
}