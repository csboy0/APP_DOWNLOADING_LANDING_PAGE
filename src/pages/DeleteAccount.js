import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Trash2, AlertTriangle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const DeleteAccount = () => {
  const supportEmail = 'support@shotbox.in';

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
                <Trash2 className="w-5 h-5 text-dark" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Delete Account
              </h1>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="w-full max-w-[80%] mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
        <motion.div 
            className="bg-gradient-to-r from-red-900/20 to-orange-900/20 backdrop-blur-sm rounded-3xl p-8 border border-red-800"
            initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Attention</h2>
                </div>

            <ul className="text-secondary space-y-3 text-base md:text-lg">
              <li>• Your account will be permanently deleted.</li>
              <li>• Access to the app using this account will be disabled.</li>
              <li>• All associated data, including identification details, usernames, browsing history, third-party account links, and any app purchases, will be permanently removed.</li>
              <li>• If you have an active VIP subscription, its renewal time will remain unchanged. To cancel, please visit the store page.</li>
            </ul>

            <div className="text-center mt-8">
              <a
                href={`mailto:${supportEmail}?subject=${encodeURIComponent('Delete Account Request')}&body=${encodeURIComponent('Please delete my Shotbox account. Include your registered email/phone here:')}`}
                className="inline-flex items-center gap-2 bg-gradient-primary text-dark px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
              >
                <Mail className="w-5 h-5" />
                Send a Mail
              </a>
            </div>
          </motion.div>
          </div>
      </main>

      {/* Global Footer is rendered by App.js */}
    </div>
  );
};

export default DeleteAccount;
