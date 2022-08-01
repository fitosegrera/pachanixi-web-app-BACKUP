<script>
	//PROPS
	export let label;
	export let url;
	export let target;
</script>

<a href={url} alt={label} {target}>
	<div
		class="flex items-center justify-center text-lg text-primary-dark font-bold h-96 w-auto border-8 border-primary-dark px-32 py-32 hover:text-primary-main hover:bg-primary-dark hover:cursor-pointer"
	>
		<p>{label}</p>
	</div>
</a>
