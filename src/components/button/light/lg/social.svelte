<script>
	//LIBS
	import Icon from '@iconify/svelte';

	//PROPS
	export let icon, url, name, active;
	// console.log(icon);
</script>

<div class="hover:text-primary-light cursor-pointer">
	{#if active}
		<a href={url} target="__blank">
			<Icon {icon} />
		</a>
	{/if}
</div>
