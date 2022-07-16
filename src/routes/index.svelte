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
	//LIBS
	import { img_seq_loading } from '../stores/main';

	//SECTIONS
	import HeroSection from '../sections/homepage/hero-section.svelte';
	import Section1 from '../sections/homepage/section-1.svelte';
	import Section2 from '../sections/homepage/section-2.svelte';
	import Section3 from '../sections/homepage/section-3.svelte';
	import Section4 from '../sections/homepage/section-4.svelte';
	import Section5 from '../sections/homepage/section-5.svelte';

	//PROPS
	export let homepageData;
</script>

{#if $img_seq_loading < 18}
	<div id="asset-loader" class="flex items-center justify-center bg-primary-dark w-full h-full">
		<h1 class="text-p1 text-primary-light">{$img_seq_loading} loaded!</h1>
	</div>
{/if}
<HeroSection data={homepageData[0]} />
<Section1 data={homepageData[1]} />
<Section2 data={homepageData[2]} />
<Section3 data={homepageData[3]} />
<Section4 data={homepageData[4]} />
<Section5 data={homepageData[5]} />

<style>
	#asset-loader {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		opacity: 0.98;
	}
</style>
