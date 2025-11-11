import { Navbar } from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { ChatDock } from '@/components/ChatDock'
import { Linkedin, FileText, Github, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { About } from '@/components/About'
import { Experiences } from '@/components/Experiences'
import { Projects } from '@/components/Projects'
import { Footer } from '@/components/Footer'
import AnimatedSignature from '@/components/AnimatedSignature'

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <main className="relative overflow-hidden pb-32">
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 py-20 -mt-10 md:-mt-8">
          <div className="relative flex items-center justify-center w-full max-w-4xl mx-auto">
            <div
              className={cn(
                "absolute inset-0 rounded-3xl",
                "[background-size:40px_40px]",
                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                "[mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
              )}
            />
            
            <div className="relative z-20 p-16 animate-in fade-in slide-in-from-bottom-6 duration-1000 ease-out">
            {/* Status Badge */}
            <div className="mb-12">
              <a href="mailto:mpattni@uwaterloo.ca" className="inline-block">
                <div className="inline-flex items-center gap-2 border border-zinc-200 dark:border-zinc-700/50 rounded-full px-4 py-2 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 whitespace-nowrap">
                    Seeking Fall 2026 Internships!
                  </span>
                </div>
              </a>
            </div>

            <div className="mb-8 flex justify-center">
              <div className="text-6xl md:text-8xl lg:text-9xl text-zinc-900 dark:text-zinc-100 drop-shadow-lg">
                <AnimatedSignature />
              </div>
            </div>
            <p className="max-w-sm text-base md:text-lg text-zinc-700 dark:text-zinc-300 transition-none mb-12">
              Coding, cramming, and caffeinating at the University of Waterloo.
            </p>

            <div className="flex justify-center gap-8">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="https://www.linkedin.com/in/pattni" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    <Linkedin className="w-7 h-7" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="https://drive.google.com/file/d/1PbCPMxl7v5ztaInkgy_vCxyGc2hIEsrI/view?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    <FileText className="w-7 h-7" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>Resume</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="mailto:mpattni@uwaterloo.ca"
                    className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    <Mail className="w-7 h-7" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>Email</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="https://github.com/notmnp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    <Github className="w-7 h-7" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>
            </div>
            </div>
          </div>
        </div>

        <div className="h-20"></div>
      </main>

      <About />

      <Experiences />

      <Projects />

      <Footer />

      <ChatDock />
    </>
  )
}
