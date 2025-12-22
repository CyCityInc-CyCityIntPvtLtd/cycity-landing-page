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
  const [isMobile, setIsMobile] = useState(false);
  const accumulatedDelta = useRef(0);
  const lastScrollTime = useRef(0);

  // Detect mobile device and Safari browser
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 768 || 'ontouchstart' in window;
      setIsMobile(isMobileDevice);
      
      // Set CSS custom property for mobile detection
      document.documentElement.style.setProperty('--is-mobile', isMobileDevice ? '1' : '0');
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Detect Safari browser
  const isSafari = useCallback(() => {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }, []);

  const goToSection = useCallback((index: number) => {
    if (index >= 0 && index < totalSections && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSection(index);
      accumulatedDelta.current = 0;
      
      // Scroll to top on mobile to ensure proper section visibility
      if (isMobile && window.scrollTo) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
      
      // Longer cooldown for desktop to prevent double scrolling
      const cooldown = isMobile ? cooldownMs * 0.7 : cooldownMs * 1.2;
      setTimeout(() => setIsTransitioning(false), cooldown);
    }
  }, [totalSections, isTransitioning, cooldownMs, isMobile]);

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    
    // If already transitioning, ignore all scroll events
    if (isTransitioning) return;

    const now = Date.now();
    const timeSinceLastScroll = now - lastScrollTime.current;
    
    // If it's been more than 100ms since last scroll, reset accumulated delta
    if (timeSinceLastScroll > 100) {
      accumulatedDelta.current = 0;
    }
    
    // Safari-specific wheel event handling
    let deltaY = e.deltaY;
    
    // Safari often has different deltaY values, normalize them
    if (isSafari()) {
      // Safari wheel events can be much smaller, so we need to adjust
      if (Math.abs(deltaY) < 10) {
        deltaY = deltaY * 10; // Amplify small Safari deltas
      }
      // Safari also sometimes sends very large values, cap them
      if (Math.abs(deltaY) > 200) {
        deltaY = deltaY > 0 ? 200 : -200;
      }
    }
    
    // Add current scroll delta
    accumulatedDelta.current += deltaY;
    lastScrollTime.current = now;

    // Use different thresholds for different browsers and devices
    let threshold = 100; // Default desktop threshold
    
    if (isMobile) {
      threshold = 30;
    } else if (isSafari()) {
      threshold = 50; // Lower threshold for Safari due to different wheel behavior
    }
    
    // Only trigger if we've accumulated enough scroll and not transitioning
    if (Math.abs(accumulatedDelta.current) >= threshold) {
      const direction = accumulatedDelta.current > 0 ? 1 : -1;
      const newSection = currentSection + direction;
      
      // Reset immediately to prevent double triggering
      accumulatedDelta.current = 0;
      
      // Trigger section change
      goToSection(newSection);
    }
  }, [currentSection, goToSection, isTransitioning, isMobile, isSafari]);

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

  // Enhanced touch handling for mobile
  const touchStartY = useRef(0);
  const touchStartTime = useRef(0);
  
  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    touchStartTime.current = Date.now();
  }, []);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (isTransitioning) return;
    
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;
    const deltaTime = Date.now() - touchStartTime.current;
    
    // More sensitive touch detection for mobile with better thresholds
    const minSwipeDistance = isMobile ? 25 : 50;
    const maxSwipeTime = 600; // Slightly longer time for valid swipe
    const minSwipeVelocity = 0.3; // Minimum velocity for swipe detection
    
    const velocity = Math.abs(deltaY) / deltaTime;
    
    if (deltaTime < maxSwipeTime && velocity > minSwipeVelocity) {
      if (deltaY > minSwipeDistance) {
        goToSection(currentSection + 1);
      } else if (deltaY < -minSwipeDistance) {
        goToSection(currentSection - 1);
      }
    }
  }, [currentSection, goToSection, isTransitioning, isMobile]);

  // Add touch move prevention for better mobile experience
  const handleTouchMove = useCallback((e: TouchEvent) => {
    // Allow scrolling within sections that have scrollable content
    const target = e.target as HTMLElement;
    const scrollableParent = target.closest('.overflow-y-auto, .scrollable-content');
    
    if (!scrollableParent) {
      e.preventDefault();
    }
  }, []);

  useEffect(() => {
    const wheelOptions = { passive: false };
    const touchOptions = { passive: false };
    
    window.addEventListener('wheel', handleWheel, wheelOptions);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, touchOptions);

    // Prevent default scroll behavior
    document.body.style.overflow = 'hidden';
    
    // Safari-specific fixes
    if (isSafari()) {
      (document.body.style as any).webkitOverflowScrolling = 'touch';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.height = '100%';
    }
    
    // Prevent pull-to-refresh on mobile
    if (isMobile) {
      document.body.style.overscrollBehavior = 'none';
    }

    // Enhanced right-click protection against extensions and bypass methods
    const disableRightClick = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      return false;
    };

    // Block all mouse button combinations
    const disableMouseButtons = (e: MouseEvent) => {
      // Block right-click (button 2), middle-click (button 1), and combinations
      if (e.button === 2 || e.button === 1 || e.buttons === 2 || e.buttons === 4) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
    };

    // Enhanced keyboard protection
    const disableDevTools = (e: KeyboardEvent) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+Shift+C, Ctrl+Shift+K
      if (
        e.key === 'F12' ||
        e.keyCode === 123 || // F12 keycode
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C' || e.key === 'K')) ||
        (e.ctrlKey && e.key === 'U') ||
        (e.ctrlKey && e.key === 'u') ||
        // Block Ctrl+Shift+Delete (Clear browsing data)
        (e.ctrlKey && e.shiftKey && e.key === 'Delete') ||
        // Block F1 (Help)
        e.key === 'F1' ||
        // Block Ctrl+H (History)
        (e.ctrlKey && e.key === 'H') ||
        // Block Ctrl+J (Downloads)
        (e.ctrlKey && e.key === 'J')
      ) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
    };

    const disableSelectAll = (e: KeyboardEvent) => {
      // Disable Ctrl+A (select all) and Ctrl+S (save)
      if (
        (e.ctrlKey && e.key === 'a') ||
        (e.ctrlKey && e.key === 'A') ||
        (e.ctrlKey && e.key === 's') ||
        (e.ctrlKey && e.key === 'S')
      ) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
    };

    // Block drag and drop
    const disableDragDrop = (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Block print screen and other screenshot methods
    const disablePrintScreen = (e: KeyboardEvent) => {
      if (e.key === 'PrintScreen' || e.keyCode === 44) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // Add multiple event listeners for comprehensive protection
    document.addEventListener('contextmenu', disableRightClick, { capture: true });
    document.addEventListener('mousedown', disableMouseButtons, { capture: true });
    document.addEventListener('mouseup', disableMouseButtons, { capture: true });
    document.addEventListener('keydown', disableDevTools, { capture: true });
    document.addEventListener('keydown', disableSelectAll, { capture: true });
    document.addEventListener('keydown', disablePrintScreen, { capture: true });
    document.addEventListener('dragstart', disableDragDrop, { capture: true });
    document.addEventListener('drop', disableDragDrop, { capture: true });
    document.addEventListener('dragover', disableDragDrop, { capture: true });

    // Block right-click on images specifically
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('contextmenu', disableRightClick, { capture: true });
      img.addEventListener('dragstart', disableDragDrop, { capture: true });
    });

    // Disable text selection and dragging
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    (document.body.style as any).mozUserSelect = 'none';
    (document.body.style as any).msUserSelect = 'none';

    // Disable image dragging
    const allImages = document.getElementsByTagName('img');
    for (let i = 0; i < allImages.length; i++) {
      allImages[i].ondragstart = () => false;
      allImages[i].onselectstart = () => false;
    }

    // Block extension-based right-click enablers
    const blockExtensions = () => {
      // Override common extension methods
      if (window.addEventListener) {
        const originalAddEventListener = window.addEventListener;
        window.addEventListener = function(type: string, listener: any, options?: any) {
          if (type === 'contextmenu' && listener.toString().includes('extension')) {
            return; // Block extension context menu listeners
          }
          return originalAddEventListener.call(this, type, listener, options);
        };
      }
    };
    blockExtensions();

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      
      // Remove enhanced protection listeners
      document.removeEventListener('contextmenu', disableRightClick, { capture: true } as any);
      document.removeEventListener('mousedown', disableMouseButtons, { capture: true } as any);
      document.removeEventListener('mouseup', disableMouseButtons, { capture: true } as any);
      document.removeEventListener('keydown', disableDevTools, { capture: true } as any);
      document.removeEventListener('keydown', disableSelectAll, { capture: true } as any);
      document.removeEventListener('keydown', disablePrintScreen, { capture: true } as any);
      document.removeEventListener('dragstart', disableDragDrop, { capture: true } as any);
      document.removeEventListener('drop', disableDragDrop, { capture: true } as any);
      document.removeEventListener('dragover', disableDragDrop, { capture: true } as any);
      
      // Reset styles
      document.body.style.overflow = '';
      document.body.style.overscrollBehavior = '';
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
      (document.body.style as any).mozUserSelect = '';
      (document.body.style as any).msUserSelect = '';
      
      // Clean up Safari-specific styles
      if (isSafari()) {
        (document.body.style as any).webkitOverflowScrolling = '';
        document.documentElement.style.overflow = '';
        document.documentElement.style.height = '';
      }
    };
  }, [handleWheel, handleKeyDown, handleTouchStart, handleTouchEnd, handleTouchMove, isMobile, isSafari]);

  return {
    currentSection,
    goToSection,
    isTransitioning,
    isMobile,
    progress: (currentSection / (totalSections - 1)) * 100,
  };
}
