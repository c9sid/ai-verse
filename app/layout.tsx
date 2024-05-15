import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

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
      <body className={`${poppins.className} bg-slate-950`}>
        <Navbar />
          {children}
          <Analytics />
          <Toaster position="top-center" reverseOrder={false} />
        <Footer />
      </body>
    </html>
  );
}
