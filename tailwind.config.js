/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{tsx,ts}'],
	theme: {
		extend: {
			fontFamily: {
				primary: 'Ubuntu, sans-serif',
				secundary: 'Bebas Neue, cursive',
			},
			colors: {
				light: {
					background: '#FFF',
					description_bg: '#fcfcfc',
					card_bg: '#CEDAF2a2',
					skills_bg: '#cedaf2',
					footer_bg: '#3F3F3F',
					header_bg: 'rgb(250, 250, 250)',
					cor1: '#cedaf2',
					cor4: '#ac7793',
					cor5: '#f2a7a7',
					cor6: '#023535',
					header_color_font: '#bf8fb7',
					home_subtitle: '#b2bcd1',
					section_title: '#b4cf66',
					transition_color: '#000',
				},
			},
		},
	},
	plugins: [],
}
