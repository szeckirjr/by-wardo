import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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

  it('opens and closes popup on button click and links when custom page', async () => {
    const { getByRole } = render(<LetterSegment letter="i" />);
    const link = getByRole('link', { name: /interstitial/i });
    expect(link).toHaveAttribute('href', '/word/interstitial');
    const button = getByRole('button', { name: /ineffable/i });
    expect(screen.queryByTestId('modal-backdrop')).toBeNull();
    fireEvent.click(button);
    const backdrop = await screen.findByTestId('modal-backdrop');
    expect(backdrop).toBeInTheDocument();
    fireEvent.click(backdrop);
    await waitFor(() =>
      expect(screen.queryByTestId('modal-backdrop')).toBeNull()
    );
  });
});
