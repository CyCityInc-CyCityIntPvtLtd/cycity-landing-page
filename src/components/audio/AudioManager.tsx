import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function AudioManager() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    const [showControl, setShowControl] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile device
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        // Check localStorage for saved mute preference
        const savedMuteState = localStorage.getItem('audioMuted');
        if (savedMuteState !== null) {
            setIsMuted(savedMuteState === 'true');
        }

        // Show control after a brief delay
        const timer = setTimeout(() => setShowControl(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleCanPlay = () => {
            setIsLoaded(true);
            // Auto-play muted (browser policy compliant)
            if (!isMuted) {
                audio.play().catch(err => {
                    console.log('Audio autoplay prevented:', err);
                });
            }
        };

        const handleLoadedData = () => {
            setIsLoaded(true);
        };

        const handleError = (e: Event) => {
            console.log('Audio loading error:', e);
            setIsLoaded(false);
        };

        audio.addEventListener('canplaythrough', handleCanPlay);
        audio.addEventListener('loadeddata', handleLoadedData);
        audio.addEventListener('error', handleError);
        
        // For mobile, try to load the audio immediately
        if (isMobile) {
            audio.load();
        }

        return () => {
            audio.removeEventListener('canplaythrough', handleCanPlay);
            audio.removeEventListener('loadeddata', handleLoadedData);
            audio.removeEventListener('error', handleError);
        };
    }, [isMobile, isMuted]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio || !isLoaded) return;

        // Handle audio playback for mobile
        const playAudio = async () => {
            try {
                if (!isMuted && audio.paused) {
                    await audio.play();
                }
                
                // Smooth volume transition
                const targetVolume = isMuted ? 0 : 0.3;
                const currentVolume = audio.volume;
                const step = (targetVolume - currentVolume) / 20;

                let frame = 0;
                const animate = () => {
                    if (frame < 20) {
                        audio.volume = Math.max(0, Math.min(1, currentVolume + step * frame));
                        frame++;
                        requestAnimationFrame(animate);
                    } else {
                        audio.volume = targetVolume;
                        if (isMuted && !audio.paused) {
                            audio.pause();
                        }
                    }
                };
                animate();
            } catch (error) {
                console.log('Audio play failed:', error);
            }
        };

        playAudio();

        // Save preference
        localStorage.setItem('audioMuted', isMuted.toString());
    }, [isMuted, isLoaded, isMobile]);

    const toggleMute = async () => {
        const audio = audioRef.current;
        if (!audio || !isLoaded) return;

        try {
            if (isMuted) {
                // Unmuting - play audio
                audio.volume = 0.3;
                await audio.play();
                setIsMuted(false);
            } else {
                // Muting - pause audio
                setIsMuted(true);
                audio.pause();
            }
        } catch (error) {
            console.log('Audio toggle failed:', error);
            // Still toggle the state for UI feedback
            setIsMuted(prev => !prev);
        }
    };

    return (
        <>
            {/* Hidden audio element */}
            <audio
                ref={audioRef}
                loop
                preload="auto"
                src="/audio/space.mp3"
                playsInline
                crossOrigin="anonymous"
            />

            {/* Floating control button */}
            <AnimatePresence>
                {showControl && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        onClick={toggleMute}
                        className="fixed bottom-6 right-6 z-50 p-4 rounded-full glass border border-primary/30 hover:border-primary/60 transition-all duration-300 group"
                        aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
                    >
                        <motion.div
                            animate={{ rotate: isMuted ? 0 : 360 }}
                            transition={{ duration: 0.5 }}
                        >
                            {isMuted ? (
                                <VolumeX className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            ) : (
                                <Volume2 className="w-5 h-5 text-primary group-hover:text-primary/80 transition-colors" />
                            )}
                        </motion.div>

                        {/* Pulse effect when unmuted */}
                        {!isMuted && (
                            <motion.div
                                className="absolute inset-0 rounded-full bg-primary/20"
                                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        )}
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
}
