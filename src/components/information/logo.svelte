<script>
	//LIBS
	import P5 from 'p5-svelte';

	//PROPS
	export let type;
	export let url;

	let logoWidth = 600;
	let logoHeight = 640;
	let voxelSize = 75;

	const sketch = (p5) => {
		p5.setup = () => {
			p5.createCanvas(logoWidth, logoHeight);
			p5.angleMode(p5.DEGREES);
			p5.rectMode(p5.CENTER);
			p5.frameRate(24);
		};

		p5.draw = () => {
			p5.push();
			p5.scale(0.5);
			renderLogo(logoWidth, logoHeight);
			p5.pop();
		};

		function renderLogo(sizeX, sizeY) {
			p5.fill('#F6FFFA');
			p5.noStroke();

			//Base
			for (let i = 0; i < 7; i++) {
				p5.rect(voxelSize + i * voxelSize, logoHeight - voxelSize / 2, voxelSize, voxelSize);
			}

			//Stem
			p5.rect(logoWidth / 2, logoHeight - voxelSize * 1.5, voxelSize, voxelSize);

			//Branches
			p5.push();
			p5.translate(0, 40);

			//Branch Left
			p5.push();
			p5.translate(logoWidth / 2, -voxelSize * 1.6);
			p5.rotate(45);
			p5.rect(logoWidth / 2 - voxelSize / 2, logoHeight - voxelSize * 3, -voxelSize * 5, voxelSize);
			p5.pop();

			//Branch Right
			p5.push();
			p5.translate(-voxelSize, voxelSize * 3.35);
			p5.rotate(-45);
			p5.rect(logoWidth / 2 - voxelSize / 2, logoHeight - voxelSize * 3, -voxelSize * 5, voxelSize);
			p5.pop();
			p5.pop();

			//Leaves
			p5.push();
			p5.translate(0, 18, 0);

			//Left
			p5.push();
			p5.translate(-8, -10, 0);

			//L1
			p5.push();
			p5.translate(0, -voxelSize / 1.5, 0);
			p5.rotate(45);
			p5.rect(logoWidth / 2, voxelSize, voxelSize, voxelSize);
			p5.pop();

			//L2
			p5.push();
			p5.translate(voxelSize, -voxelSize * 1.64, 0);
			p5.rotate(45);
			p5.rect(logoWidth / 2, voxelSize, voxelSize, voxelSize);
			p5.pop();
			p5.pop();

			//Right
			p5.push();
			p5.translate(8, -10, 0);

			//R1
			p5.push();
			p5.translate(voxelSize * 2.3, voxelSize * 5, 0);
			p5.rotate(-45);
			p5.rect(logoWidth / 2, voxelSize, voxelSize, voxelSize);
			p5.pop();

			//R2
			p5.push();
			p5.translate(voxelSize * 1.3, voxelSize * 4.02, 0);
			p5.rotate(-45);
			p5.rect(logoWidth / 2, voxelSize, voxelSize, voxelSize);
			p5.pop();
			p5.pop();

			//Top
			p5.push();
			p5.translate(voxelSize * 1.85, -voxelSize * 2.75, 0);
			p5.rotate(45);
			p5.rect(logoWidth / 2, voxelSize, voxelSize, voxelSize);
			p5.pop();

			//Nixi
			let scaleAdjust = 4;
			let startX = logoWidth / 2 - voxelSize + voxelSize / scaleAdjust / 2;
			let startY = voxelSize / scaleAdjust / 2;
			p5.noStroke();
			p5.push();
			p5.translate(voxelSize * 1.85, voxelSize / 7, 0);
			p5.rotate(45);
			p5.fill('#02232B');
			p5.rect(logoWidth / 2, voxelSize, voxelSize * 2, voxelSize * 2);
			for (let x = 0; x < 8; x++) {
				for (let y = 0; y < 8; y++) {
					let r = p5.random();
					if (r < 0.2) {
						p5.fill('#F6FFFA');
					} else {
						p5.fill('#02232B00');
					}
					p5.rect(
						startX + (voxelSize / scaleAdjust) * x,
						startY + (voxelSize / scaleAdjust) * y,
						voxelSize / scaleAdjust,
						voxelSize / scaleAdjust
					);
				}
			}
			p5.pop();
		}
	};
</script>

<P5 {sketch} />
