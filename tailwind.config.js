/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				first: 'url("/img/first.jpg")',
				second: 'url("/img/second.jpg")',
			},
			fontFamily: {
				main: ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
