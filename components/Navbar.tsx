'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';

/**
 * PRODUCTION-READY RESPONSIVE NAVIGATION
 * - 100% Mobile First
 * - Hamburger menu for small devices
 * - Sticky & Blur effects optimized for Retina
 * - Touch friendly targets (min 44px)
 * - ARIA accessibility labels
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkGold, setIsDarkGold] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkGold(!isDarkGold);
    document.documentElement.classList.toggle('dark-gold');
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-4 md:px-8 ${
          scrolled || isMenuOpen ? 'bg-black/90 backdrop-blur-xl py-3 border-b border-gold/10' : 'bg-transparent py-5'
        }`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Brand Logo - Fluid sizing */}
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-gold font-cinzel text-lg sm:text-xl md:text-2xl font-bold tracking-tighter z-50"
          >
            RAMADAN <span className="text-white font-light">2026</span>
          </motion.a>

          {/* Desktop Navigation Link Cluster */}
          <div className="hidden lg:flex items-center space-x-10">
            {['Calendar', 'Duas'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="text-gray-300 hover:text-gold transition-colors uppercase text-[11px] font-bold tracking-[0.2em]"
              >
                {item}
              </motion.a>
            ))}
            
            {/* Theme Toggle - Retina safe sizing */}
            <button 
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="text-gold p-2.5 hover:bg-gold/10 rounded-full transition-all border border-transparent hover:border-gold/20 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {isDarkGold ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Location CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gold/10 border border-gold/30 text-gold px-7 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-all min-h-[44px]"
            >
              Prayagraj
            </motion.button>
          </div>

          {/* Mobile UI Controls */}
          <div className="flex lg:hidden items-center space-x-3">
            <button 
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="text-gold p-2 hover:bg-gold/10 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              {isDarkGold ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 z-50 min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-expanded={isMenuOpen}
              aria-label="Main Menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                    <X size={32} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                    <Menu size={32} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Overlay - Cross device safe */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'circOut' }}
            className="fixed inset-0 z-40 bg-[#020617] flex flex-col justify-center items-center px-10 lg:hidden overflow-hidden"
          >
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                <svg width="300" height="300" viewBox="0 0 100 100" fill="none">
                    <path d="M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40L50 0Z" fill="white" />
                </svg>
            </div>

            <div className="flex flex-col items-center space-y-10 text-center">
              {['Calendar', 'Duas'].map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl sm:text-5xl font-cinzel text-white active:text-gold hover:text-gold transition-colors tracking-tight"
                >
                  {item}
                </motion.a>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.5 }}
                className="pt-10 border-t border-gold/10 w-full max-w-[200px]"
              >
                <div className="text-gold uppercase tracking-[0.4em] text-[10px] mb-4 opacity-60">Location</div>
                <div className="text-xl sm:text-2xl text-white font-cinzel">Prayagraj, UP</div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
