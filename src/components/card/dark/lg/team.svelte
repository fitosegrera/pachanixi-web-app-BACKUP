<script>
	//COMPONENTS
	import Profile from '../../../iteractive/profile.svelte';

	//PROPS
	export let data;
	//console.log(data);

	let showProfile = false;

	const openProfile = () => {
		showProfile = true;
	};

	const closeProfile = () => {
		showProfile = false;
	};
</script>

<div class="w-420 h-auto bg-transparent">
	<div class="image-cropper w-340 h-340 mx-auto">
		<img src={data.profile_picture.url} alt="" />
	</div>
	<div class="w-full h-auto">
		<div class="h-full text-center">
			<p class="text-p1 font-bold text-primary-main mt-32">
				{data.name[0].text}
			</p>
			<p class="text-p3 font-medium text-primary-light pt-4">
				{data.rol[0].text}
			</p>
		</div>

		<div
			class="w-160 h-auto p-16 text-primary-main hover:bg-primary-main hover:text-primary-dark mt-24 mx-auto cursor-pointer"
		>
			<p class="text-p3 font-bold" on:click={openProfile}>{data.button_label}</p>
		</div>
	</div>
	{#if showProfile}
		<Profile
			on:closeProfile={closeProfile}
			profile_picture={data.profile_picture.url}
			name={data.name[0].text}
			rol={data.rol[0].text}
			bio={data.bio[0].text}
			website_icon={data.website_icon}
			website_url={data.website_url.url}
			twitter_icon={data.twitter_icon}
			twitter_url={data.twitter_url.url}
			instagram_icon={data.instagram_icon}
			instagram_url={data.instagram_url.url}
			facebook_icon={data.facebook_icon}
			facebook_url={data.facebook_url.url}
		/>
	{/if}
</div>

<style>
	.image-cropper {
		position: relative;
		overflow: hidden;
		border-radius: 50%;
	}

	img {
		margin: 0 auto;
		height: auto;
		width: auto;
	}
</style>
