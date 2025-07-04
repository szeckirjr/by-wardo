import { words, letters } from '@/words';

describe('words data sorting', () => {
  it('exports letters alphabetically', () => {
    expect(letters).toEqual([...letters].sort());
  });

  it('exports words alphabetically within each letter', () => {
    for (const letter of letters) {
      const wordKeys = Object.keys(words[letter]);
      expect(wordKeys).toEqual([...wordKeys].sort());
    }
  });
});
