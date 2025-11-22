"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggleButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Selama belum mounted di client, tampilkan placeholder/skeleton
  // agar tidak terjadi layout shift atau hydration mismatch
  if (!mounted) {
    return <div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800" />;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-all duration-200 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-yellow-500 dark:hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
      aria-label="Toggle dark mode"
    >
      {theme === "light" ? <FaMoon className="text-lg" /> : <FaSun className="text-lg" />}
    </button>
  );
}
