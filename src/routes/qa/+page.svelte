<script lang="ts">
	import { faqs } from '$lib/data/events';

	// Tracks which FAQ item is currently open (null = none).
	let openIndex: number | null = $state(null);

	function toggle(index: number): void {
		// TODO(learning): Implement this!
		// If the clicked index is already open, close it (set to null).
		// Otherwise, open it (set to the clicked index).
	}
</script>

<svelte:head>
	<title>Q + A — ~*~ J & A ~*~</title>
</svelte:head>

<section class="container page-section">
	<h1 class="page-title">&#63; Questions & Answers &#63;</h1>
	<div class="divider"></div>
	<p class="page-subtitle">Everything you need to know!!</p>

	<div class="faq-list">
		{#each faqs as faq, i}
			<div class="faq-item retro-box" class:open={openIndex === i}>
				<button class="faq-question" onclick={() => toggle(i)}>
					<span>&gt; {faq.question}</span>
					<span class="toggle-icon">{openIndex === i ? '[-]' : '[+]'}</span>
				</button>
				{#if openIndex === i}
					<div class="faq-answer">
						<p>{faq.answer}</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</section>

<style>
	.faq-list {
		max-width: 850px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.faq-item {
		padding: 0;
	}

	.faq-question {
		width: 100%;
		background: none;
		border: none;
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
		text-align: left;
		font-family: var(--font-body);
		font-size: 1.2rem;
		color: var(--color-yellow);
		transition: color 0.15s;
	}

	.faq-question:hover {
		color: var(--color-pink);
	}

	.toggle-icon {
		font-family: var(--font-pixel);
		font-size: 0.6rem;
		color: var(--color-lime);
		flex-shrink: 0;
		margin-left: 1rem;
	}

	.faq-answer {
		padding: 0 1rem 1rem;
		border-top: 1px dashed var(--color-pink);
		margin-top: 0;
	}

	.faq-answer p {
		color: var(--color-cyan);
		font-family: var(--font-body);
		font-size: 1.15rem;
		line-height: 1.6;
		padding-top: 0.75rem;
	}
</style>
