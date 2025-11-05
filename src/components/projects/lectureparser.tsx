"use client"

import { ProjectHeader } from './ProjectHeader'
import { projectsBasicInfo } from '@/lib/projectsInfo'

export default function LectureParserPage() {
  const project = projectsBasicInfo.find(p => p.id === 'lectureparser')!

  return (
    <main className="relative overflow-hidden pb-20 pt-8">
      <div className="relative z-10 px-6 max-w-4xl mx-auto">
        
        <ProjectHeader project={project} />

        <div className="space-y-8 mt-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-semibold text-foreground/80">Technologies</h4>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-muted/30 dark:bg-white/5 px-3 py-2 rounded-xl border border-border/20 dark:border-white/5">
                  <span className="text-xs font-medium text-foreground/80">Python</span>
                </div>
                <div className="bg-muted/30 dark:bg-white/5 px-3 py-2 rounded-xl border border-border/20 dark:border-white/5">
                  <span className="text-xs font-medium text-foreground/80">OpenAI Vision API</span>
                </div>
                <div className="bg-muted/30 dark:bg-white/5 px-3 py-2 rounded-xl border border-border/20 dark:border-white/5">
                  <span className="text-xs font-medium text-foreground/80">PyMuPDF</span>
                </div>
                <div className="bg-muted/30 dark:bg-white/5 px-3 py-2 rounded-xl border border-border/20 dark:border-white/5">
                  <span className="text-xs font-medium text-foreground/80">Markdown</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground">About</h4>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                An automated pipeline that processes lecture PDF slides, extracts content using vision-language models, and generates comprehensive Markdown notes. This tool helps students quickly review lecture material and create structured study guides.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  )
}
