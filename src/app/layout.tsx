import type { Metadata } from "next";
import { inter, vidaloka } from "@/fonts";
import "./globals.css";
import classNames from "classnames";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Use locally hosted fonts to avoid external fetches during build

export const metadata: Metadata = {
  title: "Words by Wardo",
  description: "A collection of words I find interesting.",
  authors: {
    url: "https://wardo.dev/",
    name: "Eduardo Szeckir",
  },
  icons: {
    icon: "/favicon_256x256.png",
  },
  openGraph: {
    title: "Words by Wardo",
    description: "A collection of words I find interesting.",
    url: "https://words.wardo.dev",
    siteName: "Words by Wardo",
    images: [
      {
        url: "https://words.wardo.dev/icon.png",
        width: 200,
        height: 200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Words by Wardo",
    description: "A collection of words I find interesting.",
    images: ["https://words.wardo.dev/icon.png"],
    creator: "@szeckirjr",
  },
};

// Local copy of Vidaloka font

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classNames(
          "bg-fuzz_tinted text-rich-black relative min-h-screen w-full max-h-screen flex flex-col bg-blend-multiply",
          inter.className
        )}
      >
        <Header />

        {/* TODO: Add alphabetical navigation links */}
        {/* <div className=" hidden xl:flex flex-col sticky top-32 left-8 w-min">
          {letters.map((letter) => (
            <a
              key={`link-to-${letter}`}
              href={`#${letter}`}
              className={`${vidaloka.className} text-6xl hover:underline`}
            >
              {letter}
            </a>
          ))}
        </div> */}
        <main className="flex flex-row flex-grow h-full overflow-x-clip pb-8 px-6 md:px-8 lg:px-16">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
