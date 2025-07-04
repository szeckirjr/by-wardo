"use client";

import { words } from "@/words";
import classNames from "classnames";
import { vidaloka } from "@/fonts";
import dynamic from "next/dynamic";
const WordPopUpBox = dynamic(() => import("../WordPopUpBox"), {
  ssr: false,
});
import { useState } from "react";
import { Word } from "@/types";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";

// Local font defined in src/fonts.ts

export default function LetterSegment({ letter }: { letter: string }) {
  const [popUpWord, setPopUpWord] = useState<Word | null>(null);

  return (
    <div
      id={letter}
      className="relative flex flex-row justify-between items-start pt-4"
    >
      <div className="sticky top-[10%] left-0">
        <h1
          key={letter}
          className={classNames(
            vidaloka.className,
            "text-8xl md:text-9xl inline-block align-top"
          )}
        >
          {letter}
        </h1>
      </div>
      <div className="flex flex-col items-end gap-6 pt-24">
        {Object.values(words[letter]).map((word) => (
          <h2
            key={word.word}
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
        ))}
      </div>
    </div>
  );
}
