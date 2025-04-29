"use client";

import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";
import { Sun, Moon } from "react-feather";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white shadow-md hover:shadow-lg"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  );
};

export default ThemeToggle;
