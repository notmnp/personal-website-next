"use client"

import { Linkedin, FileText, Mail, Github, GraduationCap, Gamepad2, Train, Sparkles } from 'lucide-react'
import { SiX } from 'react-icons/si'
import { useState, useEffect } from 'react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [lastUpdated, setLastUpdated] = useState<string | null>(null)

  const scrollToSection = (sectionSelector: string) => {
    const targetElement = document.querySelector(sectionSelector) as HTMLElement
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 120
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const fetchLastCommitDate = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/notmnp/personal-website-next/commits/main')
        const data = await response.json()
        
        if (data && data.commit && data.commit.committer) {
          const date = new Date(data.commit.committer.date)
          const formattedDate = date.toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit'
          })

          const formattedTime = date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          })

          setLastUpdated(`${formattedDate} at ${formattedTime}`)
        }
      } catch {
        setLastUpdated("Way Back When")
      }
    }

    fetchLastCommitDate()
  }, [])

  return (
  <footer className="relative overflow-hidden pt-20 pb-8 md:pt-20 md:pb-20">
      <div className="relative z-10 px-6 max-w-6xl mx-auto">
        
        {/* Footer Links */}
        <div className="bg-background/60 dark:bg-background/20 backdrop-blur-3xl border border-border/50 dark:border-white/10 rounded-[2rem] lg:rounded-[2.5rem] shadow-sm p-8 lg:p-12">
          
          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-8">
            
            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Navigation</h3>
              <ul className="grid grid-cols-2 gap-3">
                <li>
                  <a
                    href="#top"
                    onClick={(e) => {
                      e.preventDefault()
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('section')
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Summary
                  </a>
                </li>
                <li>
                  <a 
                    href="#experience" 
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('section:nth-of-type(2)')
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('section:nth-of-type(3)')
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Social & Documents */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Connect</h3>
              <ul className="grid grid-cols-2 gap-3">
                <li>
                  <a 
                    href="https://www.linkedin.com/in/pattni" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="https://x.com/notmnp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <SiX className="w-4 h-4" />
                    X
                  </a>
                </li>
                <li>
                  <a 
                    href="https://drive.google.com/file/d/1PbCPMxl7v5ztaInkgy_vCxyGc2hIEsrI/view?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    Resume
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:mpattni@uwaterloo.ca"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/notmnp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-border/50 dark:border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>Made with ☕️ and 🏓 breaks.</span>
              </div>
              <div className="flex items-center gap-2 text-center md:text-right">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Last Updated: {lastUpdated ? lastUpdated : "Fetching..."}</span>
              </div>
            </div>
            <div className="text-center md:text-right mt-2 text-sm text-muted-foreground">
              © {currentYear} Milan Pattni
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
