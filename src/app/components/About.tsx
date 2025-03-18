"use client";

const About = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24">
      <div className="container max-w-6xl mx-auto p-8 rounded-2xl bg-white/80 dark:bg-neutral-900/90 backdrop-blur-sm border border-gray-200 dark:border-neutral-700 shadow-lg">
        
        {/* About Text */}
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          Welcome! I&apos;m <span className="font-bold">Kartik</span>, a professional web designer and developer with a flair for creating 
          visually stunning and highly functional websites. With a blend of creativity and technical expertise, I transform your 
          vision into a digital masterpiece that not only looks great but performs exceptionally well.
        </p>

        {/* Signature */}
        <p className="mt-4 font-signature text-xl text-gray-500 dark:text-gray-400">
          Kartik
        </p>

        {/* Stats Section */}
        <div className="mt-8 flex flex-wrap gap-10 text-center">
          <div className="w-1/3 md:w-auto mb-6">
            <p className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-left">35+</p>
            <p className="text-sm uppercase text-gray-500 dark:text-gray-400 font-bold">Projects Done</p>
          </div>
          <div className="w-1/3 md:w-auto mb-6">
            <p className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-left">10+</p>
            <p className="text-sm uppercase text-gray-500 dark:text-gray-400 font-bold">Years of Experience</p>
          </div>
          <div className="w-1/3 md:w-auto mb-6">
            <p className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-left">100%</p>
            <p className="text-sm uppercase text-gray-500 dark:text-gray-400 font-bold">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
