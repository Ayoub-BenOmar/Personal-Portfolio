"use client"

import { useEffect, useState, useRef } from "react"
import "../styles/projects.css"

// Import images
import docline from "../assets/pics/docline.png"
import docline1 from "../assets/pics/docline1.png"
import docline2 from "../assets/pics/docline2.png"
import docline3 from "../assets/pics/docline3.png"
import docline4 from "../assets/pics/docline4.png"
import docline5 from "../assets/pics/docline5.png"

import productM from "../assets/pics/productM.png"
import productM1 from "../assets/pics/productM1.png"
import productM2 from "../assets/pics/productM2.png"
import productM3 from "../assets/pics/productM3.png"
import productM4 from "../assets/pics/productM4.png"
import productM5 from "../assets/pics/productM5.png"

import smartShop from "../assets/pics/smartShop.png"

const projectsData = [
  {
    id: 1,
    title: "DocLine",
    description: "A secure web platform for booking medical appointments, designed to streamline patient-doctor interactions and ensure efficient scheduling and management.",
    tags: ["Laravel", "PostgreSQL", "Tailwind CSS", "JavaScript"],
    images: [docline5, docline1, docline2, docline3, docline4, docline],
  },
  {
    id: 2,
    title: "ProdManage",
    description: "A platform for managing products and users, including tracking statuses, handling inventory, and overseeing overall product workflows efficiently.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "TypeScript"],
    images: [productM, productM1, productM2, productM3, productM4, productM5],
  },
  {
    id: 3,
    title: "SmartShop",
    description: "A web-based commercial management app for MicroTech Maroc that lets the admin manage clients, apply progressive loyalty discounts, and process split multi-method payments, with full financial traceability and improved cash flow management.",
    tags: ["Java", "Spring Boot", "Angular", "PostgreSQL"],
    images: [smartShop],
    isActive: true,
  },
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
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

  const toggleProject = (project) => {
    if (selectedProject?.id === project.id) {
      setSelectedProject(null)
    } else {
      setSelectedProject(project)
      setCurrentImageIndex(0)
    }
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length)
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))
    }
  }

  return (
    <section ref={ref} className={`projects ${isVisible ? "fade-in-up" : ""}`}>
      <div className="projects-container">
        <div className="projects-titles">
          {/* <h2 className="section-title">Featured Projects</h2> */}
          <div className="titles-list">
            {projectsData.map((project, index) => (
              <button
                key={project.id}
                onClick={() => toggleProject(project)}
                className={`project-title-btn ${selectedProject?.id === project.id ? "active" : ""} ${
                  isVisible ? "visible" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {project.title}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-details">
          {selectedProject ? (
            <div className={`project-detail-card ${selectedProject ? "show" : ""}`}>
              {/* Image carousel */}
              <div className="detail-image-container">
                <img
                  src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                  alt={selectedProject.title}
                />
                {selectedProject.images.length > 1 && (
                  <>
                    <button className="carousel-arrow prev" onClick={prevImage}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    <button className="carousel-arrow next" onClick={nextImage}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </>
                )}
                <div className="image-counter">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>

              {/* Description */}
              <div className="detail-content">
                <div className="detail-header">
                  <h3>{selectedProject.title}</h3>
                  {selectedProject.isActive && (
                    <div className="active-status">
                      <span className="status-dot"></span>
                      <span className="status-text">Actively working on it</span>
                    </div>
                  )}
                </div>
                <p>{selectedProject.description}</p>
                <div className="detail-tags">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="detail-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="projects-intro">
              <p>Some of my projects</p>
              <span className="intro-accent">Click on a title to explore</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
