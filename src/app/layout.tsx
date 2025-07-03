import type { Metadata } from "next";
import { Inter, Vidaloka } from "next/font/google";
import "./globals.css";
import classNames from "classnames";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Words",
  description: "A collection of words I find interesting.",
  authors: {
    url: "https://wardo.dev/",
    name: "Eduardo Szeckir",
  },
  icons: {
    icon: "/favicon_256x256.png",
  },
};

const vidaloka = Vidaloka({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classNames(
          "bg-champagne text-rich-black relative bg-fuzz min-h-screen w-full flex flex-col bg-blend-multiply",
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
        <main className="flex flex-row flex-grow h-full pb-8 px-6 md:px-8 lg:px-16">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
