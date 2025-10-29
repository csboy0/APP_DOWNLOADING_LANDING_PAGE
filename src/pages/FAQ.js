import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState({});

  const faqData = [
    {
      category: 'Getting Started',
      questions: [
        {
          question: 'How do I create a Shotbox account?',
          answer: 'Creating a Shotbox account is easy! Simply download the app from the App Store or Google Play, open it, and tap "Sign Up". You can register using your email address, phone number, or social media accounts like Google or Facebook.'
        },
        {
          question: 'Is Shotbox free to use?',
          answer: 'Yes! Shotbox is completely free to download and use. You can watch videos, earn rewards, and enjoy all basic features without any cost. Some premium features may be available through optional subscriptions.'
        },
        {
          question: 'What devices are supported?',
          answer: 'Shotbox is available for iOS (iPhone/iPad) and Android devices. We support iOS 12.0+ and Android 7.0+ (API level 24). The app is optimized for both phones and tablets.'
        },
        {
          question: 'How do I verify my account?',
          answer: 'Account verification helps secure your account and enables higher reward limits. You can verify by providing a valid email address and phone number. Additional verification may be required for certain features.'
        }
      ]
    },
    {
      category: 'Earning Points',
      questions: [
        {
          question: 'How do I earn points on Shotbox?',
          answer: 'You earn points by watching short sponsored ads and through occasional in-app tasks. Points accumulate in your account and can be used inside Shotbox.'
        },
        {
          question: 'What can I redeem my points for?',
          answer: 'Use your points to unlock premium episodes, exclusive series, and other paid content within Shotbox. Points are not cash and cannot be withdrawn.'
        },
        {
          question: 'How long does redemption take?',
          answer: 'Unlocks are instant once you have enough points. After redemption, premium content becomes available immediately in your library.'
        },
        {
          question: 'Are there daily earning limits?',
          answer: 'Yes, there may be daily earning limits to ensure fair usage. Limits reset every 24 hours and can vary based on account status.'
        },
        {
          question: 'Can I earn points on multiple devices?',
          answer: 'You can use Shotbox on multiple devices with the same account; points are tied to your account. Creating multiple accounts to bypass limits violates our terms.'
        }
      ]
    },
    {
      category: 'Content & Features',
      questions: [
        {
          question: 'What type of content is available on Shotbox?',
          answer: 'Shotbox features short videos, movie clips, TV show segments, educational content, entertainment reels, and user-generated content. We curate content from various genres including comedy, drama, action, and more.'
        },
        {
          question: 'How does the recommendation system work?',
          answer: 'Our AI-powered recommendation system learns from your viewing history, likes, and interactions to suggest content you\'ll enjoy. The more you use the app, the better the recommendations become.'
        },
        {
          question: 'Can I download videos for offline viewing?',
          answer: 'Currently, offline downloading is not available. All content must be streamed with an internet connection. We\'re working on adding offline viewing features for premium users.'
        },
        {
          question: 'How do I report inappropriate content?',
          answer: 'You can report inappropriate content by tapping the three dots menu on any video and selecting "Report". Our moderation team reviews all reports within 24 hours and takes appropriate action.'
        },
        {
          question: 'Can I create and upload my own content?',
          answer: 'Yes! Content creators can upload their own videos through our creator portal. We have specific guidelines and requirements for user-generated content to ensure quality and safety.'
        }
      ]
    },
    {
      category: 'Account & Security',
      questions: [
        {
          question: 'How do I change my password?',
          answer: 'Go to Settings > Account > Security > Change Password. You\'ll need to enter your current password and create a new one. We recommend using a strong, unique password.'
        },
        {
          question: 'What should I do if I forget my password?',
          answer: 'Tap "Forgot Password" on the login screen and enter your email address. We\'ll send you a secure link to reset your password. Check your spam folder if you don\'t receive the email.'
        },
        {
          question: 'How do I enable two-factor authentication?',
          answer: 'Go to Settings > Account > Security > Two-Factor Authentication and follow the setup instructions. This adds an extra layer of security to your account.'
        },
        {
          question: 'Can I delete my account?',
          answer: 'Yes, you can delete your account by going to Settings > Account > Delete Account. This action is permanent and will remove all your data, including earned rewards.'
        },
        {
          question: 'How do I contact customer support?',
          answer: 'You can contact support through the app (Settings > Help & Support), email us at support@shotbox.com, or use our live chat feature. We typically respond within 24 hours.'
        }
      ]
    },
    {
      category: 'Technical Issues',
      questions: [
        {
          question: 'The app keeps crashing. What should I do?',
          answer: 'Try closing and reopening the app, restarting your device, or updating to the latest version. If the problem persists, contact our support team with details about your device and the issue.'
        },
        {
          question: 'Videos won\'t load or buffer slowly. How can I fix this?',
          answer: 'Check your internet connection, try switching between WiFi and mobile data, or restart your router. You can also try clearing the app cache in Settings > Storage > Clear Cache.'
        },
        {
          question: 'I\'m not receiving notifications. How do I enable them?',
          answer: 'Go to Settings > Notifications and ensure notifications are enabled. Also check your device\'s notification settings for Shotbox. Make sure you\'re not in Do Not Disturb mode.'
        },
        {
          question: 'The app is using too much data. How can I reduce it?',
          answer: 'Go to Settings > Data Usage and enable "Data Saver Mode". This reduces video quality and limits background data usage. You can also download content only on WiFi.'
        },
        {
          question: 'How do I update the app?',
          answer: 'Updates are available through the App Store (iOS) or Google Play Store (Android). Enable automatic updates in your device settings to always have the latest version.'
        }
      ]
    }
  ];

  const toggleExpanded = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredData = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

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
                <HelpCircle className="w-5 h-5 text-dark" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                FAQ
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
            Frequently Asked{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed mb-8">
            Find answers to common questions about Shotbox. Can't find what you're looking for? Contact our support team.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-800 rounded-2xl text-white placeholder-secondary focus:outline-none focus:border-primary transition-colors duration-300"
              />
            </div>
          </div>
        </motion.div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto space-y-8">
          {filteredData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + categoryIndex * 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-white">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const key = `${categoryIndex}-${questionIndex}`;
                  const isExpanded = expandedItems[key];
                  
                  return (
                    <div
                      key={questionIndex}
                      className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleExpanded(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors duration-300"
                      >
                        <h3 className="text-lg font-semibold text-white pr-4">
                          {item.question}
                        </h3>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                        )}
                      </button>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4">
                              <p className="text-secondary leading-relaxed">
                                {item.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-800">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Still Need{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Help?
              </span>
            </h2>
            <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our support team is here to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@shotbox.in"
                className="bg-gradient-primary text-dark px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
              </a>
              <a
                href="tel:+15551234567"
                className="border border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-dark transition-all duration-300"
              >
                Call Us
              </a>
            </div>
            <div className="mt-8 text-secondary">
              <p>📧 support@shotbox.in</p>
              <p>📞 +91 9967127959</p>
              <p>💬 Live chat available in the app</p>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Global Footer is rendered by App.js */}
    </div>
  );
};

export default FAQ;
