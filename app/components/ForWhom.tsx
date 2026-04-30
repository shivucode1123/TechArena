'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const attendees = [
  {
    id: 'students',
    title: 'Students & Beginners',
    description: 'Start your tech journey by getting hands-on experience. Learn from peers, participate in introductory workshops, and build your very first project with guided mentorship.'
  },
  {
    id: 'developers',
    title: 'Software Developers',
    description: 'Deep dive into the latest frameworks, APIs, and software architectures. Participate in hackathons, collaborate on open-source projects, and code along with experts.'
  },
  {
    id: 'hardware',
    title: 'Hardware Hackers',
    description: 'Explore the physical side of tech. Work with microcontrollers, IoT devices, and robotics. Build tangible projects that interact with the real world.'
  },
  {
    id: 'enthusiasts',
    title: 'Tech Enthusiasts',
    description: 'Stay ahead of the curve. Discover emerging technologies, evaluate cutting-edge trends, and connect with visionary creators building the next generation of solutions.'
  }
];

export default function ForWhom() {
  const [activeId, setActiveId] = useState('developers');

  return (
    <section className="py-32 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          {/* Left Column - Titles */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-primary"></div>
              <p className="text-primary font-display font-bold tracking-widest uppercase">For Whom?</p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-xl">
              Who Should Definitely Join TechArena
            </h2>
          </motion.div>

          {/* Right Column - Accordion/Cards */}
          <div className="flex flex-col gap-4">
            {attendees.map((item, index) => {
              const isActive = activeId === item.id;
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`glass rounded-2xl overflow-hidden cursor-pointer transition-colors duration-300 ${
                    isActive ? 'border-primary/50 bg-white/5' : 'hover:bg-white-[0.02]'
                  }`}
                  onClick={() => setActiveId(item.id)}
                >
                  <div className="p-6 md:p-8 flex items-start gap-6">
                    <div className="mt-1 flex-shrink-0 relative flex items-center justify-center w-6 h-6">
                      <div className={`absolute inset-0 rounded-full border-2 transition-colors duration-300 ${isActive ? 'border-primary' : 'border-gray-600'}`}></div>
                      {isActive && (
                        <motion.div 
                          layoutId="activeCircle"
                          className="w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(46,91,255,0.8)]"
                        />
                      )}
                    </div>
                    
                    <div>
                      <h3 className={`text-2xl font-display font-bold transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400'}`}>
                        {item.title}
                      </h3>
                      
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-gray-400 leading-relaxed">
                              {item.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Marquee / Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full overflow-hidden whitespace-nowrap py-10 border-y border-white/5"
        >
          <div className="flex gap-16 text-3xl md:text-5xl font-display font-bold text-gray-500/30 uppercase tracking-widest justify-center">
            <span>Building</span>
            <span className="text-primary">•</span>
            <span>Innovating</span>
            <span className="text-primary">•</span>
            <span>Hacking</span>
            <span className="text-primary">•</span>
            <span>Learning</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
