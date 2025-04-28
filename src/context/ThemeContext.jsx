import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProviderCustom = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
      document.documentElement.className = theme;
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook ile kolay erişim
export const useThemeContext = () => useContext(ThemeContext);
