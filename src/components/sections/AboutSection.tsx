import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Globe, Zap } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'AI & Quantum Computing',
    description: 'We develop intelligent, energy-efficient systems that merge AI, Quantum Computing, and Photonic Innovation.',
  },
  {
    icon: Globe,
    title: 'In India, For the World',
    description: 'With a mission to build technology In India, For India, and For the World.',
  },
  {
    icon: Zap,
    title: 'Engineering Tomorrow',
    description: 'At Cycity International, we are not just advancing AI — we are engineering the intelligent foundation of tomorrow\'s India.',
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="text-sm font-orbitron tracking-[0.3em] text-primary uppercase">
            About Us
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="heading-lg text-center max-w-4xl mx-auto mb-16"
        >
          At Cycity, we are not merely advancing AI; we are meticulously engineering the{' '}
          <span className="text-gradient-lime">intelligent foundation</span> that will shape the future.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="body-lg text-center max-w-3xl mx-auto mb-20"
        >
          Cycity International Pvt. Ltd. is an Indian deep-tech company advancing Artificial General Intelligence (AGI) through Quantum Technology.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 card-hover"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-orbitron text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
