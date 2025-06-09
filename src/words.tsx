import { Word } from "./types";

export const words: Record<string, Record<string, Word>> = {
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
        type: "book",
        title: "There Is No Antimemetics Division",
        author: "",
        cover: "",
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
  },
  a: {
    aesthetic: {
      word: "Aesthetic",
      type: "adjective",
      phonetic: "[/es-THET-ik/]",
    },
    ambiguous: {
      word: "Ambiguous",
      type: "adjective",
      phonetic: "[/am-BIG-yoo-uhs/]",
    },
    archaic: {
      word: "Archaic",
      type: "adjective",
      phonetic: "[/ahr-KEY-ik/]",
    },
    auspicious: {
      word: "Auspicious",
      type: "adjective",
      phonetic: "[/aw-SPISH-uhs/]",
    },
    axiom: {
      word: "Axiom",
      type: "noun",
      phonetic: "[/AK-see-uhm/]",
    },
    anecdote: {
      word: "Anecdote",
      type: "noun",
      phonetic: "[/AN-ik-doht/]",
    },
    arduous: {
      word: "Arduous",
      type: "adjective",
      phonetic: "[/AHR-joo-uhs/]",
    },
    aptitude: {
      word: "Aptitude",
      type: "noun",
      phonetic: "[/AP-ti-tood/]",
    },
    amorphous: {
      word: "Amorphous",
      type: "adjective",
      phonetic: "[/uh-MAWR-fuhs/]",
    },
    aplomb: {
      word: "Aplomb",
      type: "noun",
      phonetic: "[/uh-PLOM/]",
    },
  },
  b: {
    benevolent: {
      word: "Benevolent",
      type: "adjective",
      phonetic: "[/buh-NEV-uh-luhnt/]",
    },
    banal: {
      word: "Banal",
      type: "adjective",
      phonetic: "[/buh-NAL/]",
    },
    brevity: {
      word: "Brevity",
      type: "noun",
      phonetic: "[/BREV-i-tee/]",
    },
    belligerent: {
      word: "Belligerent",
      type: "adjective",
      phonetic: "[/buh-LIJ-er-uhnt/]",
    },
  },
  c: {
    cacophony: {
      word: "Cacophony",
      type: "noun",
      phonetic: "[/kuh-KOF-uh-nee/]",
    },
    candid: {
      word: "Candid",
      type: "adjective",
      phonetic: "[/KAN-did/]",
    },
    catharsis: {
      word: "Catharsis",
      type: "noun",
      phonetic: "[/kuh-THAHR-sis/]",
    },
    clandestine: {
      word: "Clandestine",
      type: "adjective",
      phonetic: "[/klan-DES-tin/]",
    },
    cognizant: {
      word: "Cognizant",
      type: "adjective",
      phonetic: "[/KOG-ni-zuhnt/]",
    },
    conundrum: {
      word: "Conundrum",
      type: "noun",
      phonetic: "[/kuh-NUHN-druhm/]",
    },
    cynical: {
      word: "Cynical",
      type: "adjective",
      phonetic: "[/SIN-i-kuhl/]",
    },
  },
  d: {
    deleterious: {
      word: "Deleterious",
      type: "adjective",
      phonetic: "[/del-i-TEER-ee-uhs/]",
    },
    dichotomy: {
      word: "Dichotomy",
      type: "noun",
      phonetic: "[/dahy-KOT-uh-mee/]",
    },
    disparate: {
      word: "Disparate",
      type: "adjective",
      phonetic: "[/DIS-puh-rit/]",
    },
    dubious: {
      word: "Dubious",
      type: "adjective",
      phonetic: "[/DOO-bee-uhs/]",
    },
  },
};

export const letters = Object.keys(words);
