"use client";
import classNames from "classnames";
import { Vidaloka } from "next/font/google";
import { usePathname } from "next/navigation";

const vidaloka = Vidaloka({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  const pathname = usePathname();
  const isSmall = pathname !== "/";
  return (
    <div
      className={classNames(
        "relative flex gap-4 items-end pt-16 pl-16 pr-16 pb-8",
        vidaloka.className
      )}
    >
      <h1 className={classNames({ "text-7xl": !isSmall, "text-4xl": isSmall })}>
        <a
          href="/"
          className="hover:underline underline-offset-2"
        >
          My Blog
        </a>
      </h1>
      <h2 className={classNames({ "text-4xl": !isSmall, "text-xl": isSmall })}>
        by{" "}
        <a
          href="https://wardo.dev/"
          className="hover:underline underline-offset-2"
          target="_blank"
        >
          Wardo
        </a>
      </h2>
    </div>
  );
}
