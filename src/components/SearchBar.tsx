"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { wordEntries } from "@/words";
import classNames from "classnames";
import { vidaloka } from "@/fonts";

interface WordEntry {
  letter: string;
  slug: string;
  word: string;
  customPage?: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const entries = useMemo(() => wordEntries.map((e) => ({
    letter: e.letter,
    slug: e.slug,
    word: e.word.word,
    customPage: e.word.withCustomPage,
  })), []);

  const results = useMemo(() => {
    if (!query) return [] as WordEntry[];
    const lower = query.toLowerCase();
    return entries.filter((e) => e.word.toLowerCase().includes(lower));
  }, [query, entries]);

  return (
    <div className="relative w-40 md:w-60">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        aria-label="Search words"
        className={classNames(
          "w-full border border-neutral-300 rounded-md px-2 py-1 text-lg",
          vidaloka.className
        )}
      />
      {query && results.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full max-h-60 overflow-auto bg-champagne shadow-normal rounded-md border border-neutral-300">
          {results.map((e) => (
            <li key={`${e.letter}-${e.slug}`}>
              <Link
                href={e.customPage ?? `/${e.letter}/${e.slug}`}
                className="block px-2 py-1 hover:bg-beige"
                onClick={() => setQuery("")}
              >
                {e.word}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
