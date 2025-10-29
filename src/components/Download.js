import React from 'react';
import { motion } from 'framer-motion';
import { Download, Smartphone, QrCode, CheckCircle } from 'lucide-react';

const DownloadSection = () => {
  const features = [
    'Free to download',
    'No subscription required',
    'Instant rewards',
    'Regular updates'
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 md:w-72 md:h-72 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-primary/3 rounded-full blur-2xl animate-glow"></div>
      </div>

      <div className="w-full max-w-[80%] mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">
            Download{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Shotbox
            </span>{' '}
            Now
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-secondary max-w-3xl mx-auto px-4">
            Get started with Shotbox today. Watch short ads to earn points and redeem those points to unlock premium episodes and paid content.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Features List */}
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                  <span className="text-secondary text-sm md:text-base lg:text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <motion.button
                  className="group bg-gradient-primary text-dark px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold text-sm md:text-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 md:space-x-3"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-dark/20 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-3 h-3 md:w-5 md:h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs md:text-sm opacity-80">Download on the</div>
                    <div className="text-sm md:text-lg font-bold">Google Play</div>
                  </div>
                </motion.button>
              </div>
              {/* QR removed as requested */}
            </div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            className="flex justify-center lg:justify-end mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
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
                          <Download className="w-5 h-5 text-dark" />
                        </div>
                        <span className="text-white font-bold text-lg">Shotbox</span>
                      </div>
                      <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                    </div>

                    {/* Download Progress */}
                    <div className="text-center mb-8">
                      <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
                        <Download className="w-12 h-12 text-dark" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Download Complete!</h3>
                      <p className="text-secondary">Ready to start earning rewards</p>
                    </div>

                    {/* Features Preview */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-xl">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                          <div className="w-4 h-4 bg-dark rounded"></div>
                        </div>
                        <div>
                          <div className="text-white text-sm font-semibold">Watch Videos</div>
                          <div className="text-secondary text-xs">Watch ads to earn points</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-xl">
                        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                          <div className="w-4 h-4 bg-white rounded"></div>
                        </div>
                        <div>
                          <div className="text-white text-sm font-semibold">Redeem Points</div>
                          <div className="text-secondary text-xs">Unlock premium episodes</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-xl">
                        <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                          <div className="w-4 h-4 bg-white rounded"></div>
                        </div>
                        <div>
                          <div className="text-white text-sm font-semibold">Share & Get Points</div>
                          <div className="text-secondary text-xs">Earn bonus points</div>
                        </div>
                      </div>
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

        {/* Additional Info */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '📱', title: 'Mobile First', description: 'Optimized for mobile devices' },
              { icon: '🔒', title: 'Secure', description: 'Your data is safe with us' },
              { icon: '⚡', title: 'Fast', description: 'Lightning quick performance' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                <p className="text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
