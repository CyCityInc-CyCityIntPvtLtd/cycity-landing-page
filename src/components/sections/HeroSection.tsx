import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ParticleField } from '../three/ParticleField';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <ParticleField />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 text-sm font-orbitron font-medium tracking-[0.3em] text-primary border border-primary/30 rounded-full uppercase">
            Perpetual Innovations
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="heading-xl mb-8"
        >
          <span className="text-foreground">Redefining Intelligence.</span>
          <br />
          <span className="text-gradient-lime glow-text underline decoration-primary/50 underline-offset-8">
            Reimagining
          </span>{' '}
          <span className="text-foreground">Tomorrow.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="body-lg max-w-2xl mx-auto mb-12"
        >
          <span className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-primary/50" />
            Join The Matrix Of Innovation
            <span className="h-px w-12 bg-primary/50" />
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 px-8 py-4 font-orbitron text-sm font-semibold tracking-wide text-primary-foreground bg-primary rounded-lg overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10">CALL US AND KNOW MORE</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          </a>
          
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 font-orbitron text-sm font-semibold tracking-wide text-foreground border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all"
          >
            Explore More
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary"
      >
        <span className="text-xs font-orbitron tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
