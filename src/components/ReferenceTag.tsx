import Tooltip from "./Tooltip";

export type WebsiteRef = {
  title: string;
  author: string;
  publisher: string;
  href: string;
};

export default function ReferenceTag({
  number,
  reference,
}: {
  number: number;
  reference: WebsiteRef;
}) {
  return (
    <Tooltip
      noUnderline
      leftArrow
      element={
        <a href={reference.href} target="_blank" className="text-sm">
          <span className="font-bold">{reference.title}</span> by{" "}
          <span className="font-bold">{reference.author}</span>
          {reference.publisher}
        </a>
      }
    >
      <sup>
        <a
          href={reference.href}
          className="text-zinc-400 hover:text-zinc-500 transition-colors text-sm font-bold"
          target="_blank"
        >
          {number}
        </a>
      </sup>
    </Tooltip>
  );
}
