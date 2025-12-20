"use client";
import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
    return (
        <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 bg-black text-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 border-b border-brand pb-4">Privacy Policy</h1>

                    <div className="space-y-8 text-gray-400 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-brand mb-4">1. Introduction</h2>
                            <p>
                                At CyCity International Private Limited, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-brand mb-4">2. Information Collection</h2>
                            <p>
                                We may collect personal information such as your name, email address, and phone number when you fill out a contact form or subscribe to our newsletter.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-brand mb-4">3. Use of Information</h2>
                            <p>
                                The information we collect is used to respond to your inquiries, provide you with updates, and improve our services. We do not sell or share your personal information with third parties for marketing purposes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-brand mb-4">4. Data Security</h2>
                            <p>
                                We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-brand mb-4">5. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at info@cycity.space.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPage;
