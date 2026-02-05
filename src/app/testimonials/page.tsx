'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Testimonials() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="container mx-auto px-4 py-32 text-center">
                <h1 className="text-5xl font-heading font-bold mb-8">Client Testimonials</h1>
                <p className="text-xl text-primary/70 mb-12">What my clients say about my work</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <div className="p-8 bg-background-gray rounded-2xl shadow-sm border border-accent/20">
                        <p className="text-lg italic mb-4">"Kavish is an exceptional developer. He delivered our e-commerce platform ahead of schedule."</p>
                        <p className="font-bold">- Client Name</p>
                    </div>
                    <div className="p-8 bg-background-gray rounded-2xl shadow-sm border border-accent/20">
                        <p className="text-lg italic mb-4">"The best web designer in Indore, Rajgarh & Dhar. Highly recommended for any React project."</p>
                        <p className="font-bold">- Client Name</p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
