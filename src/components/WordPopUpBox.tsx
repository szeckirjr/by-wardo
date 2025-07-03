"use client";

import { Word } from "@/types";
import { useEffect, useRef } from "react";
import WordDefinition from "./WordDefinition";

export default function WordPopUpBox({
  word,
  closeModal,
}: {
  word: Word;
  closeModal?: () => void;
}) {
  const modalRef = useRef<HTMLDivElement | null>(null);

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
        className="fixed w-full max-w-screen-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-4 px-8 bg-champagne rounded-lg z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <WordDefinition word={word} />
      </div>
    </div>
  );
}
