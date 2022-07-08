/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				first: 'url("./src/assets/first.jpg")',
				second: 'url("./src/assets/second.jpg")',
			},
			fontFamily: {
				main: ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
