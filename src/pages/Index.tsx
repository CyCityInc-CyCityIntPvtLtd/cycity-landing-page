import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { CinematicNavbar } from '../components/layout/CinematicNavbar';
import { SectionIndicator } from '../components/cinematic/SectionIndicator';
import { AudioManager } from '../components/audio/AudioManager';
import { useCinematicScroll } from '../hooks/useCinematicScroll';
import { CinematicHero } from '../components/cinematic/sections/CinematicHero';
import { CinematicQuantum } from '../components/cinematic/sections/CinematicQuantum';
import { CinematicAbout } from '../components/cinematic/sections/CinematicAbout';
import { CinematicTech } from '../components/cinematic/sections/CinematicTech';
import { CinematicTeam } from '../components/cinematic/sections/CinematicTeam';
import { CinematicVision } from '../components/cinematic/sections/CinematicVision';
import { CinematicContact } from '../components/cinematic/sections/CinematicContact';
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  const { currentSection, goToSection, isTransitioning, isMobile } = useCinematicScroll({
    totalSections: 8, // Updated to include footer
    scrollThreshold: 50,
    cooldownMs: 800,
  });

  const sections = [
    { name: 'Hero', component: CinematicHero },
    { name: 'Quantum', component: CinematicQuantum },
    { name: 'About', component: CinematicAbout },
    { name: 'Tech', component: CinematicTech },
    { name: 'Team', component: CinematicTeam },
    { name: 'Vision', component: CinematicVision },
    { name: 'Contact', component: CinematicContact },
    { name: 'Footer', component: () => <Footer onNavigate={goToSection} /> },
  ];

  return (
    <div 
      className={`relative h-screen w-screen overflow-hidden bg-background noise-overlay ${isMobile ? 'touch-none' : ''}`} 
      style={{ 
        height: '100dvh',
        minHeight: '100dvh',
        maxHeight: '100dvh'
      }}
    >
      <AudioManager />
      <CinematicNavbar currentSection={currentSection} onNavigate={goToSection} />
      
      <SectionIndicator
        totalSections={sections.length}
        currentSection={currentSection}
        sectionNames={sections.map(s => s.name)}
        onNavigate={goToSection}
        isMobile={isMobile}
      />

      <main 
        className={`relative w-full ${isMobile ? 'h-[calc(100vh-4rem)]' : 'h-full'} ${isMobile ? 'mt-16' : ''}`}
        style={isMobile ? {
          height: 'calc(100dvh - 4rem)',
          minHeight: 'calc(100dvh - 4rem)'
        } : {}}
      >
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
                  <SectionComponent onNavigate={goToSection} />
                </motion.div>
              )
            );
          })}
        </AnimatePresence>
      </main>

      {/* Progress bar */}
      <div className={`fixed left-0 right-0 h-1 bg-secondary z-50 ${isMobile ? 'bottom-0' : 'bottom-0'}`}>
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
