<script>
	//PROPS
	export let label;
	export let url;
</script>

<div
	class="text-lg text-primary-dark font-bold h-96 w-auto border-8 border-primary-dark px-32 py-32 hover:text-primary-main hover:bg-primary-dark hover:cursor-pointer"
>
	<a href={url} alt="">
		<p>{label}</p>
	</a>
</div>
