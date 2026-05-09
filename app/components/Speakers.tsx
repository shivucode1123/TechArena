'use client';

import { motion } from 'framer-motion';

const speakers = [
  { name: 'Dr. Sarah Chen', role: 'Chief AI Scientist', img: 'https://i.pravatar.cc/400?u=sarah' },
  { name: 'James Wilson', role: 'ML Architect', img: 'https://i.pravatar.cc/400?u=james' },
  { name: 'Elena Rodriguez', role: 'Quantum Researcher', img: 'https://i.pravatar.cc/400?u=elena' },
  { name: 'Marcus Thorne', role: 'Robotics Lead', img: 'https://i.pravatar.cc/400?u=marcus' },
  { name: 'Aisha Khan', role: 'Neural Ethics', img: 'https://i.pravatar.cc/400?u=aisha' },
];

export default function Speakers() {
  return (
    <section id="speakers" className="py-24 md:py-40 relative z-10 bg-black overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-blue-500" />
              <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">The Visionaries</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
              Meet the Speakers
            </h2>
          </div>
        </motion.div>
      </div>

      <div className="pl-6 md:pl-[calc((100vw-80rem)/2+1.5rem)] pb-10">
        <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pr-6">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative min-w-[300px] md:min-w-[400px] snap-start"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] border border-white/10 bg-white/5">
                <img 
                  src={speaker.img} 
                  alt={speaker.name}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                
                {/* Social Links on Hover */}
                <div className="absolute top-8 right-8 flex flex-col gap-4 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-blue-600 transition-colors text-white border border-white/10 cursor-pointer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-blue-600 transition-colors text-white border border-white/10 cursor-pointer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 2.8 12.4 3 10.5c1 .5 2 .5 3 .5C3.3 9.4 2.3 6.1 4 4.5c2.6 3.2 6.6 5.2 11 5.5-.3-1.8.4-3.5 1.7-4.5 2-1.6 5-1.1 6.3 1 1-.2 1.9-.6 2.8-1.1-.3 1-.9 1.9-1.8 2.6z"></path></svg>
                    </div>
                </div>

                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="text-3xl font-black text-white mb-2 tracking-tighter">{speaker.name}</h3>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-[1px] bg-blue-500" />
                    <p className="text-blue-500 font-black text-sm uppercase tracking-widest">{speaker.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

