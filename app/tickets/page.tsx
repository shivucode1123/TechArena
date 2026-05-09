import Link from 'next/link';
import Tickets from '../components/Tickets';
import SubPageHero from '../components/SubPageHero';

export const metadata = {
  title: 'Registration - AI CRON',
  description: 'Secure Your Spot at the AI CRON Summit Today!',
};

export default function TicketsPage() {
  return (
    <main className="bg-black min-h-screen">
      <SubPageHero 
        title="REGISTRATION"
        subtitle="Secure Your Spot"
        description="Secure Your Spot at Alcron Tech Summit Today!"
      />
      <div className="py-24 max-w-7xl mx-auto px-6">
        <Tickets />
      </div>
    </main>
  );
}
