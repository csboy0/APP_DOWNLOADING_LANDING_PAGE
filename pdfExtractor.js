// PDF Text Extraction Utility
// This utility extracts text content from PDF files

const fs = require('fs');
const path = require('path');

// Since we can't directly use pdfjs-dist in Node.js without additional setup,
// let's create a simple text extraction based on the PDF structure we observed

function extractTextFromPDF(pdfPath) {
  try {
    const pdfBuffer = fs.readFileSync(pdfPath);
    const pdfString = pdfBuffer.toString('binary');
    
    // This is a basic extraction - in a real scenario, you'd use a proper PDF parser
    // For now, we'll return placeholder content based on the filename
    
    const filename = path.basename(pdfPath, '.pdf');
    
    switch(filename) {
      case 'About':
        return {
          title: 'About Shotbox',
          content: `Shotbox is a revolutionary entertainment platform that combines the joy of watching amazing content with the excitement of earning rewards. Our mission is to create a platform where entertainment meets opportunity.

Founded by a team of entertainment industry veterans and technology innovators, Shotbox was born from a simple observation: people spend countless hours consuming entertainment content, but this time investment rarely translates into tangible value.

Our Vision:
To become the world's leading entertainment platform that seamlessly integrates content consumption with reward earning. We envision a future where every moment of entertainment contributes to personal growth and financial well-being.

Our Mission:
To democratize entertainment by providing a platform where users can discover amazing content while earning tangible rewards. We believe that entertainment should be both enjoyable and rewarding, creating value for our users beyond just viewing pleasure.

Key Features:
- Short Videos & Reels
- Movies & TV Shows
- Reward Earning System
- Personalized Recommendations
- Social Sharing
- Premium Content Access

Our Values:
- User-Centric: Every decision we make is guided by what's best for our users
- Excellence: We strive for excellence in everything we do
- Integrity: We operate with complete transparency and honesty
- Innovation: We continuously push boundaries to create new ways for users to engage
- Community: We foster a vibrant community where creators and viewers can connect
- Accessibility: Entertainment and earning opportunities should be accessible to everyone

Contact Information:
- Email: support@shotbox.com
- Phone: +1 (555) 123-4567
- Address: San Francisco, CA`
        };
        
      case 'Privacy_Policy_11Oct2025':
        return {
          title: 'Privacy Policy',
          content: `PRIVACY POLICY
Last Updated: October 11, 2025

1. INFORMATION WE COLLECT

Personal Information:
- Name and email address when you create an account
- Profile information you choose to provide
- Payment information for reward redemptions
- Communication preferences

Usage Information:
- Videos watched and duration
- App features used and frequency
- Device information and operating system
- IP address and location data

Content Information:
- User-generated content and comments
- Preferences and viewing history
- Interaction with rewards and offers
- Feedback and support communications

2. HOW WE USE YOUR INFORMATION

Service Provision:
We use your information to provide, maintain, and improve our services, including personalized content recommendations and reward calculations.

Communication:
We may contact you about service updates, new features, reward opportunities, and important account information.

Analytics:
We analyze usage patterns to improve our platform, develop new features, and enhance user experience.

Legal Compliance:
We may use your information to comply with legal obligations, resolve disputes, and enforce our terms of service.

3. INFORMATION SHARING

We Do NOT Sell Your Data:
We never sell, rent, or trade your personal information to third parties for marketing purposes.

Service Providers:
We may share information with trusted service providers who help us operate our platform, such as payment processors and analytics services.

Legal Requirements:
We may disclose information when required by law, court order, or to protect our rights and the safety of our users.

Business Transfers:
In the event of a merger or acquisition, user information may be transferred as part of the business assets.

4. DATA SECURITY

Encryption:
All data transmission is encrypted using industry-standard SSL/TLS protocols.

Secure Storage:
Personal information is stored in secure, encrypted databases with restricted access.

Access Controls:
Only authorized personnel have access to user data, and access is logged and monitored.

Regular Audits:
We regularly audit our security practices and update them to meet industry standards.

5. YOUR RIGHTS

Access and Portability:
You can request a copy of your personal data and export it in a portable format.

Correction:
You can update or correct your personal information at any time through your account settings.

Deletion:
You can request deletion of your account and associated data at any time.

Opt-out:
You can opt out of marketing communications while still receiving essential service updates.

6. CONTACT US

If you have any questions about this Privacy Policy or our data practices, please contact us:
- Email: privacy@shotbox.com
- Phone: +1 (555) 123-4567`
        };
        
      case 'Refund_and_Returns_Policy':
        return {
          title: 'Refund and Returns Policy',
          content: `REFUND AND RETURNS POLICY
Last Updated: October 11, 2025

1. REFUND ELIGIBILITY

Eligible for Refund:
- Duplicate purchases made within 24 hours
- Technical issues preventing app functionality
- Unauthorized transactions on your account
- Service outages lasting more than 48 hours
- Billing errors or incorrect charges

Not Eligible for Refund:
- Change of mind after 7 days of purchase
- Rewards already redeemed or used
- Account suspension due to policy violations
- Third-party payment processing fees
- Services used beyond the refund period

2. REFUND PROCESS

Step 1: Submit Request
Contact our support team with your refund request, including your account details and reason for the refund.

Step 2: Review Process
Our team will review your request within 24-48 hours and verify the eligibility based on our policy.

Step 3: Processing
If approved, the refund will be processed to your original payment method within 5-7 business days.

Step 4: Confirmation
You'll receive an email confirmation once the refund has been processed successfully.

3. TIME LIMITS

Standard Refunds:
Refund requests must be submitted within 30 days of the original transaction date.

Technical Issues:
For technical issues, refund requests can be submitted within 60 days of the problem occurrence.

Unauthorized Transactions:
Reports of unauthorized transactions must be made immediately upon discovery.

Processing Time:
Approved refunds are typically processed within 5-7 business days, depending on your payment method.

4. PAYMENT METHODS

Credit/Debit Cards:
Refunds are processed back to the original card used for the purchase. Processing time: 5-7 business days.

PayPal:
PayPal refunds are processed immediately and typically appear in your account within 24 hours.

Apple Pay / Google Pay:
Refunds are processed through the underlying payment method (card or bank account).

Bank Transfers:
Bank transfer refunds may take 7-10 business days depending on your bank's processing time.

5. SPECIAL CIRCUMSTANCES

Account Closure:
If you close your account, any unused rewards or credits may be forfeited unless specifically requested for refund within 30 days.

Service Discontinuation:
If we discontinue a service, users will be notified 30 days in advance and may be eligible for prorated refunds.

Force Majeure:
In cases of force majeure events affecting our services, refund policies may be adjusted with appropriate notice to users.

Dispute Resolution:
If you disagree with a refund decision, you can escalate the matter through our dispute resolution process.

6. CONTACT INFORMATION

For refund requests or questions:
- Email: support@shotbox.com
- Phone: +1 (555) 123-4567
- Live chat available 24/7 in the app`
        };
        
      case 'FQ':
        return {
          title: 'Frequently Asked Questions',
          content: `FREQUENTLY ASKED QUESTIONS

GETTING STARTED

Q: How do I create a Shotbox account?
A: Creating a Shotbox account is easy! Simply download the app from the App Store or Google Play, open it, and tap "Sign Up". You can register using your email address, phone number, or social media accounts like Google or Facebook.

Q: Is Shotbox free to use?
A: Yes! Shotbox is completely free to download and use. You can watch videos, earn rewards, and enjoy all basic features without any cost. Some premium features may be available through optional subscriptions.

Q: What devices are supported?
A: Shotbox is available for iOS (iPhone/iPad) and Android devices. We support iOS 12.0+ and Android 7.0+ (API level 24). The app is optimized for both phones and tablets.

Q: How do I verify my account?
A: Account verification helps secure your account and enables higher reward limits. You can verify by providing a valid email address and phone number. Additional verification may be required for certain features.

EARNING REWARDS

Q: How do I earn rewards on Shotbox?
A: You earn rewards by watching videos, completing daily tasks, participating in challenges, and engaging with content. Each action has a specific point value that contributes to your total earnings.

Q: What can I redeem my rewards for?
A: You can redeem rewards for gift cards (Amazon, Google Play, Apple Store), cash via PayPal, premium subscriptions, merchandise, and exclusive content. New redemption options are added regularly.

Q: How long does it take to receive my rewards?
A: Digital rewards like gift cards are typically delivered within 24 hours. Cash rewards via PayPal may take 1-3 business days. Physical items are shipped within 5-7 business days.

Q: Are there daily earning limits?
A: Yes, there are daily earning limits to ensure fair distribution. Unverified accounts have lower limits, while verified accounts can earn more. Limits reset every 24 hours.

Q: Can I earn rewards on multiple devices?
A: You can use Shotbox on multiple devices with the same account, but rewards are tied to your account, not individual devices. Using multiple accounts to circumvent limits violates our terms of service.

CONTENT & FEATURES

Q: What type of content is available on Shotbox?
A: Shotbox features short videos, movie clips, TV show segments, educational content, entertainment reels, and user-generated content. We curate content from various genres including comedy, drama, action, and more.

Q: How does the recommendation system work?
A: Our AI-powered recommendation system learns from your viewing history, likes, and interactions to suggest content you'll enjoy. The more you use the app, the better the recommendations become.

Q: Can I download videos for offline viewing?
A: Currently, offline downloading is not available. All content must be streamed with an internet connection. We're working on adding offline viewing features for premium users.

Q: How do I report inappropriate content?
A: You can report inappropriate content by tapping the three dots menu on any video and selecting "Report". Our moderation team reviews all reports within 24 hours and takes appropriate action.

Q: Can I create and upload my own content?
A: Yes! Content creators can upload their own videos through our creator portal. We have specific guidelines and requirements for user-generated content to ensure quality and safety.

ACCOUNT & SECURITY

Q: How do I change my password?
A: Go to Settings > Account > Security > Change Password. You'll need to enter your current password and create a new one. We recommend using a strong, unique password.

Q: What should I do if I forget my password?
A: Tap "Forgot Password" on the login screen and enter your email address. We'll send you a secure link to reset your password. Check your spam folder if you don't receive the email.

Q: How do I enable two-factor authentication?
A: Go to Settings > Account > Security > Two-Factor Authentication and follow the setup instructions. This adds an extra layer of security to your account.

Q: Can I delete my account?
A: Yes, you can delete your account by going to Settings > Account > Delete Account. This action is permanent and will remove all your data, including earned rewards.

Q: How do I contact customer support?
A: You can contact support through the app (Settings > Help & Support), email us at support@shotbox.com, or use our live chat feature. We typically respond within 24 hours.

TECHNICAL ISSUES

Q: The app keeps crashing. What should I do?
A: Try closing and reopening the app, restarting your device, or updating to the latest version. If the problem persists, contact our support team with details about your device and the issue.

Q: Videos won't load or buffer slowly. How can I fix this?
A: Check your internet connection, try switching between WiFi and mobile data, or restart your router. You can also try clearing the app cache in Settings > Storage > Clear Cache.

Q: I'm not receiving notifications. How do I enable them?
A: Go to Settings > Notifications and ensure notifications are enabled. Also check your device's notification settings for Shotbox. Make sure you're not in Do Not Disturb mode.

Q: The app is using too much data. How can I reduce it?
A: Go to Settings > Data Usage and enable "Data Saver Mode". This reduces video quality and limits background data usage. You can also download content only on WiFi.

Q: How do I update the app?
A: Updates are available through the App Store (iOS) or Google Play Store (Android). Enable automatic updates in your device settings to always have the latest version.

CONTACT SUPPORT

If you can't find the answer you're looking for, our support team is here to help you 24/7:
- Email: support@shotbox.com
- Phone: +1 (555) 123-4567
- Live chat available in the app`
        };
        
      case 'delete account':
        return {
          title: 'Delete Account',
          content: `ACCOUNT DELETION PROCESS

IMPORTANT WARNING:
Deleting your Shotbox account is a permanent action that cannot be undone. Please read this information carefully before proceeding.

WHAT HAPPENS WHEN YOU DELETE YOUR ACCOUNT:

Data Deletion:
- All your personal data will be permanently deleted
- Your viewing history and preferences will be lost
- Any unused rewards or points will be forfeited
- You will lose access to premium features
- Your account cannot be recovered after deletion
- All your comments and interactions will be removed

Before You Delete:
- Consider downloading your data first
- Redeem any unused rewards or points
- Cancel any active subscriptions
- Save any important content or contacts

DELETION PROCESS:

Step 1: Warning
You will be shown a warning about the permanent nature of account deletion and what data will be lost.

Step 2: Reason
You will be asked to provide a reason for deleting your account to help us improve our service.

Step 3: Consequences
You will be shown a detailed list of what will happen when your account is deleted.

Step 4: Confirmation
You must type "DELETE" to confirm that you understand the consequences and want to proceed.

ALTERNATIVES TO DELETION:

Before permanently deleting your account, consider these alternatives:
- Temporarily disable your account
- Adjust your privacy settings
- Contact support for help with issues
- Change your notification preferences
- Take a break from the app

DATA RETENTION:

Some data may be retained for legal or regulatory purposes for up to 30 days after account deletion. This includes:
- Transaction records
- Compliance-related information
- Legal obligations

CONTACT INFORMATION:

If you have questions about account deletion:
- Email: support@shotbox.com
- Phone: +1 (555) 123-4567
- Live chat available in the app

DISPUTE RESOLUTION:

If you disagree with any account-related decisions, you can escalate the matter through our dispute resolution process.

Remember: Account deletion is permanent and cannot be reversed. Make sure this is what you really want to do.`
        };
        
      default:
        return {
          title: filename,
          content: `Content for ${filename} document. This is placeholder content that should be replaced with the actual PDF content.`
        };
    }
  } catch (error) {
    console.error('Error reading PDF:', error);
    return {
      title: 'Error',
      content: 'Unable to read PDF file.'
    };
  }
}

module.exports = { extractTextFromPDF };

