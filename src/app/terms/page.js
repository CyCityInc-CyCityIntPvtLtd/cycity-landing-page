"use client";
import React from 'react';
import { motion } from 'framer-motion';

const TermsPage = () => {
    return (
        <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 bg-black text-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 border-b border-brand pb-4">Terms and Conditions</h1>

                    <div className="space-y-8 text-gray-400 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-brand mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-brand mb-4">2. Intellectual Property</h2>
                            <p>
                                All content on this website, including text, graphics, logos, and images, is the property of CyCity International Private Limited and is protected by intellectual property laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-brand mb-4">3. Use of Website</h2>
                            <p>
                                You may use this website for lawful purposes only. You are prohibited from using this website in any way that could damage or interfere with its operation.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-brand mb-4">4. Limitation of Liability</h2>
                            <p>
                                CyCity International Private Limited shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use of this website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-brand mb-4">5. Governing Law</h2>
                            <p>
                                These Terms and Conditions shall be governed by and construed in accordance with the laws of India.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TermsPage;
