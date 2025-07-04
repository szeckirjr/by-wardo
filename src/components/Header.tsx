"use client";
import classNames from "classnames";
import { vidaloka } from "@/fonts";
import { usePathname } from "next/navigation";
import { TbSearch } from "react-icons/tb";

// Local font defined in src/fonts.ts

export default function Header() {
  const pathname = usePathname();
  const isSmall = pathname !== "/";
  return (
    <div
      className={classNames(
        "sticky top-0 flex flex-row justify-between items-baseline backdrop-blur-sm z-10",
        "pt-6 md:pt-7 lg:pt-10 px-6 md:px-7 lg:px-10 pb-8",
        vidaloka.className
      )}
      style={{
        maskImage:
          "linear-gradient(to bottom, black 40%, rgba(0,0,0,0.7973783263305322) 70%, transparent 100%)",
      }}
    >
      <h1
        className={classNames({
          "text-5xl lg:text-6xl": !isSmall,
          "text-4xl": isSmall,
        })}
      >
        <a href="/" className="hover:underline">
          Words
        </a>
      </h1>
      <a href="/search" aria-label="Search" className="text-3xl md:text-4xl hover:opacity-80">
        <TbSearch />
      </a>
      {/* TODO: Implement language toggle for Portuguese/English */}
      {/* <FlagToggle /> */}
    </div>
  );
}
