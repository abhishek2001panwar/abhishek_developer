import { AnimatedTestimonials } from "@/app/components/ui/animated-testimonials";

export default  function Skills() {
  const testimonials = [
    {
      quote:
        "Next.js has streamlined our development process, making it easier to build SEO-friendly and highly performant applications.",
      name: " Next.js Specialist",
      designation: "",
      src: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "React.js has allowed us to build reusable UI components with minimal code. It's incredibly efficient for building dynamic user interfaces.",
      name: " React.js Enthusiast",
      designation: "",
      src: "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww",
    },
    {
      quote:
        "MongoDB has simplified our data storage and retrieval processes. Its scalability and flexibility are invaluable for our projects.",
      name: " MongoDB Expert",
      designation: "",
      src: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      quote:
        "Node.js has transformed our backend architecture, offering speed and scalability that have allowed us to meet the growing demands of our users.",
      name: " Node.js Developer",
      designation: "",
      src: "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  
  return <AnimatedTestimonials testimonials={testimonials} />;
}
