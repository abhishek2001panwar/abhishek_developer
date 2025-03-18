import React, { useState } from 'react';
import { Monitor, Smartphone, Tablet, Laptop, ExternalLink, Github } from 'lucide-react';

interface WebsiteShowcaseProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const WebsiteShowcase: React.FC<WebsiteShowcaseProps> = ({
  title,
  description,
  imageUrl,
  technologies,
  features,
  liveUrl,
  githubUrl
}) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile' | 'laptop'>('desktop');

  const getDeviceWidth = () => {
    switch (deviceView) {
      case 'mobile': return 'w-64';
      case 'tablet': return 'w-96';
      case 'laptop': return 'w-3/4';
      default: return 'w-full';
    }
  };

  return (
    <section className=" border border-gray-200 dark:border-neutral-700 bg-light-background dark:bg-dark-muted text-light-foreground dark:text-dark-foreground rounded-md shadow-sm overflow-hidden max-w-6xl mx-auto my-16">
      <div className="p-6 md:p-7">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
            <p className="text-light-secondary dark:text-dark-secondary text-lg mb-4">{description}</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-light-accent dark:bg-dark-accent text-light-foreground dark:text-dark-background font-medium rounded-full transition-transform hover:scale-105"
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
                className="flex items-center gap-2 px-4 py-2 bg-light-muted dark:bg-dark-muted text-light-foreground dark:text-dark-foreground font-medium rounded-full transition-transform hover:scale-105"
              >
                <Github size={18} />
                Code
              </a>
            )}
          </div>
        </div>
        
        {/* Device Switcher */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex bg-light-muted dark:bg-dark-muted  p-1 rounded-full">
            <button 
              onClick={() => setDeviceView('desktop')}
              className={`p-2 rounded-full ${deviceView === 'desktop' ? 'text-dark-background bg-light-accent dark:bg-dark-accent' : ''}`}
              aria-label="Show desktop view"
            >
              <Monitor size={20} />
            </button>
            <button 
              onClick={() => setDeviceView('laptop')}
              className={`p-2 rounded-full ${deviceView === 'laptop' ? 'text-dark-background bg-light-accent dark:bg-dark-accent' : ''}`}
              aria-label="Show laptop view"
            >
              <Laptop size={20} />
            </button>
            <button 
              onClick={() => setDeviceView('tablet')}
              className={`p-2 rounded-full ${deviceView === 'tablet' ? 'text-dark-background bg-light-accent dark:bg-dark-accent' : ''}`}
              aria-label="Show tablet view"
            >
              <Tablet size={20} />
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
          <div className={`${getDeviceWidth()} aspect-video relative overflow-hidden rounded-md border border-light-muted dark:border-dark-muted bg-white dark:bg-black`}>
            <img 
              src={imageUrl} 
              alt={`${title} preview`} 
              className="absolute inset-0 w-full h-full object-cover"
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
                  className="px-4 py-2 border border-gray-200 dark:border-neutral-700 bg-light-muted dark:bg-dark-muted rounded-md text-sm font-medium"
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