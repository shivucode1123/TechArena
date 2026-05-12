'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function VideoSection() {
  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-video w-full rounded-[48px] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(59,130,246,0.2)] group"
        >
          {/* Main Hero Image */}
          <Image 
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000" 
            alt="AI Summit Event"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            priority
          />

          {/* Cinematic Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 z-10 pointer-events-none" />
          
          {/* Subtle Hover Light Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-blue-500/[0.05] z-10 pointer-events-none" />

          {/* Text Content - Positioned TOP LEFT */}
          <div className="absolute inset-0 z-20 flex flex-col justify-start items-start p-10 md:p-16 lg:p-20 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-600/10 backdrop-blur-3xl border border-blue-500/20 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <span className="text-blue-200 text-[10px] font-bold uppercase tracking-[0.3em]">Summit Preview</span>
              </div>
              
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tighter leading-none">
                Witness the Future <br />of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Artificial Intelligence</span>
              </h3>
              
              <p className="text-white/50 text-sm md:text-base lg:text-lg max-w-lg leading-relaxed font-light">
                Experience the raw energy of high-octane keynotes and deep-dive technical sessions from the world's leading AI pioneers.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
