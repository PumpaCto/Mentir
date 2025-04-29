"use client";

import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // İlk açıldığında localStorage'dan tema kontrol et
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else {
      setTheme("light");
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);

    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return { theme, toggleTheme };
};
