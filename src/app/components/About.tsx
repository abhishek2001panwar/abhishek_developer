"use client";

const About = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto bg-light-background dark:bg-neutral-800 p-12 rounded-2xl shadow-lg border border-light-secondary/20 dark:border-dark-secondary/20">
        
        {/* About Text */}
        <p className="text-light-foreground dark:text-dark-foreground text-lg leading-relaxed">
          Welcome! I’m <span className="font-bold">Kartik</span>, a professional web designer and developer with a flair for creating 
          visually stunning and highly functional websites. With a blend of creativity and technical expertise, I transform your 
          vision into a digital masterpiece that not only looks great but performs exceptionally well.
        </p>

        {/* Signature */}
        <p className="mt-4 font-signature text-xl text-light-foreground/80 dark:text-dark-foreground/80">
          Kartik
        </p>

        {/* Stats Section */}
        <div className="mt-8 flex flex-wrap  gap-10 text-center">
          <div className="w-1/3 md:w-auto mb-6">
            <p className="text-3xl font-bold text-light-foreground dark:text-dark-foreground text-left">35+</p>
            <p className="text-sm uppercase text-light-foreground font-bold dark:text-dark-secondary">Projects Done</p>
          </div>
          <div className="w-1/3 md:w-auto mb-6">
            <p className="text-3xl font-bold text-light-foreground dark:text-dark-foreground text-left">10+</p>
            <p className="text-sm uppercase text-light-foreground font-bold dark:text-dark-secondary">Years of Experience</p>
          </div>
          <div className="w-1/3 md:w-auto mb-6">
            <p className="text-3xl font-bold text-light-foreground dark:text-dark-foreground text-left">100%</p>
            <p className="text-sm uppercase text-light-foreground font-bold dark:text-dark-secondary">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
