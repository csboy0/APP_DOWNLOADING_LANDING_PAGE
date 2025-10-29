import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Company: [
      { name: 'About Us', link: '/about' },
      { name: 'Contact', link: '/contact' }
    ],
    Support: [
      { name: 'FAQ', link: '/faq' }
    ],
    Legal: [
      { name: 'Privacy Policy', link: '/privacy' },
      { name: 'Refund Policy', link: '/refund' },
      { name: 'Terms & Conditions', link: '/terms' },
      { name: 'Delete Account', link: '/delete-account' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
      <div className="w-full max-w-[80%] mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Brand Section */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4 lg:mb-6">
              <img src="/logo.png" alt="Shotbox Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-xl" />
              <h3 className="text-xl md:text-2xl font-bold text-white">Shotbox</h3>
            </div>

            <p className="text-secondary mb-4 lg:mb-6 text-sm md:text-base max-w-md mx-auto md:mx-0">
              The ultimate entertainment app where you can watch amazing videos, discover new content, and earn rewards.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start space-x-3 text-secondary text-sm md:text-base">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>support@shotbox.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3 text-secondary text-sm md:text-base">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </motion.div>

          {/* Links Section */}
          <motion.div
            className="mt-8 md:mt-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4 lg:mb-6 text-center md:text-left text-lg">Quick Links</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-4">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category} className="text-center md:text-left">
                  <h5 className="text-primary font-medium mb-3 text-sm md:text-base">{category}</h5>
                  <ul className="space-y-2">
                    {links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.link}
                          className="text-secondary hover:text-white transition-colors duration-300 text-xs md:text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>


        {/* Social Links */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 pt-6 md:pt-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Social Media */}
          <div className="flex space-x-3 md:space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="w-9 h-9 md:w-10 md:h-10 bg-gray-800/50 rounded-lg flex items-center justify-center text-secondary hover:text-primary hover:bg-primary/10 transition-all duration-300"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-secondary text-xs md:text-sm">
              © 2024 Shotbox. All rights reserved.
            </p>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
