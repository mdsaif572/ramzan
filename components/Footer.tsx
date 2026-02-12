'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-gold/10 islamic-gradient">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-cinzel text-gold mb-4">Ramadan Calendar 2026</h2>
          <p className="text-gray-400 mb-6">Location: Prayagraj, Uttar Pradesh, India</p>
          
          <div className="flex justify-center space-x-6 mb-8">
             {/* Simple navigational links */}
             <a href="#calendar" className="text-gray-500 hover:text-gold transition-colors text-sm uppercase tracking-widest">Calendar</a>
             <a href="#duas" className="text-gray-500 hover:text-gold transition-colors text-sm uppercase tracking-widest">Duas</a>
          </div>

          <div className="text-gray-500 text-sm">
            Made with <span className="text-red-500">❤️</span> for Ramadan 2026
          </div>
          
          <div className="mt-8 text-[10px] text-gray-700 uppercase tracking-[0.5em]">
            © 2026 RAMADAN CALENDAR PROJECT
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
