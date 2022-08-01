<script context="module">
	//LIBS
	import * as prismic from '@prismicio/client';

	export async function load({ params, fetch, session, stuff }) {
		const endpoint = prismic.getEndpoint('pachanixi');
		const accessToken =
			'MC5Zc1h1ZVJBQUFDQUFUWWlt.Q--_vWbvv70DYwHvv70577-977-977-9Pe-_ve-_ve-_vSJz77-9Le-_ve-_vTtNMkYtX1wf77-9Ew';
		const routes = [
			// Update to match your website's URL structure
			{ type: 'cosmovision', path: '/' }
		];

		const client = prismic.createClient(endpoint, { routes, accessToken });
		const cosmovisionData = await client.getSingle('cosmovision');

		console.log(cosmovisionData.data.body);

		return {
			props: {
				cosmovisionData: cosmovisionData.data.body
			}
		};
	}
</script>

<script>
	//SECTIONS
	import PrimaryHeroSection from '../sections/cosmovision/primary-hero-section.svelte';
	import Section_1 from '../sections/cosmovision/section-1.svelte';
	import SecondaryHeroSection from '../sections/cosmovision/secondary-hero-section.svelte';
	import Section_2 from '../sections/cosmovision/section-2.svelte';

	//PROPS
	export let cosmovisionData;
</script>

<PrimaryHeroSection data={cosmovisionData[0]} />
<Section_1 data={cosmovisionData[1]} />
<SecondaryHeroSection data={cosmovisionData[2]} />
<Section_2 data={cosmovisionData[3]} />
