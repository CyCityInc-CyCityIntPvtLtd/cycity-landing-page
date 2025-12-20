import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 border-t border-brand/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left items-start">

                    {/* Address Section */}
                    <div>
                        <h3 className="text-brand font-bold text-xl mb-6 uppercase tracking-wider">Address</h3>
                        <div className="space-y-4 text-gray-400">
                            <div className="flex items-start justify-center md:justify-start">
                                <MapPin className="text-brand mr-3 flex-shrink-0" size={20} />
                                <p># 64-7, Vamanjoor, Mangalore. 575028. India</p>
                            </div>
                            <div className="flex items-start justify-center md:justify-start">
                                <MapPin className="text-brand mr-3 flex-shrink-0" size={20} />
                                <p>8 The Green, Ste A, Dover, DE 19901. USA</p>
                            </div>
                        </div>
                    </div>

                    {/* Logo & Social Section */}
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative w-48 h-16 mb-8">
                            <Image
                                src="/images/logo.webp"
                                alt="CyCity Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="flex flex-col space-y-4">
                            <a
                                href="https://www.linkedin.com/company/cycityinternationalprivatelimited"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-400 hover:text-brand transition-colors group"
                            >
                                <Linkedin className="mr-3 group-hover:scale-110 transition-transform" size={20} />
                                <span>CyCity Int Pvt Ltd.</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/cycityinc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-400 hover:text-brand transition-colors group"
                            >
                                <Linkedin className="mr-3 group-hover:scale-110 transition-transform" size={20} />
                                <span>CyCity Inc.</span>
                            </a>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="md:pl-12">
                        <h3 className="text-brand font-bold text-xl mb-6 uppercase tracking-wider">Contact Us</h3>
                        <div className="space-y-4 text-gray-400">
                            <a href="tel:+917349343336" className="flex items-center justify-center md:justify-start hover:text-brand transition-colors">
                                <Phone className="text-brand mr-3" size={20} />
                                <span>+91 734-934-3336</span>
                            </a>
                            <a href="mailto:info@cycity.space" className="flex items-center justify-center md:justify-start hover:text-brand transition-colors">
                                <Mail className="text-brand mr-3" size={20} />
                                <span>info@cycity.space</span>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-brand/5 text-center">
                    <p className="text-gray-500 text-sm">
                        © Copyright 2025{' '}
                        <Link href="https://cycity.space" className="text-brand hover:underline">
                            CyCity International Private Limited
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
