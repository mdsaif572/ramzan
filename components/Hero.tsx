'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import CountdownTimer from '@/components/CountdownTimer';

export default function Hero() {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: string; duration: string }[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      duration: `${Math.random() * 3 + 2}s`,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden islamic-gradient pt-20">
      {/* Animated Stars */}
      <div className="absolute inset-0 z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              '--duration': star.duration,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Crescent Moon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-20 right-10 md:right-40 w-32 h-32 md:w-48 md:h-48 rounded-full bg-white moonlight-glow z-10"
        style={{
          boxShadow: 'inset -20px -20px 50px rgba(0,0,0,0.5), 0 0 80px rgba(255,255,255,0.2)',
          clipPath: 'circle(50% at 50% 50%)',
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[#020617] rounded-full translate-x-1/4 -translate-y-1/4" />
      </motion.div>

      {/* Floating Lantern */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-10 md:left-40 z-10 hidden md:block"
      >
        <svg width="60" height="100" viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 0L35 10H25L30 0Z" fill="#D4AF37" />
          <rect x="15" y="10" width="30" height="70" rx="4" fill="#D4AF37" fillOpacity="0.2" stroke="#D4AF37" strokeWidth="2" />
          <path d="M15 25H45M15 40H45M15 55H45M15 70H45" stroke="#D4AF37" strokeWidth="1" />
          <circle cx="30" cy="45" r="10" fill="#D4AF37" fillOpacity="0.4">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
          <path d="M20 80L10 100H50L40 80H20Z" fill="#D4AF37" />
        </svg>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 w-full max-w-screen-xl mx-auto">
        <h2 className="text-gold text-sm sm:text-base md:text-xl lg:text-2xl font-cinzel mb-6 tracking-[0.3em] uppercase opacity-80 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Ramadan 2026 Begins In
        </h2>

        <div className="mb-12">
          <CountdownTimer targetDate="2026-02-18T00:00:00+05:30" />
        </div>

        <div className="mt-8 md:mt-16 animate-in fade-in zoom-in duration-1000 delay-300">
          <h1 className="leading-tight font-bold font-cinzel text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}>
            Ramadan <br className="sm:hidden" /> Calendar 2026
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-xl lg:text-2xl font-light tracking-wide max-w-2xl mx-auto">
            Prayagraj (Allahabad), Uttar Pradesh, India
          </p>
        </div>
      </div>

      {/* Smooth Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[2px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
