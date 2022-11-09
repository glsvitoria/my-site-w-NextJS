/* eslint-disable react/jsx-no-target-blank */
import Image from 'next/image'
import { Project } from './Projects'

interface ProjectItemProps {
	project: Project
}

export function ProjectItem({ project }: ProjectItemProps) {
	return (
		<div className="mx-auto bg-light-card_bg/40 rounded-2xl w-[90%] shadow-xl shadow-[#0000002f]">
			<Image
				src={project.data.repository_image.url}
				alt={project.data.repository_image.alt}
				width="200"
				height="200"
				className="w-full h-36 rounded-t-2xl mb-6"
			/>
			<h2 className="text-2xl font-bold font-secundary text-black text-center mb-6">
				{project.data.project_title}
			</h2>
			<p className="font-semibold text-sm font-sans text-light-cor6 text-center mx-auto max-w-[90%] mb-4 h-12">
				{project.data.project_description[0].text}
			</p>
			<div className="flex flex-col items-center gap-4 mb-8">
				<a
					className="w-[80%] text-center py-1 bg-light-button font-secundary text-xl text-light-cor5 rounded-full duration-300 hover:bg-light-section_title hover:text-white"
					href={project.data.project_website_link.url}
					target="_blank"
				>
					VISIT WEBSITE
				</a>
				<a
					className="w-[60%] text-center py-1 bg-light-button font-secundary text-xl text-light-cor5 rounded-full duration-300 hover:bg-light-section_title hover:text-white"
					href={project.data.project_repository_link.url}
					target="_blank"
				>
					REPOSITORY
				</a>
			</div>
		</div>
	)
}
