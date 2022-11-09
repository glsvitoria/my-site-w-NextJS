import { InstagramLogo, LinkedinLogo, GithubLogo } from 'phosphor-react'

export function Footer() {
	return (
		<div className="bg-light-footer_bg text-white h-24 flex items-center justify-between pr-[10vw] pl-[10vw]">
			<p className="font-bold">@2022 - Guilherme Vitória</p>
			<div className="flex gap-8">
				<a
					href="https://www.instagram.com/glsvitoria/"
					target="_blank"
					rel="noreferrer"
				>
					<InstagramLogo
						size={45}
						color="#FFF"
						weight="bold"
						className="hover:cursor-pointer hover:bg-light-section_title duration-300 border-[1px] rounded-3xl p-2"
					/>
				</a>

				<a
					href="https://www.linkedin.com/in/glsvitoria/"
					target="_blank"
					rel="noreferrer"
				>
					<LinkedinLogo
						size={45}
						color="#FFF"
						weight="bold"
						className="hover:cursor-pointer hover:bg-light-section_title duration-300 border-[1px] rounded-3xl p-2"
					/>
				</a>

				<a
					href="https://github.com/glsvitoria"
					target="_blank"
					rel="noreferrer"
				>
					<GithubLogo
						size={45}
						color="#FFF"
						weight="bold"
						className="hover:cursor-pointer hover:bg-light-section_title duration-300 border-[1px] rounded-3xl p-2"
					/>
				</a>
			</div>
		</div>
	)
}
