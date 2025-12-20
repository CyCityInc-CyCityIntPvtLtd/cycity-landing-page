import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { CinematicNavbar } from '../components/layout/CinematicNavbar';
import { SectionIndicator } from '../components/cinematic/SectionIndicator';
import { useCinematicScroll } from '../hooks/useCinematicScroll';
import { CinematicHero } from '../components/cinematic/sections/CinematicHero';
import { CinematicQuantum } from '../components/cinematic/sections/CinematicQuantum';
import { CinematicAbout } from '../components/cinematic/sections/CinematicAbout';
import { CinematicTech } from '../components/cinematic/sections/CinematicTech';
import { CinematicTeam } from '../components/cinematic/sections/CinematicTeam';
import { CinematicVision } from '../components/cinematic/sections/CinematicVision';
import { CinematicContact } from '../components/cinematic/sections/CinematicContact';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { name: 'Hero', component: CinematicHero },
  { name: 'Quantum', component: CinematicQuantum },
  { name: 'About', component: CinematicAbout },
  { name: 'Tech', component: CinematicTech },
  { name: 'Team', component: CinematicTeam },
  { name: 'Vision', component: CinematicVision },
  { name: 'Contact', component: CinematicContact },
];

const Index = () => {
  const { currentSection, goToSection, isTransitioning } = useCinematicScroll({
    totalSections: sections.length,
    scrollThreshold: 50,
    cooldownMs: 800,
  });

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background noise-overlay">
      <CinematicNavbar currentSection={currentSection} onNavigate={goToSection} />
      
      <SectionIndicator
        totalSections={sections.length}
        currentSection={currentSection}
        sectionNames={sections.map(s => s.name)}
        onNavigate={goToSection}
      />

      <main className="relative h-full w-full">
        <AnimatePresence mode="wait">
          {sections.map((section, index) => {
            const SectionComponent = section.component;
            return (
              currentSection === index && (
                <motion.div
                  key={section.name}
                  initial={{ opacity: 0, scale: 0.95, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -50 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0"
                >
                  <SectionComponent />
                </motion.div>
              )
            );
          })}
        </AnimatePresence>
      </main>

      {/* Progress bar */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-secondary z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent"
          animate={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
};

export default Index;
