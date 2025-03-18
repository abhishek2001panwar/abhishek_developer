"use client";

const About = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24">
      <div className="container max-w-6xl mx-auto p-4 md:p-12 rounded-2xl bg-white/80 dark:bg-neutral-900/90 backdrop-blur-sm border border-gray-200 dark:border-neutral-700 shadow-lg">
        {/* About Text */}
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          Hello, I&apos;m <span className="font-bold">Abhishek Panwar</span>, a
          web designer and developer passionate about creating visually
          stunning, user-centric, and high-performance websites. I blend
          front-end and back-end expertise with design to craft seamless digital
          experiences optimized for accessibility and scalability. Whether
          building from scratch or enhancing an existing platform, I turn
          visions into dynamic web solutions.
        </p>

        {/* Signature */}
        {/* <p className="mt-4 font-signature text-xl text-gray-500 dark:text-gray-400">
          Abhishek Panwar
        </p> */}
       


        {/* Stats Section */}
        <div className="mt-8 flex flex-wrap gap-6 sm:gap-8 md:gap-12">
          <div className="flex flex-col transform hover:scale-105 transition-transform duration-200">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-light-accent to-accent dark:from-dark-accent dark:to-accent bg-clip-text text-transparent">
              35+
            </span>
            <span className="text-xs sm:text-sm text-secondary">
              Projects Done
            </span>
          </div>
          <div className="flex flex-col transform hover:scale-105 transition-transform duration-200">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-light-accent to-accent dark:from-dark-accent dark:to-accent bg-clip-text text-transparent">
              10+
            </span>
            <span className="text-xs sm:text-sm text-secondary">
              Years of Experience
            </span>
          </div>
          <div className="flex flex-col transform hover:scale-105 transition-transform duration-200">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-light-accent to-accent dark:from-dark-accent dark:to-accent bg-clip-text text-transparent">
              100%
            </span>
            <span className="text-xs sm:text-sm text-secondary">
              Client Satisfaction
            </span>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <span className="px-3 py-1.5 rounded-md bg-gradient-to-r from-light-accent/10 to-accent/10 dark:from-neutral-800 dark:to-neutral-700 text-accent hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-default border border-gray-300 dark:border-neutral-700 shadow-sm">
            Frontend Development
          </span>
          <span className="px-3 py-1.5 rounded-md bg-gradient-to-r from-light-accent/10 to-accent/10 dark:from-neutral-800 dark:to-neutral-700 text-accent hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-default border border-gray-300 dark:border-neutral-700 shadow-sm">
            Backend Architecture
          </span>
          <span className="px-3 py-1.5 rounded-md bg-gradient-to-r from-light-accent/10 to-accent/10 dark:from-neutral-800 dark:to-neutral-700 text-accent hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-default border border-gray-300 dark:border-neutral-700 shadow-sm">
            UI/UX Design
          </span>
          <span className="px-3 py-1.5 rounded-md bg-gradient-to-r from-light-accent/10 to-accent/10 dark:from-neutral-800 dark:to-neutral-700 text-accent hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-default border border-gray-300 dark:border-neutral-700 shadow-sm">
            Cloud Solutions
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
