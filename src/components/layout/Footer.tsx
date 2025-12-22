import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, MapPin, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (section: number) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionNavigation = (section: number) => {
    // If we're on a policy page, navigate to home first then to section
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete then scroll to section
      setTimeout(() => {
        if (onNavigate) {
          onNavigate(section);
        }
      }, 100);
    } else if (onNavigate) {
      onNavigate(section);
    }
  };

  const footerLinks = {
    company: [
      { label: 'About Us', action: () => handleSectionNavigation(2) },
      { label: 'Our Team', action: () => handleSectionNavigation(4) },
      { label: 'Vision', action: () => handleSectionNavigation(5) },
      { label: 'Contact', action: () => handleSectionNavigation(6) },
    ],
    services: [
      { label: 'Quantum Computing', href: null },
      { label: 'AI Solutions', href: null },
      { label: 'Cybersecurity', href: null },
      { label: 'Consulting', href: null },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Cookies Policy', href: '/cookies-policy' },
    ],
  };

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/company/cycityinternationalprivatelimited', 
      label: 'CyCity International LinkedIn' 
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/company/cycityinc', 
      label: 'CyCity Inc LinkedIn' 
    },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 dot-grid opacity-10" />
      
      <div className="relative z-10 container-custom py-8 lg:py-12 px-4 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-hide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-3 lg:mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <img 
                  src="/cycitypng.png" 
                  alt="CyCity Logo" 
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="font-orbitron font-bold text-lg text-foreground">
                Cy<span className="text-primary">City</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 lg:mb-6">
              Pioneering the future with quantum computing, AI, and cutting-edge technology solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 lg:space-y-3">
              <a 
                href="mailto:info@cycity.space"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">info@cycity.space</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <a 
                    href="https://maps.google.com/?q=Vamanjoor,Mangalore,575028,India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-primary transition-colors"
                  >
                    # 64-7, Vamanjoor, Mangalore, 575028. India
                  </a>
                  <a 
                    href="https://maps.google.com/?q=8+The+Green,+Ste+A,+Dover,+DE+19901,+USA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-primary transition-colors"
                  >
                    8 The Green, Ste A, Dover, DE 19901. USA
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-orbitron font-semibold text-foreground mb-3 lg:mb-4">Company</h3>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={link.action}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-orbitron font-semibold text-foreground mb-3 lg:mb-4">Services</h3>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <span className="text-sm text-muted-foreground">
                    {link.label}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-orbitron font-semibold text-foreground mb-3 lg:mb-4">Legal</h3>
            <ul className="space-y-2 lg:space-y-3 mb-4 lg:mb-6">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="font-orbitron font-medium text-foreground mb-2 lg:mb-3 text-sm">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-border/50 mt-8 lg:mt-12 pt-6 lg:pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © Copyright {currentYear} ® CyCity International Private Limited.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}