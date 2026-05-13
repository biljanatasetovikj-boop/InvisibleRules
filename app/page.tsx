import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowIWork from "@/components/HowIWork";
import WhoIHelp from "@/components/WhoIHelp";
import PullQuote from "@/components/PullQuote";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowIWork />
        <WhoIHelp />
        <PullQuote />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
