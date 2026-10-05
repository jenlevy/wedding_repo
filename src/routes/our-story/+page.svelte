<script lang="ts">
	import { timeline } from '$lib/data/timeline';
</script>

<svelte:head>
	<title>Our Story — ~*~ J & A ~*~</title>
</svelte:head>

<section class="container page-section">
	<h1 class="page-title">
		&#9829; Our Story &#9829;
	</h1>
	<div class="divider"></div>
	<p class="page-subtitle">
		The milestones that brought us here!
	</p>

	<div class="timeline">
		{#each timeline as event, i}
			<div class="timeline-item retro-box">
				<div class="timeline-marker">
					<span class="marker-icon"
					>{i === timeline.length - 1
						? '♥'
						: '★'}</span
					>
				</div>
				<h3>{event.title}</h3>
				<span class="timeline-date"
					>[{event.date}]</span
				>
				<p>{event.description}</p>
				{#if event.images?.length}
					<div class="timeline-images">
						{#each event.images as src, j}
							<img
								class="timeline-image"
								{src}
								alt="{event.imageAlt ?? event.title} ({j + 1} of {event.images.length})"
								loading="lazy"
							/>
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</section>

<style>
	.timeline {
		max-width: 750px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.timeline-item {
		position: relative;
		text-align: center;
		background: var(--color-light-pink);
		box-shadow: 6px 6px 0 var(--color-yellow);

	}

	.timeline-marker {
		margin-bottom: 0.5rem;
	}

	.marker-icon {
		font-size: 1.5rem;
		color: var(--color-yellow);
		animation: rainbow 3s linear infinite;
	}

	.timeline-date {
		font-family: var(--font-body);
		font-size: 1.25rem;
		color: var(--color-bg-alt);
		display: block;
		margin-bottom: 0.25rem;
	}

	.timeline-item h3 {
		font-size: 0.75rem;
		margin-bottom: 0.5rem;
		color: var(--color-magenta);
		text-shadow: 1px 1px var(--color-yellow);
	}

	.timeline-item p {
		font-family: var(--font-body);
		font-size: 1.15rem;
		color: var(--color-bg);
	}

	.timeline-images {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1rem;
		margin-top: 1rem;
	}

	.timeline-image {
		width: 100%;
		height: 300px;
		object-fit: cover;
		border: 3px solid var(--color-pink);
		box-shadow: 4px 4px 0 var(--color-yellow);
	}
</style>
