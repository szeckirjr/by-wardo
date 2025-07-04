import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import LetterSegment from '../LetterSegment';
import { words } from '@/words';

describe('LetterSegment', () => {
  it('renders words for given letter', () => {
    render(<LetterSegment letter="a" />);
    const wordKeys = Object.values(words['a']).map(w => w.word);
    for (const word of wordKeys) {
      expect(screen.getByText(word)).toBeInTheDocument();
    }
  });

  it('opens and closes popup on button click and links when custom page', () => {
    jest.useFakeTimers();
    const { getByRole } = render(<LetterSegment letter="i" />);
    const link = getByRole('link', { name: /interstitial/i });
    expect(link).toHaveAttribute('href', '/word/interstitial');
    const button = getByRole('button', { name: /ineffable/i });
    expect(document.getElementById('modal-backdrop')).toBeNull();
    act(() => {
      fireEvent.click(button);
    });
    const backdrop = document.getElementById('modal-backdrop')!;
    expect(backdrop).not.toBeNull();
    act(() => {
      fireEvent.click(backdrop);
      jest.runAllTimers();
    });
    expect(document.getElementById('modal-backdrop')).toBeNull();
    jest.useRealTimers();
  });
});
