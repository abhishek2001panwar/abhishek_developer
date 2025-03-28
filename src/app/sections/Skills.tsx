// Skills.tsx
import React from "react";
import Tools from "../components/Tools";

const Skills: React.FC = () => {
  return (
    <>
    <div className="relative">
      {/* 🔷 SVG Line - Connecting from Previous Sections */}
      <div className="hidden md:block absolute right-10 top-0 w-[800px] h-[900px] pointer-events-none">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 100 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
        d="M250,0 L250,300 Q250,400 140,400"
        stroke="url(#gradient)"
        strokeWidth="1"
        fill="transparent"
          />
          <defs>
        <linearGradient id="gradient" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
          </defs>

          {/* Pulsating Circle at End */}
        
        </svg>
      </div>
      <div className="container mx-auto max-w-6xl p-10 mt-20">
        <div className="text-5xl font-bold mb-16 text-light-foreground dark:text-dark-foreground bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          My Skills & Services
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Full-Stack Development */}
          <div className="p-5 rounded-md bg-light-primary dark:bg-dark-muted hover:bg-light-muted dark:hover:bg-dark-primary/10 transition-all transform hover:scale-105 shadow-lg relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-l-lg"></div>
            <h3 className="text-sm mb-3 text-light-secondary dark:text-dark-secondary font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text">
              Full-Stack Development
            </h3>
            <ul className="space-y-2 text-light-foreground dark:text-dark-foreground">
              <li className="transition-colors text-md">
                MERN Stack Development
              </li>
              <li className="transition-colors text-md">
                Next.js & React Development
              </li>
              <li className="transition-colors text-md">
                FastAPI & Flask Development
              </li>
              <li className="transition-colors text-md">
                Supabase & Firebase Integration
              </li>
            </ul>
          </div>

          {/* Mobile & Cross-Platform Development */}
          <div className="p-5 rounded-md bg-light-primary dark:bg-dark-muted hover:bg-light-muted dark:hover:bg-dark-primary/10 transition-all transform hover:scale-105 shadow-lg relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-green-500 to-teal-500 rounded-l-lg"></div>
            <h3 className="text-sm mb-3 text-light-secondary dark:text-dark-secondary font-semibold bg-gradient-to-r from-green-500 to-teal-500 text-transparent bg-clip-text">
              Mobile & Cross-Platform Development
            </h3>
            <ul className="space-y-2 text-light-foreground dark:text-dark-foreground">
              <li className="transition-colors text-md">
                Flutter App Development
              </li>
              <li className="transition-colors text-md">
                React Native with Expo
              </li>
              <li className="transition-colors text-md">
                Progressive Web Apps (PWA)
              </li>
              <li className="transition-colors text-md">
                Mobile UI/UX Optimization
              </li>
            </ul>
          </div>

          {/* Cloud & DevOps */}
          <div className="p-5 rounded-md bg-light-primary dark:bg-dark-muted hover:bg-light-muted dark:hover:bg-dark-primary/10 transition-all transform hover:scale-105 shadow-lg relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-l-lg"></div>
            <h3 className="text-sm mb-3 text-light-secondary dark:text-dark-secondary font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
              Cloud & DevOps
            </h3>
            <ul className="space-y-2 text-light-foreground dark:text-dark-foreground">
              <li className="transition-colors text-md">
                Docker & Containerization
              </li>
              <li className="transition-colors text-md">
                Vercel & Netlify Deployment
              </li>
              <li className="transition-colors text-md">
                CI/CD Pipeline Implementation
              </li>
              <li className="transition-colors text-md">
                Git & GitHub Workflow
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Tools />
      </div>
    </>
  );
};

export default Skills;
