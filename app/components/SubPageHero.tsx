'use client';

import { motion } from 'framer-motion';
import Silk from './Silk';

interface SubPageHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function SubPageHero({ title, subtitle, description }: SubPageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Top Hero Section with Massive Text */}
      <div className="relative h-[60vh] flex items-end justify-center overflow-hidden">
         {/* Silk WebGL Background */}
         <div className="absolute inset-0 z-0">
           <Silk
             speed={4.4}
             scale={0.6}
             color="#050d7b"
             noiseIntensity={1.5}
             rotation={0.3}
           />
           {/* Gradient fade to black at bottom */}
           <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black" />
         </div>

         {/* Massive Background Text */}
         <div className="relative z-10 w-full flex justify-center pointer-events-none select-none mb-0 px-4">
           <motion.h2 
             initial={{ opacity: 0, scale: 0.8, y: 100 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
             className="text-[11vw] md:text-[13vw] lg:text-[14vw] font-black text-white leading-none tracking-tighter whitespace-nowrap uppercase drop-shadow-[0_0_80px_rgba(255,255,255,0.3)]"
           >
             {title}
           </motion.h2>
         </div>
      </div>

      {/* Description Section */}
      <div className="max-w-7xl mx-auto px-6 py-32 relative z-20">
        <div className="flex flex-col items-start gap-12 max-w-5xl relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-6"
          >
            <div className="w-20 h-[3px] bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)]" />
            <span className="text-white font-black uppercase tracking-[0.4em] text-base">{subtitle}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tighter max-w-3xl"
          >
            {description}
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
