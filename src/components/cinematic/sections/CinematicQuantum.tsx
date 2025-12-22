import { motion } from 'framer-motion';
import { GalaxyScene } from '../../three/GalaxyScene';

interface CinematicQuantumProps {
  onNavigate?: (index: number) => void;
}

export function CinematicQuantum({ onNavigate }: CinematicQuantumProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-background">
      <GalaxyScene />
      
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none" />
      
      <div className="relative z-10 container-custom px-4 py-8 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 lg:px-4 py-1.5 lg:py-2 text-xs font-orbitron font-medium tracking-[0.3em] text-accent border border-accent/30 rounded-full uppercase mb-4 lg:mb-6">
              Quantum Technology
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 lg:mb-6">
              <span className="text-foreground">Quantum</span>{' '}
              <span className="text-gradient-lime">Processing</span>
            </h2>
            <p className="text-base lg:text-xl text-muted-foreground leading-relaxed mb-6 lg:mb-8">
              Our proprietary quantum processing architecture delivers unprecedented computational power,
              enabling breakthroughs in AI, cryptography, and complex simulations.
            </p>
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <div className="glass p-3 lg:p-4 rounded-lg">
                <div className="text-2xl lg:text-3xl font-orbitron font-bold text-primary mb-1 lg:mb-2">1000x</div>
                <div className="text-xs lg:text-sm text-muted-foreground">Faster Processing</div>
              </div>
              <div className="glass p-3 lg:p-4 rounded-lg">
                <div className="text-2xl lg:text-3xl font-orbitron font-bold text-accent mb-1 lg:mb-2">99%</div>
                <div className="text-xs lg:text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
            </div>
          </motion.div>
          
          <div className="hidden lg:block" />
        </div>
      </div>
    </div>
  );
}
