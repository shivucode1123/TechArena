'use client';

import { motion } from 'framer-motion';

const sponsors = [
  { 
    name: 'NVIDIA', 
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
    )
  },
  { 
    name: 'OpenAI', 
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16">
        <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
      </svg>
    )
  },
  { 
    name: 'Google', 
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16">
        <path d="M12.48 10.92v3.28h4.78c-.19 1.06-1.18 3.12-4.78 3.12-3.11 0-5.64-2.58-5.64-5.76s2.53-5.76 5.64-5.76c1.77 0 2.96.76 3.63 1.41l2.59-2.5c-1.66-1.55-3.82-2.5-6.22-2.5C6.48 2.21 2 6.59 2 12s4.48 9.79 10 9.79c5.76 0 9.58-4.05 9.58-9.75 0-.66-.07-1.17-.15-1.67h-8.95z"/>
      </svg>
    )
  },
  { 
    name: 'Meta', 
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16">
        <path d="M20.23 6.24c-1.49-1.49-3.92-1.49-5.41 0l-1.82 1.82-1.82-1.82c-1.49-1.49-3.92-1.49-5.41 0-1.49 1.49-1.49 3.92 0 5.41l1.82 1.82-1.82 1.82c-1.49 1.49-1.49 3.92 0 5.41 1.49 1.49 3.92 1.49 5.41 0l1.82-1.82 1.82 1.82c1.49 1.49 3.92 1.49 5.41 0 1.49-1.49 1.49-3.92 0-5.41l-1.82-1.82 1.82-1.82c1.49-1.49 1.49-3.92 0-5.41z"/>
      </svg>
    )
  },
  { 
    name: 'Microsoft', 
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16">
        <path d="M2 2h9v9H2V2zm11 0h9v9h-9V2zM2 13h9v9H2v-9zm11 0h9v9h-9v-9z"/>
      </svg>
    )
  },
  { 
    name: 'Tesla', 
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/>
      </svg>
    )
  },
  { 
    name: 'Apple', 
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .76-3.27.82-1.31.05-2.31-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
    )
  },
  { 
    name: 'Anthropic', 
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16">
        <path d="M12 2L2 22h20L12 2zm0 4l7.5 14H4.5L12 6z"/>
      </svg>
    )
  },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-10 h-[2px] bg-white" />
            <span className="text-white text-sm font-bold uppercase tracking-[0.2em]">Sponsorship</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold leading-[1.1] tracking-tight max-w-[1000px]"
          >
            <span className="text-white">Meet our sponsors who help to </span>
            <span className="text-white/30">bring this event live</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sponsors.map((sponsor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-[140px] md:h-[180px] rounded-[32px] bg-white/[0.03] border border-white/5 flex flex-col items-center justify-center group hover:border-blue-500/30 transition-all px-4"
            >
              <div className="text-blue-500 opacity-60 group-hover:opacity-100 transition-opacity mb-3">
                {sponsor.icon}
              </div>
              <span className="text-white/40 group-hover:text-white transition-colors text-xs font-bold uppercase tracking-widest text-center">
                {sponsor.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
