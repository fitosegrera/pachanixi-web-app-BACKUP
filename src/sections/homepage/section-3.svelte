<script>
	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import PrimaryButton from '../../components/button/dark/lg/primary.svelte';
	import NftCard from '../../components/card/dark/lg/nft.svelte';
	import Scroller from '../../components/information/scroller.svelte';
	import Divider from '../../components/information/divider.svelte';

	//PROPS
	export let data;
</script>

<div class="w-auto h-auto bg-primary-dark text-center">
	<Main>
		<div class="text-h5 text-primary-main font-bold">
			<div class="flex w-auto justify-center pt-32">
				<Divider name="section-3-divider" w={'960'} h={'32'} pixCol={'#BDFF00'} />
			</div>
			<h5>{data.primary.title[0].text}</h5>
		</div>
		<div class="flex justify-center mt-88">
			{#each data.items as item, i}
				<NftCard data={item} />
			{/each}
		</div>
		<div class="flex w-auto justify-center mt-72">
			<PrimaryButton label={data.primary.button_label} url={data.primary.button_url} target={''} />
		</div>
	</Main>
	<div class="w-full h-auto mt-72">
		<Scroller data={data.primary.scroller[0].text} />
	</div>
</div>
