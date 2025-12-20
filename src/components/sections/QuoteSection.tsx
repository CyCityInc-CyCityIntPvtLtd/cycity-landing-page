import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

export function QuoteSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div ref={ref} className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Quote className="w-16 h-16 text-primary/50 mx-auto mb-8" />
          
          <blockquote className="font-orbitron text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed mb-8">
            "Artificial intelligence is advancing rapidly, and while it offers{' '}
            <span className="text-gradient-lime">immense opportunity</span>, it also poses{' '}
            <span className="text-accent">significant risks</span>."
          </blockquote>
          
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center overflow-hidden">
              <span className="font-orbitron font-bold text-xl text-primary">M</span>
            </div>
            <div className="text-left">
              <p className="font-orbitron font-semibold text-foreground">Merwyn Furtado</p>
              <p className="text-sm text-muted-foreground">CEO & Founder</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
