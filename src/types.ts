export type Book = {
  title: string;
  author: string;
  cover: string;
};

export interface Reference {
  book: Book;
  excerpt: React.ReactNode;
}

export interface Word {
  word: string;
  phonetic: string;
  type: string;
  element?: React.ReactNode;
  definitions?: string[] | React.ReactNode[];
  reference?: Reference;
  withCustomPage?: string;
}
