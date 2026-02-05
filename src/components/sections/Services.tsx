'use client';

import { FaDesktop, FaPalette, FaMobileAlt, FaPaintBrush, FaShoppingCart, FaTools } from 'react-icons/fa';

const services = [
    {
        icon: FaDesktop,
        title: 'Web Design',
        description: 'Beautiful, modern websites that captivate your audience and drive engagement.',
    },
    {
        icon: FaPalette,
        title: 'UI/UX Design',
        description: 'User-centered interfaces that drive engagement and boost conversions.',
    },
    {
        icon: FaMobileAlt,
        title: 'Responsive Development',
        description: 'Seamless experiences across all devices and screen sizes.',
    },
    {
        icon: FaPaintBrush,
        title: 'Branding & Identity',
        description: 'Cohesive brand identities that make your business stand out.',
    },
    {
        icon: FaShoppingCart,
        title: 'E-commerce Solutions',
        description: 'Powerful online stores that boost your sales and revenue.',
    },
    {
        icon: FaTools,
        title: 'Website Maintenance',
        description: 'Ongoing support to keep your site running smoothly and securely.',
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-heading font-bold text-primary mb-4">
                        Services I Offer
                    </h2>
                    <p className="text-lg text-primary/70 max-w-2xl mx-auto">
                        Comprehensive web solutions tailored to your business needs
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-background-gray rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-transparent hover:border-accent/20"
                        >
                            {/* Icon */}
                            <div className="text-accent text-5xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                                <service.icon />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-primary/70 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
