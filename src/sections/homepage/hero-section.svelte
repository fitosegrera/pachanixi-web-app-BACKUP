<script>
	//containers
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import PrimaryButton from '../../components/button/dark/lg/primary.svelte';

	//PORPS
	export let data;
</script>

<div class="w-auto h-auto bg-primary-dark">
	<Main>
		<div class="w-full h-auto">
			<div class="pt-224">
				<img
					src={data.primary.background_image.url}
					alt={data.primary.background_image.alt}
					class="w-full"
				/>
			</div>
			<div
				class="flex w-full pt-32 items-center justify-center text-primary-light font-bold text-lg"
			>
				<h2>{data.primary.paragraph[0].text}</h2>
			</div>
			<div class="flex w-auto justify-center mt-88">
				<PrimaryButton label={data.primary.button_label} url={''} />
			</div>
			<div class="flex w-full h-full justify-center">
				<video width="1600" height="100%" loop autoplay muted>
					<source src="/assets/vids/nft-1-alpha.webm" type="video/webm" />
				</video>
			</div>
			<div id="orbitante-right-wrapper" class="w-auto h-auto">
				<video width="860" height="100%" loop autoplay muted>
					<source src="/assets/vids/orbitante-2-alpha.webm" type="video/webm" />
				</video>
			</div>
			<div id="orbitante-left-wrapper" class="w-auto h-auto">
				<video width="480" height="100%" loop autoplay muted>
					<source src="/assets/vids/orbitante-1-alpha.webm" type="video/webm" />
				</video>
			</div>
			<div id="orbitante-bottom-wrapper" class="w-auto h-auto">
				<video width="680" height="100%" loop autoplay muted>
					<source src="/assets/vids/orbitante-3-alpha.webm" type="video/webm" />
				</video>
			</div>
		</div>
	</Main>
</div>

<style>
	* {
		overflow-x: hidden;
	}

	#orbitante-left-wrapper {
		position: absolute;
		left: -100px;
		top: 700px;
	}

	#orbitante-right-wrapper {
		position: absolute;
		left: 1200px;
		top: 500px;
	}

	#orbitante-bottom-wrapper {
		position: absolute;
		left: 100px;
		top: 1400px;
		rotate: 90deg;
	}
</style>
