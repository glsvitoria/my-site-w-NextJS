/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { SocialMedia } from './SocialMedia'

export function HomePage() {
	return (
		<section className="grid grid-cols-5 mt-24 mb-24 gap-12 items-center" id="home">
			<img
				src="meu_avatar.svg"
				alt="Meu avatar"
				className="w-96 he-96 col-span-2"
			/>
			<div className="border-[1px] border-light-cor1 rounded-3xl bg-light-description_bg p-16 col-span-3">
				<p className="text-base text-light-home_subtitle font-bold">
					Hello, I'm Guilherme Vitória
				</p>
				<h1 className="text-[5rem] text-light-section_title font-bold font-secundary">
					Front End Developer
				</h1>
				<p className="text-xl text-light-cor4 font-medium">
					Front End Developer looking for new knowledge, challenges and
					opportunities to develop
				</p>
            <SocialMedia />
			</div>
		</section>
	)
}
