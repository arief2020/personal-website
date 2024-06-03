"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-200 dark:bg-gray-800 p-2 rounded-full transition duration-300"
    >
      {theme === "light" ? "🌞" : "🌜"}
    </button>
  );
}
