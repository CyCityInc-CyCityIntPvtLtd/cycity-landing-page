import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background noise-overlay">
      <div className="container-custom py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span className="font-orbitron text-sm">Back to Home</span>
          </Link>

          <h1 className="heading-lg text-foreground mb-8">
            Privacy <span className="text-primary">Policy</span>
          </h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                At CyCity, we collect information you provide directly to us, such as when you create an account,
                make a purchase, or contact us for support. This may include your name, email address, phone number,
                and any other information you choose to provide.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, process transactions,
                send you technical notices and support messages, and respond to your comments and questions.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not share your personal information with third parties except as described in this policy.
                We may share information with vendors, consultants, and other service providers who need access
                to such information to carry out work on our behalf.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We take reasonable measures to help protect information about you from loss, theft, misuse,
                unauthorized access, disclosure, alteration, and destruction. All data is encrypted using
                industry-standard protocols.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">5. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at privacy@cycity.space
              </p>
            </section>
          </div>

          <p className="text-muted-foreground text-sm mt-12">
            Last updated: December 2024
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
