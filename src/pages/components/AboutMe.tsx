/* eslint-disable react/no-unescaped-entities */
import { SectionTitle } from './SectionTitle'
import { SocialMedia } from './SocialMedia'

export function AboutMe() {
	return (
		<section className="mb-24 grid grid-cols-5" id='about'>
			<div className="col-span-3">
				<SectionTitle title="ABOUT ME" />
				<p className="text-xl leading-8 text-light-cor4">
					Hi! My name is Guilherme Vitória, I'm 20 years old and live in
					Brazil. I'm Front End Developer JR and have more than 1 year in
					the programming world studying and practicing. I'm currently
					looking for internships or jobs.
				</p>
				<button className="border-[1px] rounded-[2.4rem] cursor-pointer font-secundary text-2xl px-12 py-4 m-8 mb-4 text-white bg-[rgb(243,213,213)] hover:border-[rgb(243,213,213)] hover:bg-white hover:text-light-section_title duration-200 active:bg-light-section_title active:text-white">
					<a
						download="Curriculo.pdf"
						type="application/pdf"
						href="/Curriculo.pdf"
					>
						DOWNLOAD CV
					</a>
				</button>
            <SocialMedia />
			</div>
			<img src="meu_avatar_2.svg" alt="Meu avatar" className="col-span-2" />
		</section>
	)
}
