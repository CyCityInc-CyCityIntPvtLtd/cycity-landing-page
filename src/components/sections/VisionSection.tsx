import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const visions = [
  {
    title: 'Quantum Intelligent India',
    subtitle: 'A vision to build an India empowered by quantum-driven intelligence…',
    description: 'Leading the charge in quantum computing adoption across industries, creating a new era of technological sovereignty.',
  },
  {
    title: 'Engineering Tomorrow',
    subtitle: 'A commitment to engineering technologies that power intelligent systems…',
    description: 'Building the infrastructure that will enable the next generation of AI applications and quantum breakthroughs.',
  },
];

export function VisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="vision" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-background" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div ref={ref} className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="text-sm font-orbitron tracking-[0.3em] text-primary uppercase">
            Our Visions
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="heading-lg text-center mb-16"
        >
          <span className="text-gradient-lime">Quantum</span> Intelligent India
        </motion.h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          {visions.map((vision, index) => (
            <motion.div
              key={vision.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              className="group relative"
            >
              <div className="relative p-8 md:p-12 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Number */}
                <div className="absolute top-6 right-6 font-orbitron text-6xl font-bold text-muted/20">
                  0{index + 1}
                </div>

                <div className="relative z-10">
                  <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {vision.subtitle}
                  </h3>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-2xl">
                    {vision.description}
                  </p>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
