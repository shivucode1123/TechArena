'use client';

import { motion } from 'framer-motion';

const sponsors = [
  { name: 'TechNova', tier: 'Platinum' },
  { name: 'Quantum AI', tier: 'Platinum' },
  { name: 'CyberSys', tier: 'Gold' },
  { name: 'Nexus Corp', tier: 'Gold' },
  { name: 'DataFlow', tier: 'Silver' },
  { name: 'CloudPeak', tier: 'Silver' },
  { name: 'AeroSync', tier: 'Silver' },
  { name: 'OmniTech', tier: 'Silver' },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 md:py-32 relative z-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] translate-y-1/2 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24 flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-primary"></div>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary font-display font-bold tracking-widest uppercase text-sm">Supported By</p>
            <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-white max-w-2xl">
            Our Official Partners & Sponsors
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {sponsors.map((sponsor, index) => {
            const isPlatinum = sponsor.tier === 'Platinum';
            const isGold = sponsor.tier === 'Gold';
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass border flex flex-col items-center justify-center p-8 transition-all duration-500 group relative overflow-hidden ${
                  isPlatinum 
                    ? 'col-span-2 md:col-span-2 aspect-[2/1] border-white/20 hover:border-primary/50' 
                    : isGold 
                      ? 'col-span-2 md:col-span-2 aspect-[2/1] md:aspect-[2/1] border-white/10 hover:border-accent/40' 
                      : 'col-span-1 md:col-span-1 aspect-square border-white/5 hover:border-white/30'
                }`}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr ${
                  isPlatinum ? 'from-primary/20 to-transparent' : isGold ? 'from-accent/20 to-transparent' : 'from-white/10 to-transparent'
                }`} />
                
                {/* Placeholder Logo Typography */}
                <h3 className={`font-display font-black text-white/40 group-hover:text-white transition-colors duration-500 relative z-10 ${
                  isPlatinum ? 'text-4xl md:text-5xl' : isGold ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
                }`}>
                  {sponsor.name}
                </h3>
                
                <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest text-white/30 font-bold group-hover:text-white/60 transition-colors">
                  {sponsor.tier}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
