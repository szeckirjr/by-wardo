import { render, screen } from '@testing-library/react';
import Header from '../Header';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

const { usePathname } = require('next/navigation');

describe('Header', () => {
  it('shows main title link', () => {
    usePathname.mockReturnValue('/');
    render(<Header />);
    const link = screen.getByRole('link', { name: /words/i });
    expect(link).toHaveAttribute('href', '/');
  });

  it('has search icon link', () => {
    usePathname.mockReturnValue('/');
    render(<Header />);
    const link = screen.getByRole('link', { name: /search/i });
    expect(link).toHaveAttribute('href', '/search');
  });

  it('uses small title on non-root pages', () => {
    usePathname.mockReturnValue('/about');
    render(<Header />);
    const heading = screen.getByRole('heading', { name: /words/i });
    expect(heading.className).toMatch(/text-4xl/);
  });
});
