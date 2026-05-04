<script lang="ts">
	import { registries } from '$lib/data/registry';
</script>

<svelte:head>
	<title>Registry — ~*~ J & A ~*~</title>
</svelte:head>

<section class="container page-section">
	<h1 class="page-title">&#9829; Registry &#9829;</h1>
	<div class="divider"></div>
	<p class="page-subtitle">Your presence is the greatest gift!<br/>But if you'd like to give something more...</p>

	<div class="registry-grid">
		{#each registries as item}
			<a href={item.url} target="_blank" rel="noopener noreferrer" class="registry-card retro-box">
				<h3>&#9733; {item.name} &#9733;</h3>
				<p>{item.description}</p>
				<span class="card-link">&gt;&gt; Visit &lt;&lt;</span>
			</a>
		{/each}
	</div>
</section>

<style>
	.registry-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
		max-width: 1050px;
		margin: 0 auto;
	}

	.registry-card {
		text-align: center;
		text-decoration: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		transition: transform 0.15s;
	}

	.registry-card:hover {
		transform: translate(-2px, -2px);
		box-shadow: 6px 6px 0 var(--color-magenta);
	}

	.registry-card h3 {
		font-size: 0.7rem;
		margin-bottom: 0.75rem;
		color: var(--color-pink);
	}

	.registry-card p {
		color: var(--color-cyan);
		font-family: var(--font-body);
		font-size: 1.15rem;
		margin-bottom: 1rem;
		flex: 1;
	}

	.card-link {
		font-family: var(--font-pixel);
		font-size: 0.55rem;
		color: var(--color-lime);
		border: 2px solid var(--color-lime);
		padding: 0.4rem 0.8rem;
		transition: all 0.15s;
	}

	.registry-card:hover .card-link {
		background: var(--color-lime);
		color: var(--color-bg);
	}
</style>
