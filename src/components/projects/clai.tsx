"use client"

import { ProjectHeader } from './ProjectHeader'
import { projectsBasicInfo } from '@/lib/projectsInfo'

export default function ClaiPage() {
  const project = projectsBasicInfo.find(p => p.id === 'clai')!

  return (
    <main className="relative overflow-hidden pb-20 pt-8">
      <div className="relative z-10 px-6 max-w-4xl mx-auto">
        
        <ProjectHeader project={project} />

        <div className="space-y-8 mt-8">

            <div className="space-y-3 pt-2">
                <h4 className="text-sm font-semibold text-foreground">Background</h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    
                </p>
            </div>

          
        </div>
      </div>
    </main>
  )
}
