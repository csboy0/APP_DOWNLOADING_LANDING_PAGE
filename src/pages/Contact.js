import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CONTACT_NUMBER = '919967127959';
const CONTACT_EMAIL = 'support@shotbox.in';
const WHATSAPP_NUMBER = '919967127959'; // include country code for wa.me

const Contact = () => {
  return (
    <div className="min-h-screen bg-dark text-white flex flex-col">
      {/* Header */}
      <motion.header
        className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full max-w-[80%] mx-auto px-4 md:px-6 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 group">
              <ArrowLeft className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" />
              <span className="text-primary group-hover:text-accent transition-colors duration-300">Back</span>
            </Link>
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">Shotbox</h1>
          </div>
        </div>
      </motion.header>

      {/* Content */}
      <main className="flex-1 w-full max-w-[80%] mx-auto px-4 md:px-6 py-10 md:py-14">
        <div className="text-center mb-8">
          <motion.h2
            className="text-2xl md:text-3xl font-semibold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Customer Support
          </motion.h2>
          <motion.p
            className="text-secondary mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Monday to Saturday (10am to 9pm)
          </motion.p>
        </div>

        <div className="space-y-5 max-w-xl mx-auto">
          {/* Phone */}
          <motion.a
            href={`tel:${CONTACT_NUMBER}`}
            className="flex items-center gap-3 w-full bg-gray-900/70 border border-gray-800 rounded-2xl px-5 py-4 hover:border-primary/40 transition-colors"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gray-800/70 flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-base font-semibold tracking-wide">{CONTACT_NUMBER}</div>
              <div className="text-xs text-secondary">Call support</div>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-center gap-3 w-full bg-gray-900/70 border border-gray-800 rounded-2xl px-5 py-4 hover:border-primary/40 transition-colors"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gray-800/70 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-base font-semibold tracking-wide">{CONTACT_EMAIL}</div>
              <div className="text-xs text-secondary">Email support</div>
            </div>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 w-full bg-gray-900/70 border border-gray-800 rounded-2xl px-5 py-4 hover:border-primary/40 transition-colors"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gray-800/70 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-green-400" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-base font-semibold tracking-wide">WhatsApp Chat</div>
              <div className="text-xs text-secondary">Open in WhatsApp</div>
            </div>
          </motion.a>
        </div>
      </main>
    </div>
  );
};

export default Contact;


