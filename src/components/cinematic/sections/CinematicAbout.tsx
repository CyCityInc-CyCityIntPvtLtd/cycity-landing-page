import { motion } from 'framer-motion';
import { Cpu, Network, Shield, Zap, Database } from 'lucide-react';

interface CinematicAboutProps {
  onNavigate?: (index: number) => void;
}

const features = [
  {
    icon: Cpu,
    title: 'Advanced AI',
    description: 'Leverages deep learning, neural networks, and vast data to autonomously solve complex problems, predict outcomes, and continuously improve—transforming industries, enhancing decisions, and redefining human-machine collaboration.',
  },
  {
    icon: Network,
    title: 'Neural Networks',
    description: 'Layered algorithms inspired by the brain; they learn patterns from data through weighted connections, enabling image recognition, language understanding, and predictive modeling without explicit programming.',
  },
  {
    icon: Shield,
    title: 'Quantum Security',
    description: 'Uses quantum mechanics—entanglement, superposition, unclonable qubits—to create tamper-proof keys and detect eavesdropping, promising future-proof encryption against both classical and quantum computer attacks.',
  },
  {
    icon: Zap,
    title: 'Instant Processing',
    description: 'Delivers sub-millisecond data handling via in-memory compute, edge parallelism, and optimized algorithms, enabling real-time analytics, fraud block, live rendering, and zero-lag user experiences.',
  },
  {
    icon: Database,
    title: 'Data Storage',
    description: 'Revolutionizing data storage with cutting-edge laser nanostructuring technology for quartz glass, paving the way for the high density, ultra-durable systems of tomorrow, storing up to 360TB in a small glass platter for at least 1000 years.',
  },
];

export function CinematicAbout({ onNavigate }: CinematicAboutProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 dot-grid opacity-30" />
      
      <div className="relative z-10 container-custom py-6 lg:py-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 lg:mb-8"
        >
          <span className="inline-block px-3 lg:px-4 py-1.5 lg:py-2 text-xs font-orbitron font-medium tracking-[0.3em] text-primary border border-primary/30 rounded-full uppercase mb-2 lg:mb-4">
            About CyCity
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2 lg:mb-4">
            <span className="text-foreground">Pioneering the</span>{' '}
            <span className="text-gradient-lime">Future</span>
          </h2>
          <p className="text-sm lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            We are architects of tomorrow, building intelligent systems that transcend
            the boundaries of what's possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 lg:gap-4 max-h-[calc(100vh-20rem)] md:max-h-[60vh] overflow-y-auto scrollbar-hide pb-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="glass p-3 lg:p-4 rounded-xl card-hover group h-fit"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2 lg:mb-3 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
              </div>
              <h3 className="font-orbitron font-semibold text-sm lg:text-base text-foreground mb-1.5 lg:mb-2">
                {feature.title}
              </h3>
              <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
