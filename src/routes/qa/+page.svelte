<script lang="ts">
	import { faqs } from '$lib/data/faq';

	// Tracks which FAQ item is currently open (null = none).
	let openIndex: number | null = $state(null);

	function toggle(index: number): void {
		openIndex =
			index === openIndex ? null : index;
	}
</script>

<svelte:head>
	<title>Q + A — ~*~ J & A ~*~</title>
</svelte:head>

<section class="container page-section">
	<h1 class="page-title">
		&#63; Questions & Answers &#63;
	</h1>
	<div class="divider"></div>
	<p class="page-subtitle">
		Everything you need to know!!
	</p>

	<div class="faq-list">
		{#each faqs as faq, i}
			<div
				class="faq-item retro-box"
				class:open={openIndex === i}
			>
				<button
					class="faq-question"
					onclick={() => toggle(i)}
				>
					<span>&gt; {faq.question}</span>
					<span class="toggle-icon"
						>{openIndex === i
							? '[-]'
							: '[+]'}</span
					>
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
		padding: 0.4rem;
	}

	.faq-item.open .faq-question {
		background: var(--color-magenta);
		color: var(--color-bg);
	}

	.faq-item.open .faq-answer {
		background: var(--color-pink);
	}

	.faq-item.open .faq-answer p {
		color: var(--color-bg);
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
		font-size: 1.4rem;
		color: var(--color-yellow);
		transition: color 0.15s;
	}

	.faq-question:hover {
		color: var(--color-pink);
	}

	.toggle-icon {
		font-family: var(--font-pixel);
		font-size: 0.6rem;
		color: var(--color-light-pink);
		flex-shrink: 0;
		margin-left: 1rem;
	}

	.faq-answer {
		padding: 0 1rem 1rem;
		border-top: 1px dashed var(--color-pink);
		margin-top: 0;
	}

	.faq-answer p {
		color: var(--color-yellow);
		font-family: var(--font-body);
		font-size: 1.15rem;
		line-height: 1.6;
		padding-top: 0.75rem;
	}
</style>
