import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import ForWhom from './components/ForWhom';
import Agenda from './components/Agenda';
import Speakers from './components/Speakers';
import Sponsors from './components/Sponsors';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <ForWhom />
      <Agenda />
      <Speakers />
      <Sponsors />
    </>
  );
}
