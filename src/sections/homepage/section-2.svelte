<script>
	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import PrimaryButton from '../../components/button/light/lg/primary.svelte';
	import ImageSequence from '../../components/iteractive/image-sequence.svelte';
	import Divider from '../../components/information/divider.svelte';

	//PROPS
	export let data;
</script>

<div class="relative w-auto h-auto bg-primary-main pt-32 pb-124">
	<Main>
		<div class="flex">
			<div>
				<div class="flex w-full justify-start">
					<Divider name="section-2-divider" w={'420'} h={'32'} pixCol={'#02232B'} />
				</div>
				<div class="flex space-x-32 text-h5 text-primary-dark font-bold items-center">
					<h5>{data.primary.title[0].text}</h5>
					<p class="text-p2 font-bold">{data.primary.subtitle_1[0].text}</p>
				</div>
				<div class="w-auto h-auto pt-32 text-h1 font-bold">
					<h1 class="">{data.primary.subtitle_2[0].text}</h1>
					<h1 class="">{data.primary.subtitle_2[1].text}</h1>
				</div>
			</div>
			<div id="nft-wrapper" class="w-auto h-auto">
				<ImageSequence
					totalFrames={240}
					name={'section-2-nft'}
					url={'/assets/vids/nft-2-seq/'}
					imgWidth={1000}
					imgHeight={723}
				/>
			</div>
		</div>
		<div class="w-full h-auto pt-32 text-p2 font-medium">
			<p class="">{data.primary.paragraph[0].text}</p>
		</div>
		<div class="flex w-auto justify-center mt-72">
			<PrimaryButton label={data.primary.button_label} url={data.primary.button_url} target={''} />
		</div>
		<div id="orb-left-wrapper" class="w-auto h-auto">
			<ImageSequence
				totalFrames={240}
				name={'section-2-orb-left'}
				url={'/assets/vids/orbitante-2-seq/'}
				imgWidth={240}
				imgHeight={240}
			/>
		</div>
		<div id="orb-right-wrapper" class="w-auto h-auto">
			<ImageSequence
				totalFrames={240}
				name={'section-2-orb-right'}
				url={'/assets/vids/orbitante-3-seq/'}
				imgWidth={180}
				imgHeight={180}
			/>
		</div>
	</Main>
</div>

<style>
	#nft-wrapper {
		position: absolute;
		right: -50px;
		top: -180px;
		pointer-events: none;
		mix-blend-mode: normal;
		z-index: 3;
	}

	#orb-right-wrapper {
		position: absolute;
		right: 200px;
		top: 750px;
		rotate: 60deg;
		pointer-events: none;
		z-index: 3;
	}

	#orb-left-wrapper {
		position: absolute;
		left: 200px;
		top: 750px;
		rotate: 60deg;
		pointer-events: none;
		z-index: 3;
	}
</style>
