"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/#section-hero' },
        { name: 'About Us', href: '/#section-about' },
        { name: 'Technologies', href: '/#section-why-attend' },
        { name: 'Team', href: '/#section-speakers' },
        { name: 'Our Visions', href: '/#section-venue' },
        { name: 'Contact Us', href: '/contact' },
    ];

    return (
        <header className={cn(
            "fixed top-0 left-0 w-full z-50 transition-all duration-300",
            isScrolled ? "bg-black/80 backdrop-blur-md py-4 shadow-lg border-b border-brand/20" : "bg-transparent py-6"
        )}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="relative w-32 h-10">
                    <Image
                        src="/images/logo.webp"
                        alt="CyCity Logo"
                        fill
                        className="object-contain"
                    />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-brand transition-colors uppercase tracking-wider"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="relative group">
                        <button className="text-sm font-medium hover:text-brand transition-colors uppercase tracking-wider flex items-center">
                            Policies
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className="absolute right-0 mt-2 w-48 bg-black/90 border border-brand/20 backdrop-blur-md rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                            <Link href="/privacy" className="block px-4 py-2 text-sm hover:bg-brand hover:text-black transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="block px-4 py-2 text-sm hover:bg-brand hover:text-black transition-colors">Terms and Conditions</Link>
                            <Link href="/cookies" className="block px-4 py-2 text-sm hover:bg-brand hover:text-black transition-colors">Cookies</Link>
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-brand transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={cn(
                "fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden",
                isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            )}>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-2xl font-bold hover:text-brand transition-colors uppercase tracking-widest"
                    >
                        {link.name}
                    </Link>
                ))}
                <div className="flex flex-col items-center space-y-4 pt-8">
                    <Link href="/privacy" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-brand">Privacy Policy</Link>
                    <Link href="/terms" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-brand">Terms and Conditions</Link>
                    <Link href="/cookies" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-brand">Cookies</Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
