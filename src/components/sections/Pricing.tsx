'use client';

import { FaCheck } from 'react-icons/fa';

const pricingPackages = [
    {
        name: 'Website Only',
        slug: 'website-only',
        price: '$499',
        subtitle: 'Professional landing page & website',
        features: [
            'Professional Website Design',
            'Fully Responsive Design',
            'Contact Forms & Optimization',
            'SEO Optimized',
            '1 Month Post-Launch Support',
            'Website Maintenance Support',
            'Bug Fixes & Support',
            'Delivery within 2-3 Days',
        ],
        delivery: '2-3 days',
        featured: false,
    },
    {
        name: 'AI Chatbot',
        slug: 'ai-chatbot',
        price: '$299',
        subtitle: 'WhatsApp & Website Chatbot Solution',
        features: [
            'Website Chatbot or WhatsApp Chatbot',
            'AI-Powered Instant Replies',
            'Book Calls Automatically',
            'Instant Customer Query Resolution',
            'Multi-Channel Integration',
            'Customer Data Collection',
            'Real-time Notifications',
            'Easy Setup & Management',
        ],
        delivery: '3-5 days',
        featured: false,
    },
    {
        name: 'Website + Chatbot Combo',
        slug: 'website-chatbot-combo',
        price: '$699',
        subtitle: 'Complete digital solution',
        features: [
            'Professional Website Design',
            'Fully Responsive Design',
            'AI-Powered Website Chatbot',
            'WhatsApp Integration',
            'Automatic Call Booking',
            'SEO Optimized',
            'Customer Query Automation',
            '1 Month Complete Support',
            'Bug Fixes & Maintenance',
            'Contact Forms & Analytics',
        ],
        delivery: '5-7 days',
        featured: true,
    },
];

export default function Pricing() {
    const handleContactClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="pricing" className="py-20 bg-background-gray">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-heading font-bold text-primary mb-4">
                        Transparent Pricing
                    </h2>
                    <p className="text-lg text-primary/70 max-w-2xl mx-auto">
                        Investment That Delivers Results
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pricingPackages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 flex flex-col ${pkg.featured ? 'border-accent ring-2 ring-accent/20' : 'border-transparent'
                                }`}
                        >
                            {pkg.featured && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider">
                                    MOST POPULAR
                                </div>
                            )}

                            <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                                {pkg.name}
                            </h3>
                            <div className="text-3xl font-bold text-accent mb-2">
                                {pkg.price}
                            </div>
                            <p className="text-sm text-primary/60 mb-6 min-h-[40px]">
                                {pkg.subtitle}
                            </p>

                            <ul className="space-y-3 mb-8 flex-grow">
                                {pkg.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start gap-3 text-sm text-primary/80">
                                        <FaCheck className="text-accent mt-1 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto">
                                <p className="text-sm font-semibold text-primary/70 mb-6 flex items-center gap-2">
                                    <span>⏱️ Delivery:</span>
                                    <span>{pkg.delivery}</span>
                                </p>

                                <button
                                    onClick={handleContactClick}
                                    className={`w-full py-3 rounded-full font-bold transition-all duration-300 ${pkg.featured
                                        ? 'bg-accent text-white hover:bg-accent-dark'
                                        : 'bg-primary/5 text-primary hover:bg-primary/10'
                                        }`}
                                >
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-block bg-white p-8 rounded-2xl shadow-sm border border-secondary/10 max-w-2xl">
                        <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                            💎 Included in Every Project
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                            {[
                                'Modern, Professional Design',
                                'Mobile & Tablet Responsive',
                                'Fast Loading Speed',
                                'SEO Optimized',
                                'Free SSL Certificate',
                                'Free Hosting Setup Guidance',
                                'Source Code Ownership',
                                'Training on Updates',
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm text-primary/80">
                                    <FaCheck className="text-accent" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center text-primary/60 italic text-sm">
                    *Prices may vary based on specific requirements. Free consultation to discuss your project.*
                </div>
            </div>
        </section>
    );
}
