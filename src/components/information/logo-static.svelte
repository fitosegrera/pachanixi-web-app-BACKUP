<script>
	//COMPONENTS
	import ImageSequence from '../iteractive/image-sequence.svelte';
</script>

<div class="flex h-320 w-auto justify-start">
	<div class="flex items-center w-full h-full">
		<!-- <img src="/assets/imgs/logo-horizontal.png" alt="pachanixi logo" /> -->

		<ImageSequence
			name={'logo-seq-static'}
			totalFrames={40}
			url={'/assets/vids/logo-seq/'}
			imgWidth={200}
			imgHeight={220}
		/>
	</div>
</div>
