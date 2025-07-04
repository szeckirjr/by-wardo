import { Reference } from "@/types";
import classNames from "classnames";
import Image from "next/image";
import { GiBookmarklet } from "react-icons/gi";

export default function FoundInBook({ reference }: { reference: Reference }) {
  const { book, excerpt } = reference;
  const { title, author, cover } = book;

  return (
    <div className="relative w-full font-sans">
      <h4 className="text-gray-800 text-xl font-bold py-2 px-4 rounded w-fit inline-flex flex-row items-center gap-3">
        <GiBookmarklet className="w-5 h-5" />
        Found in a book
      </h4>
      <div
        className={classNames(
          "w-full p-4 rounded-lg flex-col xs:flex-row gap-4 flex"
        )}
      >
        <div className="relative w-full max-w-[100px] h-40">
          <Image
            key={cover.src}
            src={cover}
            alt={title}
            placeholder="blur"
            priority
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div>
          <h4 className="text-2xl font-bold">{title}</h4>
          <p className="text-lg font-bold">{author}</p>
          <i className="text-sm block">&quot;{excerpt}&quot;</i>
        </div>
      </div>
    </div>
  );
}
