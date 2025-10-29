import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
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
      autoplaySpeed: 4000,
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

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Creator',
      avatar: '👩‍🎨',
      rating: 5,
      text: 'Shotbox has completely changed how I consume entertainment. The earning feature is amazing - I\'ve already redeemed $50 in gift cards just by watching videos I love!',
      highlight: 'Earned $50 in rewards'
    },
    {
      name: 'Mike Chen',
      role: 'Student',
      avatar: '👨‍🎓',
      rating: 5,
      text: 'The video quality is incredible and the app is so smooth. I love discovering new creators and the personalized recommendations are spot on. Highly recommended!',
      highlight: 'Perfect recommendations'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Manager',
      avatar: '👩‍💼',
      rating: 5,
      text: 'As someone who watches a lot of content, Shotbox is perfect for me. The interface is clean, the content is diverse, and earning rewards while watching is a game-changer.',
      highlight: 'Clean interface'
    },
    {
      name: 'David Kim',
      role: 'Tech Enthusiast',
      avatar: '👨‍💻',
      rating: 5,
      text: 'The app performance is outstanding. Fast loading, no buffering issues, and the reward system actually works. I\'ve been using it for 3 months and love it.',
      highlight: 'Outstanding performance'
    },
    {
      name: 'Lisa Thompson',
      role: 'Freelancer',
      avatar: '👩‍🎨',
      rating: 5,
      text: 'I was skeptical about earning rewards from watching videos, but Shotbox delivers! The points add up quickly and the redemption process is super easy.',
      highlight: 'Easy redemption'
    },
    {
      name: 'Alex Martinez',
      role: 'Designer',
      avatar: '👨‍🎨',
      rating: 5,
      text: 'The UI/UX design is beautiful and intuitive. It\'s clear that a lot of thought went into making this app user-friendly. The dark theme is perfect for night viewing.',
      highlight: 'Beautiful design'
    }
  ];

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
            What Our{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Users
            </span>{' '}
            Say
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-secondary max-w-3xl mx-auto px-4">
            Join thousands of satisfied users who are already enjoying Shotbox and earning rewards every day.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <Slider {...settings} className="testimonials-slider">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-2 md:px-4">
                  <motion.div
                    className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-800 hover:border-primary/30 transition-all duration-300 h-full"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Quote Icon */}
                    <div className="absolute top-4 md:top-6 right-4 md:right-6 opacity-20">
                      <Quote className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                    </div>

                    {/* Rating */}
                    <div className="flex space-x-1 mb-3 md:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-primary fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-secondary mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                      "{testimonial.text}"
                    </p>

                    {/* Highlight */}
                    <div className="inline-block bg-gradient-primary text-dark px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
                      {testimonial.highlight}
                    </div>

                    {/* User Info */}
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-full flex items-center justify-center text-lg md:text-2xl">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm md:text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-secondary text-xs md:text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>

        {/* Rating panel removed as requested */}
      </div>
    </section>
  );
};

export default Testimonials;
