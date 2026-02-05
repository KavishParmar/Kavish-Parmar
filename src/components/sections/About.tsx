'use client';
import Image from 'next/image';


const skills = [
    'Web Design',
    'UI/UX Design',
    'React Development',
    'Responsive Design',
    'Branding',
    'WordPress',
    'E-commerce',
    'Animation',
    'UGC & Video Ads',
];

export default function About() {
    return (
        <section id="about" className="py-20 bg-background-gray">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Image */}
                    <div className="relative">
                        <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl">
                            <Image
                                src="/profile.jpg"
                                alt="Kavish Parmar - Professional Web Designer & Developer"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl sm:text-5xl font-heading font-bold text-primary">
                            About Me
                        </h2>

                        <div className="space-y-4 text-lg text-primary/80">
                            <p>
                                I'm Kavish Parmar, a passionate and professional web designer and developer with 5+ years of experience. I specialize in creating beautiful, functional, and modern responsive websites using React, Next.js, and cutting-edge web technologies.
                            </p>
                            <p>
                                My mission is to help businesses establish a powerful digital presence through exceptional design and development. I believe in creating results-driven solutions that combine beautiful aesthetics with exceptional performance.
                            </p>
                        </div>

                        {/* Skills */}
                        <div>
                            <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
                                Skills & Expertise
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-white rounded-full text-primary font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-6">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-accent">5+</div>
                                <div className="text-sm text-primary/60 mt-1">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-accent">50+</div>
                                <div className="text-sm text-primary/60 mt-1">Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-accent">30+</div>
                                <div className="text-sm text-primary/60 mt-1">Happy Clients</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
