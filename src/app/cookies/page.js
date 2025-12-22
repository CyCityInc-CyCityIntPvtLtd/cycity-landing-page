"use client";
import React from 'react';
import { motion } from 'framer-motion';

const CookiesPage = () => {
    return (
        <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 bg-black text-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 border-b border-brand pb-4">Cookies Policy</h1>

                    <div className="space-y-8 text-gray-400 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-brand mb-4">1. What are Cookies?</h2>
                            <p>
                                Cookies are small text files that are stored on your device when you visit a website. They help the website recognize your device and remember your preferences.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-brand mb-4">2. How We Use Cookies</h2>
                            <p>
                                We use cookies to enhance your experience on our website, analyze traffic, and personalize content. We may also use third-party cookies for advertising and marketing purposes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-brand mb-4">3. Managing Cookies</h2>
                            <p>
                                You can manage cookies through your browser settings. You can choose to block or delete cookies, but this may affect your ability to use certain features of the website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-brand mb-4">4. Updates to this Policy</h2>
                            <p>
                                We may update this Cookies Policy from time to time. Any changes will be posted on this page with an updated effective date.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CookiesPage;
