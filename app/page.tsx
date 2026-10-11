import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowIHelp from "@/components/HowIHelp";
import FreeTools from "@/components/FreeTools";
import WhoIHelp from "@/components/WhoIHelp";
import About from "@/components/About";
import Interviews from "@/components/Interviews";
import ForCompanies from "@/components/ForCompanies";
import PullQuote from "@/components/PullQuote";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhoIHelp />
        <FreeTools />
        <HowIHelp />
        <About />
        <Newsletter />
        <Interviews />
        <PullQuote />
        <Contact />
        <ForCompanies />
      </main>
      <Footer />
    </>
  );
}
