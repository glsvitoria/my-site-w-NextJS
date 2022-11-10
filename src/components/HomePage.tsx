/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { SocialMedia } from './SocialMedia'

export function HomePage() {
	return (
		<section className="grid sm:grid-cols-5 mt-24 mb-24 sm:gap-12 gap-2 items-center" id="home">
			<img
				src="meu_avatar.svg"
				alt="Meu avatar"
				className="sm:w-96 w-56 sm:col-span-2 col-span-3 mx-auto"
			/>
			<div className="border-[1px] border-light-cor1 rounded-3xl bg-light-description_bg lg:p-16 sm:p-10 p-6 col-span-3">
				<p className="sm:text-base text-[.8rem] text-light-home_subtitle font-bold mb-4">
					Hello, I'm Guilherme Vitória
				</p>
				<h1 className="lg:text-[5rem] sm:text-5xl text-4xl text-light-section_title font-bold font-secundary mb-6">
					Front End Developer
				</h1>
				<p className="md:text-xl text-[.9rem] text-light-cor4 sm:font-medium">
					Front End Developer looking for new knowledge, challenges and
					opportunities to develop
				</p>
            <SocialMedia />
			</div>
		</section>
	)
}
