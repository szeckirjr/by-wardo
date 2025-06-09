import WordDefinition from "@/components/WordDefinition";
import { Word } from "@/types";

const bah: Word = {
  word: "Bah",
  phonetic: "[/ba/]",
  type: "interjection",
  element: (
    <>
      <p className="text-xl md:text-2xl">
        <span className="opacity-50">1. </span>A versatile and multifaceted
        exclamation capturing a wide range of emotions
      </p>
      <p className="text-xl md:text-2xl">
        <span className="opacity-50">2. </span>
        Works for almost anything: depending on the intonation, it can be used
        for excitement, <span className="opacity-90">rejection, </span>
        <span className="opacity-80">approval, </span>
        <span className="opacity-70">admiration, </span>
        <span className="opacity-60">shock, </span>
        <span className="opacity-50">fear, </span>
        <span className="opacity-40">disbelief, </span>
        <span className="opacity-30">surprise, </span>
        <span className="opacity-20">anger, </span>
        <span className="opacity-10">frustration, </span>
        <span className="opacity-5">disgust...</span>
      </p>
    </>
  ),
};

export default function AboutPage() {
  return (
    <div>
      <div className="min-h-[70vh] flex items-center">
        <WordDefinition word={bah} />
      </div>
      <div className="">
        <p className="text-2xl">
          The internet is vast. So vast that in 2023 it is estimated there were
          1.13 <i>billion</i> websites on the web. Although &quot;only&quot;
          about 200 million of those are still active, that&apos;s still a lot
          of websites. And that&apos;s not even counting the number of webpages,
          which is estimated to be in the trillions.
        </p>
        <p className="text-2xl">
          So why would you want to add another one to the pile? Well, I&apos;m
          not sure. But I did. And here it is. Welcome to Bah.
        </p>
      </div>
    </div>
  );
}
