import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PortfolioItemProps {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ 
    title, 
    description, 
    image, 
    technologies, 
    link 
}) => {
    return (
        <div className="bg-dark-muted dark:bg-dark-muted light:bg-light-background rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.01]">
            <div className="relative h-64 w-full">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-500 hover:scale-105"
                />
            </div>
            <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-dark-accent dark:text-dark-accent light:text-light-accent">
                    {title}
                </h3>
                <p className="text-dark-primary dark:text-dark-primary light:text-light-foreground">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span 
                            key={index} 
                            className="px-3 py-1 bg-dark-background dark:bg-dark-background light:bg-light-muted rounded-full text-sm text-dark-primary dark:text-dark-primary light:text-light-foreground"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <Link href={link} passHref>
                    <div className="inline-block px-6 py-2 mt-4 rounded-full bg-dark-accent dark:bg-dark-accent light:bg-light-accent text-dark-background dark:text-dark-background light:text-light-foreground font-medium hover:opacity-90 transition-all duration-300">
                        View Project
                    </div>
                </Link>
            </div>
        </div>
    );
};

const PortfolioSection: React.FC = () => {
    const portfolioItems = [
        {
            title: "Serendale - Fast Blockchain, Scalable AI",
            description: "A high-performance blockchain solution with AI-based data security. Featuring Proof of Stake consensus algorithm that enables processing speeds of 120K TPS with guaranteed security.",
            image: "/images/serendale-blockchain.jpg",
            technologies: ["Blockchain", "AI", "Proof of Stake", "Data Security"],
            link: "/projects/serendale"
        },
        // You can add more portfolio items here
    ];

    return (
        <section id="portfolio" className="py-20 bg-light-background dark:bg-dark-background light:bg-light-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark-primary dark:text-dark-primary light:text-light-foreground">
                        Featured Projects
                    </h2>
                    <div className="h-1 w-20 bg-dark-accent mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <PortfolioItem
                            key={index}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            technologies={item.technologies}
                            link={item.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;