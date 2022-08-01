<script>
	//COMPONENTS
	import ImageSequence from '../../../iteractive/image-sequence.svelte';
</script>

<div class="flex h-110 w-full justify-start">
	<div class="flex items-center w-full h-full">
		<!-- <img src="/assets/imgs/logo-horizontal.png" alt="pachanixi logo" /> -->
		<a href="/">
			<ImageSequence
				totalFrames={40}
				name={'logo-seq'}
				url={'/assets/vids/logo-seq/'}
				imgWidth={88}
				imgHeight={94}
			/>
		</a>
	</div>
</div>
