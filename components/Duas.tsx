'use client';

import { motion } from 'framer-motion';

const duas = [
  {
    title: "1. Sehri Ki Dua (Roza Rakhne Ki Niyat)",
    arabic: "وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ",
    roman: "Wa bisawmi ghadin nawaiytu min shahri ramadan.",
    hindi: "व बि सोमि गदिन नवई तु मिन शहरि रमज़ान.",
    meaning: "Maine Ramzan ke kal ke roze ki niyat ki."
  },
  {
    title: "2. Iftar Ki Dua (Roza Kholne Ki Dua)",
    arabic: "اَللّٰهُمَّ لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَعَلَى رِزْقِكَ اَفْطَرْتُ",
    roman: "Allahumma inni laka sumtu wa bika aamantu wa alayka tawakkaltu wa ala rizq-ika-aftartu.",
    hindi: "अल्लाहुम्मा इन्नी लका सुम्तु व बिका आमन्तु व अलैका तवक्कलतु व अला रिज़क़िका अफ़तार्तु.",
    meaning: "Aye Allah! Maine Tere liye roza rakha, Tujh par iman laya, Tujh par bharosa kiya, aur Tere diye hue rizq se roza khola."
  }
];

export default function Duas() {
  return (
    <section id="duas" className="py-20 px-4 md:px-8 lg:px-12 islamic-gradient bg-black/40">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-white mb-4 leading-tight" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
            Ramadan Duas
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto rounded-full opacity-50" />
        </motion.div>

        <div className="space-y-16">
          {duas.map((dua, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 sm:p-10 md:p-12 rounded-[2.5rem] relative overflow-hidden group border border-white/5"
            >
              <h3 className="text-gold text-xl sm:text-2xl font-cinzel mb-10 text-center tracking-widest">{dua.title}</h3>
              
              <div className="space-y-12">
                <div className="text-center">
                  <p 
                    className="font-amiri text-white leading-[1.8] mb-4 text-center" 
                    dir="rtl"
                    style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)' }}
                  >
                    {dua.arabic}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {/* Roman English */}
                  <div className="bg-white/[0.03] p-6 rounded-3xl border border-white/5 transition-colors group-hover:bg-white/[0.05]">
                    <span className="text-gold text-[10px] uppercase tracking-[0.3em] mb-3 block font-cinzel opacity-70">Roman English</span>
                    <p className="text-sm sm:text-base text-gray-200 italic font-serif leading-relaxed">
                      {dua.roman}
                    </p>
                  </div>

                  {/* Hindi Pronunciation */}
                  <div className="bg-white/[0.03] p-6 rounded-3xl border border-white/5 transition-colors group-hover:bg-white/[0.05]">
                    <span className="text-gold text-[10px] uppercase tracking-[0.3em] mb-3 block font-cinzel opacity-70">Hindi Pronunciation</span>
                    <p className="text-base sm:text-lg text-gray-200 font-hindi leading-relaxed">
                      {dua.hindi}
                    </p>
                  </div>

                  {/* Meaning */}
                  <div className="md:col-span-2 bg-gold/[0.03] p-8 rounded-3xl border border-gold/10 transition-colors group-hover:bg-gold/[0.05]">
                    <span className="text-gold text-[10px] uppercase tracking-[0.3em] mb-3 block font-cinzel">Meaning</span>
                    <p className="text-base sm:text-xl text-gray-100 font-medium leading-relaxed">
                      {dua.meaning}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Accent - Retina safe sizing */}
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                  <path d="M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40L50 0Z" fill="#D4AF37" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
