"use client"

import { useEffect, useState, useRef } from "react"
import arrowIcon from "../assets/arrow.svg"
import "../styles/about.css"

export default function About() {
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
    <section ref={ref} className={`about ${isVisible ? "fade-in-up" : ""}`}>
      <div className="container">
        <div className="about-content">
          <div className="about-left">
            <h1 className="about-name">Ayoub Ben Omar</h1>
            <h2 className="about-role">Full stack web developer</h2>
            <div className="read-more">
              <span>Read more about me</span>
              <img src={arrowIcon} alt="arrow" className="arrow-icon" />
            </div>
          </div>
          <div className="about-right">
            <p>
              I’m a 25-year-old developer from Morocco, passionate about creating clean, thoughtful, and user-friendly digital experiences. I started coding two years ago, and since then, I’ve dedicated myself to learning and growing in a fast-paced, project-driven environment.
            </p>
            <p>
              I thrive in Agile Scrum settings, where we build and deliver complete projects every week from scratch — from conception and design to development, testing, and presentation. This experience has helped me develop strong problem-solving skills, adaptability, and the ability to collaborate efficiently within a team while taking ownership of my work.
            </p>
			<p>
				Outside of coding, I enjoy spending time at the beach, sipping coffee, and playing games. These activities help me recharge, stay inspired, and approach my work with creativity and focus.
			</p>
            {/* <div className="about-stats">
              <div className={`stat ${isVisible ? "stat-visible" : ""}`}>
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className={`stat ${isVisible ? "stat-visible" : ""}`}>
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div>
              <div className={`stat ${isVisible ? "stat-visible" : ""}`}>
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
