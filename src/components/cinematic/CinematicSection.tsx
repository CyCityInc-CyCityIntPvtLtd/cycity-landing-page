import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface CinematicSectionProps {
  isActive: boolean;
  children: ReactNode;
  direction?: 'up' | 'down';
}

export function CinematicSection({ isActive, children, direction = 'down' }: CinematicSectionProps) {
  const variants = {
    enter: (dir: string) => ({
      y: dir === 'down' ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: string) => ({
      y: dir === 'down' ? '-100%' : '100%',
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <AnimatePresence mode="wait" custom={direction}>
      {isActive && (
        <motion.div
          key="section"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 w-full h-full"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
