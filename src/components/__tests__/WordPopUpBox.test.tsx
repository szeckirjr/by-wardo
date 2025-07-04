import { render, fireEvent } from '@testing-library/react';
import WordPopUpBox from '../WordPopUpBox';
import { Word } from '@/types';

const word: Word = {
  word: 'Test',
  phonetic: '/test/',
  type: 'noun',
  definitions: ['definition'],
};

describe('WordPopUpBox', () => {
  it('calls closeModal when backdrop clicked or Escape pressed', () => {
    const closeModal = jest.fn();
    render(<WordPopUpBox word={word} closeModal={closeModal} />);
    const backdrop = document.getElementById('modal-backdrop')!;
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
      const backdrop = document.getElementById('modal-backdrop')!;
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
    const backdrop = document.querySelector('#modal-backdrop') as HTMLElement;
    fireEvent.click(backdrop);
    expect(closeModal).not.toHaveBeenCalled();
    (document.getElementById as jest.Mock).mockRestore();
  });
});
