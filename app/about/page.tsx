import Link from 'next/link';
import { CyberGlitchText } from '../components/CyberGlitchText';

export const metadata = {
  title: 'About Us - TechArena',
  description: 'Learn more about the TechArena mission and story',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white relative pt-32 pb-20 overflow-hidden noise-bg">
      {/* Back button */}
      <div className="absolute top-8 left-8 z-50">
        <Link href="/" className="px-6 py-2 glass rounded-full hover:bg-white/10 transition-colors inline-flex items-center gap-2">
          ← Back to Home
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            <CyberGlitchText text="About Us" />
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We are the official tech club of LNCT. Our focus is on practical implementation, organizing high-impact tech events, and actually building things that matter.
          </p>
        </div>

        {/* Story Section - Text + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <h2 className="text-3xl font-display font-bold mb-6 text-primary">Our Story</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                TechArena LNCT was founded with a clear vision: to move beyond theoretical knowledge and focus on practical engineering. We are a community of builders, developers, and creators at LNCT who are passionate about technology.
              </p>
              <p>
                We host and organize hands-on tech events, hackathons, and workshops. We believe the best way to learn is by doing, and our culture revolves around collaborative building and real-world problem-solving.
              </p>
            </div>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden glass border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] group">
            {/* Placeholder for Image */}
            <div className="absolute inset-0 bg-white/5 flex items-center justify-center text-gray-500">
              [ Insert Image Here ]
            </div>
            {/* To use a real image, uncomment and add src */}
            {/* <img src="/your-image.jpg" alt="Our team" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /> */}
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">See Us In Action</h2>
            <p className="text-gray-400">Experience the energy of our previous events.</p>
          </div>
          
          <div className="relative aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden glass border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
             {/* Placeholder for Video */}
             <div className="absolute inset-0 bg-white/5 flex items-center justify-center text-gray-500">
              [ Insert Video/Embed Here ]
            </div>
            {/* To use a real video, uncomment and add src */}
            {/* <video src="/your-video.mp4" controls className="w-full h-full object-cover" /> */}
            {/* OR embed YouTube/Vimeo */}
            {/* <iframe src="https://www.youtube.com/embed/your-id" className="w-full h-full" allowFullScreen></iframe> */}
          </div>
        </div>

        {/* Mission Section - Image + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden glass border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] group">
            {/* Placeholder for Image */}
            <div className="absolute inset-0 bg-white/5 flex items-center justify-center text-gray-500">
              [ Insert Image Here ]
            </div>
            {/* <img src="/mission-image.jpg" alt="Our mission" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /> */}
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-display font-bold mb-6 text-primary">Our Mission</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Our mission is to empower students with practical tech skills. We strive to create an environment where learning is driven by creation, and ideas are transformed into working software and hardware.
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-white">
                <li>Organize hands-on tech events and hackathons</li>
                <li>Focus on practical implementations and building</li>
                <li>Showcase student projects and innovations</li>
                <li>Bridge the gap between academia and industry</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
