type Word = {
  date?: string;
  word: string;
};

export const words: Record<string, Word> = {
  interstitial: {
    word: "Interstitial",
    date: "2024-04-29",
  },
  serendipity: {
    word: "Serendipity",
    date: "2024-05-03",
  },
  enmeshed: {
    word: "Enmeshed",
  },
  ascribe: {
    word: "Ascribe",
  },
  conjecture: {
    word: "Conjecture",
  },
  stultify: {
    word: "Stultify",
  },

  // wryly: {
  //   word: "Wryly",
  // },
  // serendipity: {
  //   word: "Serendipity",
  // },
  // elated: {
  //   word: "Elated",
  // },
  // juxtaposition: {
  //   word: "Juxtaposition",
  // },
  // effervescent: {
  //   word: "Effervescent",
  // },
  // ineffable: {
  //   word: "Ineffable",
  // },
  // ephemeral: {
  //   word: "Ephemeral",
  // },
  // petrichor: {
  //   word: "Petrichor",
  // },
};

export const wordsList = Object.keys(words);
