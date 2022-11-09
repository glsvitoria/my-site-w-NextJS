export function Header() {
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
				<ul className="flex gap-8 items-center text-light-header_color_font justify-end font-semibold">
					<li>
						<a href="#home" className="hover:brightness-75 duration-200">Home</a>
					</li>
					<li>
						<a href="#about" className="hover:brightness-75 duration-200">About</a>
					</li>
					<li>
						<a href="#project" className="hover:brightness-75 duration-200">Projects</a>
					</li>
					<li>
						<a href="#skill" className="hover:brightness-75 duration-200">Skill</a>
					</li>
				</ul>
				{/* <label htmlFor="switch" className="label_checkbox">
					<input type="checkbox" id="switch" />
				</label> */}
			</nav>
		</header>
	)
}
