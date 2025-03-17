import { FaGithub, FaReact, FaNodeJs, FaDatabase, FaHtml5 } from "react-icons/fa";

const skills = [
  { name: "GitHub", icon: <FaGithub /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Database", icon: <FaDatabase /> },
  { name: "HTML5", icon: <FaHtml5 /> },
];

export default function MarqueeSkills() {
  return (
    <div className="container max-w-6xl mx-auto overflow-hidden whitespace-nowrap py-40 relative">
      <div className="flex space-x-32 animate-marquee">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center text-2xl space-x-2">
            <span className="text-light-foreground font-bold text-3xl dark:bg-dark-secondary/50">{skill.icon}</span>
            <span className="text-gray-900 dark:text-white font-bold">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
