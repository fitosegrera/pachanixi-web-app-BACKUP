<script>
	//LIBS

	//COMPONENTS
	import SideBar from '../navigation/sidebar.svelte';
	import SocialButton from '../button/dark/lg/social.svelte';
	import HamburgerButton from '../button/dark/lg/hamburger.svelte';
	import LogoButton from '../button/dark/lg/logo.svelte';

	//PROPS
	export let navBarData;
	//console.log(navBarData);
</script>

<div
	class="fixed grid grid-flow-col grid-cols-3 w-full h-160 py-16 bg-primary-dark-alpha text-2xl text-primary-light backdrop-blur-md"
>
	<div class="flex items-center h-110 w-100 justify-start pl-32">
		<div class="cursor-pointer">
			<LogoButton type={navBarData.logo} />
		</div>
	</div>
	<div class="flex items-center justify-center h-full w-auto space-x-48">
		{#each navBarData.social as item}
			<SocialButton icon={item.icon} name={item.name} active={item.active} url={item.url.url} />
		{/each}
	</div>
	<div class="flex items-center h-full w-auto justify-end pr-32">
		<div class="hover:text-primary-main cursor-pointer">
			<HamburgerButton />
		</div>
	</div>
	<SideBar menu={navBarData.menu} social={navBarData.social} />
</div>
