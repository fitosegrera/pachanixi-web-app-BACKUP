<script>
	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import SocialButton from '../../components/button/light/lg/social.svelte';

	//PROPS
	export let data;
</script>

<div class="relative w-auto h-auto bg-primary-main pt-32 pb-124 text-center">
	<Main>
		<div class="text-h5 text-primary-dark font-bold">
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
		<div id="orbitante-left-wrapper" class="w-auto h-auto">
			<video width="560" height="100%" loop autoplay muted>
				<source src="/assets/vids/orbitante-3-alpha.webm" type="video/webm" />
			</video>
		</div>
		<div id="orbitante-right-wrapper" class="w-auto h-auto">
			<video width="720" height="100%" loop autoplay muted>
				<source src="/assets/vids/orbitante-2-alpha.webm" type="video/webm" />
			</video>
		</div>
		<div id="orbitante-bottom-wrapper" class="w-auto h-auto">
			<video width="320" height="100%" loop autoplay muted>
				<source src="/assets/vids/orbitante-1-alpha.webm" type="video/webm" />
			</video>
		</div>
	</Main>
</div>

<style>
	#orbitante-left-wrapper {
		position: absolute;
		left: -100px;
		top: 100px;
	}

	#orbitante-right-wrapper {
		position: absolute;
		right: -140px;
		top: -220px;
		rotate: 90deg;
	}

	#orbitante-bottom-wrapper {
		position: absolute;
		right: 240px;
		top: 320px;
		rotate: 90deg;
	}
</style>
