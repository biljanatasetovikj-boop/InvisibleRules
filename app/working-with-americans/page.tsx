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

const title = "Your First Years Working with Americans – 4-week starter course | Invisible Rules";
const description =
  "Your First Years Working with Americans: a 4-week starter course from 30 November, in a small group, online.";

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
        alt: "Your First Years Working with Americans. A 4-week starter course, starts 30 November, online.",
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
    // The page is one paper column. A background pattern for the sides can go
    // on the outer div (see git history for how the earlier ones were done).
    <div
      className={`${editor.variable} ${ui.variable} wip bg-wip-paper text-wip-ink`}
    >
      <div className="relative mx-auto max-w-[1200px] bg-wip-paper">
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
