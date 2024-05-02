import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import classNames from "classnames";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bah",
  description: "A blog about nothing and everything",
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
          "bg-champagne text-rich-black bg-fuzz bg-blend-multiply",
          inter.className
        )}
      >
        <div className="relative top-0 left-0 w-full h-screen">
          <Header />
          <main className="pb-16 px-6 md:px-8 lg:px-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
