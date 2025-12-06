import './App.css';
import "./styles/snap-scroll.css";
import React, {useEffect, useRef} from "react";
import Background from "./components/Background";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    // Intersection Observer for scroll animations
    const observerOptions = {
      root: containerRef.current,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(".snap-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      {/* legacy demo markup commented out above */}
      <Background />
      <CustomCursor />
      <Navbar />
      <div className='app-foreground font-sans snap-container' ref={containerRef}>
        <div className="snap-section" id="home">
          <Hero />
        </div>
        <div className="snap-section" id="about">
          <About />
        </div>
        <div className="snap-section" id="skills">
          <Skills />
        </div>
        <div className="snap-section" id="projects">
          <Projects />
        </div>
        <div className="snap-section" id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
