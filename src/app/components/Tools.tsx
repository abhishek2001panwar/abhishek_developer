// Tools.tsx
import React from 'react';
import { 
  
  SiFigma, 
  SiFramer, 
  SiVercel,
  SiDocker,
  SiPostman,
  SiGithub,
  SiJest,
  SiFirebase,
  SiExpo
} from 'react-icons/si';

const Tools: React.FC = () => {
  const tools = [
    {
      name: "Vercel",
      description: "Deploy and Host Next.js Apps",
      icon: <SiVercel size={32} />,
    },
    {
      name: "Docker",
      description: "Containerization Platform",
      icon: <SiDocker size={32} />,
    },
    {
      name: "Postman",
      description: "API Testing and Development",
      icon: <SiPostman size={32} />,
    },
    {
      name: "Git & GitHub",
      description: "Version Control and Collaboration",
      icon: <SiGithub size={32} />,
    },
    {
      name: "Figma",
      description: "UI/UX Design and Prototyping",
      icon: <SiFigma size={32} />,
    },
    {
      name: "Jest",
      description: "JavaScript Testing Framework",
      icon: <SiJest size={32} />,
    },
    {
      name: "Firebase",
      description: "Auth, Database, and Cloud Functions",
      icon: <SiFirebase size={32} />,
    },
    {
      name: "Expo",
      description: "React Native App Framework",
      icon: <SiExpo size={32} />,
    },
    {
      name: "Framer",
      description: "Interactive Prototyping Tool",
      icon: <SiFramer size={32} />,
      
    }
  ];
  

  return (
    <div className="container max-w-6xl mx-auto p-8 mb-24 rounded-2xl bg-white/80 dark:bg-neutral-900/90 backdrop-blur-sm border border-gray-200 dark:border-neutral-700 shadow-xl">
        <div className="text-4xl font-bold mb-3 text-light-accent dark:text-dark-accent text-transparent bg-clip-text">
          Tools I Use
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
            Here are the essential tools that power my workflow and help me deliver high-quality results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-800 rounded-xl p-5 flex items-center space-x-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-neutral-700 hover:scale-[1.02]"
            >
              <div className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {tool.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {tool.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Tools;