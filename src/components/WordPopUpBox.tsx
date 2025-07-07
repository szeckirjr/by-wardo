"use client";

import { Word } from "@/types";
import { useEffect, useRef, useState } from "react";
import { words, letters } from "@/words";
import { TbX } from "react-icons/tb";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import bookAnimation from "../../public/lottie/book-toggle.json";
import diceAnimation from "../../public/lottie/dice-roll.json";
import WordDefinition from "./WordDefinition";
import classNames from "classnames";

export default function WordPopUpBox({
  word,
  closeModal,
}: {
  word: Word;
  closeModal?: () => void;
}) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const diceRef = useRef<LottieRefCurrentProps | null>(null);
  const bookRef = useRef<LottieRefCurrentProps | null>(null);
  const [currentWord, setCurrentWord] = useState<Word>(word);
  const [showReference, setShowReference] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    const stored = localStorage.getItem("showReference");
    return stored !== null ? stored === "true" : true;
  });

  useEffect(() => {
    localStorage.setItem("showReference", String(showReference));
  }, [showReference]);

  useEffect(() => {
    setCurrentWord(word);
  }, [word]);

  useEffect(() => {
    if (bookRef.current) {
      bookRef.current.playSegments(showReference ? [0, 15] : [15, 0], true);
    }
  }, [showReference]);

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
      data-testid="modal-backdrop"
      className="fixed inset-0 bg-black bg-opacity-20 z-40 backdrop-blur-sm"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative w-full max-w-screen-md  top-[80px] left-1/2 transform -translate-x-1/2">
        <div
          ref={modalRef}
          className="w-full overflow-y-auto py-4 px-8 bg-champagne rounded-lg z-50 fixed max-h-[85vh] border border-[#6e6a65] shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={closeModal}
            aria-label="Close"
            className="fixed top-4 right-4 text-2xl opacity-60 hover:opacity-100"
          >
            <TbX size={28} />
          </button>
          <WordDefinition word={currentWord} showReference={showReference} />
        </div>
        <button
          onClick={() => {
            handleRandom();
            diceRef.current?.playSegments([0, 20], true);
          }}
          aria-label="Random word"
          className="absolute -top-16 right-16 lg:top-16 lg:-right-16 text-2xl group z-[55] bg-champagne rounded-full p-2 border border-[#6e6a65] shadow-md"
        >
          <Lottie
            lottieRef={diceRef}
            animationData={diceAnimation}
            loop={false}
            autoplay={false}
            className="w-9 h-9 opacity-60 group-hover:opacity-80"
          />
        </button>
        <button
          onClick={() => setShowReference(!showReference)}
          aria-label="Toggle reference"
          className={classNames(
            "absolute -top-16 right-1 lg:top-1 lg:-right-16 text-2xl group z-[55] bg-champagne rounded-full p-2 border shadow-md",
            {
              "border-[#6e6a65]": !showReference,
              "border-black": showReference,
            }
          )}
        >
          <Lottie
            lottieRef={bookRef}
            animationData={bookAnimation}
            loop={false}
            autoplay={false}
            className={classNames("w-9 h-9", {
              "opacity-100": showReference,
              "opacity-60 group-hover:opacity-80": !showReference,
            })}
          />
        </button>
      </div>
    </div>
  );
}
