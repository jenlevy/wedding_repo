<script lang="ts">
	import { thingsToDo } from '$lib/data/events';

	const categoryLabels: Record<string, string> = {
		eat: '&#127829; Eat',
		see: '&#128065; See',
		do: '&#9889; Do'
	};

	const categories = ['eat', 'see', 'do'] as const;
</script>

<svelte:head>
	<title>Things to Do — ~*~ J & A ~*~</title>
</svelte:head>

<section class="container page-section">
	<h1 class="page-title">&#9733; Things to Do &#9733;</h1>
	<div class="divider"></div>
	<p class="page-subtitle">Exploring the area? Here are our picks!</p>

	{#each categories as category}
		{@const items = thingsToDo.filter((t) => t.category === category)}
		{#if items.length > 0}
			<div class="category-section">
				<h2 class="category-title">{@html categoryLabels[category]}</h2>
				<div class="card-grid">
					{#each items as item}
						<div class="card retro-box">
							<h3>{item.name}</h3>
							<p>{item.description}</p>
							{#if item.link}
								<a href={item.link} target="_blank" rel="noopener noreferrer">&gt;&gt; Check it out</a>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		{/if}
	{/each}
</section>

<style>
	.category-section {
		margin-bottom: 2.5rem;
	}

	.category-title {
		font-size: 0.8rem;
		color: var(--color-pink);
		text-shadow: 1px 1px var(--color-magenta);
		margin-bottom: 1rem;
		text-align: center;
	}

	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1rem;
		max-width: 1050px;
		margin: 0 auto;
	}

	.card {
		text-align: center;
		transition: transform 0.15s;
	}

	.card:hover {
		transform: translate(-2px, -2px);
		box-shadow: 6px 6px 0 var(--color-magenta);
	}

	.card h3 {
		font-size: 0.65rem;
		color: var(--color-yellow);
		margin-bottom: 0.5rem;
	}

	.card p {
		font-family: var(--font-body);
		font-size: 1.1rem;
		color: var(--color-cyan);
		margin-bottom: 0.75rem;
	}

	.card a {
		font-family: var(--font-pixel);
		font-size: 0.5rem;
		color: var(--color-lime);
	}

	.card a:hover {
		color: var(--color-pink);
	}
</style>
