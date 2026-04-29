'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const schedule = {
  day1: [
    {
      time: '09.30-10.30 AM',
      title: 'Opening Remarks',
      desc: 'Welcome to the TechArena Tech Summit. Kick off the day with an introduction from the event organizers and a sneak peek of what\'s in store.',
      speaker: null
    },
    {
      time: '10.30-11.30 AM',
      title: 'Keynote Address: Revolutionizing the Future with AI',
      desc: 'By Dr. Emma Parker, Chief AI Scientist at InnovateX Labs. Explore the transformative impact of AI on industries and society.',
      speaker: { name: 'Dr. Emma Parker', role: 'CEO, Zecon AI', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&q=80' }
    },
    {
      time: '12.30-01.30 PM',
      title: 'Panel Discussion: AI in Action: Real-World Applications',
      desc: 'A lively discussion on how AI is being implemented in sectors like healthcare, finance, and logistics, with industry experts.',
      speaker: { name: 'Sara Williams', role: 'AI Strategist', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&q=80' }
    }
  ],
  day2: [
    {
      time: '09.30-10.30 AM',
      title: 'Morning Networking Coffee',
      desc: 'Catch up with fellow attendees over coffee before diving into another exciting day of learning.',
      speaker: null
    },
    {
      time: '11.30-12.30 PM',
      title: 'Keynote Address: The Intersection of AI and Blockchain',
      desc: 'By John Mitchell, Co-Founder & CEO at AI Solutions. Understand how AI and blockchain can work together to create innovative solutions.',
      speaker: { name: 'John Mitchell', role: 'Co-Founder', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&q=80' }
    }
  ],
  day3: [
    {
      time: '09.30-11.30 AM',
      title: 'Workshop: Driving ROI with Data',
      desc: 'Learn how businesses can use AI to optimize operations, increase profitability, and drive growth.',
      speaker: null
    },
    {
      time: '02.30-03.30 PM',
      title: 'Fireside Chat: The Future of AI in Consumer Products',
      desc: 'Join Olivia Reynolds, Principal Engineer at AlphaTech, as she discusses the role of AI in creating personalized consumer experiences.',
      speaker: { name: 'Olivia Reynolds', role: 'Engineer', img: 'https://images.unsplash.com/photo-1598550874175-4d0ef43ce418?w=100&h=100&fit=crop&q=80' }
    }
  ]
};

type DayKey = keyof typeof schedule;

export default function Agenda() {
  const [activeDay, setActiveDay] = useState<DayKey>('day1');

  const days: { key: DayKey; label: string; title: string }[] = [
    { key: 'day1', label: 'Day 1', title: 'Main Conference' },
    { key: 'day2', label: 'Day 2', title: 'Deep Dive Sessions' },
    { key: 'day3', label: 'Day 3', title: 'Networking Day' }
  ];

  return (
    <section id="agenda" className="py-20 md:py-32 relative z-10 border-y border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent"></div>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-display font-bold tracking-widest uppercase text-sm">Event agenda</p>
            <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-primary"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight text-white drop-shadow-lg">
            Schedule Details
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
          {days.map((day) => {
            const isActive = activeDay === day.key;
            return (
              <button
                key={day.key}
                onClick={() => setActiveDay(day.key)}
                className={`relative px-8 py-5 rounded-2xl transition-all duration-300 ${
                  isActive ? 'text-white scale-105' : 'glass hover:bg-white/10 text-gray-500 hover:text-gray-300'
                } text-left flex flex-col items-center md:items-start flex-1 border ${isActive ? 'border-primary/50 shadow-[0_0_30px_rgba(51,102,255,0.2)]' : 'border-white/10'}`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-primary/50"
                    style={{ zIndex: -1 }}
                  />
                )}
                <span className={`text-xs font-bold tracking-widest uppercase mb-2 ${isActive ? 'text-primary' : ''}`}>{day.label}</span>
                <span className="font-display font-bold whitespace-nowrap text-lg">{day.title}</span>
              </button>
            );
          })}
        </div>

        {/* Schedule List */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-6"
            >
              {schedule[activeDay].map((item, index) => (
                <div key={index} className="group glass p-8 md:p-10 rounded-3xl border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(51,102,255,0.15)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/4">
                      <p className="text-primary font-display font-bold tracking-wider text-lg">{item.time}</p>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed mb-8 font-light text-lg">{item.desc}</p>
                      
                      {item.speaker && (
                        <div className="flex items-center gap-5 pt-6 border-t border-white/10 mt-auto">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img 
                            src={item.speaker.img} 
                            alt={item.speaker.name}
                            className="w-14 h-14 rounded-full object-cover border border-white/20 grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                          <div>
                            <p className="font-display font-bold text-white text-lg">{item.speaker.name}</p>
                            <p className="text-sm text-primary uppercase tracking-wider mt-1 font-medium">{item.speaker.role}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
