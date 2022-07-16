<script>
	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import PrimaryButton from '../../components/button/dark/lg/primary.svelte';
	import Separator from '../../components/iteractive/separator.svelte';

	//PROPS
	export let data;
</script>

<div id="wrapper" class="w-auto h-auto bg-primary-dark pb-124 text-center">
	<Main>
		<div class="text-h5 text-primary-main font-bold">
			<div class="flex w-auto justify-center">
				<Separator
					w={800}
					h={16}
					foreground={'#BDFF00'}
					background={'#02232B'}
					cols={160}
					rows={20}
					threshold={0.96}
				/>
			</div>
			<h5>{data.primary.title[0].text}</h5>
		</div>
		<div class="text-p1 text-primary-light font-medium pt-48">
			<p>{data.primary.paragraph[0].text}</p>
		</div>
		<div class="flex w-auto justify-center mt-72">
			<PrimaryButton label={data.primary.button_label} url={data.primary.button_url} />
		</div>
	</Main>
</div>

<style>
	#wrapper {
		z-index: 1;
	}
</style>
