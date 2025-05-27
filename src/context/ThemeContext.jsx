import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  light: {
    colors: {
      background: '#ffffff',
      text: '#24292e',
      textSecondary: '#586069',
      border: '#e1e4e8',
      primary: '#0366d6',
      headerBg: '#ffffff',
      headerBorder: '#e1e4e8',
    },
  },
  dark: {
    colors: {
      background: '#0d1117',
      text: '#c9d1d9',
      textSecondary: '#8b949e',
      border: '#30363d',
      primary: '#58a6ff',
      headerBg: '#161b22',
      headerBorder: '#30363d',
    },
  },
};

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const theme = isDarkMode ? themes.dark : themes.light;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
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