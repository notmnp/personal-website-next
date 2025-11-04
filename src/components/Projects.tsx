"use client"

import { FolderOpen } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      id: "courseclutch",
      title: "Course Clutch",
      year: "2024",
      description: "Course enrollment notifier that alerts students when university spots open, deployed on AWS.",
      image: "/project_courseclutch.png"
    },
    {
      id: "lectureparser",
      title: "Vision-Based Lecture Summarizer",
      year: "2025",
      description: "Pipeline that extracts and summarizes lecture slides into Markdown notes using vision-language models.",
      image: "/project_lectureparser.png"
    },
    {
      id: "minimax",
      title: "Minimax Connect 4",
      year: "2025",
      description: "Connect 4 AI engine using the Minimax algorithm with Alpha-Beta pruning to achieve an 85% win rate.",
      image: "/project_minimax.png"
    },
    {
      id: "clai",
      title: "LLM Cover Letter Generator",
      year: "2025",
      description: "AI assistant that creates custom cover letters directly from job posting URLs.",
      image: "/project_clai.png"
    },
    {
      id: "watai",
      title: "WAT.ai",
      year: "2024",
      description: "Machine learning model that predicts Toronto transit delays to help commuters plan more efficiently.",
      image: "/project_watai.png"
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-background/60 dark:bg-background/20 backdrop-blur-3xl border border-border/50 dark:border-white/10 rounded-[2rem] lg:rounded-[2.5rem] shadow-sm overflow-hidden cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
              
              {/* Title Section */}
              <div className="px-6 py-4 lg:px-8 lg:py-5">
                <h4 className="text-lg font-semibold text-foreground mb-1">
                  {project.title} <span className="font-normal text-muted-foreground">— {project.year}</span>
                </h4>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
