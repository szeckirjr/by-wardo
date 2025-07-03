import { render, screen } from '@testing-library/react';
import { Footer } from '../Footer';

describe('Footer', () => {
  it('renders links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: /by wardo/i })).toHaveAttribute('href', 'https://wardo.dev/');
  });
});
