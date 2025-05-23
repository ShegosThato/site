import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const storedValue = localStorage.getItem('darkMode');
      if (storedValue !== null) {
        return JSON.parse(storedValue);
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  });

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    try {
      localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
