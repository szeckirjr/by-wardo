import React from "react";
import { vidaloka } from "@/fonts";
import classNames from "classnames";

// Local font defined in src/fonts.ts

export default function About() {
  return (
    <div
      className={classNames(
        "text-lg sm:text-xl flex flex-col gap-4 sm:gap-6 lg:gap-10"
      )}
    >
      <h1
        className={classNames(
          "text-3xl sm:text-4xl text-center",
          vidaloka.className
        )}
      >
        About
      </h1>
      <p>
        This website was created to celebrate <i>words</i>.
      </p>
      <p>
        I am and have always been fascinated by the power of language and
        communication. My innate curiosity about how individual words can
        uniquely shape our conversations and the specific role they play has
        inspired this project.
      </p>
      <p>
        While learning English for the past decade, I have found
        <i> countless</i> words that captivated me - words that mold our
        interactions, thoughts, and understanding in profound ways.
      </p>
      <p>
        As an avid reader and someone who really cherishes the precision and
        artistry of language, I&apos;ll use this space to explore the intriguing
        nuances of English and share some of my favorite words as a foreigner.
        Here, I will try to explore words that do more than convey basic
        information - choosing words that evoke emotions, paint pictures, and
        connect us deeply with others in ways that no other words can express.
      </p>
      <p>
        Each entry here highlights a specific word or phrase, from my first
        encounter with it to its unique meaning and impact. My goal is to
        enhance my own appreciation of language - and hopefully yours too - by
        celebrating its subtleties and power.
      </p>
      <p>
        I welcome you to browse through the entries, engage with the content,
        and discover new words to expand your vocabulary. And in case you are
        already familiar with some of them, perhaps you&apos;ll see them in a
        new light.
      </p>
    </div>
  );
}
