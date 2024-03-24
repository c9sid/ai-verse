import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({ style:["normal"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Ai Verse",
  description: "An educational website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <script src="https://cdn.lordicon.com/lordicon.js"></script>
      </head>
      <body className={`${poppins.className} bg-slate-950`}>
        <Navbar />
          {children}
      </body>
    </html>
  );
}
