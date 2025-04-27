'use client';
import { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed left-1/2 -translate-x-1/2 top-2 z-50 w-full max-w-7xl mx-auto px-4 ">
      <div className="rounded-md shadow-sm border border-light-secondary/30 dark:border-dark-secondary/30 bg-light-background/60 dark:bg-dark-background/60 backdrop-blur-md text-light-foreground dark:text-dark-foreground transition-colors duration-300">
        <div className="flex items-center justify-between py-3.5 px-5">
          
          {/* Logo */}
          <div className="text-2xl font-medium tracking-tight text-light-foreground dark:text-dark-foreground">Abhishek</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-10 font-regular">
            <a href="#" className="text-light-foreground dark:text-dark-foreground hover:text-light-accent dark:hover:text-dark-accent text-sm font-normal transition">Home</a>
            <a href="#about" className="text-light-foreground dark:text-dark-foreground hover:text-light-accent dark:hover:text-dark-accent text-sm font-normal transition">About</a>
            <a href="#projects" className="text-light-foreground dark:text-dark-foreground hover:text-light-accent dark:hover:text-dark-accent text-sm font-normal transition">Projects</a>
            <a href="#skills" className="text-light-foreground dark:text-dark-foreground hover:text-light-accent dark:hover:text-dark-accent text-sm font-normal transition">Services</a>
          </nav>

          {/* Right Side Items */}
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <Button label="Contact Me" className='py-2 px-3 hidden md:block' variant='primary' />

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="pb-5 px-4 md:hidden">
            <a href="#" className="block py-2 text-sm font-medium text-light-foreground dark:text-dark-foreground hover:text-light-accent dark:hover:text-dark-accent transition">Home</a>
            <a href="#" className="block py-2 text-sm font-medium text-light-foreground dark:text-dark-foreground hover:text-light-accent dark:hover:text-dark-accent transition">About</a>
            <a href="#" className="block py-2 text-sm font-medium text-light-foreground dark:text-dark-foreground hover:text-light-accent dark:hover:text-dark-accent transition">Projects</a>
            <a href="#" className="block py-2 text-sm font-medium text-light-foreground dark:text-dark-foreground hover:text-light-accent dark:hover:text-dark-accent transition">Services</a>
            <a href="#" className="block py-2 text-sm font-medium text-light-foreground dark:text-dark-foreground hover:text-light-accent dark:hover:text-dark-accent transition">Contact me</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
