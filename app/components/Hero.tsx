'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Silk from './Silk';

const rotatingWords = ['Designer', 'Inventor', 'Entrepreneur', 'Founder', 'Developer'];

export default function Hero() {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#000000] selection:bg-blue-600 selection:text-white"
    >
      {/* Silk WebGL Background */}
      <div className="absolute inset-0 z-0 opacity-70">
        <Silk
          speed={3}
          scale={0.7}
          color="#0a1edb"
          noiseIntensity={1}
          rotation={0}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 z-10 flex flex-col items-center justify-center flex-grow pt-24">
        {/* Giant Custom Futuristic Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center w-full flex flex-col items-center"
        >
          <h1 className="font-monument text-[16vw] md:text-[18vw] lg:text-[230px] leading-none tracking-[-0.08em] text-white uppercase select-none drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            AICRON
          </h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-12 flex items-center justify-center gap-3 text-xl md:text-3xl font-normal tracking-tight text-white/90"
          >
            <span className="opacity-50">Nexgen AI Summit for all the</span>
            <div className="relative h-[1.2em] min-w-[150px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[index]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="absolute left-0 font-semibold text-white inline-block"
                >
                  {rotatingWords[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Info Row */}
      <div className="w-full z-10 pb-16 px-12">
        <div className="flex items-center w-full max-w-[1800px] mx-auto gap-12">
          <div className="text-white text-xl font-medium tracking-tight whitespace-nowrap">
            14th October 2025
          </div>
          <div className="flex-grow h-[1px] bg-white/20" />
          <div className="text-white text-xl font-medium tracking-tight whitespace-nowrap">
            Marina Bay, Singapore
          </div>
          <div className="flex-grow h-[1px] bg-white/20" />
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating Badges */}
      <div className="fixed bottom-12 right-12 z-50 flex flex-col gap-4">
        <div className="bg-white text-black px-6 py-3 rounded-xl text-sm font-black uppercase tracking-wider shadow-2xl hover:scale-105 transition-all cursor-pointer">
          Get Free Template
        </div>
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 text-white px-6 py-2.5 rounded-xl text-[11px] font-bold flex items-center gap-3 shadow-2xl">
           <div className="w-5 h-5 bg-white rounded-md flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 256 256" fill="black">
                 <path d="M160,80V176a48,48,0,0,1-96,0V80a48,48,0,0,1,96,0Z"></path>
              </svg>
           </div>
           Made in Framer
        </div>
      </div>
    </section>
  );
}
