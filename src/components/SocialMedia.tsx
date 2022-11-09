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
					size={36}
					color="#ac7793"
					weight="bold"
					className="hover:cursor-pointer hover:-translate-y-3 duration-300"
				/>
			</a>

			<a
				href="https://www.linkedin.com/in/glsvitoria/"
				target="_blank"
				rel="noreferrer"
			>
				<LinkedinLogo
					size={36}
					color="#ac7793"
					weight="bold"
					className="hover:cursor-pointer hover:-translate-y-3 duration-300"
				/>
			</a>

			<a
				href="https://github.com/glsvitoria"
				target="_blank"
				rel="noreferrer"
			>
				<GithubLogo
					size={36}
					color="#ac7793"
					weight="bold"
					className="hover:cursor-pointer hover:-translate-y-3 duration-300"
				/>
			</a>
		</div>
	)
}
