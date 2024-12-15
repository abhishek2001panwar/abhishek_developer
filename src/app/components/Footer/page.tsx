"use client";
import Social from "../Social/page";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export default function Footer() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: " Web apps",
    },
    {
      text: "with",
    },
    {
      text: "Me.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Lets build something awesome together
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex mb-20 flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Hire Me
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Connect 
        </button>
      </div>
      <Social />
    </div>
  );
}
