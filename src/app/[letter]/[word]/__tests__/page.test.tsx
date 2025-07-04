import { render } from '@testing-library/react';
import WordPage, { generateStaticParams } from '../page';
import { letters, words } from '@/words';

describe('WordPage', () => {
  it('returns all letter-word pairs', async () => {
    const params = await generateStaticParams();
    const expected = letters.flatMap(letter =>
      Object.keys(words[letter]).map(word => ({ letter, word }))
    );
    expect(params).toEqual(expected);
  });

  it('renders definition for given params', () => {
    const { getByText } = render(
      <WordPage params={{ letter: 'a', word: 'anomalous' }} />
    );
    expect(getByText('Anomalous')).toBeInTheDocument();
  });
});
