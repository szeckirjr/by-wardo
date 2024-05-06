import WordDefinition from "@/components/WordDefinition";
import WOTD from "@/components/WOTD";
import classNames from "classnames";
import { Vidaloka } from "next/font/google";
import WordCard from "@/components/WordCard";
import { wordsList } from "@/words";

const vidaloka = Vidaloka({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const PostList = () => (
    <div className="flex flex-col-reverse gap-4 ">
      {wordsList.map((wordId, idx) => (
        <>
          <WordCard key={wordId} wordId={wordId} />
          {idx < wordsList.length - 1 && (
            <hr className="border-black opacity-10 border-[0.25px]" />
          )}
        </>
      ))}
    </div>
  );

  return <PostList />;
}
