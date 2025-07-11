"use client";

import { Word } from "@/types";
import { useEffect, useRef, useState } from "react";
import { words, letters } from "@/words";
import { TbX } from "react-icons/tb";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import diceAnimation from "@/../public/dice6.json";
import bookAnimation from "@/../public/book.json";
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
  const [currentWord, setCurrentWord] = useState<Word>(word);
  const [showRefrence, setShowReference] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    const stored = localStorage.getItem("showReference");
    return stored !== null ? stored === "true" : true;
  });

  useEffect(() => {
    localStorage.setItem("showReference", String(showRefrence));
  }, [showRefrence]);

  useEffect(() => {
    setCurrentWord(word);
  }, [word]);

  const getRandomWord = () => {
    const letter = letters[Math.floor(Math.random() * letters.length)];
    const wordList = Object.values(words[letter]);
    return wordList[Math.floor(Math.random() * wordList.length)];
  };

  const diceLottieRef = useRef<LottieRefCurrentProps | null>(null);
  const bookLottieRef = useRef<LottieRefCurrentProps | null>(null);

  const handleRandom = () => {
    diceLottieRef.current?.goToAndPlay(0, true);
    setCurrentWord(getRandomWord());
  };

  const handleToggleReference = () => {
    setShowReference((prev) => !prev);
    if (showRefrence) {
      bookLottieRef.current?.setDirection(1);
      bookLottieRef.current?.goToAndPlay(0, true);
    } else {
      bookLottieRef.current?.setDirection(-1);
      bookLottieRef.current?.goToAndPlay(104, true);
    }
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

  useEffect(() => {
    if (diceLottieRef.current) {
      diceLottieRef.current.goToAndStop(178, true);
      diceLottieRef.current.setSpeed(2);
    }
  }, []);

  useEffect(() => {
    if (bookLottieRef.current) {
      if (showRefrence) {
        bookLottieRef.current.goToAndStop(0, true);
      } else {
        bookLottieRef.current.goToAndStop(104, true);
      }
      bookLottieRef.current.setSpeed(2);
    }
  }, []);

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
          <WordDefinition word={currentWord} showReference={showRefrence} />
        </div>
        <button
          onClick={handleRandom}
          aria-label="Random word"
          className="absolute -top-16 right-16 lg:top-[70px] lg:-right-16 text-2xl group z-[55] bg-champagne rounded-full p-1 border border-[#6e6a65] hover:border-[#524f4c] shadow-md"
        >
          {/* <GiRollingDices
            className="opacity-60 group-hover:opacity-80 "
            size={36}
            color="black"
          /> */}
          <Lottie
            lottieRef={diceLottieRef}
            animationData={diceAnimation}
            loop={false}
            className="w-12 h-12 group-hover:scale-110 transition-transform duration-200"
            // initialSegment={[0, 180]}
            onComplete={() => diceLottieRef.current?.goToAndStop(178, true)}
          />
        </button>
        <button
          onClick={handleToggleReference}
          aria-label="Random word"
          className={classNames(
            "absolute -top-16 right-1 lg:top-1 lg:-right-16 text-2xl group z-[55] bg-champagne rounded-full p-1 border shadow-md",
            {
              "border-[#6e6a65]": !showRefrence,
              "border-black": showRefrence,
            }
          )}
        >
          {/* <GiBookmarklet
            className={classNames("pt-1", {
              "opacity-100": showRefrence,
              "opacity-60 group-hover:opacity-80": !showRefrence,
            })}
            size={48}
            color="black"
          /> */}
          <Lottie
            lottieRef={bookLottieRef}
            animationData={bookAnimation}
            loop={false}
            className="w-12 h-12 scale-x-[-1]"
            initialSegment={[1, 105]}
            // onComplete={() => bookLottieRef.current?.goToAndStop(60, true)}
          />
        </button>
      </div>
    </div>
  );
}
