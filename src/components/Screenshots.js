import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Screenshots = () => {
  const screenshots = [
    {
      id: 1,
      title: 'Home Feed',
      description: 'Discover trending videos and personalized content',
      image: '/api/placeholder/300/600'
    },
    {
      id: 2,
      title: 'Video Player',
      description: 'Immersive viewing experience with smooth playback',
      image: '/api/placeholder/300/600'
    },
    {
      id: 3,
      title: 'Earn Rewards',
      description: 'Track your earnings and redeem rewards',
      image: '/api/placeholder/300/600'
    },
    {
      id: 4,
      title: 'Profile',
      description: 'Manage your account and viewing history',
      image: '/api/placeholder/300/600'
    },
    {
      id: 5,
      title: 'Search',
      description: 'Find your favorite content quickly',
      image: '/api/placeholder/300/600'
    }
  ];

  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-dark transition-all duration-300"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-dark transition-all duration-300"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        }
      ]
    };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-900/30">
      <div className="w-full max-w-[80%] mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">
            See{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Shotbox
            </span>{' '}
            in Action
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-secondary max-w-3xl mx-auto px-4">
            Take a look at our beautiful interface and discover how easy it is to enjoy your favorite content.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <Slider {...settings} className="screenshot-slider">
              {screenshots.map((screenshot, index) => (
                <div key={screenshot.id} className="px-2 md:px-4">
                  <motion.div
                    className="group relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-4 md:p-6 border border-gray-800 hover:border-primary/30 transition-all duration-300"
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Phone Mockup */}
                    <div className="relative mx-auto w-40 h-80 md:w-48 md:h-96 bg-gray-800 rounded-[1.5rem] md:rounded-[2rem] p-1.5 md:p-2 mb-4 md:mb-6">
                      <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-[1rem] md:rounded-[1.5rem] overflow-hidden relative">
                        {/* Status Bar */}
                        <div className="flex justify-between items-center px-4 py-2 text-white text-xs">
                          <span>9:41</span>
                          <div className="flex space-x-1">
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                          </div>
                        </div>

                        {/* App Content */}
                        <div className="px-4 py-3">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center">
                                <div className="w-3 h-3 bg-dark rounded"></div>
                              </div>
                              <span className="text-white text-sm font-bold">Shotbox</span>
                            </div>
                            <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                          </div>

                          {/* Content based on screenshot type */}
                          {screenshot.id === 1 && (
                            <div className="space-y-3">
                              <div className="w-full h-20 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                  <div className="w-4 h-4 bg-white rounded"></div>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                {[...Array(4)].map((_, i) => (
                                  <div key={i} className="aspect-square bg-gray-600 rounded-lg"></div>
                                ))}
                              </div>
                            </div>
                          )}

                          {screenshot.id === 2 && (
                            <div className="w-full h-32 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl flex items-center justify-center">
                              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                <div className="w-6 h-6 bg-white rounded"></div>
                              </div>
                            </div>
                          )}

                          {screenshot.id === 3 && (
                            <div className="space-y-3">
                              <div className="text-center">
                                <div className="text-2xl font-bold text-primary mb-1">1,250</div>
                                <div className="text-xs text-secondary">Points Earned</div>
                              </div>
                              <div className="space-y-2">
                                {[...Array(3)].map((_, i) => (
                                  <div key={i} className="h-6 bg-gray-600 rounded"></div>
                                ))}
                              </div>
                            </div>
                          )}

                          {screenshot.id === 4 && (
                            <div className="space-y-3">
                              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto"></div>
                              <div className="text-center">
                                <div className="text-sm font-bold text-white">John Doe</div>
                                <div className="text-xs text-secondary">Premium User</div>
                              </div>
                              <div className="space-y-2">
                                {[...Array(3)].map((_, i) => (
                                  <div key={i} className="h-4 bg-gray-600 rounded"></div>
                                ))}
                              </div>
                            </div>
                          )}

                          {screenshot.id === 5 && (
                            <div className="space-y-3">
                              <div className="h-8 bg-gray-600 rounded-lg"></div>
                              <div className="space-y-2">
                                {[...Array(4)].map((_, i) => (
                                  <div key={i} className="h-6 bg-gray-600 rounded"></div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Bottom Navigation */}
                          <div className="absolute bottom-2 left-4 right-4">
                            <div className="flex justify-around bg-gray-800/50 backdrop-blur-sm rounded-xl py-2">
                              {[...Array(4)].map((_, i) => (
                                <div key={i} className={`w-4 h-4 rounded ${i === 0 ? 'bg-primary' : 'bg-gray-600'}`}></div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="text-center">
                      <h3 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300">
                        {screenshot.title}
                      </h3>
                      <p className="text-secondary text-sm md:text-base">
                        {screenshot.description}
                      </p>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Screenshots;
