import { List } from 'phosphor-react'
import { MobileMenuValue } from './MobileMenu'

export function Header({ isValue, setValue }: MobileMenuValue) {
	return (
		<header className="mb-24 fixed w-full top-0 bg-white">
			<nav className="grid grid-cols-2 pr-[10vw] pl-[10vw] h-20 m-w-[1700px]">
				<h1 className="flex items-center font-primary text-2xl font-bold text-light-header_color_font">
					<span className="text-3xl pr-2 text-light-section_title">
						{'<'}
					</span>
					Guilherme{' '}
					<span className="text-3xl pl-2 text-light-section_title">
						{'/>'}
					</span>
				</h1>
				<ul className="sm:flex gap-8 items-center text-light-header_color_font justify-end font-semibold hidden">
					<li>
						<a href="#home" className="hover:brightness-75 duration-200">
							Home
						</a>
					</li>
					<li>
						<a href="#about" className="hover:brightness-75 duration-200">
							About
						</a>
					</li>
					<li>
						<a
							href="#project"
							className="hover:brightness-75 duration-200"
						>
							Projects
						</a>
					</li>
					<li>
						<a href="#skill" className="hover:brightness-75 duration-200">
							Skill
						</a>
					</li>
				</ul>
				<List
					size={40}
					color="#ac7793"
					className="sm:hidden my-auto ml-auto text-end hover:cursor-pointer"
					onClick={() => setValue(!isValue)}
				/>
			</nav>
		</header>
	)
}
