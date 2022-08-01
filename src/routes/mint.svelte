<script context="module">
	//LIBS
	import * as prismic from '@prismicio/client';

	export async function load({ params, fetch, session, stuff }) {
		const endpoint = prismic.getEndpoint('pachanixi');
		const accessToken =
			'MC5Zc1h1ZVJBQUFDQUFUWWlt.Q--_vWbvv70DYwHvv70577-977-977-9Pe-_ve-_ve-_vSJz77-9Le-_ve-_vTtNMkYtX1wf77-9Ew';
		const routes = [
			// Update to match your website's URL structure
			{ type: 'mint', path: '/' }
		];

		const client = prismic.createClient(endpoint, { routes, accessToken });
		const mintData = await client.getSingle('mint');

		//console.log(mintData.data.body);

		return {
			props: {
				mintData: mintData.data.body
			}
		};
	}
</script>

<script>
	//SECTIONS
	import HeroSection from '../sections/mint/hero-section.svelte';

	//PROPS
	export let mintData;
</script>

<HeroSection data={mintData[0]} />
