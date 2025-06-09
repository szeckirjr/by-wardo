interface Book {
  type: "book";
  title: string;
  author: string;
  cover: string;
  excerpt: React.ReactNode;
}

export type Reference = Book;

export interface Word {
  word: string;
  phonetic: string;
  type: string;
  element?: React.ReactNode;
  definitions?: string[] | React.ReactNode[];
  reference?: Reference;
}
