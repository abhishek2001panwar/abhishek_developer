"use client";
import React from "react";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";

import Footer from "./sections/Footer";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import FeaturedProjects from "./sections/FeaturedProjects";
import Faq from "./sections/Faq";

import PortfolioPage from "./sections/PortfolioPage";
import SkillsShowcase from "./sections/SkillsShowcase";
import Experience from "./components/Experience";
import PricingSection from "./sections/PricingSection";


function page() {
  const heroData = {
    name: "Abhishek Panwar",
    title: "Web Designer & Developer",
    description:
      "Welcome! I'm a professional web designer and developer with a flair for creating visually stunning and highly functional websites.",
    stats: [
      { value: "35+", label: "Projects Completed" },
      { value: "10+", label: "Years Experience" },
      { value: "100%", label: "Client Satisfaction" },
    ],
  };


  return (
    <main>
      <Navbar />
      <Hero {...heroData} />
      <section id="about">
        <About />
      </section>

      <section id="portfolio">
        <PortfolioPage />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <FeaturedProjects />
      </section>

      <section id="skills-showcase">
        <SkillsShowcase />
      </section>

      <section id="faq">
        <Faq />
      </section>

      <section id="pricing">
        <PricingSection />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}

export default page;
