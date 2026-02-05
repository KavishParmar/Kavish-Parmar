'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FaCheck, FaWhatsapp, FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';

export default function EcommercePage() {
    const features = [
        'Delivery within 6-7 Days',
        'Online Order Facility',
        'Online Card & UPI Payments',
        'Full Payment Gateway (Razorpay/Stripe)',
        'Inventory & Order Management',
        'Customer Account & Database',
        'Unlimited Product Listings',
        'Sales Analytics Dashboard',
    ];

    const handleWhatsApp = () => {
        const message = encodeURIComponent("Hi Kavish, I'm interested in the E-commerce Store package (₹50,000). I want to start selling online!");
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
                            <div className="flex items-center gap-4 text-accent">
                                <FaShoppingCart className="text-4xl" />
                                <div>
                                    <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary">
                                        E-commerce Store
                                    </h1>
                                    <p className="text-2xl font-bold">₹50,000 /- All-in-one Shop</p>
                                </div>
                            </div>

                            <p className="text-lg text-primary/80 leading-relaxed">
                                Transform your business into a 24/7 selling machine. Our E-commerce solution provides a robust platform to manage products, take payments, and track orders effortlessly. Built for speed and high conversion rates.
                            </p>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/10">
                                <h2 className="text-2xl font-heading font-bold text-primary mb-6">Powerful Selling Tools</h2>
                                <p className="text-primary/70">
                                    From automated invoices to inventory alerts, we set up every tool you need to run your online store independently. No monthly platform fees (like Shopify)—you own the platform.
                                </p>
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-32 bg-primary text-white p-8 rounded-3xl shadow-2xl">
                            <h3 className="text-2xl font-heading font-bold mb-6">Store Features</h3>
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
                                    Launch Your Store
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
