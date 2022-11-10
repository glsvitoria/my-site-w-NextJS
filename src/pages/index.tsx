import { GetStaticProps } from 'next'
import * as prismic from '@prismicio/client'
import { AboutMe } from '../components/AboutMe'
import { Header } from '../components/Header'
import { HomePage } from '../components/HomePage'
import { Project, Projects } from '../components/Projects/Projects'
import { Skills } from '../components/Skills/Skills'
import { Footer } from '../components/Footer'
import { MobileMenu } from '../components/MobileMenu'
import { useState } from 'react'

interface HomeProps {
	projects: {
		results: Project[]
	}
}

export default function Home({ projects }: HomeProps) {
	const [isMobileMenu, setIsMobileMenu] = useState(false)

	return (
		<>
			<Header isValue={isMobileMenu} setValue={setIsMobileMenu} />
			<MobileMenu isValue={isMobileMenu} setValue={setIsMobileMenu} />
			<main className="pr-[10vw] pl-[10vw] font-primary">
				<HomePage />
				<AboutMe />
				<Projects projects={projects.results} />
				<Skills />
			</main>
			<Footer />
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const client = prismic.createClient(process.env.PRISMIC_API_ENDPOINT!)
	const projects = await client.getByType('project')

	return {
		props: {
			projects,
		},
	}
}
