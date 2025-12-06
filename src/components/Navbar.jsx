"use client"

import { useState, useEffect } from "react"
import "../styles/navbar.css"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const container = document.querySelector('.snap-container');
    const handleScroll = () => {
      if (container) {
        setScrolled(container.scrollTop > 50);
      } else {
        setScrolled(window.scrollY > 50);
      }
    }

    if (container) {
      container.addEventListener("scroll", handleScroll);
    } else {
      window.addEventListener("scroll", handleScroll);
    }
    
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    }
  }, [])

  const sections = ["About", "Skills", "Projects", "Contact"]

  const handleNavClick = (section) => {
    const element = document.getElementById(section.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/cv.pdf"
    link.download = "Ayoub_CV.pdf"
    link.click()
  }

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-logo" onClick={() => handleNavClick("home")} style={{ cursor: "pointer" }}>
        <span className="logo-text">Ayoub.</span>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center">
        {sections.map((section) => (
          <button key={section} className="nav-link" onClick={() => handleNavClick(section)}>
            {section}
          </button>
        ))}
      </div>

      {/* CV Download Button */}
      <div className="navbar-right">
        <button className="cv-button" onClick={handleDownloadCV}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <line x1="10" y1="9" x2="8" y2="9" />
          </svg>
          Download CV
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {sections.map((section) => (
            <button key={section} className="mobile-nav-link" onClick={() => handleNavClick(section)}>
              {section}
            </button>
          ))}
          <button className="mobile-cv-button" onClick={handleDownloadCV}>
            Download CV
          </button>
        </div>
      )}
    </nav>
  )
}
