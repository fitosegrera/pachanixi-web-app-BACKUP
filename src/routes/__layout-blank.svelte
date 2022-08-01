<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="blank w-auto h-auto">
	<slot />
</div>

<style>
	* {
		font-family: 'Chakra Petch', sans-serif;
		overflow-x: hidden;
	}
</style>
