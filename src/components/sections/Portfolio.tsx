'use client';

const projects = [
    {
        id: 1,
        title: 'E-commerce Platform',
        category: 'Web Design',
        description: 'Modern shopping experience with seamless checkout',
        image: '/projects/project1.png',
        tags: ['React', 'Tailwind', 'Stripe'],
    },
    {
        id: 2,
        title: 'Portfolio Website',
        category: 'UI/UX Design',
        description: 'Clean and minimal portfolio for creative agency',
        image: '/projects/project2.png',
        tags: ['Next.js', 'Framer Motion', 'GSAP'],
    },
    {
        id: 3,
        title: 'SaaS Dashboard',
        category: 'Web Development',
        description: 'Feature-rich analytics dashboard',
        image: '/projects/project3.png',
        tags: ['React', 'TypeScript', 'Charts'],
    },
    {
        id: 4,
        title: 'Mobile App Landing',
        category: 'Landing Page',
        description: 'High-converting app landing page',
        image: '/projects/project4.png',
        tags: ['HTML', 'CSS', 'JavaScript'],
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-20 bg-background-gray">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-heading font-bold text-primary mb-4">
                        Featured Work
                    </h2>
                    <p className="text-lg text-primary/70 max-w-2xl mx-auto">
                        A selection of projects showcasing my design and development expertise
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-primary via-primary/80 to-transparent">
                                <span className="text-sm font-medium text-accent-light mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-heading font-bold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-secondary/90 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Static Info (visible by default) */}
                            <div className="p-6 group-hover:opacity-0 transition-opacity duration-500">
                                <span className="text-sm font-medium text-accent mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-heading font-bold text-primary">
                                    {project.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
