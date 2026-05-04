<script lang="ts">
	import { photos } from '$lib/data/photos';

	let selectedPhoto = $state<string | null>(null);
</script>

<svelte:head>
	<title>Photos — ~*~ J & A ~*~</title>
</svelte:head>

<section class="container page-section">
	<h1 class="page-title">&#9733; Photos &#9733;</h1>
	<div class="divider"></div>
	<p class="page-subtitle">Some of our favorite moments!!</p>

	<!--
		TODO(learning): Style the .gallery class below!
		Make a responsive grid of photo cards using CSS Grid.
		See the practice prompt in chat for details.
	-->
	<div class="gallery">
		{#each photos as photo}
			<button class="gallery-item" onclick={() => (selectedPhoto = photo.src)}>
				<img src={photo.src} alt={photo.alt} />
				<div class="caption">[{photo.alt}]</div>
			</button>
		{/each}
	</div>
</section>

{#if selectedPhoto}
	<div class="lightbox" role="dialog" aria-modal="true">
		<button class="lightbox-close" onclick={() => (selectedPhoto = null)} aria-label="Close">[X]</button>
		<button class="lightbox-bg" onclick={() => (selectedPhoto = null)} aria-label="Close"></button>
		<img src={selectedPhoto} alt="Enlarged view" class="lightbox-img" />
	</div>
{/if}

<style>
	/* TODO(learning): Replace this empty .gallery rule with your CSS grid layout! */
	.gallery {
	}

	.gallery-item {
		border: 3px solid var(--color-pink);
		padding: 0.5rem;
		cursor: pointer;
		background: var(--color-bg-alt);
		box-shadow: 3px 3px 0 var(--color-magenta);
		transition: transform 0.15s;
		text-align: center;
	}

	.gallery-item:hover {
		transform: translate(-2px, -2px);
		box-shadow: 5px 5px 0 var(--color-magenta);
	}

	.gallery-item img {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
		border: 1px solid var(--color-cyan);
	}

	.caption {
		font-family: var(--font-body);
		font-size: 1rem;
		color: var(--color-cyan);
		margin-top: 0.4rem;
	}

	.lightbox {
		position: fixed;
		inset: 0;
		z-index: 200;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.lightbox-bg {
		position: absolute;
		inset: 0;
		background: rgba(26, 10, 46, 0.95);
		border: none;
		cursor: pointer;
	}

	.lightbox-img {
		position: relative;
		max-width: 90vw;
		max-height: 85vh;
		object-fit: contain;
		border: 3px solid var(--color-pink);
	}

	.lightbox-close {
		position: absolute;
		top: 1rem;
		right: 1.5rem;
		z-index: 201;
		background: none;
		border: 2px solid var(--color-pink);
		color: var(--color-pink);
		font-family: var(--font-pixel);
		font-size: 0.7rem;
		cursor: pointer;
		padding: 0.3rem 0.6rem;
	}

	.lightbox-close:hover {
		background: var(--color-pink);
		color: var(--color-bg);
	}
</style>
