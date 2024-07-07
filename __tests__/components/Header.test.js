import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

// Mock the useLanguageTransition hook
jest.mock('../components/LanguageTransitionContext', () => ({
    useLanguageTransition: () => ({
        changeLanguage: jest.fn(),
    }),
}));

// Mock the useTranslation hook
jest.mock('next-i18next', () => ({
    useTranslation: () => ({
        t: (str) => str,
    }),
}));

describe('Header', () => {
    it('renders navigation links', () => {
        render(<Header />);

        expect(screen.getByText('home')).toBeInTheDocument();
        expect(screen.getByText('about')).toBeInTheDocument();
        expect(screen.getByText('projects')).toBeInTheDocument();
        expect(screen.getByText('skills')).toBeInTheDocument();
        expect(screen.getByText('contact')).toBeInTheDocument();
    });
});