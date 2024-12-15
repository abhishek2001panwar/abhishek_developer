import { HoverEffect } from "../ui/card-hover-effect";

 const projects = [
  {
    title: "HTML, CSS, JS",
    description:
      "Building modern, responsive websites with HTML, CSS, and JavaScript.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    title: "Node.js & Express",
    description:
      "Creating fast, scalable backend APIs with Node.js and Express.",
    link: "https://nodejs.org/en/ & https://expressjs.com/",
  },
  {
    title: "React",
    description:
      "Developing dynamic, interactive user interfaces with React.",
    link: "https://reactjs.org/",
  },
  {
    title: "MongoDB",
    description:
      "Using MongoDB for scalable, document-based NoSQL databases.",
    link: "https://www.mongodb.com/",
  },
  {
    title: "Tailwind CSS",
    description:
      "Crafting responsive, custom designs with Tailwind CSS utility-first framework.",
    link: "https://tailwindcss.com/",
  },
  {
    title: "Git & GitHub",
    description:
      "Managing version control and collaboration with Git and GitHub.",
    link: "https://git-scm.com/ & https://github.com/",
  },
  {
    title: "Postman",
    description:
      "Testing and managing APIs using Postman for efficient development.",
    link: "https://www.postman.com/",
  },
  {
    title: "Docker",
    description:
      "Containerizing applications for consistency and scalability with Docker.",
    link: "https://www.docker.com/",
  },
];

export default function Fep() {
  return (
    <div className=" mx-auto px-10 mb-32">
      <HoverEffect items={projects} />
    </div>
  );
}
