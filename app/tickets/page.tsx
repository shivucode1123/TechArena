import Link from 'next/link';
import Tickets from '../components/Tickets';

export const metadata = {
  title: 'Tickets - TechArena',
  description: 'Get your tickets for TechArena',
};

export default function TicketsPage() {
  return (
    <div className="min-h-screen bg-black text-white relative pt-32 pb-20 overflow-hidden noise-bg">
      <div className="absolute top-8 left-8 z-50">
        <Link href="/" className="px-6 py-2 glass rounded-full hover:bg-white/10 transition-colors inline-flex items-center gap-2">
          ← Back to Home
        </Link>
      </div>
      <Tickets />
    </div>
  );
}
