'use client';

import { useRouter } from 'next/navigation';
import { FaCheck } from 'react-icons/fa';

const pricingPackages = [
    {
        name: 'Normal Website',
        slug: 'normal-website',
        price: '₹10,000',
        subtitle: 'Perfect for local businesses',
        features: [
            '5-7 Pages (Home, About, etc.)',
            'Fully Responsive Design',
            '₹10k (Excl Domain) / ₹12k (Incl Domain)',
            'Standard Static Site (No Logins)',
            'Delivery within 2-3 Days',
            'Contact Form',
            'SEO Optimized',
        ],
        delivery: '2-3 days',
        featured: false,
    },
    {
        name: 'Business Website',
        slug: 'business-website',
        price: '₹25,000',
        subtitle: 'Growth-focused solutions',
        features: [
            '8-12 Pages',
            'Login / Logout Facility',
            'User Database Support',
            'Custom Design & Branding',
            'WhatsApp Integration',
            'Blog Section',
            'Google Analytics',
            'No Payment System',
        ],
        delivery: '4-5 days',
        featured: true,
    },
    {
        name: 'E-commerce Store',
        slug: 'ecommerce-store',
        price: '₹50,000',
        subtitle: 'Complete online store solution',
        features: [
            'Online Order Facility',
            'Online Card Payments',
            'Full Payment Gateway',
            'Inventory & Order Management',
            'Customer Accounts & Database',
            'Unlimited Products',
            'Admin Dashboard',
            'Professional SEO',
        ],
        delivery: '6-7 days',
        featured: false,
    },
    {
        name: 'Video Ad Creation',
        slug: 'video-ad-creation',
        price: 'Varies',
        subtitle: 'High-converting social media ads',
        features: [
            'UGC Style Ads',
            'Varies by Use Case',
            'Product Demo Videos',
            'Professional Ad Video',
            'Hook-optimized for ads',
            'Instagram Reels / YT Shorts',
            'Professional Editing',
        ],
        delivery: '2-3 days',
        featured: false,
    },
];

export default function Pricing() {
    const router = useRouter();

    const handleNavigate = (slug: string) => {
        router.push(`/pricing/${slug}`);
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pricingPackages.map((pkg, index) => (
                        <div
                            key={index}
                            onClick={() => handleNavigate(pkg.slug)}
                            className={`relative p-8 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 cursor-pointer flex flex-col ${pkg.featured ? 'border-accent ring-2 ring-accent/20' : 'border-transparent'
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
                                    className={`w-full py-3 rounded-full font-bold transition-all duration-300 ${pkg.featured
                                        ? 'bg-accent text-white hover:bg-accent-dark'
                                        : 'bg-primary/5 text-primary hover:bg-primary/10'
                                        }`}
                                >
                                    View Details
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
