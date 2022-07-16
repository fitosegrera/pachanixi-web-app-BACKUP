<script>
	//LIBS
	import { onMount } from 'svelte';
	import { browser } from '$app/env';

	//PORPS
	export let url;
	export let name;
	export let imgWidth, imgHeight;
	export let totalFrames;

	$: loaded = false;

	onMount(async () => {
		if (browser) {
			let sequencePath = url;
			let sequenceNumberLength = 1;
			let fileName = '';
			let fileSuffix = '.png';

			let targetElement = document.getElementById(name);

			let startFrame = 1;
			let endFrame = totalFrames;
			let loop = true;

			// Functions
			const padWithZeroes = (number, length) => {
				let paddedNumber = '' + number;
				while (paddedNumber.length < length) {
					paddedNumber = '0' + paddedNumber;
				}
				return paddedNumber;
			};

			let frames = [];
			let framesLoaded = 0;

			const loadFrames = (callback) => {
				for (let i = startFrame; i <= endFrame; i++) {
					frames[i] = new Image();
					frames[i].src =
						sequencePath + fileName + padWithZeroes(i, sequenceNumberLength) + fileSuffix;
					frames[i].onload = () => {
						framesLoaded++;
						if (framesLoaded >= endFrame - startFrame) {
							callback();
						}
					};
				}
			};

			let currentFrame = startFrame;

			const frameAnimation = () => {
				let canvas = targetElement;
				let context = canvas.getContext('2d');

				context.clearRect(0, 0, canvas.width, canvas.height);
				context.drawImage(frames[currentFrame], 0, 0, canvas.width, canvas.height);

				// If last frame
				if (currentFrame >= endFrame) {
					if (!loop) {
						cancelAnimationFrame();
					} else {
						currentFrame = startFrame; // Start over
					}
				}

				currentFrame++;
				requestAnimationFrame(frameAnimation);
			};

			loadFrames(() => {
				frameAnimation();
			});
		}
		return (loaded = true);
	});
</script>

<div class="animation-wrapper flex items-center justify-center">
	<div bind:this={loaded} class="canvas-wrapper">
		<canvas class="w-auto h-auto" id={name} width={imgWidth} height={imgHeight} />
	</div>
	{#if !loaded}
		<div class="loader" />
	{/if}
</div>

<style>
	.loader {
		border: 8px solid #f6fffa;
		border-radius: 50%;
		border-top: 8px solid #dbff73;
		width: 56px;
		height: 56px;
		-webkit-animation: spin 2s linear infinite; /* Safari */
		animation: spin 2s linear infinite;
	}

	/* Safari */
	@-webkit-keyframes spin {
		0% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
