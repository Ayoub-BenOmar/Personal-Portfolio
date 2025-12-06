"use client"

import { useEffect, useState } from "react"
import "../styles/hero.css"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [fontIndex, setFontIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const fullText = "Web Developer"
  const fonts = ["font-serif", "font-sans", "font-mono", "font-display"]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    let timer

    if (!isDeleting) {
      // Typing phase
      if (typedText.length < fullText.length) {
        timer = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length + 1))
        }, 100)
      } else {
        // Pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
      }
    } else {
      // Deleting phase
      if (typedText.length > 0) {
        timer = setTimeout(() => {
          setTypedText(typedText.slice(0, typedText.length - 1))
        }, 80)
      } else {
        // Switch to next font and start typing again
        setFontIndex((prev) => (prev + 1) % fonts.length)
        setIsDeleting(false)
      }
    }

    return () => clearTimeout(timer)
  }, [typedText, isDeleting, fullText, fonts.length])

  return (
    <section className={`hero ${isVisible ? "fade-in-up" : ""}`}>
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-subtitle">Hey, I'm Ayoub</p>
          <h1 className={`hero-title typing-title ${fonts[fontIndex]}`}>
            {typedText}
            <span className="typing-cursor"></span>
          </h1>
          <p className="hero-description">Welcome to my personal portfolio.</p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </button>
          </div>
        </div>
      </div>
      {/* <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div> */}
    </section>
  )
}
