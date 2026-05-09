'use client';

import { motion } from 'framer-motion';
import SubPageHero from '../components/SubPageHero';
import Tickets from '../components/Tickets';

export default function VenuePage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Hero */}
      <SubPageHero
        title="VENUE"
        subtitle="Event Venue"
        description="Explore the AIcron Tech Summit"
      />

      {/* Section heading below hero */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-white" />
            <span className="text-white/60 font-black uppercase tracking-[0.3em] text-xs">Event Venue</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.0] tracking-tighter">
            Explore the AIcron Tech Summit<br />
            <span className="text-white/30">Venue and Location Details</span>
          </h2>
        </motion.div>
      </section>

      {/* Full-width Hero Image with caption */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative w-full h-[70vh] overflow-hidden"
      >
        <img
          src="https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=2400"
          alt="Marina Bay Sands, Singapore"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Caption top-right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-1/2 right-10 -translate-y-1/2 max-w-xs text-right"
        >
          <h3 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter">
            Marin bay Conventional centre,<br />Singapore
          </h3>
        </motion.div>
      </motion.section>

      {/* Description + Photo Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        {/* Description text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-4xl"
        >
          <p className="text-white/60 text-lg leading-relaxed mb-6">
            The AIcron Tech Summit is the ultimate gathering for tech enthusiasts, industry leaders, and innovators to delve
            into the world of AI, machine learning, and the future of emerging technologies. This summit offers a unique
            opportunity to hear from top experts, engage in insightful discussions, and explore groundbreaking AI
            innovations. Whether you're a startup founder, developer.
          </p>
          <p className="text-white/60 text-lg leading-relaxed">
            You'll have the chance to explore real-world use cases, witness cutting-edge demos, and connect with others
            who are driving change in the tech world. Be part of the conversation that's shaping the future.
          </p>
        </motion.div>

        {/* 3-photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              src: 'https://images.pexels.com/photos/1122408/pexels-photo-1122408.jpeg?auto=compress&cs=tinysrgb&w=1200',
              alt: 'Gardens by the Bay',
            },
            {
              src: 'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1200',
              alt: 'Futuristic venue lighting',
            },
            {
              src: 'https://images.pexels.com/photos/2034892/pexels-photo-2034892.jpeg?auto=compress&cs=tinysrgb&w=1200',
              alt: 'Modern architecture',
            },
          ].map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] group"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

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
