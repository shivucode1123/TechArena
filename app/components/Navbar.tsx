'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CyberGlitchText } from './CyberGlitchText';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass rounded-full px-4 sm:px-6 py-3 flex items-center justify-between relative border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity z-10 flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo/site_logo.jpeg" alt="TechArena Logo" className="h-8 w-8 sm:h-10 sm:w-10 object-cover rounded-full" />
            <span className="text-xl sm:text-2xl font-display font-bold tracking-tight text-white hidden lg:block">
              <CyberGlitchText text="TechArena." />
            </span>
          </Link>

          <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center space-x-1 sm:space-x-2 bg-white/5 border border-white/10 rounded-full p-1 ml-auto md:ml-0 z-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </motion.nav>
  );
}
