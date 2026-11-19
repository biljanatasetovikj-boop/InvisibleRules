import type { Metadata } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/working-with-americans/Hero";
import WhoFor from "@/components/working-with-americans/WhoFor";
import Pattern from "@/components/working-with-americans/Pattern";
import Change from "@/components/working-with-americans/Change";
import Course from "@/components/working-with-americans/Course";
import Register from "@/components/working-with-americans/Register";
import AboutShort from "@/components/working-with-americans/AboutShort";
import Webinar from "@/components/working-with-americans/Webinar";

// Loaded on this page only. Newsreader stands in for Editor (a paid font);
// swap it here if Editor is ever licensed.
const editor = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const ui = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const title = "Your First Year Working with Americans – 4-week starter course | Invisible Rules";
const description =
  "Your First Year Working with Americans: a 4-week starter course from 30 November, in a small group, online.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/working-with-americans" },
  openGraph: {
    title,
    description,
    url: "/working-with-americans",
    type: "website",
    images: [
      {
        url: "/working-with-americans/og.jpg",
        width: 1200,
        height: 630,
        alt: "Your First Year Working with Americans. A 4-week starter course, starts 30 November, online.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/working-with-americans/og.jpg"],
  },
};

export default function WorkingWithAmericansPage() {
  return (
    // On wide screens Biljana's pattern fills the sides and the page reads as
    // a clean paper column down the middle, like worksinprogress.co. The
    // pattern only loads when there is room for it.
    <div
      className={`${editor.variable} ${ui.variable} wip bg-wip-paper text-wip-ink min-[1240px]:bg-[url(/working-with-americans/pattern.webp)] min-[1240px]:bg-[length:640px] min-[1240px]:bg-repeat`}
    >
      <div className="relative mx-auto max-w-[1200px] bg-wip-paper min-[1240px]:border-x-2 min-[1240px]:border-wip-ink">
        <Nav />
        <main>
          <Hero />
          <WhoFor />
          <Pattern />
          <Change />
          <Course />
          <Register />
          <AboutShort />
          <Webinar />
        </main>
        <Footer />
      </div>
    </div>
  );
}
