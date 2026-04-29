import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

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
      className={`${inter.variable} ${syne.variable} h-full antialiased`}
    >
      <body className={`${inter.className} min-h-full flex flex-col relative bg-background text-foreground overflow-x-hidden`}>
        <div className="bg-noise" />
        <div className="bg-gradients" />
        {children}
      </body>
    </html>
  );
}
