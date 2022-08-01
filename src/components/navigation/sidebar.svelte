<script>
	//LIBS
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';

	//COMPONENTS
	import MenuItem from './menu-item.svelte';
	import SocialButton from '../button/dark/lg/social.svelte';
	import CloseButton from '../button/dark/lg/close.svelte';

	//PROPS
	export let menu, social;
	//console.log(menu);

	const dispatch = createEventDispatcher();

	const handleClick = () => {
		dispatch('closeSideBar');
	};
</script>

<div class="sidebar bg-primary-dark" transition:fly={{ y: -1080, opacity: 1 }}>
	<div class="flex h-full w-full justify-end" on:click={handleClick}>
		<CloseButton icon={'ant-design:close-square-outlined'} />
	</div>
	{#each menu as item}
		<div class="w-auto h-auto" on:click={handleClick}>
			<MenuItem label={item.item} url={item.url} />
		</div>
	{/each}
	<div class="flex items-center justify-center h-full w-auto space-x-48">
		{#each social as item}
			<div class="hover:text-primary-light cursor-pointer">
				<SocialButton icon={item.icon} name={item.name} active={item.active} url={item.url.url} />
			</div>
		{/each}
	</div>
</div>

<style>
	.sidebar {
		position: fixed;
		width: 100%;
		min-height: 100vh;
		z-index: 10;
	}
</style>
