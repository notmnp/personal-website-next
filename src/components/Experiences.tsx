"use client"

import { Calendar, MapPin, Briefcase, TrendingUp, Building2, Code2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export function Experiences() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [selectedCompany, setSelectedCompany] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [nextCompany, setNextCompany] = useState(0)
  const [isEntering, setIsEntering] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const experiences = [
    {
      id: "8090",
      company: "8090 Solutions",
      logo: theme === 'light' ? '/logo_8090_dark.svg' : '/logo_8090.svg',
      position: "AI Software Engineering Intern",
      duration: "May 2025 - Aug 2025",
      location: "Menlo Park, California",
      description: "Building AI systems and integrating LLMs to enhance enterprise solutions.",
      isUpcoming: true,
      companyType: "Startup",
      focus: "AI Infrastructure",
      technologies: ["Python", "TypeScript", "FastAPI", "AWS", "Docker", "Postgres"],
      accentColor: "blue"
    },
    {
      id: "rtx", 
      company: "Pratt & Whitney",
      logo: theme === 'light' ? '/logo_rtx_dark.svg' : '/logo_rtx.svg',
      position: "Software Engineering Intern",
      duration: "Sep 2024 - Dec 2024",
      location: "Toronto, Ontario",
      description: "Developed full-stack internal tools, optimized SQL queries, and improved backend efficiency.",
      isUpcoming: false,
      companyType: "Aerospace",
      focus: "Full-Stack",
      technologies: ["PHP", "JavaScript", "Postgres", "AJAX", "Symfony", "Twig"],
      accentColor: "slate"
    },
    {
      id: "td",
      company: "TD Bank", 
      logo: theme === 'light' ? '/logo_td_dark.svg' : '/logo_td.svg',
      position: "Software Engineering Intern",
      duration: "Jan 2024 - Apr 2024",
      location: "Toronto, Ontario",
      description: "Designed TypeScript microapps, built REST APIs, and streamlined asset loading.",
      isUpcoming: false,
      companyType: "Financial",
      focus: "Full-Stack",
      technologies: ["TypeScript", "React", "Java", "REST API", "Jira", "Confluence"],
      accentColor: "emerald"
    }
  ]

  const handleCompanySelect = (index: number) => {
    if (index === selectedCompany) return
    
    setNextCompany(index)
    setIsAnimating(true)
    
    // After the exit animation, switch content and start enter animation
    setTimeout(() => {
      setSelectedCompany(index)
      setIsEntering(true)
      // Brief delay to ensure the content has switched, then start enter animation
      setTimeout(() => {
        setIsAnimating(false)
        setIsEntering(false)
      }, 50)
    }, 350)
  }

  const getSelectedStyles = (index: number, accentColor: string) => {
    if (selectedCompany !== index) return ""
    
    switch (accentColor) {
      case "blue": return "ring-2 ring-blue-500/40 bg-blue-500/10 border-blue-500/30"
      case "slate": return "ring-2 ring-slate-500/40 bg-slate-500/10 border-slate-500/30"
      case "emerald": return "ring-2 ring-emerald-500/40 bg-emerald-500/10 border-emerald-500/30"
      default: return "ring-2 ring-zinc-500/40 bg-zinc-500/10 border-zinc-500/30"
    }
  }

  const currentExperience = experiences[isEntering ? nextCompany : selectedCompany]

  if (!mounted) return null

  return (
    <section className="relative overflow-hidden pb-20 pt-0">
      <div className="relative z-10 px-6 max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-6 h-6 text-muted-foreground" />
          <h3 className="text-2xl font-semibold text-foreground">Work Experience</h3>
        </div>

        {/* Mobile Company Selection */}
        <div className="mb-8 lg:hidden">
          <div className="bg-background/60 dark:bg-background/20 backdrop-blur-3xl border border-border/50 dark:border-white/10 rounded-[2rem] lg:rounded-[2.5rem] shadow-sm p-6">
            <div className="flex items-center justify-center gap-4">
              {experiences.map((exp, index) => (
                <button
                  key={exp.id}
                  onClick={() => handleCompanySelect(index)}
                  className={`w-18 h-18 rounded-xl flex items-center justify-center p-3 border-2 transition-all duration-200 ${
                    selectedCompany === index 
                      ? getSelectedStyles(index, exp.accentColor)
                      : 'border-border/50 dark:border-white/10 bg-muted/50 dark:bg-white/5 hover:bg-muted/70 dark:hover:bg-white/10 hover:border-border dark:hover:border-white/20'
                  }`}
                >
                  <Image 
                    src={exp.logo} 
                    alt={`${exp.company} logo`}
                    width={72}
                    height={72}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="flex gap-8">
          
          {/* Vertical Sidebar - Desktop only */}
          <div className="hidden lg:block">
            <div className="bg-background/60 dark:bg-background/20 backdrop-blur-3xl border border-border/50 dark:border-white/10 rounded-[2rem] lg:rounded-[2.5rem] shadow-sm p-6 h-full">
              <div className="flex flex-col space-y-8">
                {experiences.map((exp, index) => (
                  <button
                    key={exp.id}
                    onClick={() => handleCompanySelect(index)}
                    className={`w-18 h-18 rounded-xl flex items-center justify-center p-3 border-2 transition-all duration-200 ${
                      selectedCompany === index 
                        ? getSelectedStyles(index, exp.accentColor)
                        : 'border-border/50 dark:border-white/10 bg-muted/50 dark:bg-white/5 hover:bg-muted/70 dark:hover:bg-white/10 hover:border-border dark:hover:border-white/20'
                    }`}
                  >
                    <Image 
                      src={exp.logo} 
                      alt={`${exp.company} logo`}
                      width={72}
                      height={72}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            <div 
              key={selectedCompany} 
              className={`bg-background/60 dark:bg-background/20 backdrop-blur-3xl border border-border/50 dark:border-white/10 rounded-[2rem] lg:rounded-[2.5rem] shadow-sm p-6 lg:p-8 transition-all duration-500 ease-in-out ${
                isAnimating 
                  ? 'opacity-0 translate-y-8' 
                  : isEntering 
                    ? 'opacity-0 translate-y-8' 
                    : 'opacity-100 translate-y-0'
              }`}
            >
              
              {/* Company Header */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="hidden sm:flex w-16 h-16 bg-muted/50 dark:bg-white/5 rounded-xl items-center justify-center p-3 flex-shrink-0">
                  <Image 
                    src={currentExperience.logo} 
                    alt={`${currentExperience.company} logo`}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xl font-bold text-foreground mb-1">{currentExperience.company}</h4>
                  <p className="text-lg font-semibold text-foreground">
                    {currentExperience.position}
                  </p>
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-muted/50 dark:bg-white/5 rounded-xl border border-border/30 dark:border-white/5 p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Building2 className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-bold text-foreground">{currentExperience.companyType}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Industry</div>
                </div>
                <div className="bg-muted/50 dark:bg-white/5 rounded-xl border border-border/30 dark:border-white/5 p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-bold text-foreground">{currentExperience.focus}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Focus Area</div>
                </div>
              </div>

              {/* Duration and Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-muted/50 dark:bg-white/5 rounded-xl border border-border/30 dark:border-white/5 p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">{currentExperience.duration}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Duration</div>
                </div>
                <div className="bg-muted/50 dark:bg-white/5 rounded-xl border border-border/30 dark:border-white/5 p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">{currentExperience.location}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Location</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {currentExperience.description}
              </p>

              {/* Technologies */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-semibold text-foreground/80">Technologies</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {currentExperience.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-muted/30 dark:bg-white/5 px-3 py-2 rounded-xl border border-border/20 dark:border-white/5"
                    >
                      <span className="text-xs font-medium text-foreground/80">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
