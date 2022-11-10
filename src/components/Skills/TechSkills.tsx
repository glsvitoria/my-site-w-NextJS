import Image from 'next/image'
import { Laptop, SuitcaseSimple } from 'phosphor-react'

interface TechSkillsProps {
	title: string
	icon: number
	techs: Array<string>
}

export function TechSkills({ title, icon, techs }: TechSkillsProps) {
	return (
		<div>
			<h1 className='text-center text-5xl font-secundary font-bold'>
				{title}
				{icon === 1 ? (
					<Laptop size={64} color="#ac7793" className='inline ml-8' />
				) : (
					<SuitcaseSimple size={64} color="#ac7793" className='inline ml-8' />
				)}
			</h1>

			<ul className='grid grid-cols-3 bg-light-card_bg py-12 rounded-3xl gap-8'>
				{techs.map((tech) => {
					return (
						<li key={tech} className="mx-auto opacity-60 hover:opacity-100 hover:cursor-pointer hover:scale-125 duration-300">
							<Image
								src={`/${tech}.svg`}
								alt={`${tech}`}
								width="60"
								height="60"
							/>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
