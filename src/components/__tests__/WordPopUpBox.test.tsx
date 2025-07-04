import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import WordPopUpBox from '../WordPopUpBox';
import { Word } from '@/types';
import type { StaticImageData } from 'next/image';

const mockFound = jest.fn(() => <div data-testid="found" />);
jest.mock('../FoundInBook', () => ({ __esModule: true, default: (props: any) => mockFound(props) }));

const word: Word = {
  word: 'Test',
  phonetic: '/test/',
  type: 'noun',
  definitions: ['definition'],
};

const refWord: Word = {
  word: 'Ref',
  phonetic: '/r/',
  type: 'noun',
  definitions: ['d'],
  reference: {
    book: { title: 'T', author: 'A', cover: '/c.png' as unknown as StaticImageData },
    excerpt: <>quote</>,
  },
};

describe('WordPopUpBox', () => {
  afterEach(() => {
    localStorage.clear();
    mockFound.mockClear();
  });
  it('calls closeModal when backdrop clicked or Escape pressed', () => {
    const closeModal = jest.fn();
    render(<WordPopUpBox word={word} closeModal={closeModal} />);
    const backdrop = screen.getByTestId('modal-backdrop');
    fireEvent.click(backdrop);
    expect(closeModal).toHaveBeenCalledTimes(1);
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(closeModal).toHaveBeenCalledTimes(2);
  });

  it('ignores keydown events other than Escape', () => {
    const closeModal = jest.fn();
    render(<WordPopUpBox word={word} closeModal={closeModal} />);
    fireEvent.keyDown(document, { key: 'Enter' });
    expect(closeModal).not.toHaveBeenCalled();
  });

  it('does not close when inner box clicked', () => {
    const closeModal = jest.fn();
    render(<WordPopUpBox word={word} closeModal={closeModal} />);
    const inner = document.querySelector('#modal-backdrop > div') as HTMLElement;
    fireEvent.click(inner);
    expect(closeModal).not.toHaveBeenCalled();
  });

  it('works safely without closeModal handler', () => {
    expect(() => {
      render(<WordPopUpBox word={word} />);
      const backdrop = screen.getByTestId('modal-backdrop');
      fireEvent.click(backdrop);
      fireEvent.keyDown(document, { key: 'Escape' });
    }).not.toThrow();
  });

  it('handles missing backdrop element gracefully', () => {
    const closeModal = jest.fn();
    const original = document.getElementById.bind(document);
    jest
      .spyOn(document, 'getElementById')
      .mockImplementation((id: string) =>
        id === 'modal-backdrop' ? null : original(id)
      );
    render(<WordPopUpBox word={word} closeModal={closeModal} />);
    const backdrop = screen.getByTestId('modal-backdrop');
    fireEvent.click(backdrop);
    expect(closeModal).not.toHaveBeenCalled();
    (document.getElementById as jest.Mock).mockRestore();
  });

  it('reads showReference from localStorage', () => {
    localStorage.setItem('showReference', 'false');
    render(<WordPopUpBox word={refWord} />);
    expect(screen.queryByTestId('found')).not.toBeInTheDocument();
  });

  it('updates localStorage when toggled', async () => {
    localStorage.setItem('showReference', 'true');
    render(<WordPopUpBox word={refWord} />);
    const buttons = screen.getAllByRole('button', { name: 'Random word' });
    fireEvent.click(buttons[1]);
    await waitFor(() => {
      expect(localStorage.getItem('showReference')).toBe('false');
    });
  });
});
