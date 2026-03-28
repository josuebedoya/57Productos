'use client';

import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

type ThemeContextType = {
  dark: boolean;
  setDark: (dark: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [ dark, setDark ] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage?.getItem("theme");
    if (saved) {
      setDark(saved === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage?.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage?.setItem("theme", "light");
    }
  }, [ dark ]);
  
  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
