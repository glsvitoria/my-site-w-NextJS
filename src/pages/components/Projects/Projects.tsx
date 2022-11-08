import { SectionTitle } from '../SectionTitle'
import { ProjectItem } from './ProjectItem'

export interface Project {
	id: string
	data: {
		project_title: string
		project_description: [{ text: string }]
		project_website_link: {
         url: string
      }
		project_repository_link: {
         url: string
      }
		repository_image: {
			url: string
			alt: string
		}
	}
	last_publication_date: string
}

interface ProjectsProps {
	projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
	return (
		<section className="mt-24">
			<SectionTitle title="PROJECTS" />
			<div>
				{projects.map((project) => (
					<ProjectItem key={project.id} project={project} />
				))}
			</div>
		</section>
	)
}
