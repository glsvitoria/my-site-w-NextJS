/* eslint-disable react/jsx-no-target-blank */
import Image from 'next/image'
import { Project } from './Projects'

interface ProjectItemProps {
	project: Project
}

export function ProjectItem({ project }: ProjectItemProps) {
   console.log(project)
	return (
		<div>
			<Image
				src={project.data.repository_image.url}
				alt={project.data.repository_image.alt}
				width="200"
				height="200"
			/>
         <h2>{project.data.project_title}</h2>
         <p>{project.data.project_description[0].text}</p>
         <a href={project.data.project_website_link.url} target="_blank">WEBSITE ONLINE</a>
         <a href={project.data.project_repository_link.url} target="_blank">REPOSITORY</a>
		</div>
	)
}
