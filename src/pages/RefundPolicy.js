import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, RefreshCw, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Header */}
      <motion.header
        className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-[80%] mx-auto px-4 md:px-6 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <ArrowLeft className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" />
              <span className="text-primary group-hover:text-accent transition-colors duration-300">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-dark" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Refund Policy
              </h1>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="w-full max-w-[80%] mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            SHOTBOX{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Refund & Returns Policy
            </span>
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Effective Date: 11th October 2025
          </p>
          <p className="text-sm text-secondary mt-2">
            Company: BMZ WORLDWIDE OPC PVT. LTD.
          </p>
        </motion.div>

        {/* Policy Content */}
        <motion.div
          className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-800 space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <FileText className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Refund and Returns Policy</h2>
          </div>
          <p className="text-secondary leading-relaxed">
            Welcome to <span className="text-primary font-semibold">SHOTBOX</span>, India’s first AI-powered vertical OTT entertainment platform.
            This Refund and Returns Policy explains how refunds, subscriptions, and digital purchases are managed on SHOTBOX.
            By accessing or using our platform, you agree to the following terms.
          </p>

          {/* Section 1 */}
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-primary">1. No Refund on Digital Purchases</h3>
            <p className="text-secondary leading-relaxed">
              All digital purchases—whether daily, weekly, monthly, or yearly subscriptions, or individual
              content unlocks via coins—are <span className="text-white font-semibold">non-refundable</span> once accessed or streamed.
              This includes accidental purchases, change of mind, or unused content. Please review your selection carefully before confirming payment.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-primary">2. Refund Eligibility (Exceptional Cases)</h3>
            <p className="text-secondary mb-3">
              Although all sales are final, refunds may be approved only under exceptional circumstances, such as:
            </p>
            <ul className="text-secondary space-y-2 ml-6 list-disc">
              <li>You were charged multiple times for the same transaction.</li>
              <li>A technical issue occurred (e.g., coins deducted but the video did not unlock) and couldn’t be resolved by our support team.</li>
              <li>The purchased content was unavailable or significantly different from what was advertised.</li>
            </ul>
            <p className="text-secondary mt-3">
              <strong>Important:</strong> Refund requests must be submitted within <span className="text-white font-semibold">48 hours</span> of the transaction to be considered.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-primary">3. How to Request a Refund</h3>
            <p className="text-secondary mb-3">If your case meets the above conditions, please email us at <a href="mailto:support@shotbox.in" className="text-primary underline">support@shotbox.in</a> with:</p>
            <ul className="text-secondary space-y-2 ml-6 list-disc">
              <li>Your registered email or phone number</li>
              <li>Transaction ID and a screenshot of payment</li>
              <li>A short description of the issue</li>
            </ul>
            <p className="text-secondary mt-3">
              Our team will review your request and respond within <span className="text-white font-semibold">5 business days</span>.
              If approved, refunds will be credited to your original payment method within <span className="text-white font-semibold">7–10 working days</span>.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-primary">4. In-App Coin Purchases</h3>
            <p className="text-secondary">
              Coins purchased within the app are <span className="text-white font-semibold">non-refundable</span> once used.
              Unused coins remain in your wallet and do not expire. You can use them for future content unlocks.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-primary">5. Subscriptions via App Stores</h3>
            <p className="text-secondary">
              If you subscribed through <span className="text-white font-semibold">Google Play</span> or the <span className="text-white font-semibold">Apple App Store</span>,
              all refund requests must be made directly through the respective store’s refund process.
              SHOTBOX cannot process refunds for purchases made via third-party platforms.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-primary">6. Subscription Upgrades and Downgrades</h3>
            <p className="text-secondary mb-3">
              If you upgrade your plan (e.g., from monthly to yearly), you may request a downgrade within 30 days of purchase. In such cases:
            </p>
            <ul className="text-secondary space-y-2 ml-6 list-disc">
              <li>Your plan will be adjusted to the lower tier.</li>
              <li>The balance will be credited to your SHOTBOX wallet as non-withdrawable credits for future purchases.</li>
            </ul>
            <p className="text-secondary mt-3">
              <strong>Note:</strong> Downgrade requests after 30 days will not be accepted.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-primary">7. Auto-Renewal Policy</h3>
            <p className="text-secondary">
              All SHOTBOX subscriptions renew automatically by default. To avoid renewal charges, please cancel your subscription before the renewal date through your:
            </p>
            <ul className="text-secondary space-y-2 ml-6 list-disc mt-2">
              <li>SHOTBOX Account Settings, or</li>
              <li>Google Play / Apple App Store</li>
            </ul>
          </div>

          {/* Section 8 */}
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-primary">8. Contact Us</h3>
            <p className="text-secondary mb-3">For any questions about refunds, purchases, or subscriptions, please contact us at:</p>
            <ul className="text-secondary space-y-2 ml-6">
              <li><span className="text-white font-semibold">Company Name:</span> BMZ WORLDWIDE OPC PVT. LTD.</li>
              <li><span className="text-white font-semibold">Email:</span> <a href="mailto:support@shotbox.in" className="text-primary underline">support@shotbox.in</a></li>
            </ul>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default RefundPolicy;
