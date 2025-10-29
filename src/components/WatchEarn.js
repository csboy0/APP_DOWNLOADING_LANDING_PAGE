import React from 'react';
import { motion } from 'framer-motion';
import { Play, DollarSign, LockOpen, TrendingUp, Clock, Star } from 'lucide-react';

const WatchEarn = () => {
  const steps = [
    {
      icon: Play,
      title: 'Watch Videos',
      description: 'Enjoy your favorite short videos, reels, and movies',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: DollarSign,
      title: 'Earn Points',
      description: 'Watch short ads to earn points while you enjoy content',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: LockOpen,
      title: 'Redeem Points',
      description: 'Use points to unlock premium episodes and paid content',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const rewards = [
    { name: 'Premium Episode', points: '50', icon: '🎬' },
    { name: 'Exclusive Series', points: '200', icon: '📺' },
    { name: 'Ad-free Day', points: '150', icon: '🛡️' },
    { name: 'Early Access', points: '120', icon: '⚡' }
  ];

  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Watch &{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Earn
            </span>{' '}
            Rewards
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Turn your entertainment time into earning opportunities. Watch videos, earn points, and redeem amazing rewards!
          </p>
        </motion.div>

        {/* How It Works */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-dark font-bold text-sm z-10">
                {index + 1}
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-primary/30 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-4 border-l-primary border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Rewards Section */}
        <motion.div
          className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Unlockable{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Content
                </span>
              </h3>
              <p className="text-secondary text-lg mb-8">
                Redeem your points to unlock premium episodes, exclusive series, and ad-free viewing. Watch ads, collect points, and enjoy more.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                  <div className="text-secondary">Premium Unlocks</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                  <div className="text-secondary">Ads Watched</div>
                </div>
              </div>

              <button className="bg-gradient-primary text-dark px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <span>Start Earning Now</span>
              </button>
            </div>

            {/* Right Content - Rewards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {rewards.map((reward, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-3">{reward.icon}</div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                      {reward.name}
                    </h4>
                    <div className="text-primary font-semibold">
                      {reward.points} pts
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Features Highlight */}
        <motion.div 
          className="mt-20 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Clock, title: 'Instant Rewards', description: 'Get points immediately after watching' },
            { icon: Star, title: 'Premium Content', description: 'Access exclusive videos and earn more' },
            { icon: TrendingUp, title: 'Daily Bonuses', description: 'Extra points for daily engagement' }
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-dark" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">
                {feature.title}
              </h4>
              <p className="text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WatchEarn;

