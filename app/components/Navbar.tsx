'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Speakers', href: '#speakers' },
  { name: 'Agenda', href: '#agenda' },
  { name: 'Venue', href: '#venue' },
  { name: 'Contact', href: '#contact' },
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
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-full px-6 py-3 flex items-center justify-between border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <Link href="/" className="text-2xl font-display font-bold tracking-tight text-white hover:text-gray-300 transition-colors">
            TechArena<span className="text-primary">.</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1 bg-white/5 border border-white/10 rounded-full p-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-5 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/team" className="px-5 py-2 rounded-full text-sm font-medium text-primary hover:text-white hover:bg-white/10 transition-all duration-300">
              Our Team
            </Link>
          </div>

          <Link
            href="#tickets"
            className="bg-primary hover:bg-white hover:text-black text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-[0_0_20px_rgba(51,102,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
          >
            Get Ticket
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
