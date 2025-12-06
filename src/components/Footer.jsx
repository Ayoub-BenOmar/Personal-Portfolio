"use client"

import { useEffect, useState, useRef } from "react"
import "../styles/footer.css"

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={ref} className={`footer ${isVisible ? "fade-in-up" : ""}`}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">GitHub</a>
              </li>
              <li>
                <a href="#">Codepen</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Email</a>
              </li>
              <li>
                <a href="#">Discord</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="line-animation"></div>
          <p>&copy; 2025 Ayoub Benomar. All rights reserved.</p>
          <div className="line-animation"></div>
        </div>
      </div>
    </footer>
  )
}
