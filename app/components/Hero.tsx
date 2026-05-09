'use client';

import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Silk from './Silk';

export default function Hero() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black selection:bg-blue-600 selection:text-white"
    >
      {/* Silk WebGL Background */}
      <div className="absolute inset-0 z-0">
        <Silk
          speed={4.4}
          scale={0.6}
          color="#050d7b"
          noiseIntensity={1.5}
          rotation={0.3}
        />
        {/* Subtle dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] pointer-events-none" />
      </div>

      {/* 3D Glassy Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none perspective-[1000px]">
        {/* 3D Glass Cube/Rectangle */}
        <motion.div
          animate={{ 
            y: [0, -40, 0],
            rotateX: [0, 20, 0],
            rotateY: [0, 45, 0],
            rotateZ: [10, 20, 10],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ 
            x: mousePosition.x * 1.2, 
            y: mousePosition.y * 1.2,
            transformStyle: "preserve-3d"
          }}
          className="absolute top-[15%] left-[10%] w-48 h-48 md:w-64 md:h-64"
        >
          <div className="w-full h-full bg-white/[0.03] backdrop-blur-3xl border border-white/20 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[2.5rem]" />
            <div className="w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-2xl" />
            {/* Glossy highlight */}
            <div className="absolute top-4 left-8 w-20 h-2 bg-white/20 blur-sm rounded-full rotate-[-45deg]" />
          </div>
        </motion.div>

        {/* 3D Glass Sphere/Circle */}
        <motion.div
          animate={{ 
            y: [0, 60, 0],
            rotateX: [0, -30, 0],
            rotateY: [0, -45, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ 
            x: mousePosition.x * -0.8, 
            y: mousePosition.y * -0.8,
            transformStyle: "preserve-3d"
          }}
          className="absolute bottom-[10%] right-[10%] w-64 h-64 md:w-80 md:h-80"
        >
          <div className="w-full h-full bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_0_80px_rgba(37,99,235,0.1)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-white/5" />
            {/* Inner "3D" depth */}
            <div className="absolute inset-8 border border-white/5 rounded-full" />
            <div className="absolute top-1/4 left-1/4 w-full h-full bg-blue-500/5 blur-3xl" />
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 z-10 flex flex-col items-center md:items-start justify-center flex-grow">
        {/* Main Heading - Shifted down and left */}
        <motion.div
          initial={{ opacity: 0, y: 70, x: -20 }}
          animate={{ opacity: 1, y: 40, x: -10 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center md:text-left w-full relative"
        >
          <h1 className="font-display text-[14vw] md:text-[16vw] lg:text-[220px] font-black leading-none tracking-[-0.08em] text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.1)] uppercase whitespace-nowrap">
            AI CRON
          </h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-10 flex flex-col md:flex-row items-center md:items-start gap-4 text-xl md:text-4xl font-light uppercase tracking-[0.3em] text-white"
          >
            <span className="opacity-40">Nexgen AI Summit for all the</span>
            <div className="h-[1.2em] overflow-hidden relative min-w-[300px] text-blue-500 font-black tracking-normal">
              <motion.div
                animate={{ y: [0, -48, -96, -144, 0] }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: [0.76, 0, 0.24, 1],
                  times: [0, 0.25, 0.5, 0.75, 1]
                }}
                className="flex flex-col text-center md:text-left"
              >
                <span className="h-12 md:h-12">Innovators</span>
                <span className="h-12 md:h-12">Visionaries</span>
                <span className="h-12 md:h-12">Developers</span>
                <span className="h-12 md:h-12">Creators</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Info Row */}
      <div className="w-full max-w-[1400px] px-8 py-16 z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="group cursor-default">
          <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Launch Date</p>
          <div className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase">
            14th Oct 2025
          </div>
        </div>
        
        <div className="hidden md:block h-[1px] flex-grow mx-8 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="group cursor-default text-right">
          <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Location</p>
          <div className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase">
            Marina Bay, SG
          </div>
        </div>
      </div>

      {/* Badge */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-1 rounded-2xl flex items-center gap-4">
          <div className="bg-white text-black px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
            Get Tickets
          </div>
          <div className="pr-6 text-[10px] font-black text-white/40 uppercase tracking-widest hidden sm:block">
            Limited Seats
          </div>
        </div>
      </div>
    </section>
  );
}




