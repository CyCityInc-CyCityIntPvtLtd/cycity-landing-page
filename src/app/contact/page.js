"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 bg-black">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12 md:mb-20"
                    >
                        <span className="text-brand uppercase tracking-widest text-sm mb-4 block">Get in Touch</span>
                        <h1 className="text-3xl md:text-6xl font-bold mb-6">Contact Us</h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            We're here to answer any questions you may have about our technologies or vision.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-12"
                        >
                            <div className="flex items-start group">
                                <div className="bg-brand/10 p-4 rounded-xl mr-6 group-hover:bg-brand group-transition transition-colors duration-500">
                                    <MapPin className="text-brand group-hover:text-black" size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 uppercase tracking-wider text-white">Address</h3>
                                    <p className="text-gray-400"># 64-7, Vamanjoor, Mangalore. 575028. India</p>
                                    <p className="text-gray-400">8 The Green, Ste A, Dover, DE 19901. USA</p>
                                </div>
                            </div>

                            <div className="flex items-start group">
                                <div className="bg-brand/10 p-4 rounded-xl mr-6 group-hover:bg-brand group-transition transition-colors duration-500">
                                    <Phone className="text-brand group-hover:text-black" size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 uppercase tracking-wider text-white">Phone</h3>
                                    <a href="tel:+917349343336" className="text-gray-400 hover:text-brand transition-colors text-lg">+91 734-934-3336</a>
                                </div>
                            </div>

                            <div className="flex items-start group">
                                <div className="bg-brand/10 p-4 rounded-xl mr-6 group-hover:bg-brand group-transition transition-colors duration-500">
                                    <Mail className="text-brand group-hover:text-black" size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 uppercase tracking-wider text-white">Email</h3>
                                    <a href="mailto:info@cycity.space" className="text-gray-400 hover:text-brand transition-colors text-lg">info@cycity.space</a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-gray-900/50 p-6 md:p-10 rounded-2xl border border-brand/10 backdrop-blur-sm"
                        >
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-brand font-bold">Full Name</label>
                                        <input type="text" className="w-full bg-black/50 border border-white/10 px-4 py-3 rounded-sm focus:border-brand outline-none transition-colors" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-brand font-bold">Email Address</label>
                                        <input type="email" className="w-full bg-black/50 border border-white/10 px-4 py-3 rounded-sm focus:border-brand outline-none transition-colors" placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-brand font-bold">Subject</label>
                                    <input type="text" className="w-full bg-black/50 border border-white/10 px-4 py-3 rounded-sm focus:border-brand outline-none transition-colors" placeholder="How can we help?" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-brand font-bold">Message</label>
                                    <textarea rows="5" className="w-full bg-black/50 border border-white/10 px-4 py-3 rounded-sm focus:border-brand outline-none transition-colors" placeholder="Tell us more..."></textarea>
                                </div>
                                <button className="w-full bg-brand text-black font-black uppercase tracking-widest py-4 rounded-sm hover:bg-white transition-all flex items-center justify-center space-x-3" onClick={(e) => e.preventDefault()}>
                                    <span>Send Message</span>
                                    <Send size={20} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
