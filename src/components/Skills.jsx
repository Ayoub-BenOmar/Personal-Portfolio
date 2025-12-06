"use client"

import { useEffect, useState, useRef } from "react"
import "../styles/skills.css"

const skillsData = {
  Backend: {
    icon: "⚙️",
    skills: [
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "JAVA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    ],
  },
  Frontend: {
    icon: "🎨",
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    ],
  },
  Database: {
    icon: "💾",
    skills: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  Tools: {
    icon: "🛠️",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "UML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unifiedmodelinglanguage/unifiedmodelinglanguage-original.svg" },
      { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    ],
  },
}

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null)
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

  // Handle click outside to close active skill on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeSkill && !event.target.closest('.skill-headline-wrapper')) {
        setActiveSkill(null)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [activeSkill])

  const handleSkillClick = (category) => {
    if (activeSkill === category) {
      setActiveSkill(null)
    } else {
      setActiveSkill(category)
    }
  }

  return (
    <section ref={ref} className="skills">
      <div className="skills-container">
        <div className="headlines-wrapper">
          {Object.entries(skillsData).map(([category, data], index) => (
            <div
              key={category}
              className="skill-headline-wrapper"
              onMouseEnter={() => window.innerWidth > 768 && setActiveSkill(category)}
              onMouseLeave={() => window.innerWidth > 768 && setActiveSkill(null)}
              onClick={() => window.innerWidth <= 768 && handleSkillClick(category)}
            >
              <h3
                className={`skill-headline ${activeSkill === category ? "active" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category}
              </h3>

              <div className={`skill-card ${activeSkill === category ? "visible" : ""}`}>
                {/* <h4 className="card-title">{category}</h4> */}
                <div className="skills-logos">
                  {data.skills.map((skill, i) => (
                    <div key={i} className="skill-logo-item" style={{ animationDelay: `${i * 0.08}s` }}>
                      <div className="logo-placeholder">
                        <img src={skill.icon} alt={skill.name} />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
