'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const attendees = [
  {
    id: 'researchers',
    title: 'AI Researchers',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1 0-4.88 2.5 2.5 0 0 1 0-4.88A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 0-4.88 2.5 2.5 0 0 0 0-4.88A2.5 2.5 0 0 0 14.5 2z"/></svg>,
    description: 'Deep dive into the latest neural architectures and mathematical foundations. Explore the frontiers of Large Language Models and Reinforcement Learning.'
  },
  {
    id: 'engineers',
    title: 'ML Engineers',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>,
    description: 'Master the art of scaling AI models in production. Optimize inference, manage data pipelines, and implement robust MLOps practices.'
  },
  {
    id: 'founders',
    title: 'Startup Founders',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"/><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"/></svg>,
    description: 'Discover how to build sustainable businesses on top of foundational models. Network with VCs and industry leaders in the AI space.'
  },
  {
    id: 'creatives',
    title: 'AI Artists & Creatives',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>,
    description: 'Explore the intersection of human creativity and machine intelligence. Learn about generative art, stable diffusion, and the future of media.'
  }
];

export default function ForWhom() {
  const [activeId, setActiveId] = useState('engineers');

  return (
    <section className="py-24 md:py-40 relative z-10 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column - Titles */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-blue-500" />
              <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">Target Audience</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-white tracking-tighter">
              Who Should Attend <br />
              <span className="text-gray-500">AI CRON 2025?</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg mb-12">
              Whether you're building the next breakthrough model or looking to integrate AI into your workflow, 
              this summit is designed for those pushing the boundaries of intelligence.
            </p>
          </motion.div>

          {/* Right Column - Accordion/Cards */}
          <div className="flex flex-col gap-6">
            {attendees.map((item, index) => {
              const isActive = activeId === item.id;
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative p-8 rounded-3xl cursor-pointer transition-all duration-500 ${
                    isActive ? 'bg-white/5 border border-white/10 shadow-2xl' : 'hover:bg-white-[0.02] border border-transparent'
                  }`}
                  onClick={() => setActiveId(item.id)}
                >
                  <div className="flex items-start gap-6">
                    <div className={`mt-1 flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      isActive ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-500'
                    }`}>
                      {item.icon}
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className={`text-2xl font-black transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-400'}`}>
                        {item.title}
                      </h3>
                      
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="text-gray-400 leading-relaxed text-lg">
                              {item.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="flex-shrink-0 pt-2">
                       <div className={`w-2 h-2 rounded-full transition-all duration-500 ${isActive ? 'bg-blue-500 scale-150 blur-[2px]' : 'bg-white/10'}`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


