'use client';

import { motion } from 'framer-motion';

const keywords = [
  "ARTIFICIAL INTELLIGENCE", "•", "NEURAL NETWORKS", "•", "DEEP LEARNING", "•", 
  "QUANTUM COMPUTING", "•", "ROBOTICS", "•", "FUTURE TECH", "•",
];

export default function Marquee() {
  return (
    <div className="relative w-full py-8 overflow-hidden bg-transparent">
      <div className="flex w-full">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          className="flex whitespace-nowrap items-center"
        >
          {keywords.map((word, index) => (
            <span
              key={index}
              className="mx-8 md:mx-16 font-bold text-2xl md:text-4xl lg:text-5xl tracking-tight text-white"
            >
              {word}
            </span>
          ))}
          {keywords.map((word, index) => (
            <span
              key={`dup-${index}`}
              className="mx-8 md:mx-16 font-bold text-2xl md:text-4xl lg:text-5xl tracking-tight text-white"
            >
              {word}
            </span>
          ))}
          {keywords.map((word, index) => (
            <span
              key={`dup2-${index}`}
              className="mx-8 md:mx-16 font-bold text-2xl md:text-4xl lg:text-5xl tracking-tight text-white"
            >
              {word}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
