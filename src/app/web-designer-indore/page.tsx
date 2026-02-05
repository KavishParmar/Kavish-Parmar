'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';

export default function WebDesignerIndore() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="bg-primary pt-32 pb-16 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                    Professional Web Designer in Indore
                </h1>
                <p className="text-xl text-secondary/80 max-w-2xl mx-auto px-4">
                    Kavish Parmar: Your top choice for creative and high-performance web design services in Indore, Rajgarh, and Dhar.
                </p>
            </div>
            <Services />
            <Pricing />
            <Footer />
        </main>
    );
}
