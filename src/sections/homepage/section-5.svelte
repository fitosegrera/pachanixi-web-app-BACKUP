<script>
	//CONTAINERS
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import TeamCard from '../../components/card/dark/lg/team.svelte';
	import Divider from '../../components/information/divider.svelte';

	//PROPS
	export let data;
</script>

<div class="relative w-auto h-auto bg-primary-dark text-center pb-112">
	<Main>
		<div class="text-h5 text-primary-main font-bold">
			<div class="flex w-auto justify-center pt-32">
				<Divider name="section-5-divider" w={'420'} h={'32'} pixCol={'#BDFF00'} />
			</div>
			<h5>{data.primary.title[0].text}</h5>
		</div>
		<div class="flex justify-center mt-88 space-x-72">
			{#each data.items as item, i}
				<TeamCard data={item} />
			{/each}
		</div>
	</Main>
</div>
