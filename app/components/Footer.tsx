'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Silk from './Silk';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/5 overflow-hidden">
      {/* Silk Background perfectly symmetrical */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Silk
          speed={4.4}
          scale={0.6}
          color="#050d7b"
          noiseIntensity={1.5}
          rotation={0.3}
        />
        {/* Gradients to blend Silk smoothly into the footer content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        
        {/* Central blue glow for extra premium feel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-blue-600/20 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Top Row: Social + Nav */}
        <div className="flex flex-col md:flex-row justify-between items-start pt-20 pb-16 gap-10">
          {/* Social */}
          <div>
            <p className="text-white/50 font-black uppercase tracking-[0.35em] text-xs mb-8">Social</p>
            <div className="flex gap-5">
              {[
                { label: 'FB', href: '#' },
                { label: 'IG', href: '#' },
                { label: 'LI', href: '#' },
                { label: 'X',  href: '#' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links Pill */}
          <div className="flex flex-wrap gap-2 bg-white/5 backdrop-blur-2xl border border-white/10 p-2 rounded-full self-start">
            {['Speakers', 'Agenda', 'Venue', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="px-7 py-3 rounded-full text-sm font-black uppercase tracking-[0.15em] text-white/50 hover:text-white hover:bg-white/10 transition-all"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom Row: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center py-10 gap-4">
          <div className="flex flex-wrap gap-10 text-sm font-black uppercase tracking-[0.15em] text-white/40">
            <Link href="#" className="hover:text-white transition-colors">All copyrights @eventis</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms and Conditions</Link>
          </div>
          <p className="text-sm font-black uppercase tracking-[0.15em] text-white/40">
            Designed By Jitu Raut @fremix.design
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Massive AICRON Branding */}
        <div className="relative w-full overflow-hidden flex justify-center mt-[-2vw]">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-black leading-none tracking-tighter whitespace-nowrap uppercase select-none pointer-events-none text-white"
            style={{
              fontSize: 'clamp(80px, 22vw, 320px)',
              opacity: 0.9,
              textShadow: '0 40px 120px rgba(59,130,246,0.5)',
              WebkitTextStroke: '1px rgba(255,255,255,0.1)',
            }}
          >
            AICRON
          </motion.h2>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </footer>
  );
}
