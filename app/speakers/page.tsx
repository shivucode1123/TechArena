'use client';

import { motion } from 'framer-motion';
import SubPageHero from '../components/SubPageHero';
import Tickets from '../components/Tickets';

const techSpeakers = [
  { name: 'Dr. Emma Parker', role: 'Senior Software Engineer', img: 'https://i.pravatar.cc/400?u=emma' },
  { name: 'John Mitchell', role: 'Full Stack Developer', img: 'https://i.pravatar.cc/400?u=john' },
  { name: 'Samantha Hayes', role: 'Backend Architect', img: 'https://i.pravatar.cc/400?u=samantha' },
  { name: 'James Turner', role: 'DevOps Specialist', img: 'https://i.pravatar.cc/400?u=james_t' },
  { name: 'Michael Anderson', role: 'Mobile App Engineer', img: 'https://i.pravatar.cc/400?u=michael' },
  { name: 'Laura Chang', role: 'Cloud Solutions Expert', img: 'https://i.pravatar.cc/400?u=laura' },
  { name: 'Dr. Maya Bennett', role: 'AI/ML Engineer', img: 'https://i.pravatar.cc/400?u=maya' },
  { name: 'Jonathan Reyes', role: 'Technical Lead – Web Platforms', img: 'https://i.pravatar.cc/400?u=jonathan' },
];

const designSpeakers = [
  { name: 'Priya Khanna', role: 'Head of Product Design', img: 'https://i.pravatar.cc/400?u=priya' },
  { name: 'Elijah Brooks', role: 'UX/UI Design Specialist', img: 'https://i.pravatar.cc/400?u=elijah' },
  { name: 'Lena Zhou', role: 'Design Director', img: 'https://i.pravatar.cc/400?u=lena' },
  { name: 'Carlos Mendez', role: 'Creative Strategist', img: 'https://i.pravatar.cc/400?u=carlos' },
  { name: 'Sophie Laurent', role: 'Visual Designer', img: 'https://i.pravatar.cc/400?u=sophie' },
  { name: 'Marco Rossi', role: 'Motion Lead', img: 'https://i.pravatar.cc/400?u=marco' },
  { name: 'Yuki Tanaka', role: 'Product Designer', img: 'https://i.pravatar.cc/400?u=yuki' },
  { name: 'Alex Rivera', role: 'Brand Architect', img: 'https://i.pravatar.cc/400?u=alex' },
];

export default function SpeakersPage() {
  return (
    <main className="bg-black min-h-screen">
      <SubPageHero 
        title="SPEAKERS"
        subtitle="Speakers"
        description="Meet Our Esteemed Developers and Technology Trailblazers"
      />

      {/* Tech Speakers Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {techSpeakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] border border-white/10 bg-white/5">
                <img 
                  src={speaker.img} 
                  alt={speaker.name}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-black text-white mb-1 tracking-tighter">{speaker.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-[1px] bg-blue-500" />
                    <p className="text-blue-500 font-black text-[10px] uppercase tracking-widest">{speaker.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Designers Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-white" />
            <span className="text-white/60 font-black uppercase tracking-[0.3em] text-xs">Speakers</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.0] tracking-tighter max-w-3xl">
            Discover Leading Designers<br/><span className="text-white/30">and Creative Visionaries</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {designSpeakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] border border-white/10 bg-white/5">
                <img 
                  src={speaker.img} 
                  alt={speaker.name}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-black text-white mb-1 tracking-tighter">{speaker.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-[1px] bg-blue-500" />
                    <p className="text-blue-500 font-black text-[10px] uppercase tracking-widest">{speaker.role}</p>
                  </div>
                </div>
              </div>
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
            Secure Your Spot at <span className="text-gray-500">AIcron Tech Summit Today!</span>
          </h2>
        </motion.div>
        
        <Tickets />
      </section>
    </main>
  );
}
