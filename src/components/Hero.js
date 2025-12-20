"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
    return (
        <section id="section-hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60 scale-110"
                >
                    <source src="/video/11.mov" type="video/quicktime" />
                    <source src="/video/11.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="inline-block text-brand font-medium tracking-[0.3em] uppercase mb-4 text-sm md:text-base border-b border-brand/30 pb-2"
                    >
                        Perpetual Innovations
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="text-3xl md:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight max-w-5xl mx-auto px-2 md:px-0"
                    >
                        Redefining Intelligence.<br />
                        <span className="text-brand underline decoration-brand/30 underline-offset-8">Reimagining</span> Tomorrow.
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="flex items-center justify-center space-x-2 md:space-x-4 mb-8 md:mb-12"
                    >
                        <div className="w-8 md:w-12 h-[1px] bg-brand/50"></div>
                        <h4 className="text-lg md:text-2xl font-light text-gray-300 italic">
                            Join The Matrix Of Innovation
                        </h4>
                        <div className="w-8 md:w-12 h-[1px] bg-brand/50"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                    >
                        <Link
                            href="/contact"
                            className="inline-block bg-transparent border-2 border-brand text-brand hover:bg-brand hover:text-black px-10 py-4 rounded-sm font-bold transition-all duration-300 transform hover:scale-105 tracking-widest uppercase text-sm"
                        >
                            Call US and Know More
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
                <span className="text-[10px] uppercase tracking-widest text-brand mb-2 opacity-50">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-brand to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
