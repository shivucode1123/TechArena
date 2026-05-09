import type { Metadata } from "next";
import { Inter, Syne, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechArena - Free Event and Conference Template Replicated",
  description: "Replication of TechArena Framer Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.variable, syne.variable, "font-sans", geist.variable)}
    >
      <body className={`${inter.className} min-h-full flex flex-col relative bg-background text-foreground overflow-x-hidden`}>
        <div className="bg-noise" />
        <div className="bg-gradients" />
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
