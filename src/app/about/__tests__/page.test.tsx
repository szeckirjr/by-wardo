import { render, screen } from '@testing-library/react';
import About from '../page';

describe('About page', () => {
  it('renders heading', () => {
    render(<About />);
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
  });
});
