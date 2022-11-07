import { AboutMe } from './components/AboutMe'
import { Header } from './components/Header'
import { HomePage } from './components/HomePage'
import { Projects } from './components/Projects/Projects'

export default function Home() {
	return (
		<>
			<Header />
			<main className="pr-[10vw] pl-[10vw] font-primary">
				<HomePage />
            <AboutMe />
            <Projects />
			</main>
		</>
	)
}
