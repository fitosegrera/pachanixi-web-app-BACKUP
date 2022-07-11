<script context="module">
	//LIBS
	import * as prismic from '@prismicio/client';

	export async function load({ params, fetch, session, stuff }) {
		const endpoint = prismic.getEndpoint('pachanixi');
		const accessToken =
			'MC5Zc1h1ZVJBQUFDQUFUWWlt.Q--_vWbvv70DYwHvv70577-977-977-9Pe-_ve-_ve-_vSJz77-9Le-_ve-_vTtNMkYtX1wf77-9Ew';
		const routes = [
			// Update to match your website's URL structure
			{ type: 'home', path: '/' }
		];

		const client = prismic.createClient(endpoint, { routes, accessToken });
		const homepageData = await client.getSingle('home');

		//console.log(homepageData.data.body);

		return {
			props: {
				homepageData: homepageData.data.body
			}
		};
	}
</script>

<script>
	//sections
	import HeroSection from '../sections/homepage/hero-section.svelte';
	import Section1 from '../sections/homepage/section-1.svelte';
	import Section2 from '../sections/homepage/section-2.svelte';
	import Section3 from '../sections/homepage/section-3.svelte';
	import Section4 from '../sections/homepage/section-4.svelte';
	import Section5 from '../sections/homepage/section-5.svelte';

	//PROPS
	export let homepageData;
</script>

<HeroSection data={homepageData[0]}>
	<div class="bg-primary-dark w-full h-240" />
</HeroSection>
<Section1 data={homepageData[1]} />
<Section2 data={homepageData[2]} />
<Section3 data={homepageData[3]} />
<Section4 data={homepageData[4]} />
<Section5 data={homepageData[5]} />
