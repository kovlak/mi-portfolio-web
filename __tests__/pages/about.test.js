import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutPage from '../../pages/about';

// Mock the Layout component
jest.mock('../../components/Layout', () => {
    return ({ children }) => <div data-testid="layout">{children}</div>;
});

describe('AboutPage', () => {
    it('renders the about page content', () => {
        render(<AboutPage />);

        expect(screen.getByText('About Me')).toBeInTheDocument();
        expect(screen.getByText('Who I Am')).toBeInTheDocument();
        expect(screen.getByText('My Journey')).toBeInTheDocument();
        expect(screen.getByText(/Hello! I'm/)).toBeInTheDocument();
    });
});