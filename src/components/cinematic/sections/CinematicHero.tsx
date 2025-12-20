import { motion } from 'framer-motion';
import { ParticleField } from '../../three/ParticleField';

export function CinematicHero() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-background">
      <ParticleField />
      
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      
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
          <span className="text-gradient-lime glow-text">Reimagining</span>{' '}
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-muted-foreground text-sm font-orbitron tracking-wider"
        >
          <span className="animate-pulse">↓</span> Scroll to explore
        </motion.div>
      </div>
    </div>
  );
}
