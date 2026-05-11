import type { Metadata } from "next";
import { Anton, DM_Sans } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Invisible Rules — Career Advisory for Non-Western Professionals",
  description:
    "Helping non-Western professionals in international organizations close the gap between talent and visibility.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${anton.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="bg-[#FAFAF7] text-[#111111] antialiased">{children}</body>
    </html>
  );
}
