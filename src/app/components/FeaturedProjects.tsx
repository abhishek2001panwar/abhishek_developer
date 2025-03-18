// FeaturedProjects.tsx
import React from 'react';
import Button from './Button';
import Image from 'next/image';

const FeaturedProjects: React.FC = () => {
  const projects = [
    {
      title: 'Finbase Finance Landing Page',
      image: '/finbase-image.jpg', // Replace with your image path
      category: 'Design',
      category2: 'Development',
      link: '#', // Replace with your project link
    },
    {
      title: 'Uptech Website',
      image: '/uptech-image.jpg', // Replace with your image path
      category: 'Design',
      link: '#', // Replace with your project link
    },
    {
      title: 'TECHFLARE',
      image: '/techflare-image.jpg', // Replace with your image path
      category: 'Design',
      link: '#', // Replace with your project link
    },
    {
      title: 'CodeFlow',
      image: '/codeflow-image.jpg', // Replace with your image path
      category: 'Development',
      link: '#', // Replace with your project link
    },
  ];

  return (
    <div className='container mx-auto max-w-6xl p-10'>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 space-y-4 md:space-y-0">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Explore some of my recent work and creative endeavors.</p>
        </div>
       <Button label="View All Projects →" className="py-3 px-6 w-full md:w-auto" />
    
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group bg-white dark:bg-neutral-800/50 rounded-md overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-neutral-700 hover:scale-[1.02]"
          >
            <div className="relative overflow-hidden">
              <Image
                width={800}
                height={500} 
                src={project.image} 
                alt={project.title}
                className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md text-sm font-medium">
                    {project.category}
                  </span>
                  {project.category2 && (
                    <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md text-sm font-medium">
                      {project.category2}
                    </span>
                  )}
                </div>
                <a 
                  href={project.link} 
                  className="border border-gray-100 dark:border-neutral-700   flex items-center justify-center dark:border-accent-400 bg-accent-500/10 hover:bg-accent-500 dark:hover:bg-accent-400 text-accent-500 hover:text-white dark:text-accent-400 dark:hover:text-white px-4 py-2 rounded-md transition-all duration-300 "
                >
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300 ">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;