/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import {  FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Button from "../components/Button";

interface HeroProps {
  name: string;
  title: string;
  description: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
}

const Hero: React.FC<HeroProps> = ({ name, title, description, stats }) => {
  return (
    <section className="bg-background dark:bg-dark-background pt-40 md:pt-0 py-8 sm:py-12 md:py-20 lg:py-40">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Badge */}
        <div className="inline-flex items-center border-[1px] border-light-secondary/30 dark:border-dark-secondary/30 py-1.5 sm:py-2 rounded-full bg-muted px-3 sm:px-4 font-regular text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8">
          <span className="mr-2 flex h-1.5 sm:h-2 w-1.5 sm:w-2 font-bold rounded-full bg-light-accent dark:bg-dark-accent"></span>
          Available for freelance work
        </div>

        {/* Main Text Content */}
        <div className="max-w-3xl">
          <h1 className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground">
            <span className="bg-gradient-to-r from-light-foreground to-dark-background dark:from-dark-accent dark:to-primary bg-clip-text text-transparent">
              {name}
            </span>{" "}
            transforms ideas into 
            <span className="relative">
              <span className="dark:text-dark-secondary"> exceptional</span>
              
            </span> digital experiences
          </h1>

          <p className="text-lg sm:text-xl mb-8 text-secondary">
            {description}
          </p>

          {/* Stats */}
          {/* <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col transform hover:scale-105 transition-transform duration-200">
          <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-light-accent to-primary dark:from-dark-accent dark:to-primary bg-clip-text text-transparent">
            {stat.value}
          </span>
          <span className="text-xs sm:text-sm text-secondary">{stat.label}</span>
              </div>
            ))}
          </div> */}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Button label="Hire Me Now" className="py-2.5 sm:py-3 px-4 sm:px-6 w-full sm:w-auto" />
          <Button
            label="See My Work"
            className="py-2.5 sm:py-3 px-4 sm:px-6 w-full sm:w-auto"
            variant="secondary"
          />
        </div>

        {/* Social Links */}
        <div className="mt-10 sm:mt-12 md:mt-16 flex items-center space-x-4 sm:space-x-6">
          <a
            href="https://github.com"
            className="text-primary hover:text-primary/80 transition"
          >
            <FaGithub className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a
            href="https://linkedin.com"
            className="text-primary hover:text-primary/80 transition"
          >
            <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a
            href="https://instagram.com"
            className="text-primary hover:text-primary/80 transition"
          >
            <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a
            href="https://twitter.com"
            className="text-primary hover:text-primary/80 transition"
          >
            <FaTwitter className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
