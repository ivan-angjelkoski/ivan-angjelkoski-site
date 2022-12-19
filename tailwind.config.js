/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				brand: {
					100: '#f5FFf1',
					200: '#EEEFDD',
					300: '#E5EFC1',
					400: '#A2D5AB',
					500: '#39AEA9',
					600: '#557B83',
					700: '#5C527F',
					800: '#3E2C41',
					900: '#141724',
				},
			},
			fontFamily: {
				rounded: ['"M PLUS Rounded 1c"', '"Raleway"', 'sans-serif'],
				raleway: ['"Raleway"', 'sans-serif'],
				poppins: ['"Poppins","Raleway"', 'sans-serif'],
				nanum: ['"Nanum Myeongjo"', 'sans-serif'],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
