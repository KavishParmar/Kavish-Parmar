'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';

export default function WebsiteDevelopmentIndore() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="bg-primary pt-32 pb-16 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                    Professional Website Development in Indore
                </h1>
                <p className="text-xl text-secondary/80 max-w-2xl mx-auto px-4">
                    Full-stack website development solutions tailored for businesses in Indore, Rajgarh, and Dhar. From portfolio sites to complex E-commerce.
                </p>
            </div>
            <Services />
            <Pricing />
            <Footer />
        </main>
    );
}
