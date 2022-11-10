import { Dispatch, SetStateAction } from 'react'

export interface MobileMenuValue {
	isValue: boolean
	setValue: Dispatch<SetStateAction<boolean>>
}

export function MobileMenu({ isValue, setValue }: MobileMenuValue) {
	return (
		<>
			{isValue && (
				<div className="sm:hidden fixed w-[100vw] h-[calc(100vh-5rem)] top-[5rem] right-0 z-40 bg-[#023535] duration-300 animate-[mobileMenu_1s_ease-in-out]">
					<ul className="flex flex-col w-full h-full items-center justify-center gap-32">
						<li>
							<a
								href="#home"
								className="hover:brightness-75 hover:cursor-pointer duration-200 text-6xl text-light-header_color_font font-bold"
                        onClick={() => setValue(false)}
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="#about"
								className="hover:brightness-75 hover:cursor-pointer duration-200 text-6xl text-light-header_color_font font-bold"
                        onClick={() => setValue(false)}
							>
								About
							</a>
						</li>
						<li>
							<a
								href="#project"
								className="hover:brightness-75 hover:cursor-pointer duration-200 text-6xl text-light-header_color_font font-bold"
                        onClick={() => setValue(false)}
							>
								Projects
							</a>
						</li>
						<li>
							<a
								href="#skill"
								className="hover:brightness-75 hover:cursor-pointer duration-200 text-6xl text-light-header_color_font font-bold"
                        onClick={() => setValue(false)}
							>
								Skill
							</a>
						</li>
					</ul>
				</div>
			)}
		</>
	)
}
