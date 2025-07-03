import WordDefinition from "@/components/WordDefinition";
import { words } from "@/words";

export default function WordPage({
  params,
}: {
  params: { letter: string; word: string };
}) {
  const { letter: letterParam, word: wordParam } = params;
  const word = words[letterParam][wordParam];

  return (
    <div className="max-w-screen-lg mx-auto min-h-[70vh] flex items-center">
      <WordDefinition word={word} />
    </div>
  );
}

export async function generateStaticParams() {
  const params: { letter: string; word: string }[] = [];

  for (const letter of Object.keys(words)) {
    const wordsForLetter = Object.keys(words[letter]);
    for (const word of wordsForLetter) {
      params.push({ letter, word });
    }
  }

  return params;
}
