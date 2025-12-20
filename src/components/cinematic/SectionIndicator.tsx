import { motion } from 'framer-motion';

interface SectionIndicatorProps {
  totalSections: number;
  currentSection: number;
  sectionNames: string[];
  onNavigate: (index: number) => void;
}

export function SectionIndicator({ totalSections, currentSection, sectionNames, onNavigate }: SectionIndicatorProps) {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-4">
      {Array.from({ length: totalSections }).map((_, index) => (
        <button
          key={index}
          onClick={() => onNavigate(index)}
          className="group flex items-center gap-3"
        >
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ 
              opacity: currentSection === index ? 1 : 0,
              x: currentSection === index ? 0 : 10 
            }}
            className="text-xs font-orbitron tracking-wider text-primary uppercase"
          >
            {sectionNames[index]}
          </motion.span>
          <div className="relative">
            <motion.div
              className="w-3 h-3 rounded-full border-2 border-muted-foreground/50 group-hover:border-primary transition-colors"
              animate={{
                borderColor: currentSection === index ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground) / 0.5)',
              }}
            />
            {currentSection === index && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute inset-0.5 rounded-full bg-primary"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </div>
        </button>
      ))}
    </div>
  );
}
