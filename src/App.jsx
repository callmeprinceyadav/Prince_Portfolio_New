import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SkillsAndTools from "./components/SkillsAndTools";

function App() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <Navbar />
      <main className="px-4 md:px-16 max-w-6xl mx-auto">
        <AnimatePresence>
          <Hero key="hero" />
          <About key="about" />
          <SkillsAndTools key="skills" />
          <Projects key="projects" />
          <Contact key="contact" />
        </AnimatePresence>
      </main>
    </div>
  );
}
export default App;
