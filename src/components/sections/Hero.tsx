'use client';

import { FaArrowDown } from 'react-icons/fa';

export default function Hero() {
    const scrollToPortfolio = () => {
        document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-light to-accent/20 overflow-hidden"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 py-20">
                <div className="space-y-6">
                    {/* Name/Brand */}
                    <h2 className="text-xl sm:text-2xl font-medium text-secondary/80 tracking-wide">
                        Hello, I'm Kavish Parmar
                    </h2>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight">
                        Web Designer
                        <br />
                        <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
                            & Developer
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg sm:text-xl md:text-2xl text-secondary/90 max-w-3xl mx-auto">
                        Crafting digital experiences that engage and inspire
                    </p>

                    {/* CTA Button */}
                    <div className="pt-8">
                        <button
                            onClick={scrollToPortfolio}
                            className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            View My Work
                            <FaArrowDown className="group-hover:translate-y-1 transition-transform duration-300" />
                        </button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-2 left-0 right-0 flex justify-center animate-bounce z-20">
                    <div className="flex flex-col items-center gap-1 text-secondary/60">
                        <span className="text-xs uppercase tracking-widest">Scroll</span>
                        <FaArrowDown className="w-3 h-3" />
                    </div>
                </div>
            </div>
        </section>
    );
}
