<script>
	//LIBS
	import { onMount } from 'svelte';

	//PROPS
	export let name, w, h, pixCol;

	onMount(async () => {
		function RandomPixels(el, opts) {
			let self = this;
			this.el = el;
			this.opts = opts;

			this.pixelSize = this.opts.pixelSize || 1;

			this.height = this.el.clientHeight;
			this.width = this.el.clientWidth;
			this.cache = document.createDocumentFragment();

			this.getRandomColor = () => {
				let col;
				if (Math.random() > 0.975) {
					col = pixCol;
				} else {
					col = '#00000000';
				}
				return col;
			};

			this.createPixel = (x, y, color) => {
				color = color || self.getRandomColor();
				let pixel = document.createElement('div');
				pixel.style.height = self.pixelSize + 'px';
				pixel.style.width = self.pixelSize + 'px';
				pixel.style.position = 'absolute';
				pixel.style.left = x * self.pixelSize + 'px';
				pixel.style.top = y * self.pixelSize + 'px';
				pixel.style.background = color;

				self.cache.appendChild(pixel);
				return pixel;
			};

			const initialize = () => {
				let x = 0;
				let y = 0;
				self.el.style.position = 'relative';

				for (let x = 0; x <= self.width / self.pixelSize; x++) {
					for (let y = 0; y <= self.height / self.pixelSize; y++) {
						let predef = self.opts.forced[x] ? self.opts.forced[x][y] : undefined;
						self.createPixel(x, y, predef);
					}
				}

				self.el.appendChild(self.cache);
			};

			return {
				initialize: initialize
			};
		}

		let el = document.getElementById(name);
		new RandomPixels(el, {
			pixelSize: 8,
			forced: {
				0: {
					0: '#00000000'
				},
				1: {
					1: '#BDFF00'
				}
			}
		}).initialize();
	});
</script>

<div id={name} class={`w-${w} h-${h}`} />
