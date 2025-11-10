export interface ProjectBasicInfo {
  id: string
  title: string
  year: string
  description: string
  image: string
}

export const projectsBasicInfo: ProjectBasicInfo[] = [
  {
    id: "courseclutch",
    title: "Course Clutch",
    year: "2024",
    description: "Course enrollment notifier that alerts students when university spots open, deployed on AWS.",
    image: "/project_courseclutch.png",
  },
  {
    id: "lectureparser",
    title: "Vision-Based Lecture Summarizer",
    year: "2025",
    description: "Pipeline that extracts and summarizes lecture slides into Markdown notes using vision-language models.",
    image: "/project_lectureparser.png",
  },
  {
    id: "minimax",
    title: "Minimax Connect 4",
    year: "2025",
    description: "Connect 4 AI engine using the Minimax algorithm with Alpha-Beta pruning to achieve an 85% win rate.",
    image: "/project_minimax.png",
  },
  {
    id: "clai",
    title: "LLM Cover Letter Generator",
    year: "2025",
    description: "AI assistant that creates custom cover letters directly from job posting URLs.",
    image: "/project_clai.png",
  },
  {
    id: "watai",
    title: "WAT.ai",
    year: "2024",
    description: "Machine learning model that predicts Toronto transit delays to help commuters plan more efficiently.",
    image: "/project_watai.png",
  }
]
