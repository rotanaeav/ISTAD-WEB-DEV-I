"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };
  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-white/10 dark:bg-black/20 border border-white/20 shadow-sm" />
    );
  }

  return (
    <button 
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 shadow-sm
                 hover:bg-white/20 hover:scale-105 active:scale-95 group"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Moon className="w-5 h-5 text-indigo-300 transition-all duration-500 rotate-0 scale-100" />
      ) : (
        <Sun className="w-5 h-5 text-amber-500 transition-all duration-500 rotate-0 scale-100" />
      )}
    </button>
  );
}