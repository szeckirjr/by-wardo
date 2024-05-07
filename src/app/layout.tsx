import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import classNames from "classnames";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Words",
  description: "A collection of words I find interesting.",
  authors: {
    url: "https://wardo.dev/",
    name: "Eduardo Szeckir",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classNames(
          "bg-champagne text-rich-black bg-fuzz min-h-screen relative w-full flex flex-col bg-blend-multiply",
          inter.className
        )}
      >
        <Header />
        <main className="flex-grow h-full pb-8 px-6 md:px-8 lg:px-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
