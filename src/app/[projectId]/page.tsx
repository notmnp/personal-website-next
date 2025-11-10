import CourseClutchPage from '@/components/projects/courseclutch'
import LectureParserPage from '@/components/projects/lectureparser'
import MinimaxPage from '@/components/projects/minimax'
import ClaiPage from '@/components/projects/clai'
import WataiPage from '@/components/projects/watai'
import { notFound } from 'next/navigation'

const projectComponents: Record<string, React.ComponentType> = {
  courseclutch: CourseClutchPage,
  lectureparser: LectureParserPage,
  minimax: MinimaxPage,
  clai: ClaiPage,
  watai: WataiPage,
}

export default async function ProjectPage({ params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await params
  const ProjectComponent = projectComponents[projectId]
  
  if (!ProjectComponent) {
    notFound()
  }

  return <ProjectComponent />
}

export function generateStaticParams() {
  return [
    { projectId: 'courseclutch' },
    { projectId: 'lectureparser' },
    { projectId: 'minimax' },
    { projectId: 'clai' },
    { projectId: 'watai' },
  ]
}
