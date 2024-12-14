// components/Button.tsx
import React from 'react';
import { useTheme } from '../hooks/useTheme';

const Button: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md bg-gray-800 text-white dark:bg-gray-200 dark:text-black"
    >
      {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default Button;
