import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, RefreshCw, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
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
            Refund &{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Returns Policy
            </span>
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            We want you to be completely satisfied with your Shotbox experience. This policy outlines our refund and return procedures.
          </p>
          <p className="text-sm text-secondary mt-4">
            Last updated: October 11, 2025
          </p>
        </motion.div>

        {/* Quick Overview */}
        <motion.div
          className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-800 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Policy{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Overview
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Fair Process</h3>
              <p className="text-secondary">We provide fair and transparent refund processes for all users.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Quick Resolution</h3>
              <p className="text-secondary">Most refund requests are processed within 5-7 business days.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Clear Guidelines</h3>
              <p className="text-secondary">Clear guidelines help you understand what's eligible for refunds.</p>
            </div>
          </div>
        </motion.div>

        {/* Policy Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Eligibility */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Refund{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Eligibility
              </span>
            </h2>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Eligible for Refund
                  </h3>
                  <ul className="text-secondary space-y-2 ml-7">
                    <li>• Duplicate purchases made within 24 hours</li>
                    <li>• Technical issues preventing app functionality</li>
                    <li>• Unauthorized transactions on your account</li>
                    <li>• Service outages lasting more than 48 hours</li>
                    <li>• Billing errors or incorrect charges</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-red-400 flex items-center">
                    <XCircle className="w-5 h-5 mr-2" />
                    Not Eligible for Refund
                  </h3>
                  <ul className="text-secondary space-y-2 ml-7">
                    <li>• Change of mind after 7 days of purchase</li>
                    <li>• Rewards already redeemed or used</li>
                    <li>• Account suspension due to policy violations</li>
                    <li>• Third-party payment processing fees</li>
                    <li>• Services used beyond the refund period</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Refund Process */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Refund{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-dark font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Submit Request</h3>
                    <p className="text-secondary">Contact our support team with your refund request, including your account details and reason for the refund.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-dark font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Review Process</h3>
                    <p className="text-secondary">Our team will review your request within 24-48 hours and verify the eligibility based on our policy.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-dark font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Processing</h3>
                    <p className="text-secondary">If approved, the refund will be processed to your original payment method within 5-7 business days.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-dark font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Confirmation</h3>
                    <p className="text-secondary">You'll receive an email confirmation once the refund has been processed successfully.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Time Limits */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Time{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Limits
              </span>
            </h2>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Standard Refunds</h3>
                  <p className="text-secondary">Refund requests must be submitted within 30 days of the original transaction date.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Technical Issues</h3>
                  <p className="text-secondary">For technical issues, refund requests can be submitted within 60 days of the problem occurrence.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Unauthorized Transactions</h3>
                  <p className="text-secondary">Reports of unauthorized transactions must be made immediately upon discovery.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Processing Time</h3>
                  <p className="text-secondary">Approved refunds are typically processed within 5-7 business days, depending on your payment method.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Payment Methods */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Payment{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Methods
              </span>
            </h2>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Credit/Debit Cards</h3>
                  <p className="text-secondary">Refunds are processed back to the original card used for the purchase. Processing time: 5-7 business days.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">PayPal</h3>
                  <p className="text-secondary">PayPal refunds are processed immediately and typically appear in your account within 24 hours.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Apple Pay / Google Pay</h3>
                  <p className="text-secondary">Refunds are processed through the underlying payment method (card or bank account).</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Bank Transfers</h3>
                  <p className="text-secondary">Bank transfer refunds may take 7-10 business days depending on your bank's processing time.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Special Circumstances */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Special{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Circumstances
              </span>
            </h2>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Account Closure</h3>
                  <p className="text-secondary">If you close your account, any unused rewards or credits may be forfeited unless specifically requested for refund within 30 days.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Service Discontinuation</h3>
                  <p className="text-secondary">If we discontinue a service, users will be notified 30 days in advance and may be eligible for prorated refunds.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Force Majeure</h3>
                  <p className="text-secondary">In cases of force majeure events affecting our services, refund policies may be adjusted with appropriate notice to users.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Dispute Resolution</h3>
                  <p className="text-secondary">If you disagree with a refund decision, you can escalate the matter through our dispute resolution process.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Contact Information */}
          <motion.section
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Need{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Help?
              </span>
            </h2>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <p className="text-secondary mb-6">
                If you have questions about refunds or need to submit a refund request, please contact our support team:
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-primary">📧</span>
                  <a href="mailto:support@shotbox.in" className="text-primary hover:text-accent transition-colors duration-300">
                    support@shotbox.in
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-primary">📞</span>
                  <span className="text-secondary">+91 9967127959</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-primary">💬</span>
                  <span className="text-secondary">Live chat available 24/7 in the app</span>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      {/* Global Footer is rendered by App.js */}
    </div>
  );
};

export default RefundPolicy;
