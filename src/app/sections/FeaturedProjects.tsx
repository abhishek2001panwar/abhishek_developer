// FeaturedProjects.tsx
import React from "react";
import Button from "../components/Button";
import Image from "next/image";
import Link from "next/link";

const FeaturedProjects: React.FC = () => {
  const projects = [
    {
      title: "QuickBuy (E-Commerce Platform)",
      image:
        "https://plus.unsplash.com/premium_photo-1681488350342-19084ba8e224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww", // Replace with your actual image path
      category: "Full-Stack",
      category2: "E-Commerce",
      link: "https://github.com/abhishek2001panwar/QuickBuy",
    },
    {
      title: "Connectify Job Portal",
      image:
        "https://images.unsplash.com/photo-1653566031535-bcf33e1c2893?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8am9iJTIwcG9ydGFsfGVufDB8fDB8fHww", // Replace with your actual image path
      category: "Web2",
      category2: "Job Portal",
      link: "https://github.com/abhishek2001panwar/codsoft",
    },
    {
      title: "Peer-to-Peer Communication",
      image:
        "https://plus.unsplash.com/premium_photo-1682309671884-6b4cc375b376?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVlciUyMHRvJTIwcGVlcnxlbnwwfHwwfHx8MA%3D%3D", // Replace with your actual image path
      category: "RTC",
      category2: "WebRTC",
      link: "https://github.com/abhishek2001panwar/Peer2Peer",
    },
    {
      title: "CodeFlow",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D", // Replace with your image path
      category: "Development",
      link: "#", // Replace with your project link
    },
  ];

  return (
    <div className="container mx-auto max-w-7xl p-3 md:p-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 space-y-4 md:space-y-0">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Explore some of my recent work and creative endeavors.
          </p>
        </div>
        <Link href={"https://github.com/abhishek2001panwar"}>
          <Button
            label="View All Projects →"
            className="py-3 px-6 w-full md:w-auto"
          />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 space-y-6 md:space-y-0">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group  bg-white dark:bg-neutral-800/50 rounded-md overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-neutral-700 hover:scale-[1]"
          >
            <div className="relative overflow-hidden">
              <Image
                width={700}
                height={500}
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-medium mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                    {project.category}
                  </span>
                  {project.category2 && (
                    <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                      {project.category2}
                    </span>
                  )}
                </div>
                <a
                  href={project.link}
                  className="border border-gray-100 dark:border-neutral-700   flex items-center justify-center dark:border-accent-400 bg-accent-500/10 hover:bg-accent-500 dark:hover:bg-accent-400 text-accent-500 hover:text-white dark:text-accent-400 dark:hover:text-white px-4 py-2 rounded-md transition-all duration-300 "
                >
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300 ">
                    →
                  </span>
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
