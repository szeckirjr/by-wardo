import { vidaloka } from "@/fonts";
import { letters, words } from "@/words";
import LetterSegment from "@/components/LetterSegment";

// Local font defined in src/fonts.ts

export default function Home() {
  const PostList = () => (
    <div className="flex flex-grow flex-col gap-2 justify-start max-w-screen-lg mx-auto">
      {letters.map((letter) => (
        <>
          {/* <WordCard key={wordId} wordId={wordId} /> */}
          {/* {idx < wordsList.length - 1 && (
            <hr className="border-black opacity-10 border-[0.25px]" />
          )} */}
          <LetterSegment letter={letter} />
        </>
      ))}
    </div>
  );

  return <PostList />;
}
