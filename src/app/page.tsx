'use client'
import React from 'react'
import Hero from './components/Hero/page'
import  HeroScrollDemo  from './components/Scroll/page'
import Skills  from './components/Skills/page'
import Exp from './components/Exp/page'
import InfiniteMovingCardsDemo from './components/Infinite/page'
import Fep from './components/ProjectFeatured/page'
import Projects from './components/Projects/page'
import Footer from './components/Footer/page'
import Navbar from './components/Navbar'
import About from './components/About'


function page() {
  const heroData = {
    name: "Kartik Bansal",
    title: "Web Designer & Developer",
    description: "Welcome! I'm Kartik, a professional web designer and developer with a flair for creating visually stunning and highly functional websites.",
    stats: [
      { value: "35+", label: "Projects Completed" },
      { value: "10+", label: "Years Experience" },
      { value: "100%", label: "Client Satisfaction" }
    ]
  };


  return (
    <div>
  <Navbar />
    <Hero  {...heroData}/>
    <About />
    <Skills />

    {/* <HeroScrollDemo />
    <Skills />
    <Exp />
    <InfiniteMovingCardsDemo />
    <Fep />
    <Projects />
    {/* <Carousels /> */}
    {/* <Contact /> */}
    {/* <Footer
    /> */}
    
    </div>
  )
}

export default page