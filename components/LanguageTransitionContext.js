import React, { createContext, useState, useContext, useCallback } from 'react';
import { useRouter } from 'next/router';

const LanguageTransitionContext = createContext();

export const LanguageTransitionProvider = ({ children }) => {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const router = useRouter();

    const changeLanguage = useCallback((locale) => {
        setIsTransitioning(true);
        setTimeout(() => {
            router.push(router.pathname, router.asPath, { locale });
        }, 400); // Delay the language change
    }, [router]);

    return (
        <LanguageTransitionContext.Provider value={{ isTransitioning, setIsTransitioning, changeLanguage }}>
            {children}
        </LanguageTransitionContext.Provider>
    );
};

export const useLanguageTransition = () => useContext(LanguageTransitionContext);