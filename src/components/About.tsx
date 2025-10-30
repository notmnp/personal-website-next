"use client"

import { Calendar, MapPin, Briefcase, GraduationCap, User, Mail, TrendingUp } from 'lucide-react'

export function About() {
  // Calculate dynamic degree progress
  const degreeStart = new Date('2023-09-01')
  const degreeEnd = new Date('2028-04-30')
  const currentDate = new Date()
  
  const totalDuration = degreeEnd.getTime() - degreeStart.getTime()
  const elapsed = currentDate.getTime() - degreeStart.getTime()
  const progress = Math.max(0, Math.min(100, Math.round((elapsed / totalDuration) * 100)))

  const getCurrentTerm = () => {
    // Term start dates and corresponding terms
    const termSchedule = [
      { start: new Date('2023-09-01'), term: '1A' },
      { start: new Date('2024-05-01'), term: '1B' },
      { start: new Date('2025-01-01'), term: '2A' },
      { start: new Date('2025-09-01'), term: '2B' },
      { start: new Date('2026-05-01'), term: '3A' },
      { start: new Date('2027-01-01'), term: '3B' },
      { start: new Date('2027-09-01'), term: '4A' },
      { start: new Date('2028-01-01'), term: '4B' },
    ]

    // Find the current term based on the current date
    for (let i = termSchedule.length - 1; i >= 0; i--) {
      if (currentDate >= termSchedule[i].start) {
        return termSchedule[i].term
      }
    }
    
    // Fallback to 1A if before start date
    return '1A'
  }

  const currentTerm = getCurrentTerm()

  return (
    <section className="relative overflow-hidden pb-8">
      <div className="relative z-10 px-6 max-w-6xl mx-auto">
        
        {/* Summary */}
        <div className="flex items-center gap-3 mb-8">
          <User className="w-6 h-6 text-zinc-600 dark:text-zinc-400" />
          <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Summary</h3>
        </div>

        {/* Status & Education Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          
          {/* Status Dashboard */}
          <div className="bg-background/70 dark:bg-background/20 backdrop-blur-3xl border border-border/50 dark:border-white/10 rounded-[2rem] lg:rounded-[2.5rem] shadow-sm p-6 lg:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground">Status</h3>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-foreground">Interning at 8090</p>
                  <p className="text-sm text-muted-foreground">Winter 2026</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-foreground">Seeking Internships</p>
                  <p className="text-sm text-muted-foreground">Fall 2026</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-foreground">2+ Years Experience</p>
                  <p className="text-sm text-muted-foreground">Software development</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-foreground">Toronto, ON</p>
                  <p className="text-sm text-muted-foreground">Open to travel</p>
                </div>
              </div>

              <a href="mailto:mpattni@uwaterloo.ca" className="flex items-center gap-3 cursor-pointer group">
                <Mail className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-foreground group-hover:text-foreground/80 break-words">
                    mpattni@uwaterloo.ca
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Get in touch
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Education - Reorganized */}
          <div className="lg:col-span-2">
            <div className="bg-background/60 dark:bg-background/20 backdrop-blur-3xl border border-border/50 dark:border-white/10 rounded-[2rem] lg:rounded-[2.5rem] shadow-sm p-6 lg:p-8 h-full">
              
              {/* University Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-muted-foreground" />
                  <h3 className="text-xl font-semibold text-foreground">University of Waterloo</h3>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-sm font-medium text-foreground">Sept 2023 - April 2028</div>
                  <div className="text-xs text-muted-foreground">Expected Graduation</div>
                </div>
              </div>

              {/* Degree Information */}
              <div className="mb-6">
                <h4 className="text-xl font-bold text-foreground mb-4">
                  Mechatronics Engineering
                </h4>
                
                {/* Progress Stats - Responsive Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-muted/50 dark:bg-white/5 rounded-xl border border-border/30 dark:border-white/5 p-3 text-center">
                    <div className="text-2xl font-bold text-foreground mb-1">{currentTerm}</div>
                    <div className="text-xs text-muted-foreground">Current Term</div>
                  </div>
                  <div className="bg-muted/50 dark:bg-white/5 rounded-xl border border-border/30 dark:border-white/5 p-3 text-center">
                    <div className="text-2xl font-bold text-foreground mb-1">AI / ML</div>
                    <div className="text-xs text-muted-foreground">Specialization</div>
                  </div>
                  <div className="bg-muted/50 dark:bg-white/5 rounded-xl border border-border/30 dark:border-white/5 p-3 text-center">
                    <div className="text-2xl font-bold text-foreground mb-1">{progress}%</div>
                    <div className="text-xs text-muted-foreground">Degree Progress</div>
                  </div>
                </div>
              </div>

              {/* Relevant Courses */}
              <div>
                <h5 className="text-sm font-semibold text-foreground/80 mb-3">Relevant Courses</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="bg-muted/30 dark:bg-white/5 px-3 py-2 rounded-xl border border-border/20 dark:border-white/5">
                    <span className="text-xs font-medium text-foreground/80">Data Structures & Algorithms</span>
                  </div>
                  <div className="bg-muted/30 dark:bg-white/5 px-3 py-2 rounded-xl border border-border/20 dark:border-white/5">
                    <span className="text-xs font-medium text-foreground/80">AI & Society</span>
                  </div>
                  <div className="bg-muted/30 dark:bg-white/5 px-3 py-2 rounded-xl border border-border/20 dark:border-white/5">
                    <span className="text-xs font-medium text-foreground/80">Digital Computation</span>
                  </div>
                  <div className="bg-muted/30 dark:bg-white/5 px-3 py-2 rounded-xl border border-border/20 dark:border-white/5">
                    <span className="text-xs font-medium text-foreground/80">Computer Structures</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
