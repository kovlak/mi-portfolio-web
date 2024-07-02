import { useEffect } from 'react';
import Layout from '../components/Layout'
import ThemeToggle from '../components/ThemeToggle'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    // Effect to apply the dark mode class if necessary
    useEffect(() => {
        // Check if dark mode is enabled in localStorage
        const isDarkMode = localStorage.getItem('theme') === 'dark';
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Layout>
                <div className="absolute top-4 right-4">
                    <ThemeToggle />
                </div>
                <Component {...pageProps} />
            </Layout>
        </div>
    )
}

export default MyApp