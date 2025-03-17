"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [delayedTheme, setDelayedTheme] = useState(theme); // State for delayed theme change

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");

    // Add a slight delay to sync animation with transition
    setTimeout(() => {
      setDelayedTheme(theme === "dark" ? "light" : "dark");
    }, 100); // Adjust delay if needed
  };

  if (!mounted) return null;

  return (
    <button
      onClick={handleThemeSwitch}
      className="relative flex items-center justify-center w-10 h-10 rounded-full  transition-all duration-500 "
    >
      <AnimatePresence mode="wait">
        {delayedTheme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <BsSun className="w-5 h-5 text-yellow-400" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <BsMoon className="w-5 h-5 text-black dark:text-black" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
