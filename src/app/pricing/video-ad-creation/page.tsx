'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FaPlay, FaWhatsapp, FaArrowLeft, FaCheck } from 'react-icons/fa';
import Link from 'next/link';

export default function VideoAdsPage() {
    const services = [
        {
            title: 'UGC Style Ad',
            price: '₹3,000-5,000',
            desc: 'Delivery within 2-3 Days. Selfie-style product reviews and testimonials that look authentic.'
        },
        {
            title: 'Product Demo',
            price: '₹5,000-8,000',
            desc: 'Delivery within 2-3 Days. Professional demonstration of your product features.'
        },
        {
            title: 'Professional Ad Video',
            price: '₹8,000-15,000',
            desc: 'Delivery within 2-3 Days. High-end commercial style video with script-writing.'
        }
    ];

    const handleWhatsApp = (plan: string) => {
        const message = encodeURIComponent(`Hi Kavish, I'm interested in the Video Ad Creation (${plan}). Let's discuss my campaign!`);
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

                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary mb-4">
                                Video Ad Creation
                            </h1>
                            <p className="text-xl text-primary/70">
                                Stop the scroll with high-converting social media ads
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            {services.map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/10 flex flex-col">
                                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                                    <p className="text-accent font-bold mb-4">{item.price}</p>
                                    <p className="text-sm text-primary/70 mb-6 flex-grow">{item.desc}</p>
                                    <button
                                        onClick={() => handleWhatsApp(item.title)}
                                        className="w-full bg-primary/5 hover:bg-accent hover:text-white py-3 rounded-lg font-bold transition-all duration-300"
                                    >
                                        Order This
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="bg-primary text-white p-8 md:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1">
                                <h2 className="text-3xl font-heading font-bold mb-4">Social Media Combo Pack</h2>
                                <p className="text-secondary/80 mb-6 leading-relaxed">
                                    Get 3 hook-optimized videos for your Instagram or YouTube campaign at a discounted rate. Includes script-writing and hook testing.
                                </p>
                                <div className="text-4xl font-bold text-accent mb-8">₹12,000 <span className="text-lg text-secondary/40 line-through">₹15,000</span></div>
                                <button
                                    onClick={() => handleWhatsApp('Combo Pack')}
                                    className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all underline-none"
                                >
                                    <FaWhatsapp className="text-xl" />
                                    Book Combo Pack
                                </button>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    '15-30 Sec Reels/Shorts',
                                    'Hook-optimized Script',
                                    'Trend-focused Editing',
                                    'Copyright Free Music',
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <FaCheck className="text-accent" />
                                        <span className="text-secondary/80">{feature}</span>
                                    </div>
                                ))}
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
