import { render, screen } from '@testing-library/react';
import WordDefinition from '../WordDefinition';
import { Word } from '@/types';
import type { StaticImageData } from 'next/image';

const mockFound = jest.fn(() => <div data-testid="found" />);
jest.mock('../FoundInBook', () => ({ __esModule: true, default: (props: any) => mockFound(props) }));

describe('WordDefinition additional', () => {
  it('renders custom element when provided', () => {
    const word: Word = {
      word: 'Custom',
      phonetic: '/c/',
      type: 'noun',
      element: <p>Special</p>,
    };
    render(<WordDefinition word={word} />);
    expect(screen.getByText('Special')).toBeInTheDocument();
  });

  it('passes reference to FoundInBook', () => {
    const word: Word = {
      word: 'Ref',
      phonetic: '/r/',
      type: 'noun',
      definitions: ['d'],
      reference: {
        book: { title: 'T', author: 'A', cover: '/c.png' as unknown as StaticImageData },
        excerpt: <>quote</>,
      },
    };
    render(<WordDefinition word={word} showReference />);
    expect(mockFound).toHaveBeenCalledWith({ reference: word.reference });
  });
});
