"use client";
import FoundInBook from "@/components/FoundInBook";
import ReferenceTag, { WebsiteRef } from "@/components/ReferenceTag";
import Tooltip from "@/components/Tooltip";
import WordDefinition from "@/components/WordDefinition";
import { Word } from "@/types";
import { words } from "@/words";
import classNames from "classnames";
import { RiArrowDownWideLine } from "react-icons/ri";

export default function Serendipity() {
  const scrollToContent = () => {
    const content = document.getElementById("serendipity-content");
    content?.scrollIntoView({ behavior: "smooth" });
  };
  const serendipity = words["s"]["serendipity"];

  return (
    <div>
      <div className="min-h-[90vh] -mt-20 flex items-center relative">
        <WordDefinition word={serendipity} />
        <RiArrowDownWideLine
          onClick={scrollToContent}
          className="absolute bottom-2 left-0 right-0 w-10 h-10 mx-auto text-black animate-bounce cursor-pointer"
        />
      </div>
      <div
        id="serendipity-content"
        className={classNames(
          "text-lg pt-36 sm:text-xl flex flex-col gap-4 sm:gap-6 lg:gap-10"
        )}
      >
        <p>
          At the age of 16, I stumbled upon a concept that forever altered my
          perspective on the world: the Law of Attraction. The idea that our
          thoughts and intentions have the power to shape our reality captivated
          me from the moment I first encountered it. Since then, I have been
          excited and overwhelmed by its power and the principles it abides by.
          Suffice to say I am a big fan - I&apos;ve come to deeply use and
          appreciate the power of consciously attracting what I need and want,
          and I have pushed this same idea to a lot of people I know.
        </p>
        <p>
          What truly captivates me though is the idea of attracting things{" "}
          <i>unconsciously</i>, of having the universe align with your needs
          even without any conscious effort. There&apos;s a delightful charm to
          stumbling upon something wonderful when you least expect it. And
          that&apos;s precisely what &quot;serendipity&apos; encapsulate - the
          art of finding something valuable or delightful by chance, without
          actively seeking it.
        </p>
        <div>
          Coined by the English author Horace Walpole in 1754,
          &quot;serendipity&quot; comes from the Persian fairy tale &quot;The
          Three Princes of{" "}
          <Tooltip
            element={
              <>
                Serendip refers to the ancient name for Sri Lanka, where the
                adventures in the story take place
              </>
            }
          >
            Serendip
          </Tooltip>
          &quot;. In this story, the protagonists possess an extraordinary skill
          for making fortunate discoveries through accidental means. The princes
          embark on a journey with unexpected twists and turns, stumbling upon
          treasures they were not actively looking for. It&apos;s this sense of
          joyful discovery and unanticipated fortune that captured the
          imagination of readers and gradually seeped the word into everyday
          language.
        </div>
        <p>
          What is truly remarkable about the idea of serendipity, however, is
          its profound impact on human history. Several scientific
          breakthroughs, inventions, and discoveries own their existence to
          serendipitous moments. Take penicillin, for example, discovered by
          Alexander Fleming when he noticed mould growing on a forgotten Petri
          dish that seemed to inhibit the growth of the surrounding bacteria -
          this chance observation revolutionized medicine and saved countless
          lives. The microwave oven is another great example, and I find the
          story so interesting that I decided to add a full excerpt here:
        </p>
        <div className="pl-6 border-l-4 border-stone-800">
          The microwave was invented accidentally in 1945 by a self-taught
          engineer named Percy Spencer, who was leading a radar project for the
          defence giant, Raytheon. While testing a new vacuum tube called a
          magnetron, he discovered that a chocolate bar in his pocket had melted
          from the heat. He decided to try another experiment by placing some
          popcorn kernels near the magnetron, and he watched as the kernels
          popped into fluffy popcorns. Next, Spencer placed an egg near the
          magnetron and the egg began to move from the heat creating pressure
          inside the egg. The egg exploded and Spencer saw that the yoke had
          become hot. He realised that the low-density energy from the magnetron
          could cook food quickly. He created a metal box with an opening
          through which he fed microwave power. The energy was trapped inside
          the box, which created a high-density magnetic field. He placed food
          inside the box, and the heat generated by the energy cooked the food.
          The first microwave oven was born.
          <ReferenceTag
            number={1}
            reference={{
              title: "The Accidental Invention of the Microwave",
              author: "Commercial Microwave Canada",
              publisher: "Celcook",
              href: "https://celcook.ca/the-accidental-invention-of-the-microwave/",
            }}
          />
        </div>
        <p>
          Beyond scientific advancements, serendipity also shapes our personal
          journeys - the chance encounter that turns into a lifelong friendship,
          the unexpected opportunity that alters the course of our careers, or
          even the twists of fate that leads us to find our significant other.
          As we navigate this that we call &quot;life&quot;, let us cherish the
          moments of serendipity that appear in our journey. For in those
          fleeting instances of chance is where we often find the most profound
          lessons, the deepest connections, and the greatest joys. And who
          knows? Your next serendipitous encounter might be just around the
          corner, waiting to unfold its magic in your life, and encouraging us
          all to embrace the unexpected with open arms.
        </p>
        {serendipity.reference && (
          <FoundInBook reference={serendipity.reference} />
        )}
      </div>
    </div>
  );
}
