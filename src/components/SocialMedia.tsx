import { InstagramLogo, LinkedinLogo, GithubLogo } from 'phosphor-react'

export function SocialMedia() {
	return (
		<div className="flex gap-4 mt-6">
			<a
				href="https://www.instagram.com/glsvitoria/"
				target="_blank"
				rel="noreferrer"
			>
				<InstagramLogo
					color="#ac7793"
					weight="bold"
					className="hover:cursor-pointer hover:-translate-y-3 duration-300 sm:text-4xl text-2xl"
				/>
			</a>

			<a
				href="https://www.linkedin.com/in/glsvitoria/"
				target="_blank"
				rel="noreferrer"
			>
				<LinkedinLogo
					color="#ac7793"
					weight="bold"
					className="hover:cursor-pointer hover:-translate-y-3 duration-300 sm:text-4xl text-2xl"
				/>
			</a>

			<a
				href="https://github.com/glsvitoria"
				target="_blank"
				rel="noreferrer"
			>
				<GithubLogo
					color="#ac7793"
					weight="bold"
					className="hover:cursor-pointer hover:-translate-y-3 duration-300 sm:text-4xl text-2xl"
				/>
			</a>
		</div>
	)
}
