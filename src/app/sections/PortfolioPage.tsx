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
          imageUrl="/ExpoApe.png"
          technologies={[
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "framer motion",
            "AI",
          ]}
          features={[
            "Global digital design studio",
            "Experience-driven digital solutions",
            "Creativity, exploration, and curiosity-driven approach",
            "Strong presence in the design and tech community",
            "Integrated social media engagement (Dribbble, Instagram, Telegram, Facebook)",
          ]}
          liveUrl="https://expo-ape.vercel.app/"
          githubUrl="https://github.com/yourusername/serendale"
        />
        <WebsiteShowcase
          title="Cuberto Design"
          description="A modern and responsive landing page for a Design Agency."
          imageUrl="/cuberto.png"
          technologies={[
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "framer motion",
            "Gsap",
            "Three.js",
            "shery.js",
          ]}
          features={[
            "Modern and responsive design",
            "Interactive animations and transitions",
            "User-friendly and intuitive UI/UX",
            "Optimized for performance and accessibility",
            "Easy customization and scalability",
          ]}
          liveUrl="https://cuberto-new.vercel.app/"
          githubUrl="https://github.com/yourusername/serendale" // Add your GitHub URL here
        />
        <WebsiteShowcase
          title="Sustainability Initiative"
          description="A modern and eco-conscious website promoting sustainability and green practices."
          imageUrl="/sustain.png"
          technologies={[
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "framer motion",
            "Gsap",
            "Three.js",
            "shery.js",
          ]}
          features={[
            "Eco-friendly and sustainability-focused design",
            "Interactive animations emphasizing green initiatives",
            "User-friendly and intuitive UI/UX for environmental awareness",
            "Optimized for performance and accessibility",
            "Clear call-to-action for community engagement",
          ]}
          liveUrl="https://design-pattern-sus.vercel.app/"
          githubUrl="https://github.com/yourusername/serendale" // Add your GitHub URL here
        />
      </div>
    </section>
  );
}
