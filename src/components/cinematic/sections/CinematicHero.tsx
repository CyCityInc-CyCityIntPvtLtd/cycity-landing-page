import { motion } from 'framer-motion';
import { GalaxyScene } from '../../three/GalaxyScene';

interface CinematicHeroProps {
  onNavigate?: (index: number) => void;
}

export function CinematicHero({ onNavigate }: CinematicHeroProps) {
  const handleScrollToExplore = () => {
    if (onNavigate) {
      onNavigate(1); // Navigate to Quantum section (index 1)
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-background">
      <GalaxyScene />
      
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      
      <div className="relative z-10 container-custom text-center px-4 py-8 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 lg:mb-6"
        >
          <span className="inline-block px-3 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm font-orbitron font-medium tracking-[0.3em] text-primary border border-primary/30 rounded-full uppercase">
            Perpetual Innovations
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 lg:mb-8"
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
          className="text-base lg:text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 lg:mb-12"
        >
          <span className="flex items-center justify-center gap-3 lg:gap-4">
            <span className="h-px w-8 lg:w-12 bg-primary/50" />
            Join The Matrix Of Innovation
            <span className="h-px w-8 lg:w-12 bg-primary/50" />
          </span>
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={handleScrollToExplore}
          className="text-muted-foreground text-xs lg:text-sm font-orbitron tracking-wider hover:text-primary transition-colors duration-300 cursor-pointer group"
          aria-label="Navigate to Quantum section"
        >
          <motion.span 
            className="animate-pulse text-gradient-lime glow-text group-hover:scale-110 transition-transform duration-300 inline-block"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            ↓ Scroll to Explore
          </motion.span>
        </motion.button>
      </div>
    </div>
  );
}
