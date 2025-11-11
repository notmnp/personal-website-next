"use client"

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import type { ProjectBasicInfo } from '@/lib/projectsInfo'

interface ProjectHeaderProps {
  project: ProjectBasicInfo
  blurIntensity?: 'low' | 'normal' | 'more'
}

export function ProjectHeader({ project, blurIntensity = 'normal' }: ProjectHeaderProps) {
  const router = useRouter()

  return (
    <>
      {/* Back Button */}
      <div className="mb-4">
        <Button 
          variant="ghost" 
          onClick={() => router.push('/')}
          className="gap-2 hover:bg-muted/50"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
      </div>

      <div className="space-y-8 mt-8 max-w-3xl mx-auto">
        {/* Project Image with Blur Effect */}
        <div className="relative w-full overflow-visible">
          {/* Glow layer (duplicate image) */}
          <img
            src={project.image}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover blur-3xl scale-110 -z-10 ${
              blurIntensity === 'low' ? 'opacity-40' : 
              blurIntensity === 'more' ? 'opacity-100' : 
              'opacity-70'
            }`}
            aria-hidden="true"
          />
          
          {/* Main sharp image */}
          <img
            src={project.image}
            alt={project.title}
            className="relative z-10 w-full h-auto rounded-xl sm:rounded-2xl border border-border/30 dark:border-white/5"
          />
        </div>

        {/* Project Title & Description */}
        <div className="space-y-2 mt-12">
          <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">
            {project.title}
            <span className="font-normal text-muted-foreground"> — {project.year}</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            {project.description}
          </p>
        </div>
      </div>
    </>
  )
}
