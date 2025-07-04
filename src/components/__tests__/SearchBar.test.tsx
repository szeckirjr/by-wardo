import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar', () => {
  it('updates query via callback', () => {
    const setQuery = jest.fn();
    render(<SearchBar query="" setQuery={setQuery} />);
    const input = screen.getByRole('textbox', { name: /search words/i });
    fireEvent.change(input, { target: { value: 'test' } });
    expect(setQuery).toHaveBeenCalledWith('test');
  });
});
