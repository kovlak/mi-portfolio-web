import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutPage from '../../pages/about';
import { LanguageTransitionProvider } from '../../components/LanguageTransitionContext';

// Mock the useRouter hook
jest.mock('next/router', () => ({
    useRouter: () => ({
        push: jest.fn(),
        pathname: '/',
        asPath: '/',
        locale: 'en',
    }),
}));

// Mock the useTranslation hook
jest.mock('next-i18next', () => ({
    useTranslation: () => ({
        t: (str) => str,
    }),
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
        expect(screen.getByText('myJourney')).toBeInTheDocument();
    });
});