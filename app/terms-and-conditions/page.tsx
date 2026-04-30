import Link from 'next/link';

export const metadata = {
  title: 'Terms and Conditions - TechArena',
  description: 'Terms and Conditions for TechArena',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-black text-white relative pt-32 pb-20 overflow-hidden noise-bg">
      {/* Back button */}
      <div className="absolute top-8 left-8 z-50">
        <Link href="/" className="px-6 py-2 glass rounded-full hover:bg-white/10 transition-colors inline-flex items-center gap-2">
          ← Back to Home
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-12 text-center">Terms & Conditions</h1>
        
        <div className="prose prose-invert prose-lg max-w-none glass p-8 md:p-12 rounded-3xl border border-white/10">
          <p className="text-gray-400 mb-8">Last updated: April 30, 2026</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Agreement to Terms</h2>
          <p className="text-gray-300 mb-6">
            By accessing or using the TechArena website and our services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Intellectual Property</h2>
          <p className="text-gray-300 mb-6">
            The service and its original content, features, and functionality are and will remain the exclusive property of TechArena and its licensors. The service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. User Obligations</h2>
          <p className="text-gray-300 mb-6">
            As a user of our services, you agree not to use the services:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>In any way that violates any applicable national or international law or regulation.</li>
            <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent.</li>
            <li>To impersonate or attempt to impersonate TechArena, a TechArena employee, another user, or any other person or entity.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Event Policies</h2>
          <p className="text-gray-300 mb-6">
            Tickets purchased for TechArena events are subject to our refund and cancellation policies. TechArena reserves the right to refuse entry or remove any individual from our events who violates our code of conduct.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Limitation of Liability</h2>
          <p className="text-gray-300 mb-6">
            In no event shall TechArena, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Changes to Terms</h2>
          <p className="text-gray-300 mb-6">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect.
          </p>
        </div>
      </div>
    </div>
  );
}
