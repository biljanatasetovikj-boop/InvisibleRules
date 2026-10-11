import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ForCompaniesFull from "@/components/ForCompaniesFull";

export const metadata: Metadata = {
  title: "For Companies — Invisible Rules",
  description:
    "How Biljana works with companies on cultural friction inside international teams.",
};

export default function ForCompaniesPage() {
  return (
    <>
      <Nav />
      <main>
        <ForCompaniesFull />
      </main>
      <Footer />
    </>
  );
}
