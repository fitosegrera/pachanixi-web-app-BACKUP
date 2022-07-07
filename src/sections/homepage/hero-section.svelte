<script>
	//containers
	import Main from '../../containers/main.svelte';

	//COMPONENTS
	import PrimaryButton from '../../components/button/dark/lg/primary.svelte';
</script>

<div class="w-auto h-auto bg-primary-dark">
	<Main>
		<div class="w-full h-auto">
			<div class="pt-224">
				<img src="/assets/imgs/heading.png" alt="pachanixi" class="w-full" />
			</div>
			<div class="flex w-full items-center justify-center text-primary-light font-bold text-lg">
				<h2>MICROVERSO DE NFTS TECNOCHAMÁNICOS CON IMPACTO ECOLÓGICO EN EL MUNDO REAL!</h2>
			</div>
			<div class="flex w-full justify-center mt-48">
				<img src="/assets/imgs/wagana-hero.png" alt="" />
			</div>
			<div class="flex w-auto justify-center mt-72">
				<PrimaryButton label={'WHITEPAPER'} />
			</div>
		</div>
	</Main>
</div>
