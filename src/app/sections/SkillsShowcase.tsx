import React, { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaSass,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiGraphql,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import Button from "../components/Button";

interface Skill {
  name: string;
  icon: React.ReactNode;
  proficiency: number; // 0-100
  color: string;
  category: "frontend" | "backend" | "tools";
}

const SkillsShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "frontend" | "backend" | "tools"
  >("all");
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Simulate intersection observer
    const timer = setTimeout(() => {
      setIsInView(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const skills: Skill[] = [
    {
      name: "HTML5",
      icon: <FaHtml5 size={28} />,
      proficiency: 95,
      color: "#E34F26",
      category: "frontend",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt size={28} />,
      proficiency: 90,
      color: "#1572B6",
      category: "frontend",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript size={26} />,
      proficiency: 85,
      color: "#F7DF1E",
      category: "frontend",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript size={26} />,
      proficiency: 80,
      color: "#3178C6",
      category: "frontend",
    },
    {
      name: "React",
      icon: <FaReact size={28} />,
      proficiency: 88,
      color: "#61DAFB",
      category: "frontend",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs size={26} />,
      proficiency: 82,
      color: "#000000",
      category: "frontend",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={26} />,
      proficiency: 92,
      color: "#06B6D4",
      category: "frontend",
    },
    {
      name: "Sass",
      icon: <FaSass size={28} />,
      proficiency: 84,
      color: "#CC6699",
      category: "frontend",
    },
    {
      name: "Redux",
      icon: <SiRedux size={26} />,
      proficiency: 78,
      color: "#764ABC",
      category: "frontend",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs size={28} />,
      proficiency: 75,
      color: "#339933",
      category: "backend",
    },
    {
      name: "GraphQL",
      icon: <SiGraphql size={26} />,
      proficiency: 70,
      color: "#E10098",
      category: "backend",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={28} />,
      proficiency: 85,
      color: "#181717",
      category: "tools",
    },
    {
      name: "Figma",
      icon: <FaFigma size={28} />,
      proficiency: 78,
      color: "#F24E1E",
      category: "tools",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={26} />,
      proficiency: 75,
      color: "#47A248",
      category: "backend",
    },
    {
      name: "Express.js",
      icon: <SiExpress size={26} />,
      proficiency: 80,
      color: "#000000",
      category: "backend",
    },

  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <>
     <div className="relative">
      {/* 🔷 SVG Line - Connecting from Previous Sections */}
      <div className="absolute -left-[400px] -top-32 w-full h-[800px] pointer-events-none">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1000 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main curved path */}
          <path
        d="M0,100 
           H400
           C500,100 500,100 500,200
           C500,300 500,400 500,500"
        stroke="url(#gradient)"
        strokeWidth="2"
        fill="transparent"
          />
          
          

          <defs>
        <linearGradient id="gradient" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
          </defs>

          {/* Animated circles at key points */}
          <circle cx="400" cy="100" r="6" fill="#4f46e5">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="2s"
          repeatCount="indefinite"
        />
          </circle>
          <circle cx="500" cy="300" r="5" fill="#06b6d4">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="2s"
          repeatCount="indefinite"
          begin="0.5s"
        />
          </circle>
        </svg>
      </div>
      
    <section className="py-16 md:py-24 bg-light-background dark:bg-dark-background ">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <span className="px-4 py-2 bg-light-primary dark:bg-dark-muted rounded-full text-sm font-medium text-light-foreground dark:text-dark-foreground inline-flex items-center justify-center mb-4">
            <span className="h-1.5 sm:h-2 w-1.5 sm:w-2 font-bold rounded-full bg-light-accent dark:bg-dark-accent mr-2"></span>
            EXPERTISE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-foreground dark:text-dark-foreground">
            My Technical Toolkit
          </h2>
          <p className="text-light-secondary dark:text-dark-secondary max-w-2xl mx-auto">
            I&apos;ve honed these skills through years of practice and
            real-world projects, always staying updated with the latest industry
            trends.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-light-primary dark:bg-dark-muted p-1 rounded-full">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "all"
                  ? "bg-light-accent dark:bg-dark-accent text-light-foreground dark:text-dark-background"
                  : "text-light-foreground dark:text-dark-secondary hover:text-light-foreground dark:hover:text-dark-foreground"
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveCategory("frontend")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "frontend"
                  ? "bg-light-accent dark:bg-dark-accent text-light-foreground dark:text-dark-background"
                  : "text-light-foreground dark:text-dark-secondary hover:text-light-foreground dark:hover:text-dark-foreground"
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveCategory("backend")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "backend"
                  ? "bg-light-accent dark:bg-dark-accent text-light-foreground dark:text-dark-background"
                  : "text-light-foreground dark:text-dark-secondary hover:text-light-foreground dark:hover:text-dark-foreground"
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setActiveCategory("tools")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "tools"
                  ? "bg-light-accent dark:bg-dark-accent text-light-foreground dark:text-dark-background"
                  : "text-light-forground dark:text-dark-secondary hover:text-light-foreground dark:hover:text-dark-foreground"
              }`}
            >
              Tools
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-light-primary dark:bg-dark-muted border border-gray-100 dark:border-neutral-700 rounded-xl p-6 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${skill.color}20`,
                      color: skill.color,
                    }}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-medium text-light-foreground dark:text-dark-foreground">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-lg font-bold text-light-foreground dark:text-dark-foreground">
                  {skill.proficiency}%
                </span>
              </div>

              <div className="relative h-1 bg-light-muted dark:bg-dark-primary/20 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isInView ? `${skill.proficiency}%` : "0%",
                    backgroundColor: skill.color,
                  }}
                ></div>
              </div>

              <div className="mt-3 flex justify-between items-center">
                <span
                  className="text-sm px-2 py-1 rounded-md"
                  style={{
                    backgroundColor: `${skill.color}20`,
                    color: skill.color,
                  }}
                >
                  {skill.proficiency < 70
                    ? "Intermediate"
                    : skill.proficiency < 85
                    ? "Advanced"
                    : "Expert"}
                </span>
                <span className="text-sm text-light-secondary dark:text-dark-secondary">
                  {skill.category.charAt(0).toUpperCase() +
                    skill.category.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-light-primary to-light-muted dark:from-dark-muted dark:to-dark-primary/20 rounded-xl p-8 md:p-10 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-10 md:max-w-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-light-foreground dark:text-dark-foreground">
                Interested in working together?
              </h3>
              <p className="text-light-secondary dark:text-dark-secondary">
                I&apos;m always looking for new challenges and opportunities to
                apply my skills and create amazing digital experiences.
              </p>
            </div>

            <Button label="Get in Touch" className="px-6 py-3" />
          </div>
        </div>
      </div>
    </section>
    </div>
    </>
  );
};

export default SkillsShowcase;
