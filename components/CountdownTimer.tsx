'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-1 sm:mx-2 md:mx-4">
      <div className="glass-card w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 flex items-center justify-center rounded-xl md:rounded-2xl mb-2 relative overflow-hidden group border border-white/5 transition-all duration-300 hover:border-gold/30">
        <div className="absolute inset-0 bg-gold opacity-0 group-hover:opacity-5 transition-opacity" />
        <span className="text-xl sm:text-2xl md:text-5xl font-bold text-white font-cinzel tracking-tighter">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-[10px] sm:text-xs text-gold/60 uppercase tracking-[0.2em] font-bold">{label}</span>
    </div>
  );

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="flex items-center justify-center"
    >
      <TimeUnit value={timeLeft.days} label="Days" />
      <div className="text-gold/40 text-xl md:text-4xl font-light mb-8 mx-0.5 sm:mx-1">:</div>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <div className="text-gold/40 text-xl md:text-4xl font-light mb-8 mx-0.5 sm:mx-1">:</div>
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <div className="text-gold/40 text-xl md:text-4xl font-light mb-8 mx-0.5 sm:mx-1">:</div>
      <TimeUnit value={timeLeft.seconds} label="Secs" />
    </motion.div>
  );
}
