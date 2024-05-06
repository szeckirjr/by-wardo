import { FaRegClock } from "react-icons/fa6";
import { Vidaloka } from "next/font/google";
import classNames from "classnames";
import { words } from "@/words";

const vidaloka = Vidaloka({
  weight: "400",
  subsets: ["latin"],
});

export default function WordCard({ wordId }: { wordId: string }) {
  const { date, word } = words[wordId];
  const wordIdx = Object.keys(words).indexOf(wordId);
  const today = new Date();
  const dateObj = date ? new Date(date) : undefined;
  const isAvailable = dateObj ? dateObj <= today : false;
  // const formattedDate = date
  //   ? new Date(date).toLocaleString(undefined, {
  //       day: "2-digit",
  //       month: "long",
  //       year: "numeric",
  //     })
  //   : undefined;

  return (
    <div className={classNames("my-4 group")}>
      <a href={isAvailable ? `/word/${wordId}` : undefined}>
        <span className="block">
          <p
            className={classNames(
              "text-4xl md:text-4xl lg:text-5xl underline-offset-2 text-center flex justify-between items-center",
              { "text-zinc-400 opacity-50": !isAvailable },
              vidaloka.className
            )}
          >
            <span
              className={classNames("text-2xl md:text-3xl mr-4 no-underline", {
                "text-zinc-400 opacity-50": !isAvailable,
              })}
            >
              {wordIdx + 1}
            </span>
            <span
              className={classNames({
                "group-hover:underline": isAvailable,
              })}
            >
              {word}
            </span>
            <span></span>
          </p>
          {/* {date && (
              <p className="text-md flex items-center mt-2">
                <FaRegClock fontSize={14} className="mr-2" />
                {formattedDate}
              </p>
            )} */}
        </span>
      </a>
    </div>
  );
}
