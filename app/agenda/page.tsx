'use client';

import { motion } from 'framer-motion';
import Agenda from '../components/Agenda';
import SubPageHero from '../components/SubPageHero';
import Tickets from '../components/Tickets';

export default function AgendaPage() {
  return (
    <main className="bg-black min-h-screen">
      <SubPageHero 
        title="AGENDA"
        subtitle="The Roadmap"
        description="Discover the Future of AI through our curated sessions"
      />
      <div className="pb-20">
        <Agenda />
      </div>

      {/* Registration Section */}
      <section className="py-32 max-w-7xl mx-auto px-6 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-white" />
            <span className="text-white font-bold uppercase tracking-widest text-sm">Registration</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter max-w-4xl">
            Secure Your Spot at <span className="text-white/30">AIcron Tech Summit Today!</span>
          </h2>
        </motion.div>

        <Tickets />
      </section>
    </main>
  );
}
