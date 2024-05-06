"use client";
import { Reference } from "@/types";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import { GiBookmarklet } from "react-icons/gi";

export default function FoundInBook({ reference }: { reference: Reference }) {
  const { title, author, excerpt, cover } = reference;

  return (
    <div className="relative w-fit group mb-64">
      <button className="hover:underline text-gray-800 text-xl font-bold py-2 px-4 rounded w-fit inline-flex flex-row items-center gap-3">
        <GiBookmarklet className="w-5 h-5" />
        Found in a book
      </button>
      <div
        className={classNames(
          "xs:w-96 sm:w-[32rem] p-4 rounded-lg absolute flex-col xs:flex-row gap-4 flex"
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/by-wardo/${cover}`}
          alt={title}
          className=" h-full w-[120px] opacity-20 group-hover:opacity-100 duration-200"
        />
        <div>
          <h4 className="text-2xl font-bold opacity-0 group-hover:opacity-100">
            {title}
          </h4>
          <p className="text-lg font-bold opacity-0 group-hover:opacity-100">
            {author}
          </p>
          <i className="text-md hidden group-hover:block">
            &quot;{excerpt}&quot;
          </i>
        </div>
      </div>
    </div>
  );
}
