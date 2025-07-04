"use client";

import { Word } from "@/types";
import { useEffect, useRef, useState } from "react";
import { words, letters } from "@/words";
import { TbX } from "react-icons/tb";
import { GiRollingDices } from "react-icons/gi";
import WordDefinition from "./WordDefinition";

export default function WordPopUpBox({
  word,
  closeModal,
}: {
  word: Word;
  closeModal?: () => void;
}) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [currentWord, setCurrentWord] = useState<Word>(word);

  useEffect(() => {
    setCurrentWord(word);
  }, [word]);

  const getRandomWord = () => {
    const letter = letters[Math.floor(Math.random() * letters.length)];
    const wordList = Object.values(words[letter]);
    return wordList[Math.floor(Math.random() * wordList.length)];
  };

  const handleRandom = () => {
    setCurrentWord(getRandomWord());
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.target === event.currentTarget) {
        closeModal?.();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal?.();
      }
    };

    const backdrop = document.getElementById("modal-backdrop");
    if (backdrop) {
      backdrop.addEventListener("click", handleClick);
    }
    document.addEventListener("keydown", handleEscape);

    return () => {
      if (backdrop) {
        backdrop.removeEventListener("click", handleClick);
      }
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeModal]);

  return (
    <div
      id="modal-backdrop"
      className="fixed inset-0 bg-black bg-opacity-20 z-40"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        ref={modalRef}
        className="w-full overflow-y-auto max-w-screen-md max-h-[85vh] top-[10%] left-1/2 transform -translate-x-1/2 py-4 px-8 bg-champagne rounded-lg z-50 fixed"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          aria-label="Close"
          className="absolute top-4 right-4 text-2xl opacity-60 hover:opacity-100"
        >
          <TbX size={28} />
        </button>
        <WordDefinition word={currentWord} />
        <button
          onClick={handleRandom}
          aria-label="Random word"
          className="absolute top-4 right-12 text-2xl opacity-60 hover:opacity-100"
        >
          <GiRollingDices size={42} />
        </button>
      </div>
    </div>
  );
}
