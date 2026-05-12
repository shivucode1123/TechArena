'use client';

import { motion } from 'framer-motion';

export default function Scholarship() {
  return (
    <section id="scholarship" className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-10 h-[2px] bg-white" />
            <span className="text-white text-sm font-bold uppercase tracking-[0.2em]">Scholarship</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight max-w-[1000px]"
          >
            <span className="text-white">Empowering Future Talents: </span>
            <span className="text-white/30">AIcron Scholarship Program</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[40px] bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Student Access</h3>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Apply now to get 100% off your summit pass. We're looking for students who are passionate about AI and machine learning.
            </p>
            <button className="px-10 py-5 bg-white text-black rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-blue-600 hover:text-white transition-all">
              Apply Now
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-12 rounded-[40px] bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Startup Grant</h3>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Get team passes and a chance to showcase your innovation at the Aicron Startup Hub. Open to early-stage ventures.
            </p>
            <button className="px-10 py-5 bg-white text-black rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-purple-600 hover:text-white transition-all">
              Register Team
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
