'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, AnimatePresence, useMotionValueEvent } from 'framer-motion';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Speaker', href: '/speakers' },
  { name: 'Agenda', href: '/agenda' },
  { name: 'Venue', href: '/venue' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isCompact, setIsCompact] = useState(false);
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY.current ? "down" : "up";
    
    // Top of page (within 50px): always expanded
    if (latest < 50) {
      setIsCompact(false);
    } 
    // Scrolling down: become compact (Image 4)
    else if (direction === "down" && latest > 50) {
      setIsCompact(true);
    }
    // Scrolling up: expand (Image 3)
    else if (direction === "up") {
      setIsCompact(false);
    }
    
    lastScrollY.current = latest;
  });

  return (
    <motion.header
      initial={false}
      animate={{
        width: isCompact ? '400px' : '100%',
        top: isCompact ? '24px' : '0px',
        borderRadius: isCompact ? '100px' : '0px',
        backgroundColor: isCompact ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0)',
        borderColor: isCompact ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)',
        y: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30,
      }}
      style={{
        left: '50%',
        x: '-50%',
        borderWidth: '1px',
        backdropFilter: isCompact ? 'blur(24px)' : 'blur(0px)',
      }}
      className={cn(
        "fixed z-[100] flex items-center justify-center overflow-hidden",
        isCompact ? "shadow-[0_20px_50px_rgba(0,0,0,0.5)]" : ""
      )}
    >
      <motion.div
        animate={{
          paddingLeft: isCompact ? '20px' : '60px',
          paddingRight: isCompact ? '20px' : '60px',
          paddingTop: isCompact ? '10px' : '28px',
          paddingBottom: isCompact ? '10px' : '28px',
        }}
        className="flex items-center justify-between w-full max-w-[1440px] relative"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group relative z-10 shrink-0">
          <span className="text-white text-3xl font-bold tracking-tighter lowercase transition-colors duration-300">
            eventis
          </span>
        </Link>

        {/* Navigation Links - Hidden in compact mode */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
          <AnimatePresence>
            {!isCompact && (
              <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="hidden md:flex items-center gap-3"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 rounded-full text-[14px] font-semibold text-white/90 transition-all backdrop-blur-md border border-white/5 whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
        </div>

        {/* CTA Button */}
        <motion.a
          href="/tickets"
          layout
          className={cn(
            "group flex items-center gap-3 bg-white rounded-full transition-all duration-300 shrink-0",
            isCompact ? "pl-5 pr-1.5 py-1.5" : "pl-6 pr-2 py-2"
          )}
        >
          <span className="text-black text-[14px] font-bold whitespace-nowrap">
            Get Ticket
          </span>
          <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </motion.a>
      </motion.div>

      {/* Decorative full-width line for top mode */}
      <AnimatePresence>
        {!isCompact && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10" 
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
}
