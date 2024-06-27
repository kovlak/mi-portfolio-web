import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
    it('renders copyright notice', () => {
        render(<Footer />);
        const currentYear = new Date().getFullYear();
        expect(screen.getByText(`© ${currentYear} Your Name. All rights reserved.`)).toBeInTheDocument();
    });
});