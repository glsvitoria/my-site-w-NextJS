import { SectionTitle } from '../SectionTitle'
import { TechSkills } from './TechSkills'

export function Skills() {
	const frontEnd = [
		'html',
		'css',
		'javascript',
		'react',
		'bootstrap',
		'next',
		'typescript',
		'figma',
	]
	const others = ['git', 'github', 'nodejs', 'insomnia', 'pgsql']

	return (
		<section className="mt-24 mb-24">
			<SectionTitle title="SKILLS" />

			<div className='grid grid-cols-2 gap-10'>
				<TechSkills title="FRONT-END" icon={1} techs={frontEnd} />
				<TechSkills title="OTHER TECHS" icon={2} techs={others} />
			</div>
		</section>
	)
}
