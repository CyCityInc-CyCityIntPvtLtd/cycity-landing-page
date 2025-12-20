import { useState, useEffect, useCallback, useRef } from 'react';

interface UseCinematicScrollProps {
  totalSections: number;
  scrollThreshold?: number;
  cooldownMs?: number;
}

export function useCinematicScroll({ 
  totalSections, 
  scrollThreshold = 50,
  cooldownMs = 800 
}: UseCinematicScrollProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const accumulatedDelta = useRef(0);
  const lastScrollTime = useRef(0);

  const goToSection = useCallback((index: number) => {
    if (index >= 0 && index < totalSections && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSection(index);
      accumulatedDelta.current = 0;
      setTimeout(() => setIsTransitioning(false), cooldownMs);
    }
  }, [totalSections, isTransitioning, cooldownMs]);

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    
    const now = Date.now();
    if (now - lastScrollTime.current < 100) {
      accumulatedDelta.current += e.deltaY;
    } else {
      accumulatedDelta.current = e.deltaY;
    }
    lastScrollTime.current = now;

    if (isTransitioning) return;

    if (accumulatedDelta.current > scrollThreshold) {
      goToSection(currentSection + 1);
    } else if (accumulatedDelta.current < -scrollThreshold) {
      goToSection(currentSection - 1);
    }
  }, [currentSection, goToSection, isTransitioning, scrollThreshold]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (isTransitioning) return;
    
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault();
      goToSection(currentSection + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      goToSection(currentSection - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      goToSection(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      goToSection(totalSections - 1);
    }
  }, [currentSection, goToSection, isTransitioning, totalSections]);

  // Touch handling for mobile
  const touchStartY = useRef(0);
  
  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (isTransitioning) return;
    
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;
    
    if (deltaY > 50) {
      goToSection(currentSection + 1);
    } else if (deltaY < -50) {
      goToSection(currentSection - 1);
    }
  }, [currentSection, goToSection, isTransitioning]);

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Prevent default scroll behavior
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      document.body.style.overflow = '';
    };
  }, [handleWheel, handleKeyDown, handleTouchStart, handleTouchEnd]);

  return {
    currentSection,
    goToSection,
    isTransitioning,
    progress: (currentSection / (totalSections - 1)) * 100,
  };
}
