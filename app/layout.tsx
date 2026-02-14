import type { Metadata } from "next";
import { Cinzel, Amiri, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

const hindi = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "700"],
  variable: "--font-hindi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ramadan Calendar 2026 | Prayagraj, UP",
  description: "Modern & Premium Ramadan Calendar 2026 for Prayagraj, Uttar Pradesh, India. Live Countdown, Timings, and Duas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${amiri.variable} ${hindi.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
