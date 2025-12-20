import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { MarqueeSection } from '../components/sections/MarqueeSection';
import { TechnologiesSection } from '../components/sections/TechnologiesSection';
import { QuoteSection } from '../components/sections/QuoteSection';
import { TeamSection } from '../components/sections/TeamSection';
import { VisionSection } from '../components/sections/VisionSection';
import { FAQSection } from '../components/sections/FAQSection';
import { CTASection } from '../components/sections/CTASection';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background noise-overlay">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MarqueeSection />
        <TechnologiesSection />
        <QuoteSection />
        <TeamSection />
        <VisionSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
