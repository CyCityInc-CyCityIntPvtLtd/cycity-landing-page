import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

interface CinematicContactProps {
  onNavigate?: (index: number) => void;
}

export function CinematicContact({ onNavigate }: CinematicContactProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setEmail('');
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-hero-gradient opacity-50" />
      
      <div className="relative z-10 container-custom py-6 lg:py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-hide">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 lg:px-4 py-1.5 lg:py-2 text-xs font-orbitron font-medium tracking-[0.3em] text-primary border border-primary/30 rounded-full uppercase mb-3 lg:mb-6">
              Contact Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 lg:mb-6">
              <span className="text-foreground">Let's Build</span>{' '}
              <span className="text-gradient-lime">Together</span>
            </h2>
            <p className="text-base lg:text-xl text-muted-foreground leading-relaxed mb-4 lg:mb-8">
              Ready to transform your vision into reality? Get in touch with our team.
            </p>
            
            <div className="space-y-2 lg:space-y-4">
              <a 
                href="mailto:info@cycity.space"
                className="flex items-center gap-3 lg:gap-4 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-primary flex-shrink-0" />
                <span className="text-sm lg:text-base">info@cycity.space</span>
              </a>
              <a 
                href="https://maps.google.com/?q=Vamanjoor,Mangalore,575028,India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 lg:gap-4 text-muted-foreground hover:text-primary transition-colors"
              >
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-2">
                  <span className="text-sm lg:text-base"># 64-7, Vamanjoor, Mangalore, 575028. India</span>
                </div>
              </a>
              <a 
                href="https://maps.google.com/?q=8+The+Green,+Ste+A,+Dover,+DE+19901,+USA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 lg:gap-4 text-muted-foreground hover:text-primary transition-colors"
              >
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-2">
                  <span className="text-sm lg:text-base">8 The Green, Ste A, Dover, DE 19901. USA</span>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass p-4 lg:p-8 rounded-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-6">
              <div>
                <label className="block text-sm font-orbitron text-foreground mb-1.5 lg:mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-3 lg:px-4 py-2.5 lg:py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm lg:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-orbitron text-foreground mb-1.5 lg:mb-2">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your project..."
                  className="w-full px-3 lg:px-4 py-2.5 lg:py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none text-sm lg:text-base"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-4 lg:px-6 py-2.5 lg:py-4 font-orbitron font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors text-sm lg:text-base"
              >
                <Send className="w-4 h-4 lg:w-5 lg:h-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
