"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setDarkMode(true);
    }
  };

  if (!mounted) {
    return (
      <button className="w-10 h-10 rounded-full bg-white/10 dark:bg-black/20 border border-white/20 shadow-sm" />
    );
  }

  return (
    <button 
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 shadow-sm
                 hover:bg-white/20 hover:scale-105 active:scale-95 group"
      aria-label="Toggle Theme"
    >
      {/* Sun */}
      <Sun className={`w-5 h-5 text-amber-500 transition-all duration-500 absolute
        ${darkMode ? 'rotate-90 opacity-0 scale-0' : 'rotate-0 opacity-100 scale-100'}`} 
      />
      
      {/* Moon */}
      <Moon className={`w-5 h-5 text-indigo-400 transition-all duration-500 absolute
        ${darkMode ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-0'}`} 
      />
    </button>
  );
}