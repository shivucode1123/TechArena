'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Speaker', href: '/speakers' },
  { name: 'Agenda', href: '/agenda' },
  { name: 'Venue', href: '/venue' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-8">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center justify-between transition-all duration-500 rounded-full px-6 py-3 border ${
          scrolled
            ? 'bg-black/70 backdrop-blur-2xl border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]'
            : 'bg-transparent border-transparent'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="text-xl font-black tracking-tighter text-white lowercase">
          eventis
        </Link>

        {/* Center Nav Links Pill */}
        <div className={`hidden md:flex items-center rounded-full border transition-all duration-500 ${
          scrolled
            ? 'bg-white/5 border-white/10'
            : 'bg-white/10 border-white/10 backdrop-blur-xl'
        }`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.15em] text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="/tickets"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-6 py-2.5 rounded-full font-black text-[11px] uppercase tracking-[0.15em] flex items-center gap-2.5 hover:bg-blue-600 hover:text-white transition-all shadow-xl"
        >
          Get Ticket
          <div className="w-5 h-5 bg-black/10 rounded-full flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
          </div>
        </motion.a>
      </motion.nav>
    </div>
  );
}
