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

  it('does not close when inner box clicked', () => {
    const closeModal = jest.fn();
    render(<WordPopUpBox word={word} closeModal={closeModal} />);
    const inner = document.querySelector('#modal-backdrop > div') as HTMLElement;
    fireEvent.click(inner);
    expect(closeModal).not.toHaveBeenCalled();
  });
});
