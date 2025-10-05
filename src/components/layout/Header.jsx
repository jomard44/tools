import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check system preference and localStorage
    const darkModePreference = localStorage.getItem("darkMode");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(
      darkModePreference === "true" ||
        (!darkModePreference && systemPrefersDark)
    );
  }, []);

  useEffect(() => {
    // Update document class and localStorage
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2"
          >
            <span className="text-blue-600 dark:text-blue-400">⚡</span>
            TinyTools Hub
          </Link>

          <div className="flex items-center gap-4">
            {/* Dark mode toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <SunIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <MoonIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>

            {/* Desktop navigation - removed GitHub link */}
            <nav className="hidden md:flex items-center gap-6">
              {/* Intentionally left empty to keep spacing consistent */}
            </nav>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 border-t dark:border-gray-700 pt-4">
            {/* Mobile nav intentionally empty (GitHub link removed) */}
          </nav>
        )}
      </div>
    </header>
  );
}
