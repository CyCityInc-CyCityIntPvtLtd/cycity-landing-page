import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { Footer } from '../components/layout/Footer';
import { AudioManager } from '../components/audio/AudioManager';

const TermsConditions = () => {
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
            Terms of <span className="text-primary">Use</span>
          </h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="glass p-8 rounded-lg">
              <p className="text-sm text-muted-foreground mb-6">
                <strong>Last Updated: December 20, 2025</strong>
              </p>
              <h2 className="heading-md text-foreground mb-4">Summary of Key Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                This summary is for convenience only and does not replace the full Terms of Use. You must use Cy City services lawfully and responsibly. We collect usage and device data to improve services. We operate globally, and while our services follow international standards, it is your responsibility to comply with local laws. We provide only digital, consulting, software, and quantum technology solutions — we do not sell any physical products.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using any service, website, or platform operated by CyCity International Private Limited or Cy City Inc. ("Cy City", "we", "our"), you confirm that you have read, understood, and agreed to these Terms. If you do not agree, you must stop using our services.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">Worldwide Scope & Eligibility</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cy City services are available globally. By using our services, you confirm that:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>You are legally permitted to use our services in your country.</li>
                <li>You comply with all applicable laws and regulations.</li>
                <li>You are 18 years or older, or have parental/guardian consent.</li>
                <li>We may restrict access where prohibited by law.</li>
              </ul>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">Usage Data Collection</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect data including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Device and browser information</li>
                <li>Log and diagnostic data</li>
                <li>IP address and approximate geolocation</li>
                <li>User behavior, preferences, and analytics</li>
                <li>Security and error logs</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This data helps us improve performance and security. All data is handled according to our Privacy Policy.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">Services Provided (Digital Only)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>We do not sell or ship any physical products.</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We provide the following digital & consulting services:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Digital & Software Solutions</li>
                <li>Security Systems Design</li>
                <li>IT & Infrastructure Development</li>
                <li>Business Consulting</li>
                <li>Manpower & Staffing Solutions</li>
                <li>Digital Products (non-physical)</li>
                <li>Technology Integrations & Enterprise Services</li>
                <li>Quantum Technology Solutions</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Services may be modified or discontinued at any time.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">User Conduct</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree NOT to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Break any laws</li>
                <li>Disrupt or harm our systems</li>
                <li>Reverse-engineer or access restricted systems</li>
                <li>Upload viruses, bots, or harmful code</li>
                <li>Misuse Cy City's IP or branding</li>
                <li>Use our services for illegal or harmful activities</li>
              </ul>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">Intellectual Property Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                All trademarks, branding, content, software, UI/UX, and proprietary technology belong to CyCity International Private Limited and Cy City Inc. You may not reproduce, copy, modify, or redistribute any material without permission.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your use of Cy City services is also governed by our Privacy Policy, which includes GDPR compliance and international data protection standards.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">Quantum Technology Compliance</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our quantum technology solutions are subject to specific regulations. You agree to comply with all applicable export controls, research regulations, cybersecurity laws, and global technology compliance frameworks.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">Disclaimers & Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cy City is not responsible for damages, data loss, service interruptions, or performance issues. Services are provided "as-is" without warranties of any kind. Your sole remedy for dissatisfaction is to stop using our services.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold Cy City, its teams, and partners harmless from any claims resulting from your misuse of services, legal violations, or infringement of third-party rights.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">Governing Law & Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of Karnataka, India. International users may also have additional mandatory consumer protections under their local laws. Disputes will be handled via binding arbitration unless prohibited.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms at any time. Continued use of our services indicates acceptance of the revised Terms.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="heading-md text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For legal questions or support: <a href="mailto:info@cycity.space" className="text-primary hover:underline">info@cycity.space</a>
              </p>
            </section>
          </div>

        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsConditions;
