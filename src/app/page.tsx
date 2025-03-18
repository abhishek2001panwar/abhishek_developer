'use client'
import React from 'react'
import Hero from './components/Hero/page'
import  HeroScrollDemo  from './components/Scroll/page'
import Skills  from './components/Skills/page'
import Exp from './components/Exp/page'
import InfiniteMovingCardsDemo from './components/Infinite/page'
import Fep from './components/ProjectFeatured/page'
import Projects from './components/Projects/page'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './components/About'
import FeaturedProjects from './components/FeaturedProjects'
import Faq from './components/Faq'
import PortfolioSection from './components/PortfolioSection'
import WebsiteShowcase from './components/WebsiteShowcase'


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
    <WebsiteShowcase 
        title="Serendale Blockchain"
        description="A fast blockchain platform with scalable AI integration and guaranteed data security."
        imageUrl="/images/serendale-preview.jpg"
        technologies={[
          "React", "Next.js", "TypeScript", "Tailwind CSS", "Blockchain", "AI"
        ]}
        features={[
          "120K TPS blockchain performance",
          "AI-based data security",
          "Proof of Stake consensus algorithm",
          "Unlimited processing speeds",
          "Responsive and modern UI design"
        ]}
        liveUrl="https://serendale.example.com"
        githubUrl="https://github.com/yourusername/serendale"
      />
    <Skills />
    <FeaturedProjects />
    <Faq />
    <Footer />
    

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