import { motion } from 'framer-motion';

const words = ['Quantum Rise', 'Intelligent Tomorrow', 'Quantum Rise', 'Intelligent Tomorrow', 'Quantum Rise', 'Intelligent Tomorrow'];

export function MarqueeSection() {
  return (
    <section className="py-12 border-y border-border/50 overflow-hidden bg-card/50">
      <div className="marquee">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-8 whitespace-nowrap"
        >
          {[...words, ...words].map((word, index) => (
            <span
              key={index}
              className="font-orbitron text-2xl md:text-4xl font-bold text-muted-foreground/30 flex items-center gap-8"
            >
              {word}
              <span className="w-3 h-3 rounded-full bg-primary/50" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
