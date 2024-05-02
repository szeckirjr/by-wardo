import WordDefinition from "@/components/WordDefinition";
import WOTD from "@/components/WOTD";
import classNames from "classnames";
import { Vidaloka } from "next/font/google";
import WordCard from "@/components/WordCard";

const vidaloka = Vidaloka({
  weight: "400",
  subsets: ["latin"],
});

type Word = {
  date?: string;
  word: string;
};

export const words: Record<string, Word> = {
  interstitial: {
    word: "Interstitial",
    date: "2024-04-29",
  },
  piqued: {
    word: "Piqued",
  },
  earnestness: {
    word: "Earnestness",
  },
  wryly: {
    word: "Wryly",
  },
  serendipity: {
    word: "Serendipity",
  },
  elated: {
    word: "Elated",
  },
};

const wordsList = Object.keys(words);

export default function Home() {
  const PostList = () => (
    <div>
      <div className="flex flex-col-reverse gap-4 mt-6">
        {wordsList.map((wordId, idx) => (
          <>
            <WordCard key={wordId} wordId={wordId} />
            {idx < wordsList.length - 1 && (
              <hr className="border-black opacity-10 border-[0.25px]" />
            )}
          </>
        ))}
      </div>
    </div>
  );

  return <PostList />;
}
