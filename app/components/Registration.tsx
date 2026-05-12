'use client';

import { motion } from 'framer-motion';

export default function Registration() {
  return (
    <section id="registration" className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-20 rounded-[60px] bg-gradient-to-br from-blue-600/20 to-purple-600/10 border border-white/10 overflow-hidden group"
        >
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(51,102,255,0.1),transparent_70%)] group-hover:scale-150 transition-transform duration-1000" />
          
          <h2 className="relative z-10 text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter">
            Join the <br />AI Revolution
          </h2>
          
          <p className="relative z-10 text-white/50 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Secure your spot at the most anticipated AI event of 2025. Limited tickets available.
          </p>
          
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-12 py-6 bg-white text-black rounded-2xl font-black text-xl uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-2xl">
              Register Now
            </button>
            <div className="text-white/30 font-bold uppercase tracking-widest text-sm">
              Early Bird ends in 12 days
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
