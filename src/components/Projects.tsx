"use client"

import { Calendar, ExternalLink, Github, FolderOpen, Gamepad2, Train, Sparkles, GraduationCap } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      id: "course-clutch",
      title: "Course Clutch",
      category: "Published",
      description: "Course enrollment notification platform alerting students when spots open in university courses, deployed on AWS.",
      duration: "Feb 2024 - Sep 2024",
      icon: GraduationCap,
      links: [
        { type: "website", url: "https://www.courseclutch.com/", label: "Website" }
      ],
      stats: [
        { label: "Users", value: "80,000+" },
        { label: "Courses", value: "7,000+" }
      ]
    },
    {
      id: "wat-ai",
      title: "WAT.ai",
      category: "Team Project", 
      description: "Machine learning model for Toronto transit delay prediction, helping commuters make informed travel decisions.",
      duration: "Oct 2024 - Apr 2025",
      icon: Train,
      links: [
        { type: "website", url: "https://watai.ca/#/", label: "Website" },
        { type: "github", url: "https://github.com/WAT-ai/DelayNoMore", label: "GitHub" }
      ],
      stats: [
        { label: "Data Points", value: "34M+" },
        { label: "Routes", value: "300+" }
      ]
    },
    {
      id: "minimax-connect4", 
      title: "Minimax Connect 4",
      category: "Personal",
      description: "AI-powered Connect 4 game engine using advanced game theory algorithms to create an unbeatable opponent.",
      duration: "Feb 2025",
      icon: Gamepad2,
      links: [
        { type: "website", url: "https://notmnp.github.io/#play", label: "Website" },
        { type: "github", url: "https://github.com/notmnp/MinimaxConnect4", label: "GitHub" }
      ],
      stats: [
        { label: "Win Rate", value: "95%" },
        { label: "Game States", value: "50,000+" }
      ]
    },
    {
      id: "clai",
      title: "CLAI", 
      category: "Personal",
      description: "Intelligent document processing pipeline powered by Google Gemini for automated content generation and formatting.",
      duration: "Jan 2025",
      icon: Sparkles,
      links: [
        { type: "github", url: "https://github.com/notmnp/CLAI", label: "GitHub" }
      ],
      stats: [
        { label: "Speed", value: "<5 Seconds" },
        { label: "Accuracy", value: "90%" }
      ]
    }
  ]

  return (
    <section className="relative overflow-hidden pb-20 pt-0">
      <div className="relative z-10 px-6 max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-12">
          <FolderOpen className="w-6 h-6 text-muted-foreground" />
          <h3 className="text-2xl font-semibold text-foreground">Projects & Teams</h3>
        </div>

        {/* Projects Grid - consistent spacing with other sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-background/60 dark:bg-background/20 backdrop-blur-3xl border border-border/50 dark:border-white/10 rounded-[2rem] lg:rounded-[2.5rem] shadow-sm p-6 lg:p-8"
            >
              
              {/* Project Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-muted/50 dark:bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <project.icon className="w-8 h-8 text-muted-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xl font-bold text-foreground mb-2">{project.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {project.stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-muted/50 dark:bg-white/5 rounded-xl border border-border/30 dark:border-white/5 p-4 text-center"
                  >
                    <div className="text-lg font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap gap-3">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700 hover:bg-white dark:hover:bg-zinc-800 shadow-sm px-4 py-2 text-sm font-medium text-foreground"
                  >
                    {link.type === 'github' ? (
                      <Github className="w-4 h-4" />
                    ) : (
                      <ExternalLink className="w-4 h-4" />
                    )}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
