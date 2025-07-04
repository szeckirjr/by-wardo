import { Book, Word } from "./types";
import itCover from "../public/images/it.png";
import aLittleLifeCover from "../public/images/a_little_life.jpg";
import antimemeticsCover from "../public/images/there_is_no_antimemetics_division.png";
import changeMindCover from "../public/images/how_to_change_your_mind.png";
import daisyJonesCover from "../public/images/daisy_jones_and_the_six.png";
import homoDeusCover from "../public/images/homo_deus.jpg";
import behaveHumanBiologyCover from "../public/images/behave_biology_of_humans.png";

type BookTitles =
  | "it"
  | "a_little_life"
  | "there_is_no_antimemetics_division"
  | "how_to_change_your_mind"
  | "daisy_jones_and_the_six"
  | "homo_deus"
  | "behave_biology_of_humans";

const books: Record<BookTitles, Book> = {
  it: {
    title: "It",
    author: "Stephen King",
    cover: itCover,
  },
  a_little_life: {
    title: "A Little Life",
    author: "Hanya Yanagihara",
    cover: aLittleLifeCover,
  },
  there_is_no_antimemetics_division: {
    title: "There Is No Antimemetics Division",
    author: "qntm",
    cover: antimemeticsCover,
  },
  how_to_change_your_mind: {
    title: "How to Change Your Mind",
    author: "Michael Pollan",
    cover: changeMindCover,
  },
  daisy_jones_and_the_six: {
    title: "Daisy Jones & the Six: A Novel",
    author: "Taylor Jenkins Reid",
    cover: daisyJonesCover,
  },
  homo_deus: {
    title: "Homo Deus: A Brief History of Tomorrow",
    author: "Yuval Noah Harari",
    cover: homoDeusCover,
  },
  behave_biology_of_humans: {
    title: "Behave: The Biology of Humans at Our Best and Worst",
    author: "Robert M. Sapolsky",
    cover: behaveHumanBiologyCover,
  },
};

const allWords: Record<string, Record<string, Word>> = {
  // g: {
  // gook: {
  //   word: "Gook",
  //   phonetic: "[/gook/]",
  //   type: "noun",
  //   definitions: [
  //     "A sloppy wet or viscous substance",
  //     "Also used as a derogatory term for a person of Asian descent",
  //   ],
  //   reference: {
  //     book: books.it,
  //     excerpt: (
  //       <>
  //         The <span className="font-bold">gook</span> in between the two
  //         boards will take most of the water pressure.
  //       </>
  //     ),
  //   },
  // },
  // },
  a: {
    anomalous: {
      word: "Anomalous",
      phonetic: "TODO:",
      type: "adjective",
      definitions: ["Deviating from what is standard, normal, or expected"],
      reference: {
        book: books.there_is_no_antimemetics_division,
        excerpt: (
          <>
            He wakes up in a standard Humanoid Containment Unit, a stackable
            one-bedroom apartment with holographic fake windows, impregnable
            walls and extensive discreed modifications for the security and
            monitoring of <span className="font-bold">anomalous</span> entities.
          </>
        ),
      },
    },
    auspicious: {
      word: "Auspicious",
      phonetic: "TODO:",
      type: "adjective",
      definitions: ["Conductive to success", "Favourable, prosperous"],
      reference: {
        book: books.daisy_jones_and_the_six,
        excerpt: (
          <>
            <span className="font-bold">Nick Harris</span> (rock critic): Their
            self-titled debut was a respectable entrace into the rock scene.
            [...] A little bit folky, very catchy, lots of swagger, big riffs,
            hard drums, and that great Billy Dunne smooth growl. <br /> It was
            an <span className="font-bold">auspicious</span> start.
          </>
        ),
      },
    },
  },
  c: {
    cripes: {
      word: "Cripes",
      phonetic: "[/KRAIPZ/]",
      type: "exclamation",
      definitions: ["Used as an euphemism for Christ"],
      reference: {
        book: books.it,
        excerpt: (
          <>
            Oh, <span className="font-bold">cripes</span>!
          </>
        ),
      },
    },
  },
  d: {
    deportment: {
      word: "Deportment",
      phonetic: "[/dih-PORT-muhnt/]",
      type: "noun",
      definitions: ["The way a person behaves, their manners"],
      reference: {
        book: books.it,
        excerpt: (
          <>
            He knew that Richie got A&apos;s and B&apos;s in his schoolwork, but
            he also knew that Richie regularly got C&apos;s and D&apos;s in{" "}
            <span className="font-bold">deportment</span>.
          </>
        ),
      },
    },
    dote: {
      word: "Dote",
      phonetic: "TODO:",
      type: "verb",
      definitions: [
        "To be extremely and uncritically fond of someone",
        "Adoring",
      ],
      reference: {
        book: books.daisy_jones_and_the_six,
        excerpt: (
          <>
            <span className="font-bold">Daisy:</span> [...] Hank was checking on
            me every day, pretending he was{" "}
            <span className="font-bold">doting</span> on me but really just
            trying to convince me to get to the studio...
          </>
        ),
      },
    },
  },
  i: {
    interstitial: {
      word: "Interstitial",
      phonetic: "[/in-tuhr-STISH-uhl/]",
      type: "adjective",
      definitions: [
        "Of, forming, or occupying interstices (usually a very small space between things)",
      ],
      reference: {
        book: books.a_little_life,
        excerpt: (
          <>
            The stairwells between the floors are densely hung with{" "}
            <span className="font-bold">interstitial</span> pieces, drawings and
            small paintings, studies and experimentations, that JB made between
            bodies of work.
          </>
        ),
      },
      withCustomPage: "/word/interstitial",
    },
    ineffable: {
      word: "Ineffable",
      phonetic: "[/in-EH-fuh-buhl/]",
      type: "adjective",
      definitions: [
        "Too great or extreme to be expressed or described in words",
        "Not to be uttered; taboo",
      ],
      reference: {
        book: books.how_to_change_your_mind,
        excerpt: (
          <>
            <span className="font-bold">Ineffability</span> is of course a
            hallmark of the mystical experience.
          </>
        ),
      },
    },
    incongruously: {
      word: "Incongruously",
      phonetic: "[/in-KON-groo-uhs-lee/]",
      type: "adverb",
      definitions: [
        "In a way that is not in harmony or keeping with the surroundings or other aspects of something",
        "In a way that is inappropriate or out of place",
      ],
      reference: {
        book: books.behave_biology_of_humans,
        excerpt: (
          <>
            [he] describes hearing rumors while in Indonesia that when a
            paramilitary group would arrive to exterminate every person in some
            village, they would,{" "}
            <span className="font-bold">incongruously</span>, bring along a
            traditional gamelan orchestra. [...] Why? Why would you possibly do
            that? The man looked puzzled and gave what seemed to him a
            self-evident answer: &quot;Well, to make it more beautiful.&quot;
          </>
        ),
      },
    },
  },
  j: {
    jibe: {
      word: "Jibe",
      phonetic: "TODO:",
      type: "verb",
      definitions: [
        "Make insulting or mocking remarks",
        "Informally, also to agree",
      ],
      reference: {
        book: books.daisy_jones_and_the_six,
        excerpt: (
          <>
            <span className="font-bold">Billy:</span> Niccolo came down to the
            studio to hear us rehearse a lot. There was one day when Daisy and I
            ... we were rehearsing the vocal harmonies and it wasn&apos;t{" "}
            <span className="font-bold">jibing</span>.
          </>
        ),
      },
    },
  },
  m: {
    memetics: {
      word: "Memetics",
      type: "noun",
      phonetic: "[/muh-MET-iks/]",
      definitions: [
        "Relating to or constituing an element of a culture or system of behaviour that is passed from one individual to another by non-genetic means, especially imitation",
        <>
          <span className="italic">Coloqually,</span> it&apos;s the{" "}
          <span className="font-bold">study of memes </span> (units of culture)
        </>,
      ],
      reference: {
        book: books.there_is_no_antimemetics_division,
        excerpt: (
          <>
            Ironically, the most practical way to do what would be to develop an
            artificial meme. One which encodes the idea that{" "}
            <span className="font-bold">memetics</span> research is
            intrinsically worthless and harmful. Enrich it with religious or
            pseudoscientific virals and release it to the general public. A year
            after it got out we&apos;d be tearing our own labs down.
          </>
        ),
      },
    },
    mire: {
      word: "Mire",
      phonetic: "[/MAIR/]",
      type: "verb",
      definitions: [
        "To involve someone or something in a difficult situation",
        "Also to cover or soil with mud",
      ],
      reference: {
        book: books.behave_biology_of_humans,
        excerpt: (
          <>
            Early in the last century, this emerged as the science of
            &quot;behavior genetics.&quot; As we&apos;ll see, the field has
            often been <span className="font-bold">mired</span> in controversy,
            typically because of disagreements over the magnitude of genetic
            effects on things like IQ or sexual orientation.
          </>
        ),
      },
    },
  },
  p: {
    phenomenology: {
      word: "Phenomenology",
      phonetic: "[/fuh-NOM-uh-NAW-luh-jee/]",
      type: "noun",
      definitions: [
        "The philosophical study of the structures of experience and consciousness",
        "The science of phenomena as disctinct from that of the nature of being",
      ],
      reference: {
        book: books.how_to_change_your_mind,
        excerpt: (
          <>
            Despite his behaviorist orientation as a scientist, Griffiths had
            always been interested in what philosophers call{" "}
            <span className="font-bold">phenomenology</span>-the subjective
            experience of consciousness.
          </>
        ),
      },
    },
  },
  s: {
    scallop: {
      word: "Scallop",
      phonetic: "[/SKA-luhp/]",
      type: "noun",
      definitions: [
        "An edible mollusk with a ribbed shell; they swim by rapidly opening and closing their shells",
        "Each of a series of convex rouded projections forming the edge of a garment/fabric, imitating the shape of a scallop shell",
      ],
      reference: {
        book: books.it,
        excerpt: (
          <>
            They had already done something to the geography of the streambanks,
            Eddie saw: the diverted current was cutting{" "}
            <span className="font-bold">scalloped</span> hollows into them.
          </>
        ),
      },
    },
    sluice: {
      word: "Sluice",
      phonetic: "[/SLOOS/]",
      type: "noun, verb",
      definitions: [
        "A sliding gate or other device for controlling the flow of water, especially one in a lock gate",
        "To wash or rinse freely with a stream or shower of water",
      ],
      reference: {
        book: books.it,
        excerpt: (
          <>
            They sat on the bank and ate, not talking much, watching the water
            stack up behind the dam and{" "}
            <span className="font-bold">sluice</span> around the ends of the
            boards.
          </>
        ),
      },
    },
    stoop: {
      word: "Stoop",
      phonetic: "TODO:",
      type: "noun, verb",
      definitions: [
        "The act of bending one's head/body forward and downwards (also the name for the posture it forms)",
        "A porch with steps in front of a house or building",
      ],
      reference: {
        book: books.daisy_jones_and_the_six,
        excerpt: (
          <>
            <p>
              <span className="font-bold">Daisy:</span> I went back to the
              Marmont. I&apos;d been crying; I had mascara running down my face.
              Hank was waiting for me, sitting on my{" "}
              <span className="font-bold">stoop</span>.
            </p>
            <br />
            <p>
              <span className="font-bold">Billy:</span> We were all loaded up
              and the bus driver pulled out of the driveway and Camila had just
              run down to the front <span className="font-bold">stoop</span> in
              her nightgown.
            </p>
          </>
        ),
      },
    },
    saccharine: {
      word: "Saccharine",
      phonetic: "TODO:",
      type: "adjective",
      definitions: [
        "Excessively sweet or sentimental",
        // TODO: Add the dated fact that this related to containing sugar (sugary) that's why the name
      ],
      reference: {
        book: books.daisy_jones_and_the_six,
        excerpt: (
          <>
            They created a deeply heartfelt call and response–a story of this
            romantic and idealized future that may never come to pass. The song
            verges on being a bit <span className="font-bold">saccharine</span>.
            But the end undercuts the sweetness just enough.
          </>
        ),
      },
    },
    serendipity: {
      word: "Serendipity",
      phonetic: "[/ser-uhn-DIP-uh-tee/]",
      type: "noun",
      element: (
        <>
          <p className="text-xl md:text-2xl">
            <span className="opacity-50">1.</span>The occurrence and development
            of events by chance in a happy or beneficial way
          </p>
        </>
      ),
      reference: {
        book: books.homo_deus,
        excerpt: (
          <>
            Though science owes a huge debt to{" "}
            <span className="font-bold">serendipity</span>, doctors don&apos;t
            just throw different chemicals into test tubes, hoping to chance
            upon some new medicine.
          </>
        ),
      },
      withCustomPage: "/word/serendipity",
    },
    schadenfreude: {
      word: "Schadenfreude",
      phonetic: "[/SHAH-den-froy-duh/]",
      type: "noun",
      definitions: [
        "Pleasure derived by someone from another person's misfortune",
      ],
      reference: {
        book: books.behave_biology_of_humans,
        excerpt: (
          <>
            Furthermore, the brain becomes literal when we do the flip side of
            empathy. It&apos;s painful watching a hated competitor succeed, and
            we activate the ACC at that time. Conversely, if he fails, we gloat,
            feel <span className="font-bold">schadenfreude</span>, get pleasure
            from his pain, and activate dopaminergic reward pathways. Forget
            &quot;Your pain is my pain.&quot; Your pain is my gain.
          </>
        ),
      },
    },
  },
  w: {
    wariness: {
      word: "Wariness",
      phonetic: "[/WEH-ree-ness/]",
      type: "noun",
      definitions: [
        "Caution about possible dangers or problems",
        "The quality of being wary, cautious, or on guard",
      ],
      reference: {
        book: books.it,
        excerpt: (
          <>
            Ben, Eddie saw, was looking at Richie with a mixture of awe and{" "}
            <span className="font-bold">wariness</span>.
          </>
        ),
      },
    },
  },
};

// Export const words that should be used in the app and it has all letters
// and words sorted alphabetically
export const words = Object.keys(allWords)
  .sort()
  .reduce((acc, key) => {
    acc[key] = allWords[key];
    return acc;
  }, {} as Record<string, Record<string, Word>>);

export const letters = Object.keys(words);

export const wordEntries = Object.keys(words).flatMap((letter) =>
  Object.keys(words[letter]).map((slug) => ({
    letter,
    slug,
    word: words[letter][slug],
  }))
);
