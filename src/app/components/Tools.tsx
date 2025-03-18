// Tools.tsx
import React from 'react';
import { 
  
  SiFigma, 
  SiFramer, 
  SiWebflow, 
  SiOpenai, 
  SiNotion,
  SiGoogleanalytics,
  SiSlack,
  SiAsana, 
  SiLemonsqueezy
} from 'react-icons/si';

const Tools: React.FC = () => {
  const tools = [
    {
      name: 'Lemon Squeezy',
      description: 'Payment Gateway',
      icon: <SiLemonsqueezy size={32} />,
    },
    {
      name: 'Figma',
      description: 'Design Tool',
      icon: <SiFigma size={32} />,
    },
    {
      name: 'Framer',
      description: 'Web Design Platform',
      icon: <SiFramer size={32} />,
    },
    {
      name: 'Webflow',
      description: 'No-Code Website Builder',
      icon: <SiWebflow size={32} />,
    },
    {
      name: 'ChatGPT',
      description: 'AI Assistant',
      icon: <SiOpenai size={32} />,
    },
    {
      name: 'Notion',
      description: 'Productivity Tool',
      icon: <SiNotion size={32} />,
    },
    {
      name: 'Google Analytics',
      description: 'Website Analytics',
      icon: <SiGoogleanalytics size={32} />,
    },
    {
      name: 'Slack',
      description: 'Communication',
      icon: <SiSlack size={32} />,
    },
    {
      name: 'Asana',
      description: 'Project Management',
      icon: <SiAsana size={32} />,
    },
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