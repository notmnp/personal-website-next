"use client"

import { FolderOpen } from 'lucide-react'
import Link from 'next/link'
import { projectsBasicInfo } from '@/lib/projectsInfo'

export function Projects() {

  return (
    <section className="relative overflow-hidden pb-20 pt-0">
      <div className="relative z-10 px-6 max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <FolderOpen className="w-6 h-6 text-muted-foreground" />
          <h3 className="text-2xl font-semibold text-foreground">Projects & Teams</h3>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projectsBasicInfo.map((project) => (
            <Link 
              key={project.id}
              href={`/${project.id}`}
              className="group bg-background/60 dark:bg-background/20 backdrop-blur-3xl border border-border/50 dark:border-white/10 rounded-[2rem] lg:rounded-[2.5rem] shadow-sm overflow-hidden cursor-pointer transition-all hover:shadow-md block"
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
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
