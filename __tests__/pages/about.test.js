import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutPage from '../../pages/about';
import { LanguageTransitionProvider } from '../../components/LanguageTransitionContext';

// Mock the Layout component
jest.mock('../../components/Layout', () => {
    return ({ children }) => <div data-testid="layout">{children}</div>;
});

// Mock the useTranslation hook
jest.mock('next-i18next', () => ({
    useTranslation: () => {
        return {
            t: (str) => str,
            i18n: {
                changeLanguage: () => new Promise(() => { }),
            },
        };
    },
}));

describe('AboutPage', () => {
    it('renders the about page content', () => {
        render(
            <LanguageTransitionProvider>
                <AboutPage />
            </LanguageTransitionProvider>
        );

        expect(screen.getByText('aboutMe')).toBeInTheDocument();
        expect(screen.getByText('whoIAm')).toBeInTheDocument();
        expect(screen.getByText('myJourney')).toBeIntheDocument();
        expect(screen.getByText('aboutIntro')).toBeInTheDocument();
    });
});