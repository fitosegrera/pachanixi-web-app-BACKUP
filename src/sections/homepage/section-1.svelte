<script>
	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import PrimaryButton from '../../components/button/dark/lg/primary.svelte';
	import Divider from '../../components/information/divider.svelte';
	//PROPS
	export let data;
</script>

<div id="wrapper" class="w-auto h-auto bg-primary-dark pb-124 text-center">
	<Main>
		<div class="text-h5 text-primary-main font-bold">
			<div class="flex w-auto justify-center">
				<Divider name="section-1-divider" w={'420'} h={'32'} pixCol={'#BDFF00'} />
			</div>
			<h5>{data.primary.title[0].text}</h5>
		</div>
		<div class="text-p1 text-primary-light font-medium pt-48">
			<p>{data.primary.paragraph[0].text}</p>
		</div>
		<div class="flex w-auto justify-center mt-72">
			<PrimaryButton label={data.primary.button_label} url={data.primary.button_url} target={''} />
		</div>
	</Main>
</div>

<style>
	#wrapper {
		z-index: 1;
	}
</style>
