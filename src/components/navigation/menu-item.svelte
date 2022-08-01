<script>
	//PROPS
	export let label, url;
</script>

<a href={url}>
	<div
		class="w-full text-h4 font-bold text-primary-main text-center hover:bg-primary-main cursor-pointer"
	>
		<h1 class="hover:text-primary-dark">{label}</h1>
	</div>
</a>
