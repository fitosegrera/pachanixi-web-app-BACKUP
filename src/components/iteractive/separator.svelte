<script>
	//LIBS
	import P5 from 'p5-svelte';

	export let w, h;
	export let cols, rows;
	export let foreground, background;
	export let threshold;

	const sketch = (p5) => {
		let cellSize = w / cols;
		let yPos = 0;
		let yPosPrev = 0;
		let matrix;

		p5.setup = () => {
			p5.createCanvas(w, h);
			p5.rectMode(p5.CENTER);
			p5.noStroke();
			// p5.frameRate(12);

			matrix = new Array(rows);

			for (let y = 0; y < rows; y++) {
				matrix[y] = new Array(cols);
				for (let x = 0; x < cols; x++) {
					let r = p5.random();
					if (r > threshold) {
						matrix[y][x] = 1;
					} else {
						matrix[y][x] = 0;
					}
				}
			}
		};

		p5.draw = () => {
			p5.background(background);

			if (yPos !== yPosPrev) {
				randomMatrix();
			}

			for (let y = 0; y < rows; y++) {
				for (let x = 0; x < cols; x++) {
					let r = p5.random();
					if (matrix[y][x] == 1) {
						p5.fill(foreground);
					} else {
						p5.fill(background);
					}
					p5.rect(cellSize * x, cellSize * y, cellSize, cellSize);
				}
			}

			yPosPrev = yPos;
		};

		p5.mouseWheel = (event) => {
			yPos += event.pageY;
		};

		const randomMatrix = () => {
			for (let y = 0; y < rows; y++) {
				for (let x = 0; x < cols; x++) {
					let r = p5.random();
					if (r > threshold) {
						matrix[y][x] = 1;
					} else {
						matrix[y][x] = 0;
					}
				}
			}
		};
	};
</script>

<P5 {sketch} />
