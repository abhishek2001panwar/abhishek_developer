// FeaturedProjects.tsx
import React from "react";
import Button from "../components/Button";
import Image from "next/image";
import Link from "next/link";

const FeaturedProjects: React.FC = () => {
  const projects = [
    {
      title: "QuickBuy",
      image:
        "https://plus.unsplash.com/premium_photo-1681488350342-19084ba8e224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww",
      category: "Full-Stack",
      category2: "E-Commerce",
      description:
        "A comprehensive e-commerce platform built with Next.js and Node.js. Features include user authentication, product management, shopping cart functionality, and secure payment integration with Stripe.",
      link: "https://github.com/abhishek2001panwar/QuickBuy",
    },
    {
      title: "Connectify Job Portal",
      image:
        "https://images.unsplash.com/photo-1653566031535-bcf33e1c2893?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8am9iJTIwcG9ydGFsfGVufDB8fDB8fHww",
      category: "Web2",
      category2: "Job Portal",
      description:
        "A modern job portal connecting employers and job seekers. Built with React and mern stack, featuring real-time job listings, application tracking, and advanced search functionality.",
      link: "https://github.com/abhishek2001panwar/codsoft",
    },
    {
      title: "Peer-to-Peer Communication",
      image:
        "https://plus.unsplash.com/premium_photo-1682309671884-6b4cc375b376?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVlciUyMHRvJTIwcGVlcnxlbnwwfHwwfHx8MA%3D%3D",
      category: "RTC",
      category2: "WebRTC",
      description:
        "Real-time communication platform using WebRTC technology. Enables direct peer-to-peer video calls, chat, and file sharing with end-to-end encryption and low latency.",
      link: "https://github.com/abhishek2001panwar/Peer2Peer",
    },
    {
      title: "CodeFlow",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
      category: "Development",
      category2: "IDE",
      description:
        "An online code editor and collaboration platform. Features include real-time code sharing, syntax highlighting, multiple programming language support, and integrated terminal.",
      link: "#",
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
      <div className="space-y-12 relative">
        {projects.map((project, index) => (
          <article
            key={index}
            className="relative flex flex-col md:flex-row items-center gap-8 p-2 md:p-8 bg-light-background/80 dark:bg-dark-muted rounded-xl backdrop-blur-sm border border-light-muted dark:border-dark-muted shadow-sm"
          >
            {/* Rest of the article content */}
            <div className="flex-1 space-y-4 p-2">
              <header className="flex items-center gap-4">
                <span className="flex items-center justify-center w-12 h-12 rounded-full border border-light-accent dark:border-dark-accent/50 text-light-foreground dark:text-dark-foreground font-bold text-lg">
                  {index + 1}
                </span>
                <h3 className="text-2xl font-bold text-light-foreground dark:text-dark-foreground">
                  {project.title}
                </h3>
              </header>

              <p className="text-light-secondary dark:text-dark-secondary mt-4 leading-relaxed border-l-2 border-light-accent dark:border-dark-accent pl-4">
                {project.description}
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="border border-light-accent/30 dark:border-dark-accent/30 text-light-foreground dark:text-dark-foreground px-4 py-2 rounded-md text-sm font-medium">
                  {project.category}
                </span>
                {project.category2 && (
                  <span className="border border-light-accent/30 dark:border-dark-accent/30 text-light-foreground dark:text-dark-foreground px-4 py-2 rounded-md text-sm font-medium">
                    {project.category2}
                  </span>
                )}
              </div>
              {/* <div className="h-1 w-16 bg-light-accent dark:bg-dark-accent mt-6 rounded-full"></div> */}
              <a
                href={project.link}
                className="inline-flex items-center text-light-foreground dark:text-dark-foreground hover:text-light-accent dark:hover:text-dark-accent transition-colors"
              >
                View Project
                <span className="ml-2 text-xl">→</span>
              </a>
            </div>

            <figure className="w-full md:w-1/3 h-56 relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-xl shadow-md"
              />
            </figure>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
