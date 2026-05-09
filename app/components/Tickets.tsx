'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const plans = [
  {
    name: 'General Admission',
    price: '$299',
    type: 'Single admission',
    features: [
      'Access to the main stage, exhibitions, and standard networking sessions.',
      'Entry to keynote sessions',
      'Access to tech expo floor',
      'Standard networking lounge',
      'Summit welcome kit'
    ]
  },
  {
    name: 'VIP Pass',
    price: '$599',
    type: 'Single admission',
    highlight: true,
    features: [
      'Priority seating at all sessions',
      'Access to VIP lounge & bar',
      'Invitation to speaker dinner',
      'Premium summit kit'
    ]
  },
  {
    name: 'Team Pass',
    price: '$1299',
    type: '5 Members',
    features: [
      '5 full-access passes',
      'Reserved group seating',
      'Team branding opportunities',
      'Group photo with keynote speakers'
    ]
  }
];

export default function Tickets() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="tickets" className="relative z-10 bg-black overflow-visible">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Sticky 3D Visual */}
          <div className="lg:col-span-5 lg:sticky lg:top-40 h-fit mb-20 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square flex items-center justify-center"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />
              
              {/* Colorful 3D Ticket Visual */}
              <motion.div
                animate={{ 
                  y: [0, -40, 0],
                  rotateY: [0, 360],
                  rotateX: [10, -10, 10],
                  rotateZ: [5, -5, 5]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative z-10 w-full max-w-[450px]"
              >
                <svg viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_100px_rgba(59,130,246,0.6)]">
                   <path d="M50 50H350V400C350 420 330 430 320 430C310 430 290 420 290 400V380H110V400C110 420 90 430 80 430C70 430 50 420 50 400V50Z" fill="url(#ticketGrad)" fillOpacity="0.2" stroke="url(#strokeGrad)" strokeWidth="3" strokeOpacity="0.5"/>
                   
                   {/* Glass Reflective Layer */}
                   <rect x="70" y="70" width="260" height="300" rx="20" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1" strokeOpacity="0.2"/>
                   
                   {/* Neon Details */}
                   <circle cx="200" cy="200" r="60" stroke="url(#neonGrad)" strokeWidth="2" strokeDasharray="10 5"/>
                   <line x1="90" y1="330" x2="310" y2="330" stroke="url(#neonGrad)" strokeWidth="2" strokeDasharray="15 10"/>
                   
                   <defs>
                     <linearGradient id="ticketGrad" x1="50" y1="50" x2="350" y2="600" gradientUnits="userSpaceOnUse">
                       <stop stopColor="#3B82F6"/>
                       <stop offset="0.5" stopColor="#8B5CF6"/>
                       <stop offset="1" stopColor="#EC4899"/>
                     </linearGradient>
                     <linearGradient id="strokeGrad" x1="50" y1="50" x2="350" y2="600" gradientUnits="userSpaceOnUse">
                       <stop stopColor="white"/>
                       <stop offset="1" stopColor="#3B82F6" stopOpacity="0"/>
                     </linearGradient>
                     <linearGradient id="neonGrad" x1="90" y1="200" x2="310" y2="200" gradientUnits="userSpaceOnUse">
                       <stop stopColor="#60A5FA"/>
                       <stop offset="1" stopColor="#F472B6"/>
                     </linearGradient>
                   </defs>
                </svg>
              </motion.div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-blue-600/20 blur-2xl rounded-full" />
            </motion.div>
          </div>

          {/* Right: Pricing Cards - Scrollable stack */}
          <div className="lg:col-span-7 flex flex-col gap-10 pb-40">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className={`relative group p-12 rounded-[3.5rem] border transition-all duration-1000 bg-blue-600/10 border-blue-500/60 shadow-[0_0_100px_rgba(37,99,235,0.15)]`}
              >
                {/* Mesh Background for All Cards */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-indigo-900/40 rounded-[3.5rem] pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-10">
                    <span className="inline-block px-5 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">
                      Early Bird
                    </span>
                    <div className="text-right">
                       <h3 className="text-6xl font-black text-white leading-none tracking-tighter mb-1">{plan.price}</h3>
                       <p className="text-white/40 font-black uppercase tracking-widest text-[10px]">{plan.type}</p>
                    </div>
                  </div>
                  
                  <h4 className="text-3xl font-black text-white mb-8 tracking-tighter uppercase">{plan.name}</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 mb-14 border-t border-white/5 pt-10">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex gap-4 text-sm text-white/50 font-medium leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 rounded-3xl font-black uppercase tracking-[0.3em] text-[11px] flex items-center justify-center gap-4 transition-all bg-white text-black hover:bg-blue-600 hover:text-white shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
                  >
                    Buy Ticket
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
