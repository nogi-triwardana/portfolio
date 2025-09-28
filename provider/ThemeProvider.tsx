import { ThemeContext } from 'context';
import { useIsomorphicLayoutEffect } from 'framer-motion';
import React, { useState } from 'react';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  /** Change theme mode based from user browser */
  useIsomorphicLayoutEffect(() => {
    const darkModeMediaQuery = window.matchMedia(`(prefers-color-scheme: dark)`);

    const handleDarkModeMediaQuery = (e: any) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleDarkModeMediaQuery);
    setIsDarkMode(darkModeMediaQuery.matches);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleDarkModeMediaQuery);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
