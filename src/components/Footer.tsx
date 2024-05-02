import classNames from "classnames";
import { Vidaloka } from "next/font/google";

const vidaloka = Vidaloka({
  weight: "400",
  subsets: ["latin"],
});

export function Footer() {
  return (
    <div
      className={classNames(
        "relative flex items-baseline justify-between",
        "pt-6 md:pt-8 lg:pt-16 px-6 md:px-8 lg:px-16 pb-8",
        vidaloka.className
      )}
    >
      <a href="/about" className="hover:underline text-2xl">
        About
      </a>
      <a
        href="https://wardo.dev/"
        target="_blank"
        className="hover:underline text-2xl"
      >
        by Wardo
      </a>
    </div>
  );
}
