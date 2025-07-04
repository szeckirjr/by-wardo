import { render, screen, fireEvent } from '@testing-library/react';
import SearchPage from '../search/page';

jest.mock('next/link', () => ({ __esModule: true, default: (props: any) => <a {...props} /> }));

describe('Search page', () => {
  it('filters word list as typing', () => {
    render(<SearchPage />);
    const input = screen.getByRole('textbox', { name: /search words/i });
    fireEvent.change(input, { target: { value: 'ineff' } });
    const word = screen.getByRole('button', { name: /ineffable/i });
    expect(word).toBeInTheDocument();
  });
});
