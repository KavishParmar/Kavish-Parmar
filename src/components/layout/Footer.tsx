'use client';

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function Footer() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-primary text-white py-12 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Branding */}
                    <div>
                        <h3 className="text-2xl font-heading font-bold mb-4">Kavish Parmar</h3>
                        <p className="text-secondary/80">
                            Crafting digital experiences that engage and inspire.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="text-secondary/80 hover:text-accent transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-secondary/80 hover:text-accent transition-colors">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" className="text-secondary/80 hover:text-accent transition-colors">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-secondary/80 hover:text-accent transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
                        <ul className="space-y-2">
                            <li className="text-secondary/80">
                                <a href="tel:+919302492158" className="hover:text-accent transition-colors font-medium">
                                    +91 9302492158
                                </a>
                            </li>
                            <li className="text-secondary/80">
                                <a href="mailto:kavishparmar2@gmail.com" className="hover:text-accent transition-colors">
                                    kavishparmar2@gmail.com
                                </a>
                            </li>
                            <li className="text-secondary/80">Madhya Pradesh, India</li>
                            <li className="text-secondary/80">452001 (Indore)</li>
                        </ul>
                        <div className="flex space-x-4 mt-4">
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-secondary/20 pt-6 text-center text-secondary/80">
                    <p>© {new Date().getFullYear()} Kavish Parmar. All rights reserved.</p>
                </div>
            </div>

            {/* Back to Top Button */}
            {showBackToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-accent hover:bg-accent-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40"
                    aria-label="Back to top"
                >
                    <FaArrowUp className="w-5 h-5" />
                </button>
            )}
        </footer>
    );
}
