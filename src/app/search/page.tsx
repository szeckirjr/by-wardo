"use client";

import { useMemo, useState } from "react";
import SearchBar from "@/components/SearchBar";
import { wordEntries } from "@/words";
import classNames from "classnames";
import { vidaloka } from "@/fonts";
import Link from "next/link";
import WordPopUpBox from "@/components/WordPopUpBox";
import { Word } from "@/types";
import { TbExternalLink } from "react-icons/tb";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [popUpWord, setPopUpWord] = useState<Word | null>(null);

  const filtered = useMemo(() => {
    const lower = query.toLowerCase();
    return wordEntries
      .filter((e) => e.word.word.toLowerCase().includes(lower))
      .sort((a, b) => a.word.word.localeCompare(b.word.word));
  }, [query]);

  return (
    <div className="flex flex-col gap-8 w-full max-w-screen-lg mx-auto items-end">
      <div className="w-full md:w-80 self-stretch md:self-end">
        <SearchBar query={query} setQuery={setQuery} />
      </div>
      <ul className="flex flex-col items-end gap-6 w-full">
        {filtered.map(({ letter, slug, word }) => (
          <li key={`${letter}-${slug}`} className="transition-all">
            <h2
              className={classNames(
                vidaloka.className,
                "text-4xl sm:text-6xl lg:text-7xl"
              )}
            >
              {word.withCustomPage ? (
                <Link
                  href={word.withCustomPage}
                  className="hover:underline flex flex-row items-center gap-1"
                >
                  {word.word} <TbExternalLink className="scale-75" />
                </Link>
              ) : (
                <button
                  onClick={() => setPopUpWord(word)}
                  className="hover:underline"
                >
                  {word.word}
                </button>
              )}
              {popUpWord === word ? (
                <WordPopUpBox word={word} closeModal={() => setPopUpWord(null)} />
              ) : null}
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
