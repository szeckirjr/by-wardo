import { render, screen } from '@testing-library/react';
import WordDefinition from '../WordDefinition';
import { Word } from '@/types';

describe('WordDefinition', () => {
  const word: Word = {
    word: 'Test',
    phonetic: '/test/',
    type: 'noun',
    definitions: ['first definition', 'second definition'],
  };

  it('renders word info', () => {
    render(<WordDefinition word={word} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText(/first definition/)).toBeInTheDocument();
  });

  it('renders nothing when word not provided', () => {
    const { container } = render(<WordDefinition />);
    expect(container).toBeEmptyDOMElement();
  });
});
