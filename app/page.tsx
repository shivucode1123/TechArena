import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import ForWhom from './components/ForWhom';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';
import Sponsors from './components/Sponsors';
import Tickets from './components/Tickets';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <ForWhom />
      <Speakers />
      <Agenda />
      <Sponsors />
      <Tickets />
      <Footer />
    </main>
  );
}
