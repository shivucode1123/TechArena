'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Column (Visuals) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent"></div>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-display font-bold tracking-widest uppercase text-sm">About Eventis</p>
            </div>
            
            {/* 3D Glass Prism Representation */}
            <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 group perspective-1000">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-accent/30 rounded-full blur-[80px]"
              />
              <div className="absolute inset-4 glass rounded-3xl overflow-hidden flex items-center justify-center border border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.05)] transition-transform duration-700 group-hover:rotate-y-12 group-hover:rotate-x-12">
                 <div className="w-3/4 h-3/4 bg-gradient-to-br from-white/10 to-transparent rounded-full border border-white/20 flex items-center justify-center backdrop-blur-xl shadow-inner">
                    <div className="w-1/2 h-1/2 bg-gradient-to-tl from-white/20 to-transparent rounded-full border border-white/30 backdrop-blur-2xl shadow-[0_0_30px_rgba(255,255,255,0.1)]" />
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Text) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-8 leading-[1.1] text-white">
              Why You Should Attend Eventis
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-6 leading-relaxed font-light">
              Eventis is the ultimate gathering for tech enthusiasts, industry leaders, and innovators to delve into the world of AI, machine learning, and the future of emerging technologies. This summit offers a unique opportunity to hear from top experts.
            </p>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
              You'll have the chance to explore real-world use cases, witness cutting-edge demos, and connect with others who are driving change in the tech world. Be part of the conversation that's shaping the future.
            </p>

            <div className="mt-10 flex gap-12">
              <div>
                <p className="text-4xl font-display font-bold text-white mb-2">50+</p>
                <p className="text-gray-500 uppercase tracking-widest text-sm">Speakers</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-white mb-2">20k</p>
                <p className="text-gray-500 uppercase tracking-widest text-sm">Attendees</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-white mb-2">3</p>
                <p className="text-gray-500 uppercase tracking-widest text-sm">Days</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cinematic Video/Image Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full aspect-[16/9] md:aspect-[21/9] glass rounded-3xl md:rounded-[3rem] border border-white/10 overflow-hidden relative group cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-1000 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-20 h-20 md:w-28 md:h-28 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center pl-2 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_50px_rgba(51,102,255,0.6)] z-10">
               <svg width="40" height="40" viewBox="0 0 24 24" fill="white" stroke="none" className="md:w-12 md:h-12">
                 <polygon points="5 3 19 12 5 21 5 3"></polygon>
               </svg>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
