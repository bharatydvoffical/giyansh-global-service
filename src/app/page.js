import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Program from "./components/Program";
import Learning from "./components/Learning";
import Benefits from "./components/Benefits";
import Career from "./components/Career";
import Eligibility from "./components/Eligibility";
import Fee from "./components/Fee";
import Admission from "./components/Admission";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Program />
        <Learning />
        <Benefits />
        <Career />
        <Eligibility />
        <Fee />
        <Admission />
        <FAQ />
        <Contact />
        <Footer />
        
      </main>
    </>
  );
}

