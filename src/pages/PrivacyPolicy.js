import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
              <span className="text-primary group-hover:text-accent transition-colors duration-300">
                Back to Home
              </span>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-dark" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Privacy Policy
              </h1>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="w-full max-w-[80%] mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            SHOTBOX{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-secondary text-lg">Effective Date: 11th October 2025</p>
        </motion.div>

        {/* Policy Sections */}
        <div className="max-w-4xl mx-auto space-y-10">
          {[
            {
              title: "1. INTRODUCTION",
              content: `BMZ WORLDWIDE OPC PVT. LTD (“Company,” “we,” “us,” or “our”) owns and operates the SHOTBOX platform — a vertical-format OTT streaming application for Android, iOS, and web. This Privacy Policy explains how we collect, use, disclose, and protect your information while you use our service in compliance with the Information Technology Act, DPDP Act 2023, and related Indian digital media laws.`,
            },
            {
              title: "2. SCOPE & APPLICABILITY",
              content:
                "This Policy applies to all users in India accessing SHOTBOX via mobile apps, official websites, or integrated services such as payment gateways and analytics tools.",
            },
            {
              title: "3. INFORMATION WE COLLECT",
              content:
                "We collect (a) Personal data such as Name, Email, Mobile, DOB, and Payment credentials; (b) Device data like IP, OS, and device identifiers; (c) Usage data such as watch time and navigation; (d) Behavioral data including preferences and ad interactions.",
            },
            {
              title: "4. METHODS OF COLLECTION",
              content:
                "Data is gathered directly from user activity, automatically through cookies or SDKs, and via verified third-party integrations such as Razorpay, Google, and Meta.",
            },
            {
              title: "5. PURPOSE OF PROCESSING",
              content:
                "Data is processed to provide services, verify users, complete transactions, personalize content, display ads, comply with laws, and improve platform experience.",
            },
            {
              title: "6. DATA SHARING & DISCLOSURE",
              content:
                "Shared only with trusted service providers (e.g., AWS, Akamai, Firebase), regulatory authorities when legally required, and during lawful business transfers.",
            },
            {
              title: "7. DATA RETENTION",
              content:
                "Personal data is retained as long as accounts remain active or as legally mandated (financial data: 7 years; usage data: 3 years). Archived data is encrypted or anonymized.",
            },
            {
              title: "8. USER RIGHTS",
              content:
                "Users may access, correct, or delete their data; withdraw consent; or manage ad and notification preferences through in-app settings or by contacting support.",
            },
            {
              title: "9. CHILDREN’S PRIVACY",
              content:
                "SHOTBOX is not intended for users under 13. Parental consent and data deletion rights apply for minors as per Indian law.",
            },
            {
              title: "10. DATA SECURITY",
              content:
                "We implement AES-256 encryption, TLS 1.3, multi-factor authentication, and ISO 27001–certified data centers. Regular security audits ensure data protection.",
            },
            {
              title: "11. INTERNATIONAL TRANSFERS",
              content:
                "Limited data may be processed in Singapore and the U.S. under lawful contractual clauses aligned with Section 16 of the DPDP Act, 2023.",
            },
            {
              title: "12. COOKIE POLICY",
              content:
                "Cookies and local storage enhance performance and personalization. Users may disable non-essential cookies within app settings.",
            },
            {
              title: "13. GRIEVANCE REDRESSAL",
              content: `Data Protection Officer (DPO):  
              Email: legal@shotbox.in | Phone: +91-9967025984 (10 AM–6 PM IST)  
              BMZ WORLDWIDE OPC PVT. LTD, Office No. 90, First Floor, Om Heera Panna Mall, Oshiwara, Andheri West, Mumbai – 400053`,
            },
            {
              title: "14. POLICY UPDATES",
              content:
                "SHOTBOX may update this Policy for legal or technical reasons. Material updates will be notified via app alerts or registered email.",
            },
            {
              title: "15. GOVERNING LAW",
              content:
                "This Policy is governed by the laws of India, and all disputes fall under the exclusive jurisdiction of Mumbai, Maharashtra.",
            },
          ].map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
            >
              <h2 className="text-2xl font-semibold mb-4 text-primary">{section.title}</h2>
              <p className="text-secondary leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </motion.section>
          ))}

          {/* Contact Section */}
          <motion.section
            className="text-center mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <p className="text-secondary mb-4">
                For any questions about this Privacy Policy, contact our team:
              </p>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:support@shotbox.in"
                  className="text-primary hover:text-accent transition-colors duration-300"
                >
                  support@shotbox.in
                </a>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
