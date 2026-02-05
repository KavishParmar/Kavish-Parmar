'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';

export default function ReactDeveloperIndore() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="bg-primary pt-32 pb-16 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                    Expert React & Next.js Developer in Indore
                </h1>
                <p className="text-xl text-secondary/80 max-w-2xl mx-auto px-4">
                    Scalable, fast, and modern web applications built by Kavish Parmar, a specialist React developer serving Indore and surrounding areas.
                </p>
            </div>
            <Services />
            <Pricing />
            <Footer />
        </main>
    );
}
