<script lang="ts">
	import { timeline } from '$lib/data/events';
</script>

<svelte:head>
	<title>Our Story — ~*~ J & A ~*~</title>
</svelte:head>

<section class="container page-section">
	<h1 class="page-title"> &#9829; Our Story &#9829;</h1>
	<div class="divider"></div>
	<p class="page-subtitle">The milestones that brought us here!</p>

	<div class="timeline">
		{#each timeline as event, i}
			<div class="timeline-item retro-box">
				<div class="timeline-marker">
					<span class="marker-icon">{i === timeline.length - 1 ? '&#9829;' : '&#9733;'}</span>
				</div>
				<span class="timeline-date">[{event.date}]</span>
				<h3>{event.title}</h3>
				<p>{event.description}</p>
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
		font-size: 1.1rem;
		color: var(--color-lime);
		display: block;
		margin-bottom: 0.25rem;
	}

	.timeline-item h3 {
		font-size: 0.75rem;
		margin-bottom: 0.5rem;
		color: var(--color-pink);
		text-shadow: 1px 1px var(--color-magenta);
	}

	.timeline-item p {
		font-family: var(--font-body);
		font-size: 1.15rem;
		color: var(--color-cyan);
	}
</style>
