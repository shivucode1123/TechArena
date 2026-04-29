'use client';

import { motion } from 'framer-motion';

const keywords = [
  "INNOVATION", "•", "NETWORKING", "•", "LEARNING", "•", 
  "DESIGN", "•", "TECHNOLOGY", "•", "FUTURE", "•",
  "INNOVATION", "•", "NETWORKING", "•", "LEARNING", "•", 
  "DESIGN", "•", "TECHNOLOGY", "•", "FUTURE", "•",
];

export default function Marquee() {
  return (
    <div className="relative w-full py-10 md:py-20 overflow-hidden bg-transparent">
      {/* Edge Gradients for fading effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-[200%] md:w-[150%]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="flex whitespace-nowrap items-center"
        >
          {keywords.map((word, index) => (
            <span
              key={index}
              className={`mx-4 md:mx-8 font-display text-4xl md:text-6xl font-bold ${
                word === '•' ? 'text-primary' : 'text-white/10 hover:text-white/40 transition-colors cursor-default'
              }`}
            >
              {word}
            </span>
          ))}
          {/* Duplicate set for seamless looping */}
          {keywords.map((word, index) => (
            <span
              key={`dup-${index}`}
              className={`mx-4 md:mx-8 font-display text-4xl md:text-6xl font-bold ${
                word === '•' ? 'text-primary' : 'text-white/10 hover:text-white/40 transition-colors cursor-default'
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
