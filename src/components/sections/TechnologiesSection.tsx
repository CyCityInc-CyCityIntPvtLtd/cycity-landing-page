import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Brain, Atom, Sparkles, Lightbulb, Shield, Leaf } from 'lucide-react';

const technologies = [
  {
    icon: Brain,
    title: 'AGI',
    description: 'AGI is the fusion of computation and cognition — able to learn and reason across any domain.',
    gradient: 'from-primary/20 to-accent/10',
  },
  {
    icon: Atom,
    title: 'Quantum Computing',
    description: 'The technology that transforms bits into qubits to unlock infinite parallelism.',
    gradient: 'from-accent/20 to-primary/10',
  },
  {
    icon: Sparkles,
    title: 'Quantum AI',
    description: 'Hybrid AI models powered by quantum computing for self-evolving intelligence.',
    gradient: 'from-primary/20 to-accent/10',
  },
  {
    icon: Lightbulb,
    title: 'Electro-Photonic',
    description: 'Next-gen hardware merging photonics & electronics for ultra-fast computing.',
    gradient: 'from-accent/20 to-primary/10',
  },
  {
    icon: Shield,
    title: 'Secure AI',
    description: 'Quantum-safe encrypted frameworks ensuring privacy & trust.',
    gradient: 'from-primary/20 to-accent/10',
  },
  {
    icon: Leaf,
    title: 'Sustainable',
    description: 'Carbon-neutral, energy-optimized AI systems.',
    gradient: 'from-accent/20 to-primary/10',
  },
];

export function TechnologiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="technologies" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div ref={ref} className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="text-sm font-orbitron tracking-[0.3em] text-primary uppercase">
            Technologies
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="heading-lg text-center mb-6"
        >
          <span className="text-gradient-lime">Quantum</span> Begins Here
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="body-lg text-center max-w-2xl mx-auto mb-16"
        >
          Hear from global AI pioneers & bold thinkers shaping the future.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className={`relative p-8 rounded-2xl border border-border bg-gradient-to-br ${tech.gradient} backdrop-blur-sm transition-all duration-500 ${
                hoveredIndex === index ? 'border-primary/50 scale-[1.02]' : 'hover:border-border/80'
              }`}>
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`} style={{ boxShadow: '0 0 60px hsl(72 100% 57% / 0.15)' }} />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-card/80 border border-border flex items-center justify-center mb-6 group-hover:border-primary/30 transition-colors">
                    <tech.icon className={`w-8 h-8 transition-colors duration-300 ${
                      hoveredIndex === index ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                  </div>
                  
                  <h3 className="font-orbitron text-xl font-semibold text-foreground mb-3">
                    {tech.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
