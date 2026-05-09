'use client';

import { motion } from 'framer-motion';

const sponsors = [
  { name: 'NVIDIA', tier: 'Titan' },
  { name: 'OPENAI', tier: 'Titan' },
  { name: 'ANTHROPIC', tier: 'Strategic' },
  { name: 'MICROSOFT', tier: 'Strategic' },
  { name: 'GOOGLE CLOUD', tier: 'Partner' },
  { name: 'DEEPMIND', tier: 'Partner' },
  { name: 'HUGGING FACE', tier: 'Partner' },
  { name: 'META AI', tier: 'Partner' },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 md:py-40 relative z-10 bg-black overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-blue-500"></div>
            <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">The Backbone</span>
            <div className="w-8 h-[1px] bg-blue-500"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
            Global Partners
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sponsors.map((sponsor, index) => {
            const isTitan = sponsor.tier === 'Titan';
            const isStrategic = sponsor.tier === 'Strategic';
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white/5 border flex flex-col items-center justify-center p-8 md:p-12 rounded-[2.5rem] transition-all duration-700 group relative overflow-hidden ${
                  isTitan 
                    ? 'col-span-2 border-white/10 hover:border-blue-500 shadow-[0_0_50px_rgba(37,99,235,0.1)]' 
                    : isStrategic 
                      ? 'col-span-2 sm:col-span-1 border-white/5 hover:border-blue-400/50' 
                      : 'border-white/5 hover:border-white/20'
                }`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-blue-600/10 to-transparent" />
                
                <h3 className={`font-black text-white/20 group-hover:text-white transition-all duration-700 relative z-10 tracking-tighter grayscale group-hover:grayscale-0 ${
                  isTitan ? 'text-4xl md:text-6xl' : isStrategic ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
                }`}>
                  {sponsor.name}
                </h3>
                
                <div className="mt-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] uppercase tracking-widest text-white/20 font-black group-hover:text-blue-500 group-hover:border-blue-500/50 transition-all">
                  {sponsor.tier}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

