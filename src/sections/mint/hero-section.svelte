<script>
	//LIBS
	import * as prismicH from '@prismicio/helpers';
	import Icon from '@iconify/svelte';

	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import ImageSequence from '../../components/iteractive/image-sequence.svelte';
	import LogoButton from '../../components/information/logo-static.svelte';
	import Divider from '../../components/information/divider.svelte';

	//PORPS
	export let data;

	const htmlSerializer = (type, element, content, children) => {
		if (type === 'strong') {
			return `<strong class="text-primary-main">${children}</strong>`;
		}
	};
</script>

<div id="wrapper" class="w-auto h-auto bg-primary-dark py-160">
	<Main>
		<div class="w-full h-auto">
			<!-- <div class="flex justify-center w-auto h-auto pb-32">
				<LogoButton />
			</div> -->
			<!-- <div class="flex w-auto h-auto justify-center">
				<ImageSequence
					totalFrames={240}
					name={'hero-nft'}
					url={'/assets/vids/nft-2-seq/'}
					imgWidth={520}
					imgHeight={344}
				/>
			</div> -->
			<!-- <div class="flex justify-center">
				<img src={data.primary.logo.url} alt={data.primary.logo.alt} class="w-50" />
			</div> -->
			<div
				class="flex justify-center items-center space-x-32 text-h3 text-primary-main w-full h-auto text-center pt-32"
			>
				<Icon icon="ci:image-alt" />
				<h3 class="font-bold">
					{data.primary.heading[0].text}
				</h3>
			</div>
			<div class="w-full h-auto text-center pt-32">
				<h7 class="text-h7 gradient-text-primary-light font-bold"
					>{data.primary.subheading_1[0].text}</h7
				>
			</div>
			<div class="w-full h-auto text-center pt-48 pb-32">
				<p class="text-p2 text-primary-light font-medium">
					{@html prismicH.asHTML(data.primary.paragraph, null, htmlSerializer)}
				</p>
			</div>
		</div>
	</Main>
	<div class="flex w-auto justify-center mb-32">
		<Divider name="section-1-divider" w={'full'} h={'32'} pixCol={'#BDFF00'} />
	</div>
	<div class="grid grid-cols-3">
		<div>
			<video width="100%" height="auto" autoplay loop muted>
				<source src="/assets/vids/nft-0.mp4" type="video/mp4" />
			</video>
		</div>
		<div>
			<video width="100%" height="auto" autoplay loop muted>
				<source src="/assets/vids/nft-1.mp4" type="video/mp4" />
			</video>
		</div>
		<div>
			<video width="100%" height="auto" autoplay loop muted>
				<source src="/assets/vids/nft-2.mp4" type="video/mp4" />
			</video>
		</div>
	</div>
</div>

<style>
	* {
		overflow: hidden;
	}

	#wrapper {
		z-index: 5;
	}
</style>
