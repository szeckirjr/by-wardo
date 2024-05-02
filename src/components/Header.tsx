"use client";
import classNames from "classnames";
import { Vidaloka } from "next/font/google";
import { usePathname } from "next/navigation";
import { FlagToggle } from "./FlagToggle";

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
        "relative flex flex-row justify-between items-baseline",
        "pt-6 md:pt-8 lg:pt-16 px-6 md:px-8 lg:px-16 pb-8",
        vidaloka.className
      )}
    >
      <h1
        className={classNames({
          "text-6xl lg:text-7xl": !isSmall,
          "text-4xl": isSmall,
        })}
      >
        <a href="/" className="hover:underline">
          Words
        </a>
      </h1>
      {/* TODO: Implement language toggle for Portuguese/English */}
      {/* <FlagToggle /> */}
    </div>
  );
}
