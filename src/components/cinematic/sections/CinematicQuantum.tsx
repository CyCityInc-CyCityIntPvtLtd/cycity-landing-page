import { motion } from 'framer-motion';
import { QuantumProcessor } from '../../three/QuantumProcessor';

export function CinematicQuantum() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0">
        <QuantumProcessor />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none" />
      
      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 text-xs font-orbitron font-medium tracking-[0.3em] text-accent border border-accent/30 rounded-full uppercase mb-6">
              Quantum Technology
            </span>
            <h2 className="heading-lg mb-6">
              <span className="text-foreground">Quantum</span>{' '}
              <span className="text-gradient-lime">Processing</span>
            </h2>
            <p className="body-lg mb-8">
              Our proprietary quantum processing architecture delivers unprecedented computational power,
              enabling breakthroughs in AI, cryptography, and complex simulations.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-4 rounded-lg">
                <div className="text-3xl font-orbitron font-bold text-primary mb-2">10x</div>
                <div className="text-sm text-muted-foreground">Faster Processing</div>
              </div>
              <div className="glass p-4 rounded-lg">
                <div className="text-3xl font-orbitron font-bold text-accent mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
            </div>
          </motion.div>
          
          <div className="hidden lg:block" />
        </div>
      </div>
    </div>
  );
}
