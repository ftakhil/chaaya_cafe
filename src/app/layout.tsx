import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chayya | Calicut's Green Sip of Comfort",
  description: "Experience the warmth of Kerala tea culture and Calicut's modern café vibes at Chayya. Handcrafted brews, local bites, and soulful conversations.",
  keywords: ["Calicut Cafe", "Kerala Tea", "Chayya", "Kerala Flavors", "Specialty Coffee Calicut"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased selection:bg-brand-secondary selection:text-brand-deep`}
      >
        {children}
      </body>
    </html>
  );
}
