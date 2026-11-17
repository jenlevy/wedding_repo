<script lang="ts">
	let { title, message }: { title: string; message: string } = $props();
</script>

<section class="container page-section">
	<h1 class="page-title">
		&#9829; {title} &#9829;
	</h1>
	<div class="divider"></div>

	<div class="coming-soon retro-box">
		<p class="warning blink">&#9888; UNDER CONSTRUCTION &#9888;</p>
		<h2>Coming Soon!!</h2>
		<p class="message">{message}</p>
		<p class="sparkles">&#10023; &#10023; &#10023;</p>
	</div>
</section>

<style>
	.coming-soon {
		max-width: 600px;
		margin: 0 auto;
		text-align: center;
	}

	.warning {
		font-family: var(--font-pixel);
		font-size: 0.6rem;
		color: var(--color-yellow);
		margin-bottom: 1rem;
	}

	h2 {
		font-size: 0.9rem;
		color: var(--color-pink);
		text-shadow: 1px 1px var(--color-magenta);
		margin-bottom: 1rem;
	}

	.message {
		font-family: var(--font-body);
		font-size: 1.3rem;
		color: var(--color-light-pink);
	}

	.sparkles {
		font-size: 1.5rem;
		margin-top: 1rem;
		animation: rainbow 3s linear infinite;
	}
</style>
