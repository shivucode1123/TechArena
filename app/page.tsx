import Hero from './components/Hero';
import About from './components/About';
import VideoSection from './components/VideoSection';
import ForWhom from './components/ForWhom';
import Marquee from './components/Marquee';
import Agenda from './components/Agenda';
import Speakers from './components/Speakers';
import Sponsors from './components/Sponsors';
import Scholarship from './components/Scholarship';
import FAQ from './components/FAQ';
import OurHost from './components/OurHost';

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <About />
      <VideoSection />
      <ForWhom />
      <Marquee />
      <Agenda />
      <Speakers />
      <Sponsors />
      <Scholarship />
      <FAQ />
      <OurHost />
    </main>
  );
}
