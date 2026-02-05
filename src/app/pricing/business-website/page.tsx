'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FaCheck, FaWhatsapp, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function BusinessWebsitePage() {
    const features = [
        '8-12 Custom Pages',
        'Login / Logout Facility',
        'User Database Support',
        'Delivery within 4-5 Days',
        'Custom Design (Non-Template)',
        'Advanced SEO Setup',
        'WhatsApp Integration',
        'No Payment System Included',
        'Google Analytics Setup',
    ];

    const handleWhatsApp = () => {
        const message = encodeURIComponent("Hi Kavish, I'm interested in the Business Website package (₹25,000) with Login/Logout facility. Let's talk!");
        window.open(`https://wa.me/919302492158?text=${message}`, '_blank');
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="pt-32 pb-20 bg-background-gray">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/#pricing" className="inline-flex items-center gap-2 text-primary/60 hover:text-accent mb-8 transition-colors">
                        <FaArrowLeft /> Back to Pricing
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary mb-4">
                                    Business Website Package
                                </h1>
                                <p className="text-2xl font-bold text-accent">₹25,000 /- Professional Suite</p>
                            </div>

                            <p className="text-lg text-primary/80 leading-relaxed">
                                Elevate your brand with a custom-designed business website. This plan is perfect for established businesses, startups, and agencies looking for a high-quality, high-performance site that reflects their unique brand identity and drives growth.
                            </p>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/10">
                                <h2 className="text-2xl font-heading font-bold text-primary mb-6">Why Business Plan?</h2>
                                <p className="text-primary/70">
                                    A template-free approach ensures your site stands out. With advanced SEO and analytics, you don't just get a website; you get a marketing tool that helps you understand your audience and rank higher on Google.
                                </p>
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-32 bg-primary text-white p-8 rounded-3xl shadow-2xl">
                            <h3 className="text-2xl font-heading font-bold mb-6">Premium Features</h3>
                            <ul className="space-y-4 mb-8">
                                {features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <FaCheck className="text-accent mt-1 flex-shrink-0" />
                                        <span className="text-secondary/90">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-6 border-t border-white/10">
                                <button
                                    onClick={handleWhatsApp}
                                    className="w-full bg-accent hover:bg-accent-dark text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105"
                                >
                                    <FaWhatsapp className="text-xl" />
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Floating Back to Pricing Button */}
            <div className="fixed bottom-24 right-8 z-40 md:hidden">
                <Link
                    href="/#pricing"
                    className="bg-primary text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-accent transition-all duration-300"
                    aria-label="Back to Pricing"
                >
                    <FaArrowLeft />
                </Link>
            </div>

            <div className="fixed top-24 right-8 z-40 hidden md:block">
                <Link
                    href="/#pricing"
                    className="bg-white/80 backdrop-blur-md border border-secondary/10 text-primary px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-accent hover:text-white transition-all duration-300 group"
                >
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-bold">Back to Pricing</span>
                </Link>
            </div>

            <Footer />
        </main>
    );
}
