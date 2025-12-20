import { motion } from 'framer-motion';
import { Rocket, Target, Globe } from 'lucide-react';

const visions = [
  {
    icon: Rocket,
    title: 'Innovation First',
    description: 'Pushing boundaries with groundbreaking research and development.',
  },
  {
    icon: Target,
    title: 'Precision Focus',
    description: 'Delivering exact solutions for complex technological challenges.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Creating technologies that transform industries worldwide.',
  },
];

export function CinematicVision() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/10 animate-pulse-glow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-accent/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/20" />
      </div>
      
      <div className="relative z-10 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-xs font-orbitron font-medium tracking-[0.3em] text-accent border border-accent/30 rounded-full uppercase mb-6">
            Our Vision
          </span>
          <h2 className="heading-lg mb-6">
            <span className="text-foreground">Shaping</span>{' '}
            <span className="text-gradient-lime">Tomorrow</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {visions.map((vision, index) => (
            <motion.div
              key={vision.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-6 flex items-center justify-center glow-box">
                <vision.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-orbitron font-semibold text-xl text-foreground mb-4">
                {vision.title}
              </h3>
              <p className="text-muted-foreground">
                {vision.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
