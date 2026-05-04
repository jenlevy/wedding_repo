<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="footer-inner">
		<div class="footer-stars">
			<span>&#9733;</span>
			<span>&#9733;</span>
			<span>&#9733;</span>
		</div>
		<p class="footnote">~ J & A's Wedding Page ~</p>
		<p class="copy">&copy; {year}</p>
	</div>
</footer>

<style>
	.footer {
		border-top: 3px solid var(--color-pink);
		padding: 2rem 1rem;
		text-align: center;
		background: var(--color-bg-alt);
	}

	.footer-inner {
		max-width: var(--max-width);
		margin: 0 auto;
	}

	.footer-stars {
		font-size: 1.2rem;
		color: var(--color-yellow);
		margin-bottom: 0.75rem;
		display: flex;
		justify-content: center;
		gap: 1rem;
		animation: rainbow 3s linear infinite;
	}

	.footnote {
		font-family: var(--font-pixel);
		font-size: 0.65rem;
		color: var(--color-pink);
		margin-bottom: 0.5rem;
	}

	.copy {
		font-family: var(--font-body);
		font-size: 1rem;
		color: var(--color-purple);
		margin-bottom: 1rem;
	}

</style>
