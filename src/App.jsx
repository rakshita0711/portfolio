import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ScrollProgress from "./components/ScrollProgress";
import ScrollTop from "./components/ScrollTop";
import Background from "./components/Background";
import Achievements from "./components/Achievements";


function App() {
  return (
    <div className="bg-slate-950 text-white">

      <Background />

      <ScrollProgress />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Projects />

      <Achievements />

      <Contact />

      <Footer />

      <ScrollTop />

    </div>
  );
}

export default App;