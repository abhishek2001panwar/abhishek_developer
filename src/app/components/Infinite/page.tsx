"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export  default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Abhishek consistently delivers high-quality code, balancing efficiency with maintainability. His ability to quickly adapt to new challenges is unmatched.",
    name: "Tech Lead",
    title: " ",
  },
  {
    quote:
      "Abhishek’s attention to detail and commitment to excellence make him a standout developer. He goes above and beyond to ensure project success.",
    name: "Project Manager",
    title: " ",
  },
  {
    quote:
      "Abhishek is a problem solver at heart. His innovative solutions and proactive approach have been invaluable to our team's progress.",
    name: "Team Member",
    title: "",
  },
  {
    quote:
      "From complex backend systems to user-friendly frontends, Abhishek’s expertise spans the full stack. His work speaks for itself.",
    name: "Senior Developer",
    title: "",
  },
  {
    quote:
      "Abhishek’s passion for development is evident in everything he does. His curiosity and drive to learn new technologies are truly inspiring.",
    name: "Colleague",
    title: " ",
  },
];

