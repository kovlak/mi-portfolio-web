import React, { createContext, useState, useContext } from 'react';

const LanguageTransitionContext = createContext();

export const LanguageTransitionProvider = ({ children }) => {
    const [isTransitioning, setIsTransitioning] = useState(false);

    return (
        <LanguageTransitionContext.Provider value={{ isTransitioning, setIsTransitioning }}>
            {children}
        </LanguageTransitionContext.Provider>
    );
};

export const useLanguageTransition = () => useContext(LanguageTransitionContext);