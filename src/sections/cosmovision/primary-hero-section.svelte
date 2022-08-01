<script>
	//LIBS
	import { onMount } from 'svelte';

	//COMPONENTS
	import Divider from '../../components/information/divider.svelte';
	// import ImageSequence from '../../components/iteractive/image-sequence.svelte';

	//PORPS
	export let data;

	let splittedTitle = [];

	onMount(async () => {
		splittedTitle = await data.primary.primary_hero_title[0].text.split(' ');
	});
</script>

<div class="relative w-full h-960">
	<div class="text-wrapper w-full h-full pb-16">
		<div class="relative w-full h-full">
			<!-- <div id="orb-left-wrapper" class="w-auto h-auto">
				<ImageSequence
					totalFrames={240}
					name={'cosmovision-1-hero-nft'}
					url={'/assets/vids/orbitante-2-seq/'}
					imgWidth={200}
					imgHeight={200}
				/>
			</div> -->
			<div class="absolute left-32 bottom-4 text-primary-main text-h2 font-bold">
				<Divider name="section-cosmovision-1-divider" w={'420'} h={'32'} pixCol={'#BDFF00'} />
				{#each splittedTitle as word}
					<h2>{word}</h2>
				{/each}
			</div>
		</div>
	</div>
	<div class="video-wrapper w-full h-960">
		<video autoplay autobuffer loop muted>
			<source src="/assets/vids/story-hero.webm" type="video/webm" />
		</video>
	</div>
</div>

<style>
	* {
		overflow: hidden;
	}

	video {
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: -100;
		min-width: 100%;
		min-height: 100%;
		width: auto;
		height: auto;
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}

	.text-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
	}

	/* #orb-left-wrapper {
		position: absolute;
		left: 280px;
		top: 200px;
	} */
</style>
