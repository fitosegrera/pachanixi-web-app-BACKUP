<script>
	//LIBS
	import { onMount } from 'svelte';
	import { browser } from '$app/env';

	//PORPS
	export let url;
	export let name;
	export let imgWidth, imgHeight;
	export let totalFrames;

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
					frames[i].onload = function () {
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
	});
</script>

<div class="animation-wrapper">
	<div class="canvas-wrapper">
		<canvas class="w-auto h-auto" id={name} width={imgWidth} height={imgHeight} />
	</div>
</div>
