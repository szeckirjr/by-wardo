import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

jest.mock('next/link', () => ({ __esModule: true, default: (props: any) => <a {...props} /> }));

describe('SearchBar', () => {
  it('filters results and navigates to word page', () => {
    render(<SearchBar />);
    const input = screen.getByRole('textbox', { name: /search words/i });
    fireEvent.change(input, { target: { value: 'ineff' } });
    const link = screen.getByRole('link', { name: /ineffable/i });
    expect(link).toHaveAttribute('href', '/i/ineffable');
  });
});
