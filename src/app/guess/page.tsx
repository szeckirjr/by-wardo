'use client';

import { useState } from 'react';
import Image from 'next/image';
import WordDefinition from '@/components/WordDefinition';
import { wordEntries } from '@/words';
import classNames from 'classnames';

function randomEntry() {
  return wordEntries[Math.floor(Math.random() * wordEntries.length)];
}

export default function GuessPage() {
  const [entry, setEntry] = useState(() => randomEntry());
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch('/api/guess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          word: entry.word.word,
          definitions: entry.word.definitions?.filter(d => typeof d === 'string') ?? [],
          guess,
        }),
      });
      const data = await res.json();
      setResult(data.result);
    } catch {
      setResult('NO');
    } finally {
      setLoading(false);
    }
  };

  const next = () => {
    setEntry(randomEntry());
    setGuess('');
    setResult(null);
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-screen-md mx-auto py-8">
      <h1 className={classNames('text-4xl md:text-5xl font-bold')}>Guess This Word</h1>
      {entry.word.reference && (
        <Image
          src={entry.word.reference.book.cover}
          alt="book cover"
          className="w-40 h-auto rounded-md"
        />
      )}
      <h2 className="text-3xl md:text-4xl font-serif">{entry.word.word}</h2>
      {!result && (
        <form onSubmit={submit} className="flex flex-col items-center gap-4 w-full">
          <textarea
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            className="w-full p-3 border border-black rounded-md"
            placeholder="Describe what this word means"
            rows={3}
          />
          <button
            type="submit"
            disabled={loading || !guess.trim()}
            className="bg-black text-white px-4 py-2 rounded-md disabled:opacity-50"
          >
            {loading ? 'Checking...' : 'Submit'}
          </button>
        </form>
      )}
      {result && (
        <>
          <div
            className={classNames(
              'text-5xl font-bold',
              result === 'YES' ? 'text-green-600' : 'text-red-600'
            )}
          >
            {result}
          </div>
          <WordDefinition word={entry.word} />
          <button
            onClick={next}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md animate-bounce"
          >
            Next Word
          </button>
        </>
      )}
    </div>
  );
}
