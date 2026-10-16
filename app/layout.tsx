import type { Metadata } from "next";
import { Archivo, Public_Sans, Sorts_Mill_Goudy } from "next/font/google";
import Header from "@/components/layout/Header";
import SiteFooter from "@/components/layout/SiteFooter";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const sortsMillGoudy = Sorts_Mill_Goudy({
  variable: "--font-sorts-mill-goudy",
  subsets: ["latin"],
  weight: "400",
});

const archivo = Archivo({
  variable: "--font-archivo-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: { default: "McLeod Family Office | Enterprise, Capital & Continuity", template: "%s | McLeod Family" },
  description: "McLeod Family",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${publicSans.variable} ${sortsMillGoudy.variable} ${archivo.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1 bg-spring-wood">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
