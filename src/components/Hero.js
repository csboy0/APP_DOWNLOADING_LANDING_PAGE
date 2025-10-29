import React from 'react';
import { motion } from 'framer-motion';
import { Play, Download, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-glow"></div>
      </div>

      <div className="relative z-10 w-full max-w-[80%] mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <motion.div 
              className="mb-6 md:mb-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Shotbox Logo"
                  className="h-14 w-14 md:h-16 md:w-16 rounded-2xl shadow-lg"
                  loading="eager"
                  decoding="async"
                />
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Shotbox
                </h1>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Watch, Enjoy &{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Earn
              </span>
            </motion.h2>

            <motion.p 
              className="text-base md:text-lg lg:text-xl text-secondary mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Discover amazing short videos, reels, and movies. Watch an ad to earn points, then use those points to unlock premium episodes and paid content.
            </motion.p>

            {/* Download Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start mb-6 md:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button className="group bg-gradient-primary text-dark px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <Download className="w-4 h-4 md:w-5 md:h-5" />
                <span>Google Play</span>
              </button>
            </motion.div>

            {/* Rating */}
            <motion.div 
              className="flex items-center justify-center lg:justify-start space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-primary fill-current" />
                ))}
              </div>
              <span className="text-secondary text-sm md:text-base">4.8/5 • 10K+ Downloads</span>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div 
            className="flex justify-center lg:justify-end mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-64 h-[480px] md:w-72 md:h-[540px] lg:w-80 lg:h-[600px] bg-gray-900 rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] p-1.5 md:p-2 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-4 md:px-6 py-2 md:py-3 text-white text-xs md:text-sm">
                    <span>9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="px-6 py-4">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                          <Play className="w-5 h-5 text-dark" fill="currentColor" />
                        </div>
                        <span className="text-white font-bold text-lg">Shotbox</span>
                      </div>
                      <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                    </div>

                    {/* Featured Video */}
                    <div className="mb-6">
                      <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                        <div className="relative z-10 text-center">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Play className="w-8 h-8 text-white" fill="currentColor" />
                          </div>
                          <p className="text-white text-sm font-medium">Featured Video</p>
                        </div>
                      </div>
                    </div>

                    {/* Video Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center">
                          <Play className="w-6 h-6 text-gray-400" fill="currentColor" />
                        </div>
                      ))}
                    </div>

                    {/* Bottom Navigation */}
                    <div className="absolute bottom-4 left-6 right-6">
                      <div className="flex justify-around bg-gray-800/50 backdrop-blur-sm rounded-2xl py-3">
                        {['Home', 'Search', 'Earn', 'Profile'].map((item, i) => (
                          <div key={i} className="flex flex-col items-center space-y-1">
                            <div className={`w-6 h-6 rounded ${i === 0 ? 'bg-primary' : 'bg-gray-600'}`}></div>
                            <span className={`text-xs ${i === 0 ? 'text-primary' : 'text-gray-400'}`}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-float"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
