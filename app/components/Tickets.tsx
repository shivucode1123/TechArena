'use client';

import { motion } from 'framer-motion';

const plans = [
  {
    name: 'General Pass',
    price: '$299',
    type: 'Single admission',
    features: [
      'Access to the main stage, exhibitions, and standard networking sessions.',
      'Entry to keynote sessions',
      'Access to tech expo floor',
      'Standard networking lounge',
      'TechArena welcome kit'
    ]
  },
  {
    name: 'VIP Pass',
    price: '$599',
    type: 'Single admission',
    highlight: true,
    features: [
      'Premium experience with priority access, exclusive sessions, and VIP networking.',
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
      'Perfect for companies or teams attending together. Includes access for 5 members.',
      '5 full-access passes',
      'Reserved group seating',
      'Team branding opportunities',
      'Group photo with keynote speakers'
    ]
  }
];

export default function Tickets() {
  return (
    <section id="tickets" className="py-20 md:py-32 relative z-10 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] -translate-y-1/2 -z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24 flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent"></div>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-display font-bold tracking-widest uppercase text-sm">Membership</p>
            <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight text-white max-w-3xl drop-shadow-xl">
            Join the Club Today
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative group flex flex-col ${plan.highlight ? 'md:-mt-8 md:mb-8' : ''}`}
            >
              {plan.highlight && (
                <div className="absolute -inset-0.5 bg-gradient-to-b from-primary to-accent rounded-[2.5rem] blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              )}
              
              <div className={`glass p-10 rounded-[2.5rem] border relative flex-1 flex flex-col transition-all duration-500 ${
                plan.highlight 
                  ? 'border-white/20 bg-background/80 hover:bg-background shadow-[0_0_50px_rgba(51,102,255,0.2)]' 
                  : 'border-white/10 hover:border-white/30 bg-background/60 hover:bg-background/80'
              }`}>
                {/* Glow behind text */}
                {plan.highlight && (
                   <div className="absolute top-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-[50px] pointer-events-none" />
                )}

                <div className="mb-8 relative z-10">
                  <span className={`inline-block px-4 py-1.5 border rounded-full text-xs font-bold uppercase tracking-widest mb-6 ${
                    plan.highlight ? 'bg-primary/20 border-primary/50 text-primary' : 'bg-white/5 border-white/10 text-gray-400'
                  }`}>
                    Early Bird
                  </span>
                  <h3 className="text-3xl font-display font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-end gap-2 mb-4">
                    <span className="text-6xl font-display font-black text-white">{plan.price}</span>
                  </div>
                  <p className={plan.highlight ? 'text-accent font-medium' : 'text-primary font-medium'}>{plan.type}</p>
                </div>

                <div className="flex-1 relative z-10 border-t border-white/10 pt-8 mt-4 mb-10">
                  <ul className="space-y-5">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex gap-4 text-gray-400 text-base font-light">
                        <div className={`mt-1.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.highlight ? 'bg-accent/20' : 'bg-primary/20'
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${
                            plan.highlight ? 'bg-accent' : 'bg-primary'
                          }`} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className={`w-full py-5 rounded-full font-bold text-lg transition-all duration-300 relative z-10 ${
                  plan.highlight 
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-[0_0_20px_rgba(51,102,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:scale-[1.02]' 
                    : 'bg-white text-black hover:bg-gray-200 hover:scale-[1.02]'
                }`}>
                  Join Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
