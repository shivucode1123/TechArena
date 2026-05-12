'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { question: "How can I register for the Alcron Tech Summit?" },
  { question: "Will the summit be available online for remote attendees?" },
  { question: "What is the dress code for the event?" },
  { question: "Can I submit my project or research for the summit?" },
  { question: "How can I become a sponsor or exhibitor at the event?" },
  { question: "Will there be opportunities for networking at the summit?" },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Side: Heading */}
          <div className="">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-10 h-[2px] bg-white" />
              <span className="text-white text-sm font-bold uppercase tracking-[0.2em]">Questions</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-[72px] font-bold leading-[1.1] tracking-tight text-white max-w-[500px]"
            >
              All the Important Details Before Attending <span className="text-white/30">Alcron Tech Summit</span>
            </motion.h2>
          </div>

          {/* Right Side: Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-[24px] border border-white/5 bg-white/[0.02] overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  className="w-full p-8 flex items-center justify-between text-left group"
                >
                  <span className="text-xl font-bold text-white/80 group-hover:text-white transition-colors">
                    {faq.question}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
