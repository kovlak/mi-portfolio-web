import { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
import Layout from '../components/Layout';
import { LanguageTransitionProvider } from '../components/LanguageTransitionContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const isDarkMode = localStorage.getItem('theme') === 'dark';
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    return (
        <LanguageTransitionProvider>
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </div>
        </LanguageTransitionProvider>
    );
}

export default appWithTranslation(MyApp);