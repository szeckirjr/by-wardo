"use client";

import classNames from "classnames";
import { Vidaloka } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const vidaloka = Vidaloka({
  weight: "400",
  subsets: ["latin"],
});

export default function WOTD() {
  const [openStatus, setOpenStatus] = useState(true);
  return (
    <div
      className={classNames(
        "my-16 p-4 md:p-8",
        // "border border-black rounded-md border-opacity-10",
        "flex flex-col gap-6",
        "shadow-normal rounded-xl"
      )}
    >
      <div className="flex justify-between items-start">
        <div>
          <h1
            className={classNames("text-3xl md:text-4xl", vidaloka.className)}
          >
            Word of the Day
          </h1>
          <h2 className="text-lg md:text-xl">
            {new Date().toLocaleString(undefined, {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </h2>
        </div>
        <a href="/wotd">See Archive {openStatus ? "open" : "closed"}</a>
      </div>
      <div className="flex flex-col gap-4 border-l-4 border-stone-800 pl-6">
        <h1 className={classNames("text-3xl md:text-4xl", vidaloka.className)}>
          Bah
        </h1>
        <p className="text-xl md:text-2xl">
          <span className="italic opacity-75">[/ba/]</span>{" "}
          <span className="font-bold">interjection</span>
        </p>
        <p className="text-lg md:text-xl">
          <span className="opacity-50">1.</span> A versatile and multifaceted
          exclamation capturing a wide range of emotions
        </p>
        <p className="text-lg md:text-xl">
          <span className="opacity-50">2.</span> Works for almost anything:
          depending on the intonation, it can be used for excitement,{" "}
          <span className="opacity-90">rejection, </span>
          <span className="opacity-80">approval, </span>
          <span className="opacity-70">admiration, </span>
          <span className="opacity-60">shock, </span>
          <span className="opacity-50">fear, </span>
          <span className="opacity-40">excitement, </span>
          <span className="opacity-30">disbelief, </span>
          <span className="opacity-20">surprise, </span>
          <span className="opacity-20">anger, </span>
          <span className="opacity-10">frustration, </span>
          <span className="opacity-5">disgust...</span>
        </p>
      </div>
    </div>
  );
}
