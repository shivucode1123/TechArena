'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const hostImages = [
  { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000' },
  { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000' },
  { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1000' },
];

export default function OurHost() {
  return (
    <section id="host" className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch">
          
          {/* Left Side: Text & Signature */}
          <div className="flex-1 flex flex-col justify-between py-2">
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-[2px] bg-white" />
                <span className="text-white text-sm font-bold uppercase tracking-[0.2em]">Our Host</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-[72px] font-bold leading-[1.1] tracking-tight text-white"
              >
                Meet Our Hosts: The Visionaries Behind <span className="text-white/30">Alcron Tech Summit</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                viewport={{ once: true }}
                className="text-white text-lg md:text-xl leading-relaxed max-w-lg"
              >
                The Alcron Tech Summit is brought to you by a team of passionate innovators and industry leaders. Our hosts are dedicated to shaping the future of technology by bringing together the brightest minds in AI, automation, and digital transformation.
              </motion.p>
            </div>

            {/* Signature Placeholder */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              viewport={{ once: true }}
              className="pt-12"
            >
              <span className="text-white text-6xl font-light font-serif italic">Jituraut</span>
            </motion.div>
          </div>

          {/* Right Side: Image Collage - Balanced Grid */}
          <div className="flex-1 grid grid-cols-2 gap-4">
             {hostImages.map((img, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="relative aspect-square rounded-[32px] overflow-hidden border border-white/10"
               >
                 <Image 
                   src={img.src} 
                   alt={`Host ${i}`}
                   fill
                   className="object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
