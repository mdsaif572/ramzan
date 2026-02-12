'use client';

import { motion } from 'framer-motion';
import { ramadanData } from '@/data/ramadanData';
import { Sunset, Sunrise } from 'lucide-react';

export default function Calendar() {
  return (
    <section id="calendar" className="py-20 px-4 md:px-8 lg:px-12 islamic-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-4"
        >
          <h2 className="font-cinzel text-white mb-4 leading-tight" style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)' }}>
            Ramadan Calendar 2026 – Prayagraj
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto rounded-full opacity-50" />
        </motion.div>

        <div className="w-full overflow-x-hidden">
          {/* Desktop Table Header */}
          <div className="hidden lg:grid grid-cols-5 gap-6 px-10 py-5 mb-4 text-gold font-cinzel text-xs uppercase tracking-[0.25em] border-b border-gold/10 font-bold">
            <span>Ramadan</span>
            <span>Date</span>
            <span>Day</span>
            <span>Sehri (Ends)</span>
            <span>Iftar (Starts)</span>
          </div>

          <div className="space-y-4">
            {ramadanData.map((day, index) => (
              <motion.div
                key={day.ramadanDay}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: (index % 10) * 0.03 }}
                className="glass-card group relative flex flex-col lg:grid lg:grid-cols-5 lg:items-center gap-4 lg:gap-6 px-6 py-6 lg:px-10 rounded-2xl transition-all duration-500 hover:border-gold/40 hover:bg-gold/[0.03] border border-white/5"
              >
                {/* Ramadan Day */}
                <div className="flex justify-between items-center lg:block">
                  <span className="text-gold text-[10px] font-cinzel lg:hidden uppercase tracking-widest opacity-60">Ramadan Day</span>
                  <div className="flex items-center gap-3">
                    <span className="text-white font-bold lg:font-cinzel text-xl lg:text-lg">
                      {day.ramadanDay}
                    </span>
                    <span className="lg:hidden text-gray-500 text-sm font-medium">/ 30</span>
                  </div>
                </div>

                {/* Date */}
                <div className="flex justify-between items-center lg:block">
                  <span className="text-gold text-[10px] font-cinzel lg:hidden uppercase tracking-widest opacity-60">Date</span>
                  <span className="text-gray-200 font-medium text-base">
                    {day.date}
                  </span>
                </div>

                {/* Day Name */}
                <div className="flex justify-between items-center lg:block">
                  <span className="text-gold text-[10px] font-cinzel lg:hidden uppercase tracking-widest opacity-60">Weekday</span>
                  <span className="text-gray-400 text-sm lg:text-base uppercase tracking-wider font-medium">
                    {day.dayName}
                  </span>
                </div>

                {/* Sehri */}
                <div className="flex items-center justify-between lg:block bg-white/5 lg:bg-transparent p-3 lg:p-0 rounded-xl">
                  <div className="flex items-center text-gold/80 gap-2 lg:hidden">
                    <Sunrise size={16} />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Sehri</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sunrise size={18} className="text-gold/60 hidden lg:block" />
                    <span className="text-white font-bold text-lg lg:text-base">{day.sehri}</span>
                  </div>
                </div>

                {/* Iftar */}
                <div className="flex items-center justify-between lg:block bg-gold/5 lg:bg-transparent p-3 lg:p-0 rounded-xl">
                  <div className="flex items-center text-gold gap-2 lg:hidden">
                    <Sunset size={16} />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Iftar</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sunset size={18} className="text-gold hidden lg:block" />
                    <span className="text-gold font-bold text-lg lg:text-base">{day.iftar}</span>
                  </div>
                </div>

                {/* Retina Row Glow */}
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
