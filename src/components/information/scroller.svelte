<script>
	//PROPS
	export let data;
</script>

<div
	class="bg-blur w-screen flex items-center justify-center text-p2 font-bold text-primary-main h-72 py-16 bg-secondary-main"
>
	<div id="scroll-container">
		<div id="scroll-text">
			<h1 class="">{data}</h1>
		</div>
	</div>
</div>

<style>
	#scroll-container {
		overflow: hidden;
	}

	#scroll-text {
		/* animation properties */
		-moz-transform: translateX(100%);
		-webkit-transform: translateX(100%);
		transform: translateX(100%);

		-moz-animation: scroller-animation 25s linear infinite;
		-webkit-animation: scroller-animation 25s linear infinite;
		animation: scroller-animation 25s linear infinite;
	}

	/* for Firefox */
	@-moz-keyframes scroller-animation {
		from {
			-moz-transform: translateX(100%);
		}
		to {
			-moz-transform: translateX(-100%);
		}
	}

	/* for Chrome */
	@-webkit-keyframes scroller-animation {
		from {
			-webkit-transform: translateX(100%);
		}
		to {
			-webkit-transform: translateX(-100%);
		}
	}

	@keyframes scroller-animation {
		from {
			-moz-transform: translateX(100%);
			-webkit-transform: translateX(100%);
			transform: translateX(100%);
		}
		to {
			-moz-transform: translateX(-100%);
			-webkit-transform: translateX(-100%);
			transform: translateX(-100%);
		}
	}

	.bg-blur {
		backdrop-filter: blur(8px);
	}
</style>
