'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/10 overflow-hidden mt-32">
      {/* Massive Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none select-none -z-10 opacity-5">
        <h2 className="text-[15rem] md:text-[25rem] font-display font-black text-white leading-none tracking-tighter">
          AICRON
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Logo */}
          <div className="text-2xl font-display font-bold tracking-wider">
            eventis.
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold tracking-widest uppercase text-gray-400">
            <a href="#speakers" className="hover:text-white transition-colors">Speakers</a>
            <a href="#agenda" className="hover:text-white transition-colors">Agenda</a>
            <a href="#venue" className="hover:text-white transition-colors">Venue</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 2.8 12.4 3 10.5c1 .5 2 .5 3 .5C3.3 9.4 2.3 6.1 4 4.5c2.6 3.2 6.6 5.2 11 5.5-.3-1.8.4-3.5 1.7-4.5 2-1.6 5-1.1 6.3 1 1-.2 1.9-.6 2.8-1.1-.3 1-.9 1.9-1.8 2.6z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 pt-8 border-t border-white/10">
          <p>All copyrights © eventis</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
            <a href="https://fremix.design/" className="hover:text-white transition-colors">Designed By Jitu Raut @fremix.design</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
