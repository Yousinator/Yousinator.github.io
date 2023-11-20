import { useState, useEffect } from "react";
import "./index.css";
import ScrollReveal from "scrollreveal";
import Landing from "./pages/Landing";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Expertise from "./pages/Expertise";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Projects from "./pages/Projects";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Initialize ScrollReveal with your configuration
    ScrollReveal({
      reset: false,
      distance: "80px",
      duration: 2000,
      delay: 200,
    });

    // Reveal elements with specific origins
    ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
    ScrollReveal().reveal(
      ".home-img, .services-container, .projects-box, .contact form, .timeline",
      { origin: "bottom" }
    );
    ScrollReveal().reveal(".home-content h1, .about-img, .container.left", {
      origin: "left",
    });
    ScrollReveal().reveal(".home-content p, .about-content, .container.right", {
      origin: "right",
    });
  }, []); // Empty dependency array ensures that this effect runs once when the component mounts

  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <section className="home" id="home">
        <Landing />
      </section>
      <section className="about" id="about">
        <About />
      </section>
      <section className="timeline-section" id="timeline-section">
        <Experience />
      </section>
      <section className="services" id="services">
        <Expertise />
      </section>
      <section className="projects" id="projects">
        <Projects />
      </section>
      <section className="contact" id="contact">
        <Contact />
      </section>
      <footer className="footer" id="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
