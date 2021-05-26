import { paradigms } from './paradigms'
import { communication } from './communication'

export const topics = [
  paradigms,
  communication,
  { id: 'security', name: 'Security Basics', questions: [] },
  { id: 'perfomance', name: 'Perfomance Optimizations', questions: [] },
  {
    id: 'web-application',
    name: 'Web Application Design and Framework',
    questions: [],
  },
  { id: 'react', name: 'React Framework Deep Dive', questions: [] },
  { id: 'architecture', name: 'Architecture', questions: [] },
  { id: 'patterns', name: 'Patterns', questions: [] },
  { id: 'code-quality', name: 'Code Quality', questions: [] },
  { id: 'git', name: 'CI/CD/CD, GIT', questions: [] },
  { id: 'lifecycles', name: 'SDLC Methodologies', questions: [] },
  { id: 'estimations', name: 'Estimations', questions: [] },
  { id: 'soft-skills', name: 'Team Management and Soft Skills', questions: [] },
]
