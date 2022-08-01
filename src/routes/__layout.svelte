<script context="module">
	//LIBS
	import * as prismic from '@prismicio/client';

	export async function load({ params, fetch, session, stuff }) {
		const endpoint = prismic.getEndpoint('pachanixi');
		const accessToken =
			'MC5Zc1h1ZVJBQUFDQUFUWWlt.Q--_vWbvv70DYwHvv70577-977-977-9Pe-_ve-_ve-_vSJz77-9Le-_ve-_vTtNMkYtX1wf77-9Ew';
		const routes = [
			// Update to match your website's URL structure
			{ type: 'navbar', path: '/' },
			{ type: 'footer', path: '/' }
		];

		const client = prismic.createClient(endpoint, { routes, accessToken });
		const navBarData = await client.getSingle('navbar');
		const footerData = await client.getSingle('footer');

		return {
			props: {
				navBarData: navBarData.data,
				footerData: footerData.data
			}
		};
	}
</script>

<script>
	//STYLES
	import '../app.css';

	//LIBS

	import { navigating } from '$app/stores';
	import { loading } from '../stores/main';

	//COMPONENTS
	import NavBar from '../components/navigation/navbar.svelte';
	import Footer from '../components/navigation/footer.svelte';

	//PROPS
	export let navBarData;
	export let footerData;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div id="page-wrapper" class="h-auto w-auto">
	<NavBar {navBarData} />
	<slot />
	<Footer {footerData} />
</div>

<style>
	* {
		font-family: 'Chakra Petch', sans-serif;
		overflow-x: hidden;
	}

	#page-wrapper {
		max-width: 1920px;
		margin: auto;
	}
</style>
