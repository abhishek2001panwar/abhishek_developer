import ProjectHeading from "../components/ProjectHeading";
import WebsiteShowcase from "../components/WebsiteShowcase";


export default function PortfolioPage() {
  return (
    <section className="py-16 md:py-24 bg-light-background dark:bg-dark-background">
      <div className="container mx-auto">
        <ProjectHeading 
          title="My Creative Projects" 
          subtitle="A collection of my best work showcasing expertise in frontend development, UX design, and innovative technologies."
          highlightedWord="Creative"
        />
        
        <WebsiteShowcase 
          title="Expo Ape App"
          description="Global digital design studio crafting immersive brand experiences."
          imageUrl="https://images.unsplash.com/photo-1724963843259-3b0727c53b0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
          technologies={[
            "React", "Next.js", "TypeScript", "Tailwind CSS", "framer motion", "AI"
          ]}
          features={[
            "Global digital design studio",
            "Experience-driven digital solutions",
            "Creativity, exploration, and curiosity-driven approach",
            "Strong presence in the design and tech community",
            "Integrated social media engagement (Dribbble, Instagram, Telegram, Facebook)"
          ]}
          
          liveUrl="https://expo-ape.vercel.app/"
          githubUrl="https://github.com/yourusername/serendale"
        />
      </div>
    </section>
  );
}