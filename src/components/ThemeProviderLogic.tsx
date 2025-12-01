"use client";

import { useState, useEffect, createContext, useContext } from "react";

const LOCAL_STORAGE_KEY = 'theme';

type Theme = 'light' | 'dark';
type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const storedTheme = localStorage.getItem(LOCAL_STORAGE_KEY) as Theme;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme: Theme = storedTheme 
      ? storedTheme 
      : systemPrefersDark 
        ? 'dark' 
        : 'light';
    
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const root = window.document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem(LOCAL_STORAGE_KEY, 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem(LOCAL_STORAGE_KEY, 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};