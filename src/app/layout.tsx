import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import classNames from "classnames";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog • By Wardo",
  description: "A blog by Eduardo Szeckir",
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
        className={classNames("bg-champagne text-rich-black", inter.className)}
      >
        <Header />
        <main className="px-16">{children}</main>
      </body>
    </html>
  );
}
