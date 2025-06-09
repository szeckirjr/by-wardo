"use client";

import { Word } from "@/types";
import { useEffect, useRef } from "react";

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

    const backdrop = document.getElementById("modal-backdrop");
    if (backdrop) {
      backdrop.addEventListener("click", handleClick);
    }

    return () => {
      if (backdrop) {
        backdrop.removeEventListener("click", handleClick);
      }
    };
  }, [closeModal]);

  return (
    <div
      id="modal-backdrop"
      className="fixed inset-0 bg-black bg-opacity-50 z-40"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        ref={modalRef}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-lg shadow-lg z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="p-4 select-text">
          {word.word} - {word.phonetic}
        </p>
      </div>
    </div>
  );
}
