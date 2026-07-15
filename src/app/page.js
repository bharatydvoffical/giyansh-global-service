import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Program from "./components/Program";
import Learning from "./components/Learning";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";

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
        <Contact />
        
      </main>
    </>
  );
}

