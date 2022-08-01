<script>
	//PROPS
	export let data;
</script>

<div class="w-420 h-auto bg-primary-dark-variant mx-64 shadow-xl">
	<div clsas="w-full h-368">
		<video width="420" height="368" autoplay loop muted>
			<source src={data.video_path} type="video/mp4" />
		</video>
	</div>
	<div class="w-full h-8 bg-primary-semi-dark" />
	<div clsas="w-full h-auto">
		<div class="h-full float-left">
			<p class="text-p3 font-bold text-primary-light text-left pt-24 pl-16">
				{data.nft_project_name}
			</p>
			<p class="text-p4 font-medium text-primary-light text-left py-8 pl-16">
				{data.nft_id_number}
			</p>
		</div>
		<div class="h-full float-right">
			<p class="text-p3 font-bold text-primary-light text-right pt-24 pr-16">Price</p>
			<div class="flex items-center space-x-8 w-full h-auto pr-16">
				<img width="24px" src={data.crypto_logo.url} alt="cardano logo" />
				<p class="text-p4 font-medium text-primary-light text-center py-8">75.00</p>
			</div>
		</div>
	</div>
</div>
