// Footer.tsx
import React from "react";
import Button from "../components/Button";

const Footer: React.FC = () => {
  return (
    <footer className="bg-light-background text-light-foreground py-16 shadow-md dark:bg-dark-background dark:text-dark-foreground">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="mb-4 md:mb-0 ">
          <h2 className="text-5xl font-medium mb-8 text-light-foreground dark:text-dark-foreground">
            Let&apos;s Work Together
          </h2>
          <Button
            label={`Start A Project →
`}
            className="py-3 px-7 w-full  md:w-auto"
            variant="primary"
          />
        </div>

        <div className="flex gap-24 md:gap-16">
          <div className="">
            <h3 className="text-md font-medium mb-4 text-light-foreground dark:text-dark-accent tracking-wide">
              USEFUL LINKS
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-light-accent text-sm dark:hover:text-dark-accent transition duration-300 font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-light-accent text-sm dark:hover:text-dark-accent transition duration-300 font-medium"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-light-accent text-sm dark:hover:text-dark-accent transition duration-300 font-medium"
                >
                  My Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-light-accent text-sm dark:hover:text-dark-accent transition duration-300 font-medium"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-light-accent text-sm dark:hover:text-dark-accent transition duration-300 font-medium"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="text-md font-medium mb-4 text-light-foreground dark:text-dark-accent tracking-wide">
              FOLLOW US
            </h3>
            <ul className="space-y-2 text-right">
              <li>
                <a
                  href="#"
                  className="hover:text-light-accent text-sm dark:hover:text-dark-accent transition duration-300 font-medium"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-light-accent text-sm dark:hover:text-dark-accent transition duration-300 font-medium"
                >
                  Dribbble
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-light-accent text-sm dark:hover:text-dark-accent transition duration-300 font-medium"
                >
                  Behance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-light-accent text-sm dark:hover:text-dark-accent transition duration-300 font-medium"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-light-accent text-sm dark:hover:text-dark-accent transition duration-300 font-medium"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-52 max-w-7xl">
        <div className="bg-white dark:bg-neutral-800 rounded-xl p-7 flex justify-between items-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-neutral-700 hover:scale-[1.02]">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © Abhishek 2025. All Rights Reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Designed by Abhishek
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
