import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MenuComponent from "@/components/MenuComponent";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Main title",
  description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      General page layout starts
      <MenuComponent/>
      {children}
      General page layout ends
      </body>
    </html>
  );
}
