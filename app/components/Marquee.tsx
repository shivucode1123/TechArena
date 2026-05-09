'use client';

import { motion } from 'framer-motion';

const keywords = [
  "ARTIFICIAL INTELLIGENCE", "•", "NEURAL NETWORKS", "•", "DEEP LEARNING", "•", 
  "QUANTUM COMPUTING", "•", "ROBOTICS", "•", "FUTURE TECH", "•",
  "ARTIFICIAL INTELLIGENCE", "•", "NEURAL NETWORKS", "•", "DEEP LEARNING", "•", 
  "QUANTUM COMPUTING", "•", "ROBOTICS", "•", "FUTURE TECH", "•",
];

export default function Marquee() {
  return (
    <div className="relative w-full py-12 md:py-24 overflow-hidden bg-black/50 backdrop-blur-sm border-y border-white/5">
      <div className="flex w-[200%] md:w-[150%]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
          className="flex whitespace-nowrap items-center"
        >
          {keywords.map((word, index) => (
            <span
              key={index}
              className={`mx-6 md:mx-12 font-black text-4xl md:text-7xl tracking-tighter ${
                word === '•' ? 'text-blue-500' : 'text-white/20'
              }`}
            >
              {word}
            </span>
          ))}
          {/* Duplicate set for seamless looping */}
          {keywords.map((word, index) => (
            <span
              key={`dup-${index}`}
              className={`mx-6 md:mx-12 font-black text-4xl md:text-7xl tracking-tighter ${
                word === '•' ? 'text-blue-500' : 'text-white/20'
              }`}
            >
              {word}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

