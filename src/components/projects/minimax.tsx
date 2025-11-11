"use client"

import { ProjectHeader } from './ProjectHeader'
import { projectsBasicInfo } from '@/lib/projectsInfo'

export default function MinimaxPage() {
  const project = projectsBasicInfo.find(p => p.id === 'minimax')!

  return (
    <main className="relative overflow-hidden pb-20 pt-8">
      <div className="relative z-10 px-6 max-w-3xl mx-auto">
        
        <ProjectHeader project={project} blurIntensity="more" />

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
                  <span className="text-xs font-medium text-foreground/80">Minimax Algorithm</span>
                </div>
                <div className="bg-muted/30 dark:bg-white/5 px-3 py-2 rounded-xl border border-border/20 dark:border-white/5">
                  <span className="text-xs font-medium text-foreground/80">Alpha-Beta Pruning</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground">About</h4>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                A Connect 4 game AI that uses the Minimax algorithm with Alpha-Beta pruning optimization to make strategic decisions. The engine evaluates game states and chooses optimal moves, achieving an 85% win rate against human players.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  )
}
