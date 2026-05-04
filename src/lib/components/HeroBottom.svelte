<script lang="ts">
	import CountdownTimer from './CountdownTimer.svelte';
	import { PUBLIC_WEDDING_DATE, PUBLIC_VENUE_NAME, PUBLIC_VENUE_ADDRESS } from '$env/static/public';
</script>

<div class="hero-bottom">
	<div class="divider"></div>
	<p class="date">&#9829; {PUBLIC_WEDDING_DATE} &#9829;</p>
	<p class="venue">{PUBLIC_VENUE_NAME}</p>
	<p class="address">[ {PUBLIC_VENUE_ADDRESS} ]</p>
	<CountdownTimer />
	<div class="sparkles">&#10023; &#10023; &#10023;</div>
</div>

<style>
	.hero-bottom {
		max-width: 800px;
		width: 100%;
		margin: 0 auto;
		text-align: center;
	}

	.sparkles {
		font-size: 1.5rem;
		color: var(--color-yellow);
		margin: 0.5rem 0;
		animation: rainbow 3s linear infinite;
	}

	.date {
		font-family: var(--font-body);
		font-size: 1.5rem;
		color: var(--color-pink);
		margin-bottom: 0.25rem;
	}

	.venue {
		font-family: var(--font-body);
		font-size: 1.2rem;
		color: var(--color-cyan);
		margin-bottom: 0.5rem;
	}

	.address {
		font-family: var(--font-body);
		font-size: 1rem;
		color: var(--color-cyan);
		margin-bottom: 0.5rem;
	}
</style>
