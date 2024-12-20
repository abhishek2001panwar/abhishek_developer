'use client'
import React from 'react'
import Hero from './components/Hero/page'
import About  from './components/About/page'
import  HeroScrollDemo  from './components/Scroll/page'
import Skills  from './components/Skills/page'
import Exp from './components/Exp/page'
import InfiniteMovingCardsDemo from './components/Infinite/page'
import Fep from './components/ProjectFeatured/page'
import Projects from './components/Projects/page'
import Footer from './components/Footer/page'
import Navbar from './components/Navbar/page'


function page() {


  return (
    <div>
  <Navbar />
    <Hero />
    <About />
    <HeroScrollDemo />
    <Skills />
    <Exp />
    <InfiniteMovingCardsDemo />
    <Fep />
    <Projects />
    {/* <Carousels /> */}
    {/* <Contact /> */}
    <Footer />
    
    </div>
  )
}

export default page