'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Blog() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="container mx-auto px-4 py-32 text-center">
                <h1 className="text-5xl font-heading font-bold mb-8">Blog</h1>
                <p className="text-xl text-primary/70 mb-12">Insights on Web Design, React, and Next.js</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    <div className="p-6 bg-background-gray rounded-2xl shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">How to Choose a Web Designer in Indore, Rajgarh & Dhar</h2>
                        <p className="text-primary/70 mb-4">Coming soon...</p>
                    </div>
                    <div className="p-6 bg-background-gray rounded-2xl shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">React vs Next.js: Which is Better?</h2>
                        <p className="text-primary/70 mb-4">Coming soon...</p>
                    </div>
                    <div className="p-6 bg-background-gray rounded-2xl shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">10 Web Design Trends in 2026</h2>
                        <p className="text-primary/70 mb-4">Coming soon...</p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
