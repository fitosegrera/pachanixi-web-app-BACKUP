<script>
	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import PrimaryButton from '../../components/button/light/lg/primary.svelte';

	//PROPS
	export let data;
</script>

<div class="relative w-auto h-auto bg-primary-main pt-32 pb-124">
	<Main>
		<div class="flex">
			<div>
				<div class="flex space-x-32 text-h5 text-primary-dark font-bold items-center">
					<h5>{data.primary.title[0].text}</h5>
					<p class="text-p2 font-bold">{data.primary.subtitle_1[0].text}</p>
				</div>
				<div class="w-auto h-auto pt-32 text-h1 font-bold">
					<h1 class="">{data.primary.subtitle_2[0].text}</h1>
					<h1 class="">{data.primary.subtitle_2[1].text}</h1>
				</div>
			</div>
			<div id="video-wrapper" class="w-auto h-auto">
				<video width="2400" height="100%" loop autoplay muted>
					<source src="/assets/vids/nft-2-alpha.webm" type="video/webm" />
				</video>
			</div>
		</div>
		<div class="w-full h-auto pt-32 text-p2 font-medium">
			<p class="">{data.primary.paragraph[0].text}</p>
		</div>
		<div class="flex w-auto justify-center mt-72">
			<PrimaryButton label={data.primary.button_label} url={''} />
		</div>
		<div id="orbitante-left-wrapper" class="flex w-auto h-auto">
			<video width="860" height="100%" loop autoplay muted>
				<source src="/assets/vids/orbitante-2-alpha.webm" type="video/webm" />
			</video>
		</div>
		<div id="orbitante-right-wrapper" class="flex w-auto h-auto">
			<video width="860" height="100%" loop autoplay muted>
				<source src="/assets/vids/orbitante-3-alpha.webm" type="video/webm" />
			</video>
		</div>
	</Main>
</div>

<style>
	#video-wrapper {
		position: absolute;
		right: -500px;
		top: -400px;
		pointer-events: none;
		mix-blend-mode: normal;
		z-index: 3;
	}

	#orbitante-left-wrapper {
		position: absolute;
		left: -200px;
		top: 650px;
		rotate: 60deg;
		pointer-events: none;
		z-index: 3;
	}

	#orbitante-right-wrapper {
		position: absolute;
		right: -10px;
		top: 650px;
		rotate: 60deg;
		pointer-events: none;
		z-index: 3;
	}
</style>
