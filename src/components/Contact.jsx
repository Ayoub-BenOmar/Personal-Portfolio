import React, { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import "../styles/contact.css"

export default function Contact() {
  const form = useRef()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // TODO: Replace these with your actual EmailJS credentials
    // Get them from https://dashboard.emailjs.com/
    const SERVICE_ID = "service_skouwwk"
    const TEMPLATE_ID = "template_g4e0jht"
    const PUBLIC_KEY = "9entw_SdQknVYkltZ"

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!")
          setSubmitted(true)
          setLoading(false)
          setFormData({ name: "", email: "", message: "" })
          setTimeout(() => setSubmitted(false), 3000)
        },
        (error) => {
          console.log("FAILED...", error.text)
          setError("Failed to send message. Please try again.")
          setLoading(false)
        },
      )
  }

  return (
    <section className="min-h-screen bg-transparent text-white py-20 px-4 relative overflow-hidden flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text & Info */}
          <div className="flex flex-col gap-8 text-center md:text-left">
            <div>
              <h2 className="text-5xl font-black text-white leading-tight mb-4">
                Let's Work Together
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                Have a project in mind? I'm always open to discussing new opportunities, creative ideas, or just having a
                chat about technology.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-center md:justify-start gap-4 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-lg font-medium">Agadir, Morocco</span>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-4 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:ayoubbenomar1230@gmail.com" className="text-lg font-medium hover:text-white transition-colors">
                  ayoubbenomar1230@gmail.com
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-4 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-lg font-medium">+212 658818364</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-4 text-green-400 pt-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-lg font-medium">Available for new projects</span>
              </div>
            </div>

            <div className="flex gap-8 pt-4 items-center justify-center md:justify-start">
              <a
                href="https://github.com/Ayoub-BenOmar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ayoub-ben-omar-/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a> */}
              <a
                href="mailto:ayoubbenomar1230@gmail.com"
                className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="relative w-full max-w-md mx-auto md:max-w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl blur opacity-25"></div>
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="relative contact-glass-card space-y-4"
            >
              <div>
                <label className="block text-white font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  name="user_name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="user_email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  rows={3}
                  required
                />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-3 bg-white/10 text-white font-bold rounded-lg border border-white/20 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:bg-white/20 hover:border-white/35 transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : submitted ? "Message Sent! ✓" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
        
      </div>
      <div className="relative mt-10 text-gray-500 text-sm z-50 w-full text-center md:absolute md:bottom-4 md:right-6 md:mt-0 md:w-auto md:text-right">
        <p>&copy; 2025 Ayoub Ben Omar. All rights reserved.</p>
      </div>
    </section>
  )
}
