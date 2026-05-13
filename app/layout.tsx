import type { Metadata } from "next";
import { Playfair_Display, Lora, Raleway } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-raleway",
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
    <html lang="en" className={`${playfair.variable} ${lora.variable} ${raleway.variable}`} suppressHydrationWarning>
      <body className="bg-white text-[#1a1a1a] antialiased">{children}</body>
    </html>
  );
}
