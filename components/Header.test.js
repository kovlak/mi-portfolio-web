import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    it('renders navigation links', () => {
        render(<Header />);

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText('Projects')).toBeInTheDocument();
        expect(screen.getByText('Skills')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
    });
});