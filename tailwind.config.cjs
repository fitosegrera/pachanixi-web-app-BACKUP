//COLORS
const primaryMain = '#BDFF00';
const primaryMainVariant = '#DBFF73';
const primaryDark = '#02232B';
const primaryDarkVariant = '#10181A';
const primaryDarkAlpha = '#02232B55';
const primaryDarkAlphaVariant = '#02232BDD';
const primarySemiDark = '#386B68';
const primaryLight = '#F6FFFA';
const secondaryMain = '#7E44F8';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			'primary-main': primaryMain,
			'primary-main-variant': primaryMainVariant,
			'primary-dark': primaryDark,
			'primary-dark-variant': primaryDarkVariant,
			'primary-dark-alpha': primaryDarkAlpha,
			'primary-dark-alpha-variant': primaryDarkAlphaVariant,
			'primary-semi-dark': primarySemiDark,
			'primary-light': primaryLight,
			'secondary-main': secondaryMain
		},
		spacing: {
			4: '4px',
			6: '6px',
			8: '8px',
			12: '12px',
			16: '16px',
			20: '20%',
			24: '24px',
			32: '32px',
			33: '33%',
			48: '48px',
			50: '50%',
			60: '60%',
			64: '64px',
			65: '65%',
			72: '72px',
			75: '75%',
			88: '88px',
			92: '92px',
			96: '96px',
			112: '112px',
			124: '124px',
			148: '148px',
			160: '160px',
			196: '196px',
			210: '210px',
			220: '220px',
			224: '224px',
			240: '240px',
			296: '296px',
			340: '340px',
			368: '368px',
			420: '420px',
			432: '432px',
			456: '456px',
			520: '520px',
			640: '640px',
			720: '720px',
			800: '800px',
			960: '960px',
			1440: '1440px',
			1600: '1600px',
			1920: '1920px'
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
			h7: [
				'48px',
				{
					lineHeight: '48px'
				}
			],
			p1: [
				'44px',
				{
					lineHeight: '52px'
				}
			],
			p2: [
				'36px',
				{
					lineHeight: '44px'
				}
			],
			p3: [
				'24px',
				{
					lineHeight: '32px'
				}
			],
			p4: [
				'16px',
				{
					lineHeight: '20px'
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
