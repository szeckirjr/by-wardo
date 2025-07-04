"use client";

import classNames from "classnames";
import { vidaloka } from "@/fonts";

type Props = {
  query: string;
  setQuery: (q: string) => void;
  placeholder?: string;
};

export default function SearchBar({ query, setQuery }: Props) {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder={"Search words..."}
      aria-label="Search words"
      className={classNames(
        "w-full border-b border-neutral-300 px-2 py-1 text-6xl bg-transparent focus:outline-none",
        vidaloka.className
      )}
    />
  );
}
