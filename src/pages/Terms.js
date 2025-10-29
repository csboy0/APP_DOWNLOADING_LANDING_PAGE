import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Section = ({ title, children, delay = 0.2 }) => (
  <motion.section
    className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-800"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
      <FileText className="w-5 h-5 text-primary" />
      {title}
    </h3>
    <div className="text-secondary leading-relaxed space-y-3 text-sm md:text-base">
      {children}
    </div>
  </motion.section>
);

const Terms = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Header */}
      <motion.header 
        className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full max-w-[80%] mx-auto px-4 md:px-6 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 group">
              <ArrowLeft className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" />
              <span className="text-primary group-hover:text-accent transition-colors duration-300">Back to Home</span>
            </Link>
            <h1 className="text-lg md:text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">Terms & Conditions</h1>
          </div>
        </div>
      </motion.header>

      {/* Content */}
      <main className="w-full max-w-[80%] mx-auto px-4 md:px-6 py-8 md:py-12">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            Welcome to <span className="bg-gradient-primary bg-clip-text text-transparent">SHOTBOX</span>
          </h2>
          <p className="text-secondary max-w-3xl mx-auto">
            These Terms and Conditions ("Terms") govern your use of the SHOTBOX mobile app and services operated by BMZ Worldwide OPC Pvt. Ltd. By downloading, installing, or using the SHOTBOX App, you agree to these Terms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <Section title="1. Acceptance of Terms" delay={0.15}>
            <p>By accessing or using SHOTBOX, you confirm that you have read, understood, and agree to these Terms and our Privacy Policy. If you do not agree, please discontinue using our services.</p>
          </Section>

          <Section title="2. Eligibility" delay={0.2}>
            <ul className="list-disc pl-5 space-y-2">
              <li>Be at least 13 years old</li>
              <li>If you’re between 13–18 years, have parental or guardian consent</li>
              <li>Provide accurate details when creating your account</li>
              <li>Keep your login credentials secure and confidential</li>
            </ul>
          </Section>

          <Section title="3. User Accounts" delay={0.25}>
            <p className="font-semibold text-white">a. Account Creation</p>
            <p>You can sign up using your email, phone number, or social media accounts. You are responsible for all activity under your account. If you notice any unauthorized access, contact us immediately.</p>
            <p className="font-semibold text-white mt-3">b. Account Suspension or Termination</p>
            <p>SHOTBOX reserves the right to suspend or terminate any account that:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Violates these Terms</li>
              <li>Engages in illegal activity</li>
              <li>Abuses or misuses the platform</li>
            </ul>
          </Section>

          <Section title="4. Content & Services" delay={0.3}>
            <p className="font-semibold text-white">a. Content Availability</p>
            <p>SHOTBOX hosts short-form entertainment content for mobile users. Content may vary by region or time. We reserve the right to update, add, or remove content at any time without prior notice.</p>
            <p className="font-semibold text-white mt-3">b. User-Generated Content</p>
            <p>Creators can upload and share content on SHOTBOX. You retain ownership of your content, but by uploading, you grant SHOTBOX a worldwide, non-exclusive license to use and distribute it within the app. All content must comply with applicable laws and respect third-party rights.</p>
          </Section>

          <Section title="5. Prohibited Activities" delay={0.35}>
            <ul className="list-disc pl-5 space-y-2">
              <li>Upload or promote illegal, violent, explicit, or hateful content</li>
              <li>Harass, bully, or impersonate others</li>
              <li>Post spam, misleading promotions, or unauthorized ads</li>
              <li>Violate copyrights, trademarks, or privacy rights</li>
              <li>Use bots, automation tools, or hacking software</li>
              <li>Create fake profiles or misuse others’ data</li>
            </ul>
          </Section>

          <Section title="6. Subscriptions & Payments" delay={0.4}>
            <p className="font-semibold text-white">a. Subscription Plans</p>
            <p>SHOTBOX offers monthly, and yearly subscription plans. Fees are charged in advance and may change with prior notice.</p>
            <p className="font-semibold text-white mt-3">b. In-App Purchases</p>
            <p>Buy Reward Coins to unlock premium content. Coins are virtual — they do not represent real money and do not expire.</p>
            <p className="font-semibold text-white mt-3">c. Auto-Renewal</p>
            <p>Subscriptions auto-renew unless canceled before the renewal date. You can manage or cancel your subscription anytime through Google Play or the Apple App Store.</p>
          </Section>

          <Section title="7. Intellectual Property" delay={0.45}>
            <p>All videos, designs, text, and trademarks on SHOTBOX are protected by intellectual property laws. You may not copy, modify, or distribute any content without written permission from SHOTBOX.</p>
          </Section>

          <Section title="8. Privacy & Data Protection" delay={0.5}>
            <p>Your privacy matters to us. Please review our Privacy Policy to understand how we collect, store, and protect your data. By using SHOTBOX, you consent to these practices.</p>
          </Section>

          <Section title="9. Disclaimer" delay={0.55}>
            <p>SHOTBOX is provided “as is” and “as available.” We do not guarantee uninterrupted, error-free, or secure access. We are not responsible for third-party content, external links, or service interruptions.</p>
          </Section>

          <Section title="10. Limitation of Liability" delay={0.6}>
            <p>To the fullest extent permitted by law, SHOTBOX and its affiliates shall not be liable for any indirect, incidental, or consequential damages arising from your use of, or inability to use, the app.</p>
          </Section>

          <Section title="11. Indemnification" delay={0.65}>
            <p>You agree to defend, indemnify, and hold harmless SHOTBOX, its directors, officers, and employees against any claims, losses, or damages arising from your use of the app or violation of these Terms.</p>
          </Section>

          <Section title="12. Modification of Terms" delay={0.7}>
            <p>SHOTBOX may update or revise these Terms from time to time. Significant updates will be communicated via email or app notifications. Continued use of SHOTBOX after changes means you accept the updated Terms.</p>
          </Section>

          <Section title="13. Governing Law" delay={0.75}>
            <p>These Terms are governed by the laws of India, under the jurisdiction of courts located in Mumbai, Maharashtra.</p>
          </Section>

          <Section title="14. Severability" delay={0.8}>
            <p>If any provision of these Terms is found invalid or unenforceable, the remaining provisions will continue in full effect.</p>
          </Section>

          <Section title="15. Contact – Legal & Compliance" delay={0.85}>
            <p>For legal or compliance queries, contact:</p>
            <p>
              <a href="mailto:legal@shotbox.in" className="text-primary hover:text-accent transition-colors">legal@shotbox.in</a><br/>
              BMZ Worldwide OPC Pvt. Ltd., Mumbai, India
            </p>
          </Section>
        </div>
      </main>
    </div>
  );
};

export default Terms;



