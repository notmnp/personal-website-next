import { Navbar } from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { ChatDock } from '@/components/ChatDock'
import { Linkedin, FileText, Github } from 'lucide-react'
import { cn } from '@/lib/utils'
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
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 py-20 -mt-10 md:-mt-20">
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
            <p className="max-w-md text-base md:text-lg text-zinc-700 dark:text-zinc-300 transition-none mb-12">
              Currently coding, cramming, and caffeinating at the University of Waterloo.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto sm:max-w-none">
            <Button asChild variant="default" size="lg" className="rounded-xl bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-zinc-100 dark:text-zinc-900 border-0 shadow-sm backdrop-blur-sm w-full sm:w-auto">
              <a href="https://www.linkedin.com/in/pattni" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700 hover:bg-white dark:hover:bg-zinc-800 shadow-sm w-full sm:w-auto">
              <a href="https://drive.google.com/file/d/1PbCPMxl7v5ztaInkgy_vCxyGc2hIEsrI/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4 mr-2" />
                Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700 hover:bg-white dark:hover:bg-zinc-800 shadow-sm w-full sm:w-auto">
              <a href="https://github.com/notmnp" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
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
