import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Home page', () => {
  it('lists letter segments', () => {
    render(<Home />);
    expect(screen.getByText('a')).toBeInTheDocument();
  });
});
