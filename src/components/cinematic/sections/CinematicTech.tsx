import { motion } from 'framer-motion';

interface CinematicTechProps {
  onNavigate?: (index: number) => void;
}

const technologies = [
  { name: 'Quantum Computing', level: 95 },
  { name: 'Neural AI', level: 88 },
  { name: 'Blockchain', level: 82 },
  { name: 'Edge Computing', level: 90 },
  { name: 'Cybersecurity', level: 94 },
  { name: '5D Memory Crystal', level: 99 },
];

export function CinematicTech({ onNavigate }: CinematicTechProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      </div>
      
      <div className="relative z-10 container-custom px-4 py-8 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 lg:px-4 py-1.5 lg:py-2 text-xs font-orbitron font-medium tracking-[0.3em] text-primary border border-primary/30 rounded-full uppercase mb-4 lg:mb-6">
              Our Technologies
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 lg:mb-6">
              <span className="text-foreground">Cutting-Edge</span>{' '}
              <span className="text-gradient-lime">Stack</span>
            </h2>
            <p className="text-base lg:text-xl text-muted-foreground leading-relaxed">
              We leverage the most advanced technologies to deliver solutions
              that push the boundaries of innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 lg:space-y-6"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-1.5 lg:mb-2">
                  <span className="font-orbitron text-sm lg:text-base text-foreground">{tech.name}</span>
                  <span className="text-sm lg:text-base text-primary">{tech.level}%</span>
                </div>
                <div className="h-1.5 lg:h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
