'use client';

import { motion } from 'framer-motion';
import Silk from './Silk';

/* ─────────────────────── types & data ─────────────────────── */

type Speaker = { name: string; role: string; img: string };

type Session = {
  time: string;
  title: string;
  desc: string;
  speakers?: Speaker[];
};

type Day = {
  label: string;
  dayTitle: string;
  sessions: Session[];
};

const agenda: Day[] = [
  {
    label: 'Kickoff',
    dayTitle: 'Day 1 : Main Conference',
    sessions: [
      {
        time: '09.30-10.30 AM',
        title: 'Opening Remarks',
        desc: "Welcome to the AIcron Tech Summit. Kick off the day with an introduction from the event organizers and a sneak peek of what's in store.",
      },
      {
        time: '10.30-11.30 AM',
        title: 'Keynote Address: Revolutionizing the Future with AI',
        desc: 'By Dr. Emma Parker, Chief AI Scientist at InnovateX Labs. Explore the transformative impact of AI on industries and society.',
        speakers: [
          { name: 'Dr. Emma Parker', role: 'CEO, Zecon AI', img: 'https://i.pravatar.cc/200?u=emma_parker' },
        ],
      },
      {
        time: '12.30-01.30 PM',
        title: 'Panel Discussion: AI in Action: Real-World Applications',
        desc: 'A lively discussion on how AI is being implemented in sectors like healthcare, finance, and logistics, with industry experts.',
        speakers: [
          { name: 'Sara Williams',  role: 'AI Strategist, InnovateTech',         img: 'https://i.pravatar.cc/200?u=sara' },
          { name: 'Ravi Singh',     role: 'Lead AI Engineer, MedTech Solutions',  img: 'https://i.pravatar.cc/200?u=ravi' },
          { name: 'James Turner',   role: 'Senior Data Scientist, Quantum Analytics', img: 'https://i.pravatar.cc/200?u=james_t' },
          { name: 'Emily Roberts',  role: 'Director, AI Applications',            img: 'https://i.pravatar.cc/200?u=emily' },
        ],
      },
    ],
  },
  {
    label: 'Main Day',
    dayTitle: 'Day 2 : Deep Dive Sessions',
    sessions: [
      {
        time: '09.30-10.30 AM',
        title: 'Morning Networking Coffee',
        desc: 'Catch up with fellow attendees over coffee before diving into another exciting day of learning.',
      },
      {
        time: '11.30-12.30 PM',
        title: 'Keynote Address: The Intersection of AI and Blockchain',
        desc: 'By John Mitchell, Co-Founder & CEO at AI Solutions Corp. Understand how AI and blockchain can work together to create innovative solutions.',
        speakers: [
          { name: 'John Mitchell', role: 'Co-Founder at AI Corp', img: 'https://i.pravatar.cc/200?u=john_m' },
        ],
      },
      {
        time: '2.30-04.30 PM',
        title: 'Panel Discussion: AI and Automation in Industry 4.0',
        desc: 'Panelists explore how AI-powered automation is driving the future of manufacturing and supply chain.',
        speakers: [
          { name: 'Dr. Lisa White', role: 'Chief Innovation Officer, TechFlow',   img: 'https://i.pravatar.cc/200?u=lisa' },
          { name: 'Mark Johnson',   role: 'Director, AI Solutions, RoboTech',      img: 'https://i.pravatar.cc/200?u=mark' },
          { name: 'Priya Patel',    role: 'Head, Digital Transformation',          img: 'https://i.pravatar.cc/200?u=priya_p' },
          { name: 'David Collins',  role: 'VP, Automation & Robotics',             img: 'https://i.pravatar.cc/200?u=david' },
        ],
      },
    ],
  },
  {
    label: 'Sumup',
    dayTitle: 'Day 3 : Networking Day',
    sessions: [
      {
        time: '09.30-11.30 AM',
        title: 'Workshop: Driving ROI with Data',
        desc: 'Learn how businesses can use AI to optimize operations, increase profitability, and drive growth.',
      },
      {
        time: '02.30-03.30 PM',
        title: 'Fireside Chat: The Future of AI in Consumer Products',
        desc: 'Join Olivia Reynolds, Principal Engineer at AlphaTech, as she discusses the role of AI in creating personalized consumer experiences.',
        speakers: [
          { name: 'Olivia Reynolds', role: 'Engineer at Alpha Tech', img: 'https://i.pravatar.cc/200?u=olivia' },
        ],
      },
    ],
  },
];

/* ─────────────────────── component ─────────────────────── */

export default function Agenda() {
  return (
    <section id="agenda" className="relative bg-black py-20 px-6 md:px-10 overflow-hidden">
      {/* Silk WebGL Background */}
      <div className="absolute inset-0 z-0">
        <Silk
          speed={4.4}
          scale={0.6}
          color="#050d7b"
          noiseIntensity={1.5}
          rotation={0.3}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-20 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-[2px] bg-white" />
          <span className="text-white/60 font-black uppercase tracking-[0.3em] text-xs">Event agenda</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.0] tracking-tighter max-w-3xl">
          Meet our sponsors who help to<br />
          <span className="text-white/30">bring this think live</span>
        </h2>
      </div>

      {/* Days — each day header is sticky */}
      <div className="max-w-7xl mx-auto space-y-0 relative z-10">
        {agenda.map((day, di) => (
          <div key={di} className="mb-24">

            {/* ── Sticky day header ── */}
            <div className="sticky top-0 z-30 flex items-stretch gap-0 rounded-2xl overflow-hidden mb-10">
              <div className="bg-blue-600 text-white font-black text-2xl px-10 py-6 flex items-center shrink-0 min-w-[160px] justify-center rounded-l-2xl">
                {day.label}
              </div>
              <div className="bg-[#111] text-white font-black text-2xl px-10 py-6 flex items-center flex-1 rounded-r-2xl">
                {day.dayTitle}
              </div>
            </div>

            {/* ── Sessions ── */}
            <div className="space-y-8">
              {day.sessions.map((session, si) => (
                <motion.div
                  key={si}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: si * 0.08 }}
                  className="flex gap-8 md:gap-12"
                >
                  {/* Time */}
                  <div className="w-44 shrink-0 pt-7">
                    <span className="text-white/40 font-black text-base uppercase tracking-widest leading-relaxed">
                      {session.time}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-[#111111] border border-white/5 rounded-2xl p-10 hover:border-white/10 transition-all duration-500">
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight leading-snug">
                      {session.title}
                    </h3>
                    <p className="text-white/40 text-base leading-relaxed mb-8">{session.desc}</p>

                    {/* Speakers */}
                    {session.speakers && session.speakers.length > 0 && (
                      <div
                        className={`grid gap-5 pt-8 border-t border-white/5 ${
                          session.speakers.length === 1 ? 'grid-cols-1' : 'grid-cols-2'
                        }`}
                      >
                        {session.speakers.map((sp, idx) => (
                          <div key={idx} className="flex items-center gap-5">
                            <img
                              src={sp.img}
                              alt={sp.name}
                              className="w-20 h-20 rounded-2xl object-cover border border-white/10 shrink-0"
                            />
                            <div>
                              <p className="text-white font-black text-lg leading-tight">{sp.name}</p>
                              <p className="text-white/40 text-sm mt-1 leading-tight">{sp.role}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
