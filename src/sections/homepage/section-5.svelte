<script>
	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import SocialButton from '../../components/button/light/lg/social.svelte';
	import ImageSequence from '../../components/iteractive/image-sequence.svelte';
	import Separator from '../../components/iteractive/separator.svelte';

	//PROPS
	export let data;
</script>

<div class="relative w-auto h-auto bg-primary-main pt-32 pb-124 text-center">
	<Main>
		<div class="text-h5 text-primary-dark font-bold">
			<div class="flex w-full justify-center">
				<Separator
					w={500}
					h={16}
					foreground={'#02232B'}
					background={'#BDFF00'}
					cols={90}
					rows={20}
					threshold={0.96}
				/>
			</div>
			<h5>{data.primary.title[0].text}</h5>
		</div>
		<div class="flex justify-center w-full h-auto">
			<div class="w-960 h-auto pt-32 text-p2 font-medium">
				<p class="">{data.primary.paragraph[0].text}</p>
			</div>
		</div>
		<div
			class="flex items-center text-h3 text-primary-dark justify-center h-full w-auto space-x-48 py-48"
		>
			{#each data.items as item}
				<SocialButton
					icon={item.social_icon_label}
					name={item.social}
					active={item.active}
					url={item.social_network_url.url}
				/>
			{/each}
		</div>
		<div id="orb-left-wrapper" class="w-auto h-auto">
			<ImageSequence
				totalFrames={300}
				name={'section-5-orb-bottom'}
				url={'/assets/vids/orbitante-3-seq/'}
				imgWidth={200}
				imgHeight={200}
			/>
		</div>
		<div id="orb-right-wrapper" class="w-auto h-auto">
			<ImageSequence
				totalFrames={300}
				name={'section-5-orb-right'}
				url={'/assets/vids/orbitante-2-seq/'}
				imgWidth={320}
				imgHeight={320}
			/>
		</div>
	</Main>
</div>

<style>
	#orb-left-wrapper {
		position: absolute;
		left: 100px;
		top: 300px;
		z-index: 4;
	}

	#orb-right-wrapper {
		position: absolute;
		right: 100px;
		top: -100px;
		rotate: 0deg;
		z-index: 4;
	}
</style>
