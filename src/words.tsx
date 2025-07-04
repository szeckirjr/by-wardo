import { Book, Word } from "./types";
import itCover from "../public/images/it.png";
import aLittleLifeCover from "../public/images/a_little_life.jpg";
import antimemeticsCover from "../public/images/there_is_no_antimemetics_division.png";
import changeMindCover from "../public/images/how_to_change_your_mind.png";
import daisyJonesCover from "../public/images/daisy_jones_and_the_six.png";
import homoDeusCover from "../public/images/homo_deus.jpg";
import behaveHumanBiologyCover from "../public/images/behave_biology_of_humans.png";
import whenBreathBecomesAirCover from "../public/images/when_breath_becomes_air.png";

type BookTitles =
  | "it"
  | "a_little_life"
  | "there_is_no_antimemetics_division"
  | "how_to_change_your_mind"
  | "daisy_jones_and_the_six"
  | "homo_deus"
  | "behave_biology_of_humans"
  | "when_breath_becomes_air";

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
  when_breath_becomes_air: {
    title: "When Breath Becomes Air",
    author: "Paul Kalanithi",
    cover: whenBreathBecomesAirCover,
  },
};

const allWords: Record<string, Record<string, Word>> = {
  a: {
    anomalous: {
      word: "Anomalous",
      phonetic: "[/uh-NOM-uh-luhs/]",
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
      phonetic: "[/aw-SPISH-uhs/]",
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
    apostasy: {
      word: "Apostasy",
      phonetic: "[/uh-POS-tuh-see/]",
      type: "noun",
      definitions: [
        "The abandonment or renunciation of a religious or political belief or principle",
      ],
      reference: {
        book: books.when_breath_becomes_air,
        excerpt: (
          <>
            MRIs for back pain are expensive, and unnecessary imaging had lately
            become a major national point of cost-saving emphasis. But the value
            of a scan also depends on what you are looking for: X-rays are
            largely useless for cancer. Still, for many docs, ordering an MRI at
            this early stage is <span className="font-bold">apostasy</span>.
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
    commiserate: {
      word: "Commiserate",
      phonetic: "[/kuh-MIZ-uh-reyt/]",
      type: "verb",
      definitions: [
        "To express or feel sympathy or pity; sympathize",
        "To share in someone's sorrow or disappointment",
      ],
      reference: {
        book: books.when_breath_becomes_air,
        excerpt: (
          <>
            I wanted to tell him that a famous writer,{" "}
            <span className="font-bold">commiserating</span> about this eternal
            problem, once said to me, &quot;If I were a neurosurgeon and I
            announced that I had to leave my guests to go in for an emergency
            craniotomy, no one would say a word. But if I said I needed to leave
            the guests in the living room to go upstairs to <i>write...</i>
            &quot; I wondered if Paul would have found this funny.
          </>
        ),
      },
    },
    concomitant: {
      word: "Concomitant",
      phonetic: "[/kon-KOM-i-tuhnt/]",
      type: "adjective, noun",
      definitions: [
        "adj. naturally accompanying or associated with something",
        "n. a phenomenon that naturally accompanies or follows something else",
      ],
      reference: {
        book: books.when_breath_becomes_air,
        excerpt: (
          <>
            It was becoming clear that learning to be a doctor in practice was
            going to be very different education from being a medical student in
            the classroom. Reading books and answering multiple-choice questions
            bore little resemblance to taking action, with its{" "}
            <span className="font-bold">concomitant</span> responsibility.
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
      phonetic: "[/doht/]",
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
    dehiscent: {
      word: "Dehiscent",
      phonetic: "[/dih-HIS-uhnt/]",
      type: "adjective (technical)",
      definitions: ["Opening or bursting along a seam or natural line"],
      reference: {
        book: books.when_breath_becomes_air,
        excerpt: (
          <>
            Called out of the OR, I stitched the{" "}
            <span className="font-bold">dehiscent</span> wound as he yelped in
            pain, telling myself he&apos;d had it coming. <br /> Nobody has it
            coming.
          </>
        ),
      },
    },
    despondency: {
      word: "Despondency",
      phonetic: "[/dih-SPON-duhn-see/]",
      type: "noun",
      definitions: ["A state of low spirits caused by loss of hope or courage"],
      reference: {
        book: books.when_breath_becomes_air,
        excerpt: (
          <>
            One evening in my third year, I ran into Jeff, my friend in general
            surgery, a similarly intense and demanding profession. We each noted
            the other&apos;s <span className="font-bold">despondency</span>.
          </>
        ),
      },
    },
  },
  e: {
    epitomize: {
      word: "Epitomize",
      phonetic: "[/ih-PIT-uh-mahyz/]",
      type: "verb",
      definitions: [
        "To be a perfect example of something",
        "Or to give a summary of something",
      ],
      reference: {
        book: books.when_breath_becomes_air,
        excerpt: (
          <>
            Cadaver dissection <span className="font-bold">epitomizes</span>,
            for many, the transformation of the somber, respectful student into
            the callous, arrogant doctor.
            <br />
            <br />
            Paul&apos;s decision not to avert his eyes from death{" "}
            <span className="font-bold">epitomizes</span> a fortitude we
            don&apos;t celebrate enough in our death-avoidant culture.
          </>
        ),
      },
    },
    esoteric: {
      word: "Esoteric",
      phonetic: "[/ES-uh-TER-ik/]",
      type: "adjective",
      definitions: [
        "Intended for or likely to be understood by only a small number of people with a specialized knowledge or interest",
      ],
      reference: {
        book: books.when_breath_becomes_air,
        excerpt: (
          <>
            Any major illness transforms a patient&apos;s - really, an entire
            family&apos;s - life. But brain diseases have the additional
            strangeness of the <span className="font-bold">esoteric</span>. A
            son&apos;s death already defies the parents&apos; ordered universe;
            how much more incromprehensible is it when the patient is
            brain-dead, his body warm, his heart still beating?
          </>
        ),
      },
    },
    expediency: {
      word: "Expediency",
      phonetic: "[/ik-SPEED-ee-uhn-see/]",
      type: "noun",
      definitions: [
        "The quality of being convenient and practical despite possibly being improper or immoral",
        "Convenience or practicality",
      ],
      reference: {
        book: books.when_breath_becomes_air,
        excerpt: (
          <>
            When I mentioned that we&apos;d rather minimize how many embryos
            were created and destroyed, she looked slightly confused. Most
            people who came here prized{" "}
            <span className="font-bold">expedience</span> above all.
          </>
        ),
      },
    },
  },
  g: {
    gall: {
      word: "Gall",
      phonetic: "[/gawl/]",
      type: "verb",
      definitions: ["To irritate or annoy someone", "To make sore by rubbing"],
      reference: {
        book: books.when_breath_becomes_air,
        excerpt: (
          <>
            Even if donors were informed enough - and they might well have been,
            notwithstanding one anatomy professor&apos;s hedging - it
            wasn&apos;t so much the thought of being dissected that{" "}
            <span className="font-bold">galled</span>. It was the thought of
            your mother, your father, your grandparents being hacked to pieces
            by wisecracking twent-two-year-old medical students.
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
    inviolable: {
      word: "Inviolable",
      phonetic: "[/in-VAI-uh-luh-buhl/]",
      type: "adjective",
      definitions: ["Never to be broken, infringed, or dishonoured"],
      reference: {
        book: books.when_breath_becomes_air,
        excerpt: (
          <>
            Neurosurgery requires a commitment to one&apos;s own excellence and
            a commitment to another&apos;s identity. The decision to operate at
            all involves an appraisal of one&apos;s own abilities, as well as a
            deep sense of who the patient is and what she holds dear. Certain
            brain areas are considered near-
            <span className="font-bold">inviolable</span>, like the primary
            motor cortex, damage to which results in paralysis of affected body
            parts.
          </>
        ),
      },
    },
  },
  j: {
    jibe: {
      word: "Jibe",
      phonetic: "[/JAI-b/]",
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
    judicious: {
      word: "Judicious",
      phonetic: "[/joo-DISH-uhs/]",
      type: "adjective",
      definitions: ["Having, showing, or done with good judgment or sense"],
      reference: {
        book: books.when_breath_becomes_air,
        excerpt: (
          <>
            Knowing you need to be <span className="font-bold">judicious</span>{" "}
            when pulling on the head [of a baby] to facilitate delivery of the
            shoulder is not the same as doing it.
          </>
        ),
      },
    },
  },
  k: {
    kinship: {
      word: "Kinship",
      phonetic: "[/KIN-ship/]",
      type: "noun",
      definitions: [
        "Blood relationship",
        "A sharing of characteristics or origins",
      ],
      reference: {
        book: books.when_breath_becomes_air,
        excerpt: (
          <>
            I told this story as if to distance myself from it, but my{" "}
            <span className="font-bold">kinship</span> was undeniable. [...]
            Even working on the dead, with their faces covered, their names a
            mystery, you find that their humanity pops up at you...
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
    prosody: {
      word: "Prosody",
      phonetic: "[/PROS-uh-dee/]",
      type: "noun",
      definitions: [
        "The patterns of rhythm and sound used in poetry",
        "The patterns of stress and intonation in a language",
      ],
      reference: {
        book: books.when_breath_becomes_air,
        excerpt: (
          <>
            The tumor had interrupted his speech circuitry, so he could speak
            only in streams of numbers, but he still had{" "}
            <span className="font-bold">prosody</span>, he could still emote:
            smile, scowl, sigh.
          </>
        ),
      },
    },
    peat: {
      word: "Peat",
      phonetic: "[/PEET/]",
      type: "noun",
      definitions: [
        "A type of soil that is made up of decayed plant material, found in wetlands",
      ],
      reference: {
        book: books.when_breath_becomes_air,
        excerpt: (
          <>
            The traditional cancer narrative - that one ought to recede, spend
            time with family, and settle one&apos;s toes in the{" "}
            <span className="font-bold">peat</span> - was one option.
          </>
        ),
      },
    },
    pore: {
      word: "Pore",
      phonetic: "[/POHR/]",
      type: "verb",
      definitions: ["To be absorbed in reading or studying something"],
      reference: {
        book: books.when_breath_becomes_air,
        excerpt: (
          <>
            I spent the night prior <span className="font-bold">poring</span>{" "}
            through surgical textbooks, reviewing the anatomy and steps of the
            operation.
          </>
        ),
      },
    },
  },
  r: {
    rote: {
      word: "Rote",
      phonetic: "[/ROHT/]",
      type: "noun",
      definitions: [
        "Mechanical or habitual repetition of something to be learned",
      ],
      reference: {
        book: books.when_breath_becomes_air,
        excerpt: (
          <>
            I feared I was on the way to becoming Tolstoy&apos;s stereotype of a
            doctor, preoccupied with empty formalism, focused on the{" "}
            <span className="font-bold">rote</span> treatment of disease – and
            utterly missing the larger human significance.
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
        "n. A sliding gate or other device for controlling the flow of water, especially one in a lock gate",
        "v. To wash or rinse freely with a stream or shower of water",
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
      phonetic: "[/stoop/]",
      type: "verb, noun",
      definitions: [
        "v. The act of bending one's head/body forward and downwards (also the name for the posture it forms)",
        "n. A porch with steps in front of a house or building",
      ],
      reference: {
        book: books.daisy_jones_and_the_six,
        excerpt: (
          <>
            <span className="font-bold">Daisy:</span> I went back to the
            Marmont. I&apos;d been crying; I had mascara running down my face.
            Hank was waiting for me, sitting on my{" "}
            <span className="font-bold">stoop</span>.
            <br />
            <br />
            <span className="font-bold">Billy:</span> We were all loaded up and
            the bus driver pulled out of the driveway and Camila had just run
            down to the front <span className="font-bold">stoop</span> in her
            nightgown.
          </>
        ),
      },
    },
    saccharine: {
      word: "Saccharine",
      phonetic: "[/SAK-uh-ruhn/]",
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
    sinew: {
      word: "Sinew",
      phonetic: "[/SIN-oo/]",
      type: "noun",
      definitions: [
        "A piece of tough fibrous tissue uniting muscle to bone; a tendon or ligament",
        "Parts of a structure, system, or organization that give it strength or bind it together",
      ],
      reference: {
        book: books.when_breath_becomes_air,
        excerpt: (
          <>
            The scalpel is so sharp it doesn&apos;t so much cut the skin as
            unzip it, revealing the hidden and forbidden{" "}
            <span className="font-bold">sinew</span> beneath, and despite your
            preparation, you are caught unawares, ashamed and excited.
          </>
        ),
      },
    },
    sojourn: {
      word: "Sojourn",
      phonetic: "[/SOH-jurn/]",
      type: "noun, verb",
      definitions: ["n. A temporary stay", "v. To stay somewhere temporarily"],
      reference: {
        book: books.when_breath_becomes_air,
        excerpt: (
          <>
            During my <span className="font-bold">sojourn</span> in ironclad
            atheism, the primary arsenal leveled against Christinianity had been
            its failure on empirical grounds.
          </>
        ),
      },
    },
  },
  t: {
    truculent: {
      word: "Truculent",
      phonetic: "[/TRUHK-yuh-luhnt/]",
      type: "adjective",
      definitions: ["Eager or quick to argue or fight; aggressively defiant"],
      reference: {
        book: books.when_breath_becomes_air,
        excerpt: (
          <>
            I rushed through her questions, assured her that surgery would be a
            success, and assured myself that there wasn&apos;t enough time to
            answer her questions fairly.{" "}
            <i>But why didn&apos;t I make the time?</i> A{" "}
            <span className="font-bold">truculent</span> vet refused the advice
            and coaxing of doctors, nurses, and physical therapists for weeks;
            as a result, his back wound broke down, just as we had warned him it
            would.
          </>
        ),
      },
    },
  },
  u: {
    undergrid: {
      word: "Undergrid",
      phonetic: "[/UHN-der-grid/]",
      type: "verb",
      definitions: [
        "To support or strengthen from below",
        "To secure or fasten from the underside",
      ],
      reference: {
        book: books.when_breath_becomes_air,
        excerpt: (
          <>
            I had come to see language as an almost supernatural force, existing
            between people, bringing our brains, shielded in centimeter-thick
            skulls, into communion. A word meant something only between people,
            and life&apos;s meaning, its virtue, had something to do with the
            depth of the relationships we form. It was the relational aspect of
            humans – i.e., &quot;human relationality&apos; – that{" "}
            <span className="font-bold">undergrided</span> meaning.
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
  .reduce((acc, letter) => {
    const sortedWords = Object.keys(allWords[letter])
      .sort()
      .reduce((letterAcc, wordKey) => {
        letterAcc[wordKey] = allWords[letter][wordKey];
        return letterAcc;
      }, {} as Record<string, Word>);
    acc[letter] = sortedWords;
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
