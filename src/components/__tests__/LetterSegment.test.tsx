import { render, screen } from '@testing-library/react';
import LetterSegment from '../LetterSegment';
import { words } from '@/words';

jest.mock('../WordPopUpBox', () => () => <div data-testid="popup" />);

describe('LetterSegment', () => {
  it('renders words for given letter', () => {
    render(<LetterSegment letter="a" />);
    const wordKeys = Object.values(words['a']).map(w => w.word);
    for (const word of wordKeys) {
      expect(screen.getByText(word)).toBeInTheDocument();
    }
  });
});
