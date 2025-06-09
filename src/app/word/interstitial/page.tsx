"use client";
import FoundInBook from "@/components/FoundInBook";
import ReferenceTag, { WebsiteRef } from "@/components/ReferenceTag";
import Tooltip from "@/components/Tooltip";
import WordDefinition from "@/components/WordDefinition";
import { Word } from "@/types";
import classNames from "classnames";
import { RiArrowDownWideLine } from "react-icons/ri";

const interstitial: Word = {
  word: "Interstitial",
  phonetic: "[/in-tuhr-STISH-uhl/]",
  type: "adjective",
  definitions: [
    "Of, forming, or occupying interstices (usually a very small space between things)",
  ],
  reference: {
    type: "book",
    title: "A Little Life",
    author: "Hanya Yanagihara",
    cover: "/images/a_little_life.jpg",
    excerpt: (
      <>
        The stairwells between the floors are densely hung with{" "}
        <span className="font-bold">interstitial</span> pieces, drawings and
        small paintings, studies and experimentations, that JB made between
        bodies of work.
      </>
    ),
  },
};

export default function Interstitial() {
  const scrollToContent = () => {
    const content = document.getElementById("interstitial-content");
    content?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <div className="min-h-[90vh] -mt-20 flex items-center relative">
        <WordDefinition word={interstitial} />
        <RiArrowDownWideLine
          onClick={scrollToContent}
          className="absolute bottom-2 left-0 right-0 w-10 h-10 mx-auto text-black animate-bounce cursor-pointer"
        />
      </div>
      <div
        id="interstitial-content"
        className={classNames(
          "text-lg pt-36 sm:text-xl flex flex-col gap-4 sm:gap-6 lg:gap-10"
        )}
      >
        <div>
          It&apos;s an interesting fact that{" "}
          <Tooltip
            element={
              <>
                Also known as the 80/20 rule: it states that roughly 80% of the
                effects come from 20% of the causes.
              </>
            }
          >
            <span className=" underline decoration-wavy decoration-neutral-400 group-hover:decoration-blue-500">
              The Pareto Principle
            </span>
          </Tooltip>
          , where a small subset of elements have an outsized effect, also
          applies to language use; the bulk of our communication is done using a
          <span className="text-sm sm:text-md font-bold px-4"> small</span>{" "}
          subset of the language.
        </div>
        <div>
          While English has an estimated 171,146 words currently in use (aside
          from over 47 thousand obsolete words), native speakers typically only
          know about 15 to 20 thousand{" "}
          <Tooltip
            element={
              <>
                groups of words that share a common base like <i>cook</i>,{" "}
                <i>cook</i>
                ing, <i>cook</i>s
              </>
            }
          >
            word families/lemmas
          </Tooltip>
          . Research has shown, however, that learning just the top 800 most
          frequent lemmas in English will allow you to understand 75% of the
          language as its spoken in everyday life!
          <div>
            To understand dialogue in movies and shows? You&apos;ll need ~3,000
            lemmas.
          </div>
          <div>
            To understand <span className=" italic">any</span> written content
            (novels, articles, newspapers)? You&apos;ll need ~8,000-9,000
            lemmas. Still, the vast majority of the language is never touched in
            everyday conversation.
            <ReferenceTag
              number={1}
              reference={
                {
                  title: "How many words do you need to speak a language?",
                  author: "Beth Sagar-Fenton & Lizzy McNeill, BBC Radio 4",
                  href: "https://www.bbc.com/news/world-44569277",
                } as WebsiteRef
              }
            />
          </div>
        </div>

        <p>
          &quot;Core words&quot;, as they&apos;re called, make up the vast
          majority of spoken and written content in any language; in English, it
          includes words like &quot;the&quot;, &quot;and&quot;, &quot;to&quot;,
          and &quot;of&quot;. The remaining are words that add meaning and
          intention to the sentence. These are the words less often used daily,
          but core for understanding English language as a whole.
        </p>
        <p>
          While core words serve as the glue holding sentences together,
          it&apos;s the less frequent, more nuanced words that infuse language
          with depth and color. These words, though rarely present in our daily
          vocabulary, enhance our conversations and writing, enriching them with
          subtlety and complexity.
        </p>
        <p>
          The word &quot;interstitial&quot; itself exemplifies this beautifully,
          hence why it was chosen as the first word to start this project.
          Originating from scientific texts in the 1640s, it describes the small
          spaces or intervals between structures; in a broader context related
          to language, it metaphorically highlights the gaps in our
          communication that we fill in with these meaningful lexical choices.
          This website and the words it explores are dedicated to just that -
          uncovering and celebrating these linguistic gems.
        </p>
        <p>
          By focusing on words that are <i>interstitial</i> to everyday
          communication, my goal is to illuminate how they contribute to making
          English a rich and evocative language, demonstrating that the beauty
          of speech often lies in the spaces between.
        </p>
        {interstitial.reference && (
          <FoundInBook reference={interstitial.reference} />
        )}
      </div>
    </div>
  );
}
