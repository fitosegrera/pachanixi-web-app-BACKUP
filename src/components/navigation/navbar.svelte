<script>
	//COMPONENTS
	import SideBar from './sidebar.svelte';
	import SocialButton from '../button/dark/lg/social.svelte';
	import HamburgerButton from '../button/dark/lg/hamburger.svelte';
	// import LogoButton from '../button/dark/lg/logo-generative.svelte';
	import LogoButton from '../button/dark/lg/logo-static.svelte';

	//PROPS
	export let navBarData;
	//console.log(navBarData);

	let showSideBar = false;

	const openMenu = () => {
		showSideBar = true;
	};

	const closeMenu = () => {
		showSideBar = false;
	};
</script>

<div
	id="navbar-wrapper"
	class="fixed grid grid-flow-col grid-cols-3 w-1920 max-w-full h-auto py-16 bg-primary-dark-alpha text-h5 text-primary-light backdrop-blur-md"
>
	<div class="flex items-center h-110 w-100 justify-start pl-32">
		<div class="cursor-pointer">
			<!-- <LogoButton type={navBarData.logo} url={'/'} /> -->
			<LogoButton />
		</div>
	</div>
	<div class="flex items-center justify-center h-full w-auto space-x-48">
		{#each navBarData.social as item}
			<SocialButton icon={item.icon} name={item.name} active={item.active} url={item.url.url} />
		{/each}
	</div>
	<div class="flex items-center h-full w-auto justify-end pr-32">
		<div class="hover:text-primary-main cursor-pointer" on:click={openMenu}>
			<HamburgerButton />
		</div>
	</div>
	{#if showSideBar}
		<SideBar on:closeSideBar={closeMenu} menu={navBarData.menu} social={navBarData.social} />
	{/if}
</div>

<style>
	#navbar-wrapper {
		z-index: 15;
	}
</style>
