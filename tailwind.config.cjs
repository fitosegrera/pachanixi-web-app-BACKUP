//COLORS
const primaryMain = '#BDFF00';
const primaryDark = '#02232B';
const primaryDarkAlpha = '#02232BCC';
const primaryLight = '#F6FFFA';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			'primary-main': primaryMain,
			'primary-dark': primaryDark,
			'primary-dark-alpha': primaryDarkAlpha,
			'primary-light': primaryLight
		},
		spacing: {
			8: '8px',
			16: '16px',
			32: '32px',
			48: '48px',
			64: '64px',
			72: '72px',
			160: '160px',
			220: '220px',
			224: '224px',
			240: '240px',
			1440: '1440px',
			1600: '1600px'
		},
		fontSize: {
			h1: [
				'220px',
				{
					lineHeight: '220px'
				}
			],
			h2: [
				'184px',
				{
					lineHeight: '184px'
				}
			],
			h3: [
				'124px',
				{
					lineHeight: '132px'
				}
			],
			h4: [
				'100px',
				{
					lineHeight: '112px'
				}
			],
			h5: [
				'84px',
				{
					lineHeight: '96px'
				}
			],
			h6: [
				'64px',
				{
					lineHeight: '72px'
				}
			],
			'2xl': [
				'96px',
				{
					lineHeight: '96px'
				}
			],
			xl: [
				'72px',
				{
					lineHeight: '72px'
				}
			],
			lg: [
				'36px',
				{
					lineHeight: '36px',
					letterSpacing: '0.1em'
				}
			]
		},
		extend: {}
	},
	plugins: []
};
