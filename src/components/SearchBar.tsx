"use client";

import classNames from "classnames";
import { vidaloka } from "@/fonts";

type Props = {
  query: string;
  setQuery: (q: string) => void;
  placeholder?: string;
};

export default function SearchBar({ query, setQuery, placeholder = "Search" }: Props) {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder={placeholder}
      aria-label="Search words"
      className={classNames(
        "w-full border-b border-neutral-300 px-2 py-1 text-lg bg-transparent focus:outline-none",
        vidaloka.className
      )}
    />
  );
}
