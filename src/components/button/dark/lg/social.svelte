<script>
	//LIBS
	import Icon from '@iconify/svelte';

	//PROPS
	export let icon, url, name, active;
</script>

<div class="hover:text-primary-main cursor-pointer">
	{#if active}
		<a href={url} target="__blank">
			<Icon {icon} />
		</a>
	{/if}
</div>
