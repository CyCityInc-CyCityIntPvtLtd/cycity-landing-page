import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function CinematicContact() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setEmail('');
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-hero-gradient opacity-50" />
      
      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 text-xs font-orbitron font-medium tracking-[0.3em] text-primary border border-primary/30 rounded-full uppercase mb-6">
              Contact Us
            </span>
            <h2 className="heading-lg mb-6">
              <span className="text-foreground">Let's Build</span>{' '}
              <span className="text-gradient-lime">Together</span>
            </h2>
            <p className="body-lg mb-8">
              Ready to transform your vision into reality? Get in touch with our team.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>contact@cycity.space</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Silicon Valley, CA</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass p-8 rounded-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-orbitron text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-orbitron text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 font-orbitron font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
