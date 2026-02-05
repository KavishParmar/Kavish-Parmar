'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FaCheck, FaWhatsapp, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function NormalWebsitePage() {
    const features = [
        '5-7 Custom Pages',
        'Fully Responsive (Mobile, Tablet, Desktop)',
        '1 Year Free Hosting Included',
        'Standard Static Site (No Logins)',
        'Delivery within 1-3 Days',
        '₹10,000 (Without Domain Name)',
        '₹12,000 (With 1-Year Domain)',
        'Fast Loading Speed',
    ];

    const targetBusinesses = [
        'Mobile Shops & Repair Centers',
        'Garment & Clothing Stores',
        'Kirana & Grocery Shops',
        'Local Clinics & Doctors',
        'Salons & Beauty Parlours',
        'Hardware & Paint Shops',
        'Consultants & Professionals',
        'Small Restaurants & Cafes',
    ];

    const handleWhatsApp = () => {
        const message = encodeURIComponent("Hi Kavish, I'm interested in the Normal Website package. I'd like to discuss the price options (₹10,000 or ₹12,000 with domain).");
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
                        {/* Content */}
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary mb-4">
                                    Normal Website Package
                                </h1>
                                <p className="text-2xl font-bold text-accent">₹10,000 - ₹12,000 /- All Inclusive</p>
                            </div>

                            <p className="text-lg text-primary/80 leading-relaxed">
                                Our "Normal Website" package is specifically designed for local business owners who want a professional online presence without a massive investment. Whether you run a shop, a clinic, or provide local services, this plan gives you everything you need to be found by customers.
                            </p>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/10">
                                <h2 className="text-2xl font-heading font-bold text-primary mb-6">Who is this for?</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {targetBusinesses.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-primary/80">
                                            <div className="w-2 h-2 bg-accent rounded-full" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sticky Card */}
                        <div className="lg:sticky lg:top-32 bg-primary text-white p-8 rounded-3xl shadow-2xl">
                            <h3 className="text-2xl font-heading font-bold mb-6">What's Included?</h3>
                            <ul className="space-y-4 mb-8">
                                {features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <FaCheck className="text-accent mt-1 flex-shrink-0" />
                                        <span className="text-secondary/90">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-6 border-t border-white/10 space-y-4">
                                <p className="text-sm text-secondary/60">
                                    * Note: ₹10,000 plan is without domain. ₹12,000 plan includes a .com/.in domain for 1 year. Domain pricing for 2-3 years varies. I will guide you through the process!
                                </p>
                                <button
                                    onClick={handleWhatsApp}
                                    className="w-full bg-accent hover:bg-accent-dark text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105"
                                >
                                    <FaWhatsapp className="text-xl" />
                                    Discuss & Order on WhatsApp
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
