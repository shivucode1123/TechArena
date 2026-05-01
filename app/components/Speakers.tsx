'use client';

import { motion } from 'framer-motion';

const speakers = [
  { name: 'Harsh Gupta', role: 'President', img: '/team/Harsh_Gupta.jpeg' },
  { name: 'Pooja Singh', role: 'Vice President', img: '/team/Pooja_Singh.jpeg' },
  { name: 'Shivangi Sood', role: 'Secretary', img: '/team/Shivangi_Sood.jpeg' },
  { name: 'Saloni Nema', role: 'Executive', img: '/team/Saloni_Nema.jpeg' },
  { name: 'Arnav Singh Thakur', role: 'Treasurer', img: '/team/Arnav_Singh_Thakur.jpeg' },
  { name: 'Nishtha Deshmukh', role: 'Personal Outreach Head', img: '/team/Nishtha_Deshmukh.jpeg' },
  { name: 'Ajitesh Vishwakarma', role: 'Technical Lead', img: '/team/Ajitesh_Vishwakarma.jpeg' },
  { name: 'Vedant Shah', role: 'Content Creation Head', img: '/team/Vedant_Shah.jpeg' },
  { name: 'Devansh Shrivastava', role: 'Sponsorship Head', img: 'https://placehold.co/400x600/1a1a1a/ffffff/png?text=Devansh' },
  { name: 'Ashish Sahu', role: 'Event Management Head', img: '/team/Ashish_Sahu.jpeg' },
];

export default function Speakers() {
  return (
    <section id="speakers" className="py-20 md:py-32 relative z-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent"></div>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-display font-bold tracking-widest uppercase text-sm">Our Team</p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-white max-w-2xl">
              Meet Our Core Team
            </h2>
          </div>
          
          <a href="/team" className="hidden md:flex items-center gap-3 text-white hover:text-primary transition-colors group">
            <span className="font-medium tracking-wide">View All Members</span>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </a>
        </motion.div>
      </div>

      <div className="pl-6 md:pl-[calc((100vw-80rem)/2+1.5rem)] pb-10">
        <div className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pr-6">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative min-w-[280px] md:min-w-[350px] snap-start"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[3/4] mb-6 border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                {/* Fallback bg */}
                <div className="absolute inset-0 bg-white/5" />
                
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={speaker.img} 
                  alt={speaker.name}
                  className="absolute inset-0 w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social Links on Hover */}
                <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                    <a href="#" className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-primary transition-colors text-white border border-white/10">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-primary transition-colors text-white border border-white/10">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 2.8 12.4 3 10.5c1 .5 2 .5 3 .5C3.3 9.4 2.3 6.1 4 4.5c2.6 3.2 6.6 5.2 11 5.5-.3-1.8.4-3.5 1.7-4.5 2-1.6 5-1.1 6.3 1 1-.2 1.9-.6 2.8-1.1-.3 1-.9 1.9-1.8 2.6z"/></svg>
                    </a>
                </div>

                <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-display font-bold text-white mb-1 drop-shadow-md">{speaker.name}</h3>
                  <p className="text-primary font-medium text-sm tracking-wide uppercase">{speaker.role}</p>
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
