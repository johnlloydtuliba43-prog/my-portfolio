import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";   // ← this line added

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Lloyd Tuliba | Full-Stack Developer",
  description: "Personal portfolio of John Lloyd Tuliba – Full-Stack Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}