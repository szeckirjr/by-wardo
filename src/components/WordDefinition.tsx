import { Word } from "@/types";
import classNames from "classnames";
import { Vidaloka } from "next/font/google";

const vidaloka = Vidaloka({
  weight: "400",
  subsets: ["latin"],
});

export default function WordDefinition({ word }: { word?: Word }) {
  if (!word) return null;
  const {
    word: wordLabel,
    phonetic,
    type,
    definitions,
    element: customElement,
  } = word;
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 border-l-4 border-stone-800 pl-6">
        <h3
          className={classNames(
            "text-3xl md:text-5xl font-extrabold",
            vidaloka.className
          )}
        >
          {wordLabel}
        </h3>
        <p className="text-2xl md:text-3xl">
          <span className="italic opacity-75">{phonetic}</span>{" "}
          <span className="font-bold text-xl md:text-2xl">{type}</span>
        </p>
        {customElement
          ? customElement
          : definitions?.map((definition, idx) => (
              <p key={`${wordLabel}-${idx}`} className="text-xl md:text-2xl">
                <span className="opacity-50">{idx + 1}. </span>
                {definition}
              </p>
            ))}
      </div>
    </div>
  );
}
