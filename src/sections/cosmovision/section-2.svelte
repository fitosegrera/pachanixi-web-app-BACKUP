<script>
	//LIBS
	import * as prismicH from '@prismicio/helpers';

	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//PROPS
	export let data;

	const htmlSerializer = (type, element, content, children) => {
		if (type === 'strong') {
			return `<strong class="text-primary-main">${children}</strong>`;
		}
		if (type === 'paragraph') {
			return `<p class="text-primary-light pb-32">${children}</p>`;
		}
	};
</script>

<div id="wrapper" class="w-auto h-auto gradient-dark pb-32 text-left">
	<Main>
		<div class="text-p1 text-primary-light font-medium pt-48">
			<p class="my-32">{@html prismicH.asHTML(data.primary.cosmovision_2, null, htmlSerializer)}</p>
		</div>
	</Main>
</div>

<style>
	#wrapper {
		z-index: 1;
	}

	.gradient-dark {
		background-image: linear-gradient(180deg, #000000, 20%, #0a232b);
	}
</style>
