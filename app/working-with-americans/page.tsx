import type { Metadata } from "next";
import { Caveat_Brush } from "next/font/google";
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

// The handwriting from the zine. Loaded on this page only.
const hand = Caveat_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caveat-brush",
  display: "swap",
});

const title = "Working with Americans – 4-week starter course | Invisible Rules";
const description =
  "Stop guessing what Americans expect from you, and start feeling at ease at work. A 4-week starter course from 30 November, in a small group, online.";

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
        alt: "Working with Americans: A 4-Week Starter Course. Starts 30 November, online.",
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
    <div className={`${hand.variable} bg-[#fafaf7]`}>
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
      <div className="bg-[#fafaf7]">
        <Footer />
      </div>
    </div>
  );
}
