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
        "sticky top-0 flex flex-row justify-between items-baseline backdrop-blur-sm z-10",
        "pt-6 md:pt-8 lg:pt-16 px-6 md:px-8 lg:px-16 pb-8",
        vidaloka.className
      )}
      style={{
        maskImage:
          "linear-gradient(to bottom, black 40%, rgba(0,0,0,0.7973783263305322) 70%, transparent 100%)",
      }}
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
