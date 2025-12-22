import { motion } from 'framer-motion';
import { Atom, Target, Globe } from 'lucide-react';

interface CinematicVisionProps {
  onNavigate?: (index: number) => void;
}

const visions = [
  {
    icon: Atom,
    title: 'Quantum First',
    description: 'Photonic chips are now being engineered with quantum-enabled architectures, weaving entanglement-on-demand and single-photon logic into silicon-scale circuits to deliver exponential leaps in secure communications and ultrafast computation.',
  },
  {
    icon: Target,
    title: 'Precision Focus',
    description: 'Harnesses laser-targeted attention, filtering noise to isolate critical variables, enabling micron-level accuracy in surgery, manufacturing, analytics, and decision-making for flawless, repeatable, high-value outcomes.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Unbreakable encryption securing worldwide data, ultra-precise sensors revolutionizing climate and health monitoring, and exponential-speed computers accelerating drug discovery, logistics, and clean-energy innovation.',
  },
];

export function CinematicVision({ onNavigate }: CinematicVisionProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/10 animate-pulse-glow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-accent/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/20" />
      </div>
      
      <div className="relative z-10 container-custom py-6 lg:py-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 lg:mb-8"
        >
          <span className="inline-block px-3 lg:px-4 py-1.5 lg:py-2 text-xs font-orbitron font-medium tracking-[0.3em] text-accent border border-accent/30 rounded-full uppercase mb-2 lg:mb-4">
            Our Vision
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2 lg:mb-4">
            <span className="text-foreground">Shaping</span>{' '}
            <span className="text-gradient-lime">Tomorrow</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-h-[calc(100vh-20rem)] md:max-h-[60vh] overflow-y-auto scrollbar-hide pb-4">
          {visions.map((vision, index) => (
            <motion.div
              key={vision.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="text-center h-fit"
            >
              <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-2 lg:mb-4 flex items-center justify-center glow-box">
                <vision.icon className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
              </div>
              <h3 className="font-orbitron font-semibold text-sm lg:text-lg text-foreground mb-1.5 lg:mb-3">
                {vision.title}
              </h3>
              <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed px-2">
                {vision.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
