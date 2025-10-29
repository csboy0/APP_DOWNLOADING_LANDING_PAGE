import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Target, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
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
            <Link to="/" className="flex items-center space-x-2 md:space-x-3 group">
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-primary group-hover:text-accent transition-colors duration-300" />
              <span className="text-primary group-hover:text-accent transition-colors duration-300 text-sm md:text-base">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2 md:space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-primary rounded-lg md:rounded-xl flex items-center justify-center">
                <Heart className="w-4 h-4 md:w-5 md:h-5 text-dark" fill="currentColor" />
              </div>
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Shotbox
              </h1>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="w-full max-w-[80%] mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">SHOTBOX</span> – India’s Vertical OTT Entertainment App
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-secondary max-w-3xl mx-auto px-4 leading-relaxed">
            Watch Free. Unlock More. Go Premium.
          </p>
          <p className="text-base md:text-lg lg:text-xl text-secondary max-w-3xl mx-auto px-4 leading-relaxed mt-4">
            Experience India’s first AI-powered vertical web series platform, designed exclusively for mobile users.
          </p>
          <p className="text-sm md:text-base text-secondary max-w-3xl mx-auto px-4 leading-relaxed mt-2">
            Powered by <span className="text-primary font-semibold">BMZ Worldwide OPC Pvt. Ltd.</span>, Shotbox brings you a new-age way to enjoy entertainment — vertical, smart, and addictive!
          </p>
        </motion.div>

        {/* Why Shotbox */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-800"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-dark" />
              </div>
              <h2 className="text-3xl font-bold text-white">Why Shotbox?</h2>
            </div>
            <ul className="text-secondary leading-relaxed text-lg list-disc pl-6 space-y-3">
              <li><span className="text-white">Vertical Format. Full Screen Fun.</span> Made for your phone — no rotation, no limits!</li>
              <li><span className="text-white">First Episodes Free.</span> Start watching instantly!</li>
              <li><span className="text-white">Reward Coins System.</span> Earn coins by watching short sponsored clips or completing fun tasks.</li>
              <li><span className="text-white">Unlock Premium Episodes.</span> Use your coins or go Premium for unlimited, ad-free streaming.</li>
              <li><span className="text-white">Smart, Fast & Fun.</span> Enjoy a seamless vertical OTT experience anytime, anywhere.</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-dark" />
              </div>
              <h2 className="text-3xl font-bold text-white">Your Entertainment. Your Way.</h2>
            </div>
            <p className="text-secondary leading-relaxed text-lg">
              Whether you love thrillers, comedy, romance, or drama — SHOTBOX delivers stories that fit right into your palm.
            </p>
            <p className="text-secondary leading-relaxed text-lg mt-4">
              Because you don’t just watch, you feel it. Because your screen time deserves smart stories. Because SHOTBOX OTT is the future of entertainment built for India’s new-age viewers.
            </p>
          </motion.div>
        </div>

        {/* Tagline Block */}
        <motion.div
          className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-800 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
            Watch Free. Unlock More. Go Premium.
          </h2>
          <p className="text-secondary text-lg leading-relaxed text-center max-w-3xl mx-auto">
            Experience a seamless vertical OTT experience — smart, fast, and tailored for your phone.
          </p>
        </motion.div>

        {/* Values section removed as requested */}

        {/* Optional additional sections could go here */}
      </main>

      {/* Global Footer is rendered by App.js */}
    </div>
  );
};

export default About;
