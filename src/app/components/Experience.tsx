import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeline";

export default function Experience() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 bg-white/80 dark:bg-neutral-900/90 backdrop-blur-sm border border-gray-200 dark:border-neutral-700 text-xs md:text-xl  rounded-md font-normal mb-8">
            <div className="p-6 text-neutral-800 dark:text-neutral-200 bg-white/80 dark:bg-neutral-900 backdrop-blur-sm border border-gray-200 dark:border-neutral-700 rounded-md ">
              <h2 className="text-2xl font-medium text-dark-background dark:text-dark-foreground mb-4">
                3-Month Internship (Sep 24 - Nov 24)
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-medium text-dark-background dark:text-dark-foreground">Project:</span>{" "}
                  Built and launched
                  <span className=" font-medium ml-2">Connectify</span>, a{" "}
                  <span className="font-medium">job portal platform</span>{" "}
                  connecting job seekers and employers.
                </li>
                <li>
                  <span className="font-medium text-dark-background dark:text-dark-foreground">Tech Stack:</span>{" "}
                  Developed from scratch using
                  <span className=" font-medium">
                    React.js
                  </span>,{" "}
                  <span className=" font-medium">Node.js</span>, and
                  <span className=" font-medium">MongoDB</span>.
                </li>
                <li>
                  <span className="font-medium text-dark-background dark:text-dark-foreground">
                    Key Features:
                  </span>
                  <ul className="list-disc pl-6">
                    <li>
                      <span className="font-medium">Secure authentication</span>
                    </li>
                    <li>
                      <span className="font-medium">Job postings</span>
                    </li>
                    <li>
                      <span className="font-medium">
                        Advanced search functionality
                      </span>
                    </li>
                    <li>
                      <span className="font-medium">Real-time notifications</span>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium text-dark-background dark:text-dark-foreground">Deployment:</span>{" "}
                  Deployed on{" "}
                  <span className=" font-medium">AWS</span>.
                </li>
                <li>
                  <span className="font-medium text-dark-background dark:text-dark-foreground">
                    Achievements:
                  </span>{" "}
                  Received
                  <span className="font-medium">positive feedback</span> for its
                  user-friendly design and functionality.
                </li>
                <li>
                  <span className="font-medium text-dark-background dark:text-dark-foreground">Outcome:</span>{" "}
                  Showcased my ability to deliver a
                   <span className=" font-medium ml-2">
                     complete, scalable product
                  </span>{" "}
                  within a tight deadline.
                </li>
              </ul>
            </div>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025  ",
      content: (
        <div>
          <p className="text-neutral-800 p-2.5 dark:text-neutral-200 shadow-lg bg-white/80 dark:bg-neutral-900/90 backdrop-blur-sm border border-gray-200 dark:border-neutral-700 text-xs md:text-sm font-normal rounded-md mb-4">
            I joined vWebWeavers as a Backend Developer and eventually grew into a Full-Stack Developer, leveraging my expertise in building efficient and scalable applications.
          </p>
          <p className="text-neutral-800 p-2.5 dark:text-neutral-200 shadow-lg bg-white/80 dark:bg-neutral-900/90 backdrop-blur-sm border border-gray-200 dark:border-neutral-700 text-xs md:text-sm font-normal rounded-md mb-4">
            At vWebWeavers, I led a team of junior developers, designed and optimized backend systems, and implemented RESTful APIs with Node.js and Express.js. These contributions enhanced project efficiency by 20% and streamlined interactions between frontend and backend components, significantly improving the user experience.
          </p>
          <p className="text-neutral-800 p-2.5 dark:text-neutral-200 shadow-lg bg-white/80 dark:bg-neutral-900/90 backdrop-blur-sm border border-gray-200 dark:border-neutral-700 text-xs md:text-sm font-normal rounded-md mb-4">
            I also integrated MongoDB for effective data management and conducted workshops on innovative technologies, fostering skill development within the team. These efforts resulted in the delivery of high-performance, scalable server-side solutions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content :(
        <>
        <div>
          <p className="text-neutral-800 p-2.5 dark:text-neutral-200 shadow-lg bg-white/80 dark:bg-neutral-900/90 backdrop-blur-sm border border-gray-200 dark:border-neutral-700 text-xs md:text-sm font-normal rounded-md mb-4">
            <span className="font-medium text-lg">KloudiDev Digital Solutions (Feb 2025 - Present)</span>
          </p>
          <p className="text-neutral-800 p-2.5 dark:text-neutral-200 shadow-lg bg-white/80 dark:bg-neutral-900/90 backdrop-blur-sm border border-gray-200 dark:border-neutral-700 text-xs md:text-sm font-normal rounded-md mb-4">
            <span className="font-medium">Frontend Leadership:</span> Led development for <span className="font-medium">2 client-facing web applications</span> using <span className="font-medium">Next.js</span>, improving page load times by <span className="font-medium">35%</span>.
          </p>
          <p className="text-neutral-800 p-2.5 dark:text-neutral-200 shadow-lg bg-white/80 dark:bg-neutral-900/90 backdrop-blur-sm border border-gray-200 dark:border-neutral-700 text-xs md:text-sm font-normal rounded-md mb-4">
            <span className="font-medium">UI Development:</span> Created <span className="font-medium">responsive designs</span> supporting mobile and desktop views with <span className="font-medium">98% cross-browser compatibility</span>.
          </p>
          <p className="text-neutral-800 p-2.5 dark:text-neutral-200 shadow-lg bg-white/80 dark:bg-neutral-900/90 backdrop-blur-sm border border-gray-200 dark:border-neutral-700 text-xs md:text-sm font-normal rounded-md mb-4">
            <span className="font-medium">Backend Integration:</span> Implemented <span className="font-medium">Supabase</span> for authentication, real-time data management, and backend services.
          </p>
          <p className="text-neutral-800 p-2.5 dark:text-neutral-200 shadow-lg bg-white/80 dark:bg-neutral-900/90 backdrop-blur-sm border border-gray-200 dark:border-neutral-700 text-xs md:text-sm font-normal rounded-md mb-4">
            <span className="font-medium">Architecture:</span> Designed <span className="font-medium">modular component architecture</span> ensuring scalability and code reusability across projects.
          </p>
          <div className="grid grid-cols-2 gap-4">
          
            <Image
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
           <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
        </>
      )
    }

   
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
