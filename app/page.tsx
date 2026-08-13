import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowIWork from "@/components/HowIWork";
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
        <Problem />
        <HowIWork />
        <WhoIHelp />
        <About />
        <Interviews />
        <Newsletter />
        <ForCompanies />
        <PullQuote />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
