import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', section: 2 },
  { label: 'Technologies', section: 3 },
  { label: 'Team', section: 4 },
  { label: 'Vision', section: 5 },
  { label: 'Contact', section: 6 },
];

const policyItems = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-conditions' },
  { label: 'Cookies Policy', href: '/cookies-policy' },
];

interface CinematicNavbarProps {
  currentSection: number;
  onNavigate: (section: number) => void;
}

export function CinematicNavbar({ currentSection, onNavigate }: CinematicNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPolicyOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.section !== undefined) {
      onNavigate(item.section);
    }
    setIsMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || currentSection > 0 ? 'glass-dark py-4' : 'py-6'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => onNavigate(0)} 
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-orbitron font-bold text-primary-foreground text-xl">C</span>
              </div>
              <div className="absolute inset-0 rounded-lg bg-primary opacity-50 blur-lg group-hover:opacity-80 transition-opacity" />
            </div>
            <span className="font-orbitron font-bold text-xl text-foreground">
              Cy<span className="text-primary">City</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`relative font-medium transition-colors group ${
                  item.section === currentSection || (item.href === '/' && currentSection === 0)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  item.section === currentSection || (item.href === '/' && currentSection === 0)
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
            
            {/* Policies Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setIsPolicyOpen(!isPolicyOpen)}
                className="flex items-center gap-1 font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Policies
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-200 ${isPolicyOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {isPolicyOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-48 py-2 glass rounded-lg border border-border z-50"
                  >
                    {policyItems.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={() => setIsPolicyOpen(false)}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => onNavigate(6)}
              className="relative inline-flex items-center gap-2 px-6 py-3 font-orbitron text-sm font-semibold text-primary-foreground bg-primary rounded-lg overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden pt-24 glass-dark"
          >
            <nav className="container-custom flex flex-col gap-6 py-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="font-orbitron text-2xl font-semibold text-foreground hover:text-primary transition-colors text-left"
                >
                  {item.label}
                </motion.button>
              ))}
              
              {/* Mobile Policy Links */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="border-t border-border pt-6 mt-2"
              >
                <span className="font-orbitron text-sm text-muted-foreground mb-4 block">Policies</span>
                <div className="flex flex-col gap-3">
                  {policyItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="text-lg text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </motion.div>

              <motion.button
                onClick={() => {
                  onNavigate(6);
                  setIsMobileOpen(false);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navItems.length + 1) * 0.1 }}
                className="inline-flex items-center justify-center px-8 py-4 font-orbitron text-lg font-semibold text-primary-foreground bg-primary rounded-lg mt-4"
              >
                Get Started
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
