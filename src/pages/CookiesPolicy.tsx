import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CookiesPolicy = () => {
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
            Cookies <span className="text-primary">Policy</span>
          </h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">1. What Are Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you
                visit our website. They are widely used to make websites work more efficiently and to
                provide information to the owners of the site.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">2. How We Use Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies for several reasons: to remember your preferences, to understand how you
                use our website, to improve your experience, and to show you relevant content. Some cookies
                are essential for the website to function properly.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">3. Types of Cookies We Use</h2>
              <ul className="text-muted-foreground leading-relaxed space-y-2">
                <li><strong className="text-foreground">Essential Cookies:</strong> Required for the website to function</li>
                <li><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong className="text-foreground">Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong className="text-foreground">Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">4. Managing Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                You can control and manage cookies in various ways. Most browsers allow you to refuse or
                accept cookies, delete cookies, or be notified when a cookie is set. Please note that
                removing or blocking cookies may impact your user experience.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">5. Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time. We encourage you to periodically
                review this page for the latest information on our cookie practices.
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

export default CookiesPolicy;
