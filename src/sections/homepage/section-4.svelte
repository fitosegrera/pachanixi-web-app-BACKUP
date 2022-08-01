<script>
	//LIBS
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';

	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import PrimaryButton from '../../components/button/dark/lg/primary.svelte';
	import Divider from '../../components/information/divider.svelte';

	//PROPS
	export let data;

	onMount(async () => {
		if (browser) {
			document.getElementById('bg-img').style.backgroundImage =
				'url(' + data.primary.background_image.url + ')';
		}
	});
</script>

<div id="bg-img" class="w-auto h-auto bg-primary-dark pt-32 pb-124">
	<Main>
		<div class="w-full h-auto text-right px-112 text-h5 text-primary-main font-bold">
			<div class="flex w-full h-32 justify-end">
				<Divider name="section-4-divider" w={'420'} h={'32'} pixCol={'#BDFF00'} />
			</div>
			<h5>{data.primary.title[0].text}</h5>
		</div>
		<div
			class="flex w-full h-auto space-x-32 my-48 justify-end px-112 text-h5 text-primary-main-variant"
		>
			<Icon icon={data.primary.icon_1_label} />
			<Icon icon={data.primary.icon_2_label} />
		</div>
		<div class="flex w-full h-auto items-center justify-end mb-160">
			<div class="pr-112 w-960 text-p2 font-medium text-primary-light text-right">
				<p>{data.primary.paragraph[0].text}</p>
			</div>
		</div>
		<div class="flex w-auto justify-center mt-72">
			<PrimaryButton
				label={data.primary.button_label}
				url={data.primary.button_url}
				target={'__blank'}
			/>
		</div>
	</Main>
</div>

<style>
	#bg-img {
		background-position: right;
		background-repeat: no-repeat;
		background-size: 115%;
	}
</style>
