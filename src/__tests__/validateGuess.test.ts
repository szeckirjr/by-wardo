import { validateGuess } from '@/app/api/guess/validate';

describe('validateGuess', () => {
  it('interprets yes response', async () => {
    const mockFetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ choices: [{ message: { content: 'YES' } }] }),
      })
    ) as any;

    const result = await validateGuess('k', 'test', ['def'], 'guess', mockFetch);
    expect(mockFetch).toHaveBeenCalled();
    expect(result).toBe('YES');
  });
});
