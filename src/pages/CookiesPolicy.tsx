import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { Footer } from '../components/layout/Footer';
import { AudioManager } from '../components/audio/AudioManager';

const CookiesPolicy = () => {
  useEffect(() => {
    // Enable scrolling for policy pages with enhanced fix
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
    document.body.style.position = 'static';
    document.body.style.width = 'auto';
    
    // Enhanced right-click protection
    const disableRightClick = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      return false;
    };

    const disableKeyboardShortcuts = (e: KeyboardEvent) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, etc.
      if (
        e.key === 'F12' ||
        e.keyCode === 123 ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C' || e.key === 'K')) ||
        (e.ctrlKey && (e.key === 'U' || e.key === 'u')) ||
        (e.ctrlKey && e.shiftKey && e.key === 'Delete') ||
        e.key === 'F1' ||
        (e.ctrlKey && e.key === 'H') ||
        (e.ctrlKey && e.key === 'J') ||
        (e.ctrlKey && (e.key === 'a' || e.key === 'A')) ||
        (e.ctrlKey && (e.key === 's' || e.key === 'S')) ||
        (e.key === 'PrintScreen' || e.keyCode === 44)
      ) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
    };

    const disableDragDrop = (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Add event listeners
    document.addEventListener('contextmenu', disableRightClick, { capture: true });
    document.addEventListener('keydown', disableKeyboardShortcuts, { capture: true });
    document.addEventListener('dragstart', disableDragDrop, { capture: true });
    document.addEventListener('drop', disableDragDrop, { capture: true });
    document.addEventListener('dragover', disableDragDrop, { capture: true });

    return () => {
      // Reset body styles when leaving with enhanced reset
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      document.body.style.position = '';
      document.body.style.width = '';
      
      // Remove event listeners
      document.removeEventListener('contextmenu', disableRightClick, { capture: true } as any);
      document.removeEventListener('keydown', disableKeyboardShortcuts, { capture: true } as any);
      document.removeEventListener('dragstart', disableDragDrop, { capture: true } as any);
      document.removeEventListener('drop', disableDragDrop, { capture: true } as any);
      document.removeEventListener('dragover', disableDragDrop, { capture: true } as any);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background noise-overlay overflow-y-auto">
      <AudioManager />
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
              <p className="text-sm text-muted-foreground mb-6">
                <strong>Last Updated: December 20, 2025</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This Cookies Policy explains how Cy City International Private Limited and Cy City Inc. ("Cy City", "we", "our") use cookies and similar technologies on our website and platforms.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">1. What Are Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files stored on your device when you visit a website. They help improve user experience, enable certain functions, and provide analytics.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">2. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">A. Essential Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Required for website functionality (e.g., navigation, security).
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">B. Performance & Analytics Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    Used to analyze user behavior, detect issues, and improve performance. May include:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Traffic monitoring</li>
                    <li>Heatmaps & click behavior</li>
                    <li>Session analytics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">C. Preference Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Store user settings such as language or theme preferences.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">D. Security & Compliance Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Used for threat detection, fraud prevention, quantum-safe authentication features, and compliance logging.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">E. Third-Party Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    Used for integrations such as:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Analytics platforms</li>
                    <li>Cloud service providers</li>
                    <li>AI or quantum-related tools</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">3. Why We Use Cookies</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>To enable core website features</li>
                <li>To analyze performance and usage</li>
                <li>To safeguard security and detect anomalies</li>
                <li>To enhance user experience</li>
                <li>For compliance, logging, and diagnostics</li>
              </ul>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">4. Cookie Consent</h2>
              <p className="text-muted-foreground leading-relaxed">
                In certain regions (such as the EU), visitors may be prompted to accept or reject non-essential cookies. You may withdraw your consent at any time.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">5. Managing & Disabling Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                You can control or disable cookies through your browser settings. However, disabling essential cookies may impact website functionality.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">6. Third-Party Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                External services integrated into our platform may use their own cookies or tracking technologies. We are not responsible for third-party cookie practices.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">7. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookies Policy as needed. Continued use of our website indicates acceptance of the updated policy.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For cookie-related questions: <a href="mailto:info@cycity.space" className="text-primary hover:underline">info@cycity.space</a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CookiesPolicy;
