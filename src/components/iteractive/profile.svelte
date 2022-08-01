<script>
	//LIBS
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';

	//COMPONENTS
	import CloseButton from '../button/dark/lg/close.svelte';
	import SocialButton from '../button/dark/lg/social.svelte';

	//PROPS
	export let profile_picture,
		name,
		rol,
		bio,
		website_icon,
		website_url,
		twitter_icon,
		twitter_url,
		instagram_icon,
		instagram_url,
		facebook_icon,
		facebook_url;

	const dispatch = createEventDispatcher();

	const handleClick = () => {
		dispatch('closeProfile');
	};
</script>

<div class="profile-wrapper w-full h-full bg-primary-dark" transition:fly={{ x: 1920, opacity: 1 }}>
	<div class="grid grid-flow-col grid-cols-3 w-full h-full">
		<div class="close-button-wrapper" on:click={handleClick}>
			<CloseButton icon={'ant-design:close-square-outlined'} />
		</div>
		<div class="img-wrapper pt-16" style="background-image: url({profile_picture})" />
		<div class="col-span-2 w-auto h-auto px-112 pt-88 text-left">
			<div class="relative">
				<div class="text-h6 text-primary-main font-bold">
					<h6>{name}</h6>
				</div>
				<div class="text-p3 text-primary-light font-bold pt-4">
					<p>{rol}</p>
				</div>
				<div class="bio-wrapper text-p2 text-primary-light font-medium mt-48 pr-32">
					<p>{bio}</p>
				</div>
				<div class="flex space-x-32 text-h5 text-primary-light font-medium pt-48">
					<SocialButton icon={website_icon} active={true} name={'website'} url={website_url} />
					<SocialButton icon={twitter_icon} active={true} name={'twitter'} url={twitter_url} />
					<SocialButton
						icon={instagram_icon}
						active={true}
						name={'instagram'}
						url={instagram_url}
					/>
					<SocialButton icon={facebook_icon} active={true} name={'facebook'} url={facebook_url} />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.profile-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 100;
	}

	.close-button-wrapper {
		position: absolute;
		top: 0;
		right: 0;
	}

	.img-wrapper {
		width: 100%;
		height: 100%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.bio-wrapper {
		overflow-y: scroll;
		width: 100%;
		height: 360px;
	}

	::-webkit-scrollbar {
		width: 20px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: #02232b;
		border-radius: 0px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #bdff00;
		border-radius: 0px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #f6fffa;
	}
</style>
