<script>
	//COMPONENTS
	import SocialButton from '../button/dark/lg/social.svelte';
	import LogoButton from '../button/dark/lg/logo.svelte';

	//PROPS
	export let footerData;
	console.log(footerData);
</script>

<div
	class="grid grid-flow-col grid-cols-2 w-1920 max-w-full h-124 py-16 bg-primary-dark-alpha text-2xl text-primary-light backdrop-blur-md"
>
	<div class="flex space-x-48 h-110 w-full justify-start pl-32">
		<div class="flex items-center w-full h-full">
			<img src="/assets/imgs/logo-horizontal.png" alt="pachanixi logo" />
		</div>
		<div class="flex items-center w-full h-full">
			<p class="text-p4 font-medium">{footerData.copy_right}</p>
		</div>
	</div>
	<div class="flex items-center justify-end px-16 h-full w-auto space-x-48">
		{#each footerData.social_network as item}
			<SocialButton
				icon={item.social_icon_label}
				name={item.social_nework_label}
				active={item.active}
				url={item.social_network_url.url}
			/>
		{/each}
	</div>
</div>
