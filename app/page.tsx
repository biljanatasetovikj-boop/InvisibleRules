import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhoIHelp from "@/components/WhoIHelp";
import HowIWork from "@/components/HowIWork";
import About from "@/components/About";
import ForCompanies from "@/components/ForCompanies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <WhoIHelp />
        <HowIWork />
        <About />
        <ForCompanies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
