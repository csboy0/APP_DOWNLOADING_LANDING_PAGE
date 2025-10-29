import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Eye, Lock, Database, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
                <Shield className="w-5 h-5 text-dark" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Privacy Policy
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
            Privacy{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you use Shotbox.
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
            Privacy{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Overview
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Transparency</h3>
              <p className="text-secondary">We're transparent about what data we collect and how we use it.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Security</h3>
              <p className="text-secondary">Your data is protected with industry-standard security measures.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Control</h3>
              <p className="text-secondary">You have full control over your personal information.</p>
            </div>
          </div>
        </motion.div>

        {/* Policy Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Information We Collect */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Information We{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Collect
              </span>
            </h2>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Personal Information</h3>
                  <ul className="text-secondary space-y-2 ml-4">
                    <li>• Name and email address when you create an account</li>
                    <li>• Profile information you choose to provide</li>
                    <li>• Payment information for reward redemptions</li>
                    <li>• Communication preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Usage Information</h3>
                  <ul className="text-secondary space-y-2 ml-4">
                    <li>• Videos watched and duration</li>
                    <li>• App features used and frequency</li>
                    <li>• Device information and operating system</li>
                    <li>• IP address and location data</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Content Information</h3>
                  <ul className="text-secondary space-y-2 ml-4">
                    <li>• User-generated content and comments</li>
                    <li>• Preferences and viewing history</li>
                    <li>• Interaction with rewards and offers</li>
                    <li>• Feedback and support communications</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* How We Use Information */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              How We Use Your{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Information
              </span>
            </h2>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Service Provision</h3>
                  <p className="text-secondary">We use your information to provide, maintain, and improve our services, including personalized content recommendations and reward calculations.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Communication</h3>
                  <p className="text-secondary">We may contact you about service updates, new features, reward opportunities, and important account information.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Analytics</h3>
                  <p className="text-secondary">We analyze usage patterns to improve our platform, develop new features, and enhance user experience.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Legal Compliance</h3>
                  <p className="text-secondary">We may use your information to comply with legal obligations, resolve disputes, and enforce our terms of service.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Data Sharing */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Information{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Sharing
              </span>
            </h2>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">We Do NOT Sell Your Data</h3>
                  <p className="text-secondary">We never sell, rent, or trade your personal information to third parties for marketing purposes.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Service Providers</h3>
                  <p className="text-secondary">We may share information with trusted service providers who help us operate our platform, such as payment processors and analytics services.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Legal Requirements</h3>
                  <p className="text-secondary">We may disclose information when required by law, court order, or to protect our rights and the safety of our users.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Business Transfers</h3>
                  <p className="text-secondary">In the event of a merger or acquisition, user information may be transferred as part of the business assets.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Data Security */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Data{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Security
              </span>
            </h2>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Encryption</h3>
                  <p className="text-secondary">All data transmission is encrypted using industry-standard SSL/TLS protocols.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Secure Storage</h3>
                  <p className="text-secondary">Personal information is stored in secure, encrypted databases with restricted access.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Access Controls</h3>
                  <p className="text-secondary">Only authorized personnel have access to user data, and access is logged and monitored.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Regular Audits</h3>
                  <p className="text-secondary">We regularly audit our security practices and update them to meet industry standards.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Your Rights */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Your{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Rights
              </span>
            </h2>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Access and Portability</h3>
                  <p className="text-secondary">You can request a copy of your personal data and export it in a portable format.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Correction</h3>
                  <p className="text-secondary">You can update or correct your personal information at any time through your account settings.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Deletion</h3>
                  <p className="text-secondary">You can request deletion of your account and associated data at any time.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Opt-out</h3>
                  <p className="text-secondary">You can opt out of marketing communications while still receiving essential service updates.</p>
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
              Contact{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Us
              </span>
            </h2>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <p className="text-secondary mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:privacy@shotbox.com" className="text-primary hover:text-accent transition-colors duration-300">
                  privacy@shotbox.com
                </a>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      {/* Global Footer is rendered by App.js */}
    </div>
  );
};

export default PrivacyPolicy;
