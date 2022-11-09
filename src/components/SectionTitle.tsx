interface SectionTitleProps {
	title: string
}

export function SectionTitle({ title, ...rest }: SectionTitleProps) {
	return (
		<h1 className="mb-6" {...rest}>
			<span className="text-light-cor6 px-2 font-secundary text-6xl font-bold">
				{'<'}
			</span>
			<span className="text-light-section_title font-secundary text-6xl font-bold">
				{title}
			</span>
			<span className="text-light-cor6 px-2 font-secundary text-6xl font-bold">
				{'/>'}
			</span>
		</h1>
	)
}
