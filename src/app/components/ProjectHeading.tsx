import React from 'react';

interface ProjectHeadingProps {
  title?: string;
  subtitle?: string;
  highlightedWord?: string;
}

const ProjectHeading: React.FC<ProjectHeadingProps> = ({
  title = "My Featured Projects",
  subtitle = "Showcasing my expertise in building modern, responsive, and user-friendly web applications.",
  highlightedWord = "Projects"
}) => {
  // Replace the highlighted word with a styled version
  const styledTitle = title.includes(highlightedWord) 
    ? title.replace(
        highlightedWord, 
        `<span class="relative inline-block">
          ${highlightedWord}
          <span class="absolute bottom-1 left-0 w-full h-3 bg-light-accent dark:bg-dark-accent opacity-40 -z-10"></span>
        </span>`
      )
    : title;

  return (
    <div className="text-center max-w-3xl mx-auto mb-16 px-4">
      <h2 
        className="text-4xl md:text-5xl font-bold mb-6 text-light-foreground dark:text-dark-foreground leading-tight"
        dangerouslySetInnerHTML={{ __html: styledTitle }}
      />
      
      <p className="text-light-secondary dark:text-dark-secondary text-lg md:text-xl">
        {subtitle}
      </p>
      
      <div className="flex justify-center items-center mt-10">
        <div className="h-px w-16 bg-light-secondary dark:bg-dark-secondary opacity-30"></div>
        <div className="w-3 h-3 rounded-full mx-4 bg-light-accent dark:bg-dark-accent"></div>
        <div className="h-px w-16 bg-light-secondary dark:bg-dark-secondary opacity-30"></div>
      </div>
    </div>
  );
};

export default ProjectHeading;