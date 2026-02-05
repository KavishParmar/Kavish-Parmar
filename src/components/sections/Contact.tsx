'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGithub, FaLinkedin, FaDribbble, FaEnvelope } from 'react-icons/fa';

interface FormData {
    name: string;
    email: string;
    service: string;
    message: string;
}

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);

        // Construct WhatsApp message
        const whatsappMessage = `Hello Kavish, I'm ${data.name} (${data.email}). I'm interested in ${data.service || 'Web Development'} for my business. ${data.message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        // Using the user's actual WhatsApp number
        const whatsappUrl = `https://wa.me/919302492158?text=${encodedMessage}`;

        // Small delay to show "Sending..." state
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');

        setIsSubmitting(false);
        setIsSubmitted(true);
        reset();

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-heading font-bold text-primary mb-4">
                        Let's Work Together
                    </h2>
                    <p className="text-lg text-primary/70 max-w-2xl mx-auto">
                        Have a project in mind? I'd love to hear about it. Get in touch and let's create something amazing.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    {/* Success Message */}
                    {isSubmitted && (
                        <div className="mb-8 p-4 bg-green-100 border border-green-300 rounded-lg text-green-800 text-center">
                            ✓ Thank you! My team will get back to you within 24 hours.
                        </div>
                    )}

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                                Name *
                            </label>
                            <input
                                {...register('name', { required: 'Name is required' })}
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors"
                                placeholder="Your Name"
                            />
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                                Email *
                            </label>
                            <input
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address',
                                    },
                                })}
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors"
                                placeholder="your@email.com"
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Service */}
                        <div>
                            <label htmlFor="service" className="block text-sm font-medium text-primary mb-2">
                                Service Interested In
                            </label>
                            <select
                                {...register('service')}
                                id="service"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors"
                            >
                                <option value="">Select a service</option>
                                <option value="web-design">Web Design</option>
                                <option value="ui-ux">UI/UX Design</option>
                                <option value="development">Development</option>
                                <option value="branding">Branding</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                                Message *
                            </label>
                            <textarea
                                {...register('message', {
                                    required: 'Message is required',
                                    minLength: {
                                        value: 10,
                                        message: 'Message must be at least 10 characters',
                                    },
                                })}
                                id="message"
                                rows={5}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                                placeholder="Tell me about your project..."
                            />
                            {errors.message && (
                                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
}
