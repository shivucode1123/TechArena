'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 relative z-10 bg-black overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Column (Visuals) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
               {/* Animated Rings */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 border border-blue-500/20 rounded-full"
               />
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-8 border border-purple-500/10 rounded-full"
               />
               
               <div className="absolute inset-16 glass rounded-3xl flex items-center justify-center border border-white/10 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/5 animate-pulse" />
                  <svg width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500/50"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>
               </div>

               {/* Floating Badges */}
               <motion.div
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-0 right-0 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl"
               >
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 mb-2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                 <span className="text-xs font-bold text-white uppercase tracking-tighter">Global Event</span>
               </motion.div>
               
               <motion.div
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-10 left-[-20px] bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl"
               >
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400 mb-2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                 <span className="text-xs font-bold text-white uppercase tracking-tighter">10.0 Gbit/s</span>
               </motion.div>
            </div>
          </motion.div>

          {/* Right Column (Text) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-blue-500" />
              <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">Innovation Hub</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-white tracking-tighter">
              The Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Intelligent Tech</span>
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
              AI CRON is not just a summit; it's a convergence of the world's most brilliant minds in artificial intelligence. 
              Join us in Singapore to explore the boundaries of what's possible with Generative AI, Quantum Computing, and Neural Networks.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-1">
                <p className="text-4xl font-black text-white">50+</p>
                <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Keynote Speakers</p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-black text-white">12</p>
                <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Workshop Tracks</p>
              </div>
            </div>
            
            <motion.button
              whileHover={{ x: 10 }}
              className="mt-12 group flex items-center gap-3 text-white font-bold"
            >
              Learn More about the Summit
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


