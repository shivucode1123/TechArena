'use client';

import { motion } from 'framer-motion';
import SubPageHero from '../components/SubPageHero';
import Tickets from '../components/Tickets';

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen">
      <SubPageHero 
        title="CONTACT"
        subtitle="Get in Touch"
        description="We're here to answer your questions about AI CRON"
      />

      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-xl"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-black ml-4">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-600 transition-colors" />
              </div>
              <div className="space-y-3">
                <label className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-black ml-4">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-600 transition-colors" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-black ml-4">Subject</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white/50 focus:outline-none focus:border-blue-600 transition-colors appearance-none">
                <option>General Inquiry</option>
                <option>Sponsorship</option>
                <option>Speaking Opportunity</option>
                <option>Ticket Support</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-black ml-4">Your Message</label>
              <textarea rows={5} placeholder="How can we help you?" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-600 transition-colors resize-none"></textarea>
            </div>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-white text-black font-black uppercase tracking-widest py-5 rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-2xl">
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-black text-white mb-6 tracking-tighter uppercase">Direct Support</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-4 text-gray-400 group cursor-pointer">
                  <span className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-500 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </span>
                  hello@aicron.tech
                </p>
                <p className="flex items-center gap-4 text-gray-400 group cursor-pointer">
                  <span className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-500 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </span>
                  +65 800 123 4567
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-black text-white mb-6 tracking-tighter uppercase">Social Presence</h3>
              <div className="flex gap-4">
                {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                  <div key={social} className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 transition-colors cursor-pointer">
                    {social}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-[2rem] bg-blue-600 text-white">
              <h4 className="font-black text-xl mb-2">Emergency Assistance?</h4>
              <p className="text-white/80 text-sm leading-relaxed">Our support team is available 24/7 during the summit week to assist with any technical or logistics issues.</p>
            </div>
          </div>
        </motion.div>
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
