import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

// Component for toggling between light and dark themes
const ThemeToggle = () => {
    // State to track whether dark mode is active
    const [darkMode, setDarkMode] = useState(false);

    // Effect to initialize theme based on local storage or system preference
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Check if theme is stored in local storage
            const storedTheme = localStorage.getItem('theme');
            if (storedTheme === 'dark') {
                setDarkMode(true);
            } else if (!storedTheme && window.matchMedia) {
                // If no theme is stored and matchMedia is available, check system preference
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                setDarkMode(prefersDark);
            }
        }
    }, []);

    // Effect to apply theme changes
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (darkMode) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
        }
    }, [darkMode]);

    // Function to toggle theme
    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            {darkMode ? (
                <SunIcon className="h-5 w-5" />
            ) : (
                <MoonIcon className="h-5 w-5" />
            )}
        </button>
    );
};

export default ThemeToggle;