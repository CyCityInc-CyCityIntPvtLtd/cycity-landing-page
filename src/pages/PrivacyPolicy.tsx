import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { Footer } from '../components/layout/Footer';
import { AudioManager } from '../components/audio/AudioManager';

const PrivacyPolicy = () => {
  useEffect(() => {
    // Enable scrolling for policy pages
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
            Privacy <span className="text-primary">Policy</span>
          </h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="glass p-8 rounded-lg">
              <p className="text-sm text-muted-foreground mb-6">
                <strong>Last Updated: December 20, 2025</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This Privacy Policy explains how Cy City International Private Limited and Cy City Inc. ("Cy City", "we", "our", "us") collect, store, use, and protect personal and non-personal information when you access our website, platforms, applications, or services. By using our services, you consent to the practices described in this policy.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect the following categories of data:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">A. Personal Information</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Business information you provide</li>
                    <li>Account details (if applicable)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">B. Automatically Collected Data</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>IP address and geolocation approximations</li>
                    <li>Device type, browser type, operating system</li>
                    <li>Session logs, diagnostic logs, crash reports</li>
                    <li>Clickstream data, user behavior analytics, heatmaps</li>
                    <li>Cookies and tracking technologies (see Cookies Policy)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">C. Technical & Quantum-Compliance Data</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Security logs</li>
                    <li>Cryptographic keys generated or used by quantum-related tools</li>
                    <li>Compliance-relevant metadata for export-control evaluations</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your information may be used for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Improving performance, analytics, and cybersecurity</li>
                <li>Responding to inquiries or customer support requests</li>
                <li>Enhancing our AI, cloud, and quantum technologies</li>
                <li>Compliance with legal and regulatory frameworks</li>
                <li>Research and development of new digital and quantum solutions</li>
                <li>Marketing (only when legally permitted and with opt-out options)</li>
              </ul>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">3. Legal Basis for Processing (GDPR)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For users in the EU/EEA, data is processed under one or more of the following:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Performance of a contract</li>
                <li>Legitimate interests</li>
                <li>Legal compliance</li>
                <li>Explicit consent (for cookies, marketing, and certain analytics)</li>
              </ul>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">4. Sharing & Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do NOT sell personal data. We may share data with:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Authorized employees or contractors</li>
                <li>Cloud providers, IT vendors, or analytics partners</li>
                <li>Regulatory bodies (only when required by law)</li>
                <li>Quantum research partners (in compliance with export laws and NDAs)</li>
              </ul>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">5. Data Storage & Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement ISO-aligned security frameworks, encryption protocols, and quantum-safe methods wherever applicable. Data may be stored in secure servers located in India, the USA, or other compliant jurisdictions.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">6. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Transfers outside your region follow approved legal frameworks, such as Standard Contractual Clauses (SCCs), adequacy decisions, or equivalent safeguards.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">7. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain data only as long as necessary for operational, legal, research, and security purposes.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">8. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have rights to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Access or obtain a copy of your data</li>
                <li>Request correction or deletion</li>
                <li>Object to processing or withdraw consent</li>
                <li>Data portability</li>
                <li>Lodge a complaint with your regulatory authority</li>
              </ul>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">9. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for individuals under 18 unless supervised by a legal guardian.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">10. Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may revise this Privacy Policy at any time. Continued use of our services indicates acceptance.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy-related inquiries: <a href="mailto:info@cycity.space" className="text-primary hover:underline">info@cycity.space</a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
