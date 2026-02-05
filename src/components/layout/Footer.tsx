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
                            A passionate web designer and developer with 5+ years of experience in crafting high-performance, results-driven digital experiences. Specializing in modern web technologies and user-centered design.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/#hero" className="text-secondary/80 hover:text-accent transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/#about" className="text-secondary/80 hover:text-accent transition-colors">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/#portfolio" className="text-secondary/80 hover:text-accent transition-colors">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="/#contact" className="text-secondary/80 hover:text-accent transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
                        <ul className="space-y-4">
                            <li className="text-secondary/80">
                                <a
                                    href="https://wa.me/919302492158?text=Hi%20Kavish%21%20I%20visited%20your%20website%20and%20was%20truly%20impressed%20by%20your%20work.%20I%20would%20love%20to%20discuss%20a%20project%20for%20my%20business%2Fmyself."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-accent transition-colors font-medium cursor-pointer"
                                    title="Click to WhatsApp, Double click to copy"
                                    onDoubleClick={(e) => {
                                        e.preventDefault();
                                        navigator.clipboard.writeText('9302492158');
                                        alert('Phone number copied to clipboard!');
                                    }}
                                >
                                    +91 9302492158 (WhatsApp)
                                </a>
                            </li>
                            <li className="text-secondary/80">
                                <a
                                    href="mailto:kavishparmar5@gmail.com"
                                    className="hover:text-accent transition-colors cursor-pointer"
                                    title="Click to Email, Double click to copy"
                                    onDoubleClick={(e) => {
                                        e.preventDefault();
                                        navigator.clipboard.writeText('kavishparmar5@gmail.com');
                                        alert('Email address copied to clipboard!');
                                    }}
                                >
                                    kavishparmar5@gmail.com
                                </a>
                            </li>
                            <li className="pt-4 border-t border-secondary/10">
                                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-secondary/60">
                                    {[
                                        "Indore", "Rajgarh", "Dhar", "Shujalpur", "Akodia"
                                    ].map((city) => (
                                        <span key={city} className="hover:text-white transition-colors cursor-default whitespace-nowrap">
                                            {city}
                                        </span>
                                    ))}
                                </div>
                            </li>
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
