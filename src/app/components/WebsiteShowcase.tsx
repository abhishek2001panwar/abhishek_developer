import React, { useState } from 'react';
import { Smartphone, Laptop, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

interface WebsiteShowcaseProps {
  title: string;
  description: string;
  images: {
    laptop: string;
    mobile: string;
  };
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const WebsiteShowcase: React.FC<WebsiteShowcaseProps> = ({
  title,
  description,
  images,
  technologies,
  features,
  liveUrl,
  githubUrl
}) => {
  const [deviceView, setDeviceView] = useState<'laptop' | 'mobile'>('laptop');

  const getDeviceStyles = () => {
    switch (deviceView) {
      case 'mobile':
        return {
          width: 'w-64',
          aspectRatio: 'aspect-[9/16]',
          border: 'border-8 rounded-3xl',
          extraClass: 'before:content-[""] before:absolute before:top-0 before:w-16 before:h-1 before:bg-gray-300 before:rounded-full before:left-1/2 before:-translate-x-1/2 before:mt-4'
        };
      default: // laptop
        return {
          width: 'w-3/5',
          aspectRatio: 'aspect-video',
          border: 'border-t-8 border-x-8 border-b-16 rounded-md',
          extraClass: 'shadow-lg'
        };
    }
  };

  const getCurrentImage = () => {
    return images[deviceView];
  };

  const styles = getDeviceStyles();

  return (
    <section className="border border-gray-200 dark:border-neutral-700 bg-light-background dark:bg-dark-muted text-light-foreground dark:text-dark-foreground rounded-md shadow-sm overflow-hidden max-w-6xl mx-auto my-16">
      <div className="p-6 md:p-7">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium mb-2">{title}</h2>
            <p className="text-light-secondary dark:text-dark-secondary text-lg mb-4">{description}</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-light-accent dark:bg-dark-accent text-light-foreground dark:text-dark-background font-medium rounded-md transition-transform hover:scale-105"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-light-muted dark:bg-dark-muted text-light-foreground dark:text-dark-foreground font-medium rounded-md transition-transform hover:scale-105"
              >
                <Github size={18} />
                Code
              </a>
            )}
          </div>
        </div>
        
        {/* Device Switcher */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex bg-light-muted dark:bg-dark-muted p-1 rounded-full">
            <button 
              onClick={() => setDeviceView('laptop')}
              className={`p-2 rounded-full ${deviceView === 'laptop' ? 'text-dark-background bg-light-accent dark:bg-dark-accent' : ''}`}
              aria-label="Show laptop view"
            >
              <Laptop size={20} />
            </button>
            <button 
              onClick={() => setDeviceView('mobile')}
              className={`p-2 rounded-full ${deviceView === 'mobile' ? 'text-dark-background bg-light-accent dark:bg-dark-accent' : ''}`}
              aria-label="Show mobile view"
            >
              <Smartphone size={20} />
            </button>
          </div>
        </div>
        
        {/* Website Preview */}
        <div className="flex justify-center mb-8">
          <div className={`${styles.width} ${styles.aspectRatio}  relative overflow-hidden ${styles.border} border-light-muted dark:border-dark-muted bg-white dark:bg-black ${styles.extraClass}`}>
            <Image
              width={2000}
              height={1180} 
              src={getCurrentImage()} 
              alt={`${title} preview on ${deviceView}`} 
              className="absolute  inset-0 w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
        
        {/* Features and Technologies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Key Features</h3>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-light-accent dark:bg-dark-accent rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-4 py-1 border border-gray-200 dark:border-neutral-700 bg-light-muted dark:bg-dark-muted rounded-md text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteShowcase;