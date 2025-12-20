import { motion } from 'framer-motion';
import { Cpu, Network, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Advanced AI',
    description: 'Cutting-edge artificial intelligence powering next-gen solutions',
  },
  {
    icon: Network,
    title: 'Neural Networks',
    description: 'Deep learning systems that evolve and adapt continuously',
  },
  {
    icon: Shield,
    title: 'Quantum Security',
    description: 'Unbreakable encryption powered by quantum mechanics',
  },
  {
    icon: Zap,
    title: 'Instant Processing',
    description: 'Lightning-fast computations at unprecedented scale',
  },
];

export function CinematicAbout() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 dot-grid opacity-30" />
      
      <div className="relative z-10 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-xs font-orbitron font-medium tracking-[0.3em] text-primary border border-primary/30 rounded-full uppercase mb-6">
            About CyCity
          </span>
          <h2 className="heading-lg mb-6">
            <span className="text-foreground">Pioneering the</span>{' '}
            <span className="text-gradient-lime">Future</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            We are architects of tomorrow, building intelligent systems that transcend
            the boundaries of what's possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-6 rounded-xl card-hover group"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-orbitron font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
