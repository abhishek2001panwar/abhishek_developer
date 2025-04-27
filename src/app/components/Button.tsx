// components/Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  className?: string;
  variant?: 'primary' | 'secondary'; // Add variant prop for different styles
  onClick?: () => void; // Optional onClick handler
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  className = '', 
  variant = 'primary',
   
}) => {
  const baseStyles = variant === 'primary' 
    ? 'bg-dark-accent text-primary-foreground dark:text-dark-background'
    : 'border border-border bg-muted text-foreground';

  const commonStyles = 'rounded font-normal transition';
  const hoverStyles = variant === 'primary' 
    ? 'hover:bg-primary/90'
    : 'hover:bg-muted/80';

  const combinedClassName = `${baseStyles} ${commonStyles} ${hoverStyles} ${className}`;

  return (
    <button className={combinedClassName}>
      {label}
    </button>
  );
};

export default Button;
