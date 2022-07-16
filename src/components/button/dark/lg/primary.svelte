<script>
	//PROPS
	export let label;
	export let url;
</script>

<a href={url} alt="">
	<div
		class="text-lg text-primary-main font-bold h-96 w-auto border-8 border-primary-main px-32 py-32 hover:text-primary-dark hover:bg-primary-main hover:cursor-pointer"
	>
		<p>{label}</p>
	</div>
</a>
