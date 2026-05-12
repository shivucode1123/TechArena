'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  { src: '/images/pyramid.png', alt: '3D Pyramid' },
  { src: '/images/cube.png', alt: '3D Cube' },
  { src: '/images/stacked.png', alt: '3D Stacked Planes' },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#000000] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Label & Heading Row */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-[2px] bg-white/40" />
            <span className="text-white/40 text-sm font-bold uppercase tracking-[0.2em]">About AIcron</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-[72px] font-bold leading-[1.1] tracking-tight max-w-[1100px]"
          >
            <span className="text-white">Why You Absolutely Should Attend </span>
            <span className="text-white/30">AIcron Tech Summit</span>
          </motion.h2>
        </div>

        {/* Content Section: Images Row & Description Row */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Images Row - Horizontal line */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-row gap-4 md:gap-5 flex-wrap lg:flex-nowrap"
          >
            {images.map((img, i) => (
              <div 
                key={i} 
                className="relative w-[140px] h-[140px] md:w-[200px] md:h-[200px] lg:w-[220px] lg:h-[220px] rounded-2xl overflow-hidden bg-white/5 border border-white/5 group flex-shrink-0"
              >
                <Image 
                  src={img.src} 
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 140px, 220px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </motion.div>

          {/* Description Text - Smaller & Pure White */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-[540px] flex flex-col justify-between self-stretch"
          >
            <div className="space-y-5">
              <p className="text-white text-[13px] md:text-[14px] lg:text-[15px] leading-relaxed font-normal opacity-90">
                The AIcron Tech Summit is the ultimate gathering for tech enthusiasts, industry leaders, 
                and innovators to delve into the world of AI, machine learning, and the future of 
                emerging technologies. This summit offers a unique opportunity to hear from top 
                experts, engage in insightful discussions, and explore groundbreaking AI innovations. 
                Whether you're a startup founder, developer.
              </p>
              <p className="text-white text-[13px] md:text-[14px] lg:text-[15px] leading-relaxed font-normal opacity-90">
                You'll have the chance to explore real-world use cases, witness cutting-edge demos, 
                and connect with others who are driving change in the tech world. Be part of the 
                conversation that's shaping the future.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
