import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - TechArena',
  description: 'Privacy Policy for TechArena',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white relative pt-32 pb-20 overflow-hidden noise-bg">
      {/* Back button */}
      <div className="absolute top-8 left-8 z-50">
        <Link href="/" className="px-6 py-2 glass rounded-full hover:bg-white/10 transition-colors inline-flex items-center gap-2">
          ← Back to Home
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-12 text-center">Privacy Policy</h1>
        
        <div className="prose prose-invert prose-lg max-w-none glass p-8 md:p-12 rounded-3xl border border-white/10">
          <p className="text-gray-400 mb-8">Last updated: April 30, 2026</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Introduction</h2>
          <p className="text-gray-300 mb-6">
            Welcome to TechArena. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. The Data We Collect About You</h2>
          <p className="text-gray-300 mb-6">
            Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. How We Use Your Personal Data</h2>
          <p className="text-gray-300 mb-6">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Data Security</h2>
          <p className="text-gray-300 mb-6">
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Contact Us</h2>
          <p className="text-gray-300 mb-6">
            If you have any questions about this privacy policy or our privacy practices, please contact us.
          </p>
        </div>
      </div>
    </div>
  );
}
