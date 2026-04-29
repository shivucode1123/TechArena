'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const roles = ['Designers', 'Developers', 'Creators', 'Visionaries'];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const { scrollY } = useScroll();

  // Parallax effects for floating elements
  const y1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -250]);
  const y4 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Abstract Floating Elements (Glass Cubes/Spheres) */}
      <motion.div
        style={{ y: y1 }}
        animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-40 left-10 md:left-32 w-24 h-24 glass rounded-2xl rotate-12 hidden md:block border border-white/20 shadow-[0_0_30px_rgba(51,102,255,0.3)]"
      />
      <motion.div
        style={{ y: y2 }}
        animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-40 right-10 md:right-32 w-32 h-32 glass rounded-full hidden md:block border border-white/20 shadow-[0_0_40px_rgba(136,0,255,0.3)]"
      />
      <motion.div
        style={{ y: y3 }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-gradient-to-tr from-primary/10 to-accent/10 rounded-full blur-[120px] -z-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 w-full text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <p className="text-gray-300 font-medium tracking-widest uppercase text-xs sm:text-sm">
              The Ultimate Design & Tech Summit
            </p>
          </div>
          
          <div className="h-16 md:h-24 mb-4 overflow-hidden flex justify-center items-center">
            <span className="text-3xl md:text-6xl font-display font-medium text-white mr-4">For</span>
            <motion.div
              key={currentRoleIndex}
              initial={{ y: 50, opacity: 0, rotateX: -90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              exit={{ y: -50, opacity: 0, rotateX: 90 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="text-3xl md:text-6xl font-display font-bold text-gradient-primary origin-center"
            >
              {roles[currentRoleIndex]}
            </motion.div>
          </div>

          <h1 className="text-6xl sm:text-8xl md:text-[12rem] font-display font-black leading-none tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/30 drop-shadow-2xl">
            EVENTIS
          </h1>
          
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-16">
            Join industry leaders, visionaries, and creators for a three-day immersive experience redefining the future of digital product design.
          </p>
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="flex flex-col md:flex-row items-center justify-between mt-12 md:mt-24 border-t border-white/10 pt-10"
        >
          <div className="text-center md:text-left mb-8 md:mb-0 group cursor-default">
            <p className="text-white font-display font-bold text-2xl transition-all duration-300 group-hover:text-primary">14-16 Oct 2025</p>
            <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest">Date & Time</p>
          </div>
          
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-16 h-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white/10 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-pointer"
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
              });
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </motion.div>

          <div className="text-center md:text-right mt-8 md:mt-0 group cursor-default">
            <p className="text-white font-display font-bold text-2xl transition-all duration-300 group-hover:text-accent">Marina Bay, SG</p>
            <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest">Location</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
