import Lanyard from '../components/Lanyard';
import Link from 'next/link';

export const metadata = {
  title: 'Our Team - TechArena',
  description: 'Meet the TechArena team',
};

const teamMembers = [
  { name: 'Harsh Gupta', role: 'President', photoUrl: '/team/Harsh_Gupta.jpeg' },
  { name: 'Pooja Singh', role: 'Vice President', photoUrl: '/team/Pooja_Singh.jpeg' },
  { name: 'Shivangi Sood', role: 'Secretary', photoUrl: '/team/Shivangi_Sood.jpeg' },
  { name: 'Saloni Nema', role: 'Executive', photoUrl: '/team/Saloni_Nema.jpeg' },
  { name: 'Arnav Singh Thakur', role: 'Treasurer', photoUrl: '/team/Arnav_Singh_Thakur.jpeg' },
  { name: 'Nishtha Deshmukh', role: 'Personal Outreach Head', photoUrl: '/team/Nishtha_Deshmukh.jpeg' },
  { name: 'Ajitesh Vishwakarma', role: 'Technical Lead', photoUrl: '/team/Ajitesh_Vishwakarma.jpeg' },
  { name: 'Vedant Shah', role: 'Content Creation Head', photoUrl: '/team/Vedant_Shah.jpeg' },
  { name: 'Devansh Shrivastava', role: 'Sponsorship Head', photoUrl: 'https://placehold.co/400x600/1a1a1a/ffffff/png?text=Devansh' },
  { name: 'Ashish Sahu', role: 'Event Management Head', photoUrl: '/team/Ashish_Sahu.jpeg' },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black text-white relative pt-32 pb-20 overflow-hidden noise-bg">
      {/* Back button */}
      <div className="absolute top-8 left-8 z-50">
        <Link href="/" className="px-6 py-2 glass rounded-full hover:bg-white/10 transition-colors inline-flex items-center gap-2">
          ← Back to Home
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-center">Our Team</h1>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Meet the brilliant minds behind TechArena. Hover over their ID cards and drag them around to interact with the physics engine!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="relative w-full h-[600px] bg-white/5 rounded-3xl overflow-hidden border border-white/10 glass shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              {/* Zoomed in by moving camera closer (Z: 12) and reducing FOV (20) */}
              <Lanyard photoUrl={member.photoUrl} position={[0, 0, 12]} fov={20} />
              
              <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
                <h3 className="text-3xl font-bold font-display tracking-tight text-white drop-shadow-md">{member.name}</h3>
                <p className="text-primary tracking-widest uppercase text-sm mt-2 font-semibold drop-shadow-md">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
