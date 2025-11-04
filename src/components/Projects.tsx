"use client"

import { useState } from 'react'
import { FolderOpen } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface Project {
  id: string
  title: string
  year: string
  description: string
  image: string
  technologies?: string[]
  detailedDescription?: string
  additional?: Array<{
    sectionName: string
    sectionContent: string
  }>
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const projects: Project[] = [
    {
      id: "courseclutch",
      title: "Course Clutch",
      year: "2024",
      description: "Course enrollment notifier that alerts students when university spots open, deployed on AWS.",
      image: "/project_courseclutch.png",
      technologies: ["Python", "AWS Lambda", "DynamoDB", "React", "TypeScript"],
      detailedDescription: "Course Clutch is a web application that monitors university course enrollment and automatically notifies students when spots become available. The system uses AWS Lambda for serverless computing, DynamoDB for data storage, and provides a React-based frontend for users to manage their course watchlists.",
      additional: [
        {
          sectionName: "TL;DR",
          sectionContent: "Built a serverless notification system that automatically alerts students when course spots open at their university. Deployed on AWS with Lambda functions checking enrollment every 5 minutes, helping 500+ students secure their desired courses."
        },
        {
          sectionName: "The Story",
          sectionContent: "Like many students, I struggled to get into popular courses that filled up instantly during enrollment periods. I'd refresh the course enrollment page dozens of times a day hoping to catch a spot. After missing out on a required course for the third term in a row, I decided to build a solution. Course Clutch was born from that frustration - a system that would do the refreshing for me and notify me the moment a spot opened. What started as a personal tool quickly grew when friends asked to use it, eventually serving hundreds of students across multiple universities."
        },
        {
          sectionName: "Technical Challenges",
          sectionContent: "The biggest challenge was designing a cost-effective serverless architecture that could scale to monitor hundreds of courses while staying within AWS free tier limits. I implemented intelligent polling intervals that increased frequency during high-activity periods and used DynamoDB's TTL feature to automatically clean up old watchlist entries. Another interesting problem was handling rate limiting from university APIs - I had to implement exponential backoff and request batching to avoid getting blocked."
        },
        {
          sectionName: "Impact",
          sectionContent: "Course Clutch has helped over 500 students secure spots in oversubscribed courses, with an average notification delivery time of under 2 minutes from when a spot opens. The system maintains 99.5% uptime and processes over 10,000 course checks daily during peak enrollment periods."
        }
      ]
    },
    {
      id: "lectureparser",
      title: "Vision-Based Lecture Summarizer",
      year: "2025",
      description: "Pipeline that extracts and summarizes lecture slides into Markdown notes using vision-language models.",
      image: "/project_lectureparser.png",
      technologies: ["Python", "OpenAI Vision API", "PyMuPDF", "Markdown"],
      detailedDescription: "An automated pipeline that processes lecture PDF slides, extracts content using vision-language models, and generates comprehensive Markdown notes. This tool helps students quickly review lecture material and create structured study guides."
    },
    {
      id: "minimax",
      title: "Minimax Connect 4",
      year: "2025",
      description: "Connect 4 AI engine using the Minimax algorithm with Alpha-Beta pruning to achieve an 85% win rate.",
      image: "/project_minimax.png",
      technologies: ["Python", "Minimax Algorithm", "Alpha-Beta Pruning"],
      detailedDescription: "A Connect 4 game AI that uses the Minimax algorithm with Alpha-Beta pruning optimization to make strategic decisions. The engine evaluates game states and chooses optimal moves, achieving an 85% win rate against human players."
    },
    {
      id: "clai",
      title: "LLM Cover Letter Generator",
      year: "2025",
      description: "AI assistant that creates custom cover letters directly from job posting URLs.",
      image: "/project_clai.png",
      technologies: ["Python", "OpenAI API", "Web Scraping", "NLP"],
      detailedDescription: "An AI-powered tool that automatically generates personalized cover letters by analyzing job posting URLs. The system extracts key requirements and company information, then crafts tailored cover letters that highlight relevant skills and experiences."
    },
    {
      id: "watai",
      title: "WAT.ai",
      year: "2024",
      description: "Machine learning model that predicts Toronto transit delays to help commuters plan more efficiently.",
      image: "/project_watai.png",
      technologies: ["Python", "scikit-learn", "Pandas", "Data Analysis"],
      detailedDescription: "A machine learning project developed with WAT.ai that predicts Toronto transit delays using historical data. The model helps commuters make informed decisions about their travel routes and timing, improving overall transit efficiency."
    }
  ]

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsDialogOpen(true)
  }

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
              onClick={() => handleProjectClick(project)}
              className="group bg-background/60 dark:bg-background/20 backdrop-blur-3xl border border-border/50 dark:border-white/10 rounded-[2rem] lg:rounded-[2.5rem] shadow-sm overflow-hidden cursor-pointer transition-all hover:shadow-md"
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

        {/* Project Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl w-full h-full sm:h-[85vh] sm:max-h-[85vh] overflow-hidden p-0 bg-background/95 dark:bg-background/95 backdrop-blur-3xl border-0 sm:border sm:border-border/50 sm:dark:border-white/10 rounded-none sm:rounded-[2rem]">
            {selectedProject && (
              <div className="overflow-y-auto h-full scrollbar-thin">
                <div className="p-8 sm:p-10 lg:p-12 space-y-8 pt-20 sm:pt-8">
                  
                  {/* Project Image - Centered with smaller max width */}
                  <div className="relative w-full max-w-xl mx-auto aspect-video overflow-visible px-4 sm:px-0">
                    {/* Glow layer (duplicate image) */}
                    <img
                      src={selectedProject.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-3xl scale-110 opacity-60 -z-10"
                      aria-hidden="true"
                    />
                    
                    {/* Main sharp image */}
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="relative z-10 w-full h-full object-cover rounded-xl sm:rounded-2xl border border-border/30 dark:border-white/5"
                    />
                  </div>                  {/* Project Title */}
                  <div className="space-y-2">
                    <DialogTitle className="text-2xl sm:text-3xl font-semibold text-foreground">
                      {selectedProject.title}
                      <span className="font-normal text-muted-foreground"> — {selectedProject.year}</span>
                    </DialogTitle>
                    <DialogDescription className="text-base sm:text-lg text-muted-foreground">
                      {selectedProject.description}
                    </DialogDescription>
                  </div>

                  {/* Technologies and About - Side by Side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    
                    {/* Technologies */}
                    {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-semibold text-foreground/80">Technologies</h4>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {selectedProject.technologies.map((tech, index) => (
                            <div
                              key={index}
                              className="bg-muted/30 dark:bg-white/5 px-3 py-2 rounded-xl border border-border/20 dark:border-white/5"
                            >
                              <span className="text-xs font-medium text-foreground/80">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Detailed Description */}
                    {selectedProject.detailedDescription && (
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground">About</h4>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {selectedProject.detailedDescription}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Additional Sections */}
                  {selectedProject.additional && selectedProject.additional.map((section, index) => (
                    <div key={index} className="space-y-3 pt-2">
                      <h4 className="text-sm font-semibold text-foreground">{section.sectionName}</h4>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {section.sectionContent}
                      </p>
                    </div>
                  ))}
                  
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

      </div>
    </section>
  )
}
