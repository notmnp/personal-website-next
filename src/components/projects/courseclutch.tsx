"use client"

import { ProjectHeader } from './ProjectHeader'
import { projectsBasicInfo } from '@/lib/projectsInfo'

export default function CourseClutchPage() {
  const project = projectsBasicInfo.find(p => p.id === 'courseclutch')!

  return (
    <main className="relative overflow-hidden pb-20 pt-8">
      <div className="relative z-10 px-6 max-w-3xl mx-auto">
        
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
                  <span className="text-xs font-medium text-foreground/80">AWS Lambda</span>
                </div>
                <div className="bg-muted/30 dark:bg-white/5 px-3 py-2 rounded-xl border border-border/20 dark:border-white/5">
                  <span className="text-xs font-medium text-foreground/80">DynamoDB</span>
                </div>
                <div className="bg-muted/30 dark:bg-white/5 px-3 py-2 rounded-xl border border-border/20 dark:border-white/5">
                  <span className="text-xs font-medium text-foreground/80">React</span>
                </div>
                <div className="bg-muted/30 dark:bg-white/5 px-3 py-2 rounded-xl border border-border/20 dark:border-white/5">
                  <span className="text-xs font-medium text-foreground/80">TypeScript</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground">About</h4>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Course Clutch is a web application that monitors university course enrollment and automatically notifies students when spots become available. The system uses AWS Lambda for serverless computing, DynamoDB for data storage, and provides a React-based frontend for users to manage their course watchlists.
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <h4 className="text-sm font-semibold text-foreground">TL;DR</h4>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Built a serverless notification system that automatically alerts students when course spots open at their university. Deployed on AWS with Lambda functions checking enrollment every 5 minutes, helping 500+ students secure their desired courses.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <h4 className="text-sm font-semibold text-foreground">The Story</h4>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Like many students, I struggled to get into popular courses that filled up instantly during enrollment periods. I'd refresh the course enrollment page dozens of times a day hoping to catch a spot. After missing out on a required course for the third term in a row, I decided to build a solution. Course Clutch was born from that frustration - a system that would do the refreshing for me and notify me the moment a spot opened. What started as a personal tool quickly grew when friends asked to use it, eventually serving hundreds of students across multiple universities.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <h4 className="text-sm font-semibold text-foreground">Technical Challenges</h4>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              The biggest challenge was designing a cost-effective serverless architecture that could scale to monitor hundreds of courses while staying within AWS free tier limits. I implemented intelligent polling intervals that increased frequency during high-activity periods and used DynamoDB's TTL feature to automatically clean up old watchlist entries. Another interesting problem was handling rate limiting from university APIs - I had to implement exponential backoff and request batching to avoid getting blocked.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <h4 className="text-sm font-semibold text-foreground">Impact</h4>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Course Clutch has helped over 500 students secure spots in oversubscribed courses, with an average notification delivery time of under 2 minutes from when a spot opens. The system maintains 99.5% uptime and processes over 10,000 course checks daily during peak enrollment periods.
            </p>
          </div>
          
        </div>
      </div>
    </main>
  )
}
