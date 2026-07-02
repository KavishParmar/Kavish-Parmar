'use client';

const projects = [
    {
        id: 1,
        title: 'Green Valley Coaching Institute',
        category: 'Education Website',
        description: 'The premier destination for PAT, CUET(ICAR), BHU, and PVT preparation in Sehore.',
        image: '/projects/greenvalley.png',
        link: 'https://greenvalleycoachinginstitute.vercel.app/',
        tags: ['Next.js', 'Tailwind', 'Responsive'],
    },
    {
        id: 2,
        title: 'Kavish Portfolio',
        category: 'Portfolio Website',
        description: 'Freelance designer & developer portfolio with 3D visuals and smooth animations.',
        image: '/projects/kavishportofolio.png',
        link: 'https://kavishportofolio.vercel.app/',
        tags: ['Next.js', 'Framer Motion', 'GSAP'],
    },
    {
        id: 3,
        title: 'Shubham Showroom',
        category: 'Fashion Store',
        description: "Premium men's ethnic & designer wear for weddings, festivities, and modern celebrations.",
        image: '/projects/shubhamshowroom.png',
        link: 'https://shubhamshowroom.vercel.app/',
        tags: ['Next.js', 'E-commerce', 'Responsive'],
    },
    {
        id: 4,
        title: 'Kiran Copper House',
        category: 'Business Website',
        description: "Rajgarh's trusted destination for the latest smartphones, accessories, and reliable repair services.",
        image: '/projects/kirancopperhouse.png',
        link: 'https://kirancopperhouse2.vercel.app/',
        tags: ['Next.js', 'Tailwind', 'Responsive'],
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-16 sm:py-20 bg-background-gray">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
                        Websites I&apos;ve Built
                    </h2>
                    <p className="text-lg text-primary/70 max-w-2xl mx-auto">
                        A selection of live websites showcasing my design and development work
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white block"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-primary via-primary/80 to-transparent">
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

                            {/* Static Info (visible by default on desktop, hidden on mobile since overlay always shows) */}
                            <div className="hidden md:block p-6 group-hover:opacity-0 transition-opacity duration-500">
                                <span className="text-sm font-medium text-accent mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-heading font-bold text-primary">
                                    {project.title}
                                </h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
