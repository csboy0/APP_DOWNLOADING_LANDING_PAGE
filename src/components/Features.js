import React from 'react';
import { motion } from 'framer-motion';
import { Video, Film, DollarSign, Clock, Heart, Share2 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Video,
      title: 'Short Videos',
      description: 'Discover trending short videos and viral content from creators worldwide.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Film,
      title: 'Movies & Shows',
      description: 'Stream your favorite movies and TV shows in high quality.',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: DollarSign,
      title: 'Earn Rewards',
      description: 'Watch videos and earn points that can be redeemed for real rewards.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Clock,
      title: 'Quick Access',
      description: 'Fast loading times and seamless streaming experience.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Heart,
      title: 'Personalized',
      description: 'AI-powered recommendations based on your viewing preferences.',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Share2,
      title: 'Social Sharing',
      description: 'Share your favorite content with friends and family easily.',
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-dark">
      <div className="w-full max-w-[80%] mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">
            Why Choose{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Shotbox?
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-secondary max-w-3xl mx-auto px-4">
            Experience entertainment like never before with our cutting-edge features designed to make your viewing experience exceptional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-800 hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 md:mb-6">
                  <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${feature.color} rounded-xl md:rounded-2xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300`}>
                    <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 text-white group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-secondary leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { number: '1M+', label: 'Active Users' },
            { number: '50K+', label: 'Videos Daily' },
            { number: '99.9%', label: 'Uptime' },
            { number: '4.8★', label: 'App Rating' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1 md:mb-2">
                {stat.number}
              </div>
              <div className="text-secondary text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
