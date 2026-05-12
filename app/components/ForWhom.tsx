'use client';

import { motion } from 'framer-motion';

const targets = [
  {
    title: 'Business Man',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    )
  },
  {
    title: 'Investors',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2"/>
        <circle cx="12" cy="12" r="2"/>
        <path d="M6 12h.01M18 12h.01"/>
      </svg>
    )
  },
  {
    title: 'Founder',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 18V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v13"/>
        <path d="M5 18h14"/>
        <path d="M10 18v3"/>
        <path d="M14 18v3"/>
      </svg>
    )
  },
  {
    title: 'Developers',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    )
  }
];

export default function ForWhom() {
  return (
    <section id="for-whom" className="py-16 md:py-20 bg-black relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Label & Heading */}
        <div className="mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-[2px] bg-white/40" />
            <span className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">For Whom?</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight tracking-tight max-w-[900px]"
          >
            <span className="text-white">Who Should Definitely Attend the </span>
            <span className="text-white/30">AIcron Tech Summit</span>
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {targets.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="relative h-[280px] rounded-[32px] border border-white/10 flex flex-col items-center justify-center gap-6 group overflow-hidden transition-all duration-500 bg-white/[0.02] hover:bg-blue-600/10 hover:border-blue-600/50"
            >
              {/* Blue Glow on Hover */}
              <div className="absolute inset-0 bg-blue-600/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-white/40 group-hover:text-white transition-colors duration-500">
                 {item.icon}
              </div>
              <span className="relative z-10 text-white text-lg font-bold tracking-tight">
                {item.title}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Description Box */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full p-8 rounded-[24px] border border-white/5 bg-white/[0.01] backdrop-blur-sm"
        >
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-4xl">
            Unlock AI's potential to optimize operations, enhance customer experiences, drive data-informed 
            decisions, and stay competitive in a fast-evolving market.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
