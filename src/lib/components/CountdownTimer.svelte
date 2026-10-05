<script lang="ts">
	import { PUBLIC_WEDDING_DATETIME } from '$env/static/public';
	import {
		type TimeLeft,
		calculateTimeLeft
	} from '$lib/utils/countdown';

	const weddingDate = new Date(
		PUBLIC_WEDDING_DATETIME
	);

	let timeLeft: TimeLeft = $state({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});

	$effect(() => {
		timeLeft = calculateTimeLeft(weddingDate);
		const interval = setInterval(() => {
			timeLeft = calculateTimeLeft(weddingDate);
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<div class="countdown">
	<div class="unit">
		<span class="number">{timeLeft.days}</span>
		<span class="label">Days</span>
	</div>
	<div class="separator">:</div>
	<div class="unit">
		<span class="number">{timeLeft.hours}</span>
		<span class="label">Hrs</span>
	</div>
	<div class="separator">:</div>
	<div class="unit">
		<span class="number">{timeLeft.minutes}</span>
		<span class="label">Min</span>
	</div>
	<div class="separator">:</div>
	<div class="unit">
		<span class="number">{timeLeft.seconds}</span>
		<span class="label">Sec</span>
	</div>
</div>

<style>
	.countdown {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		margin-top: 1.5rem;
		padding: 1rem;
		border: 2px dashed var(--color-yellow);
		background: rgba(0, 0, 0, 0.3);
	}

	.unit {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.number {
		font-family: var(--font-pixel);
		font-size: 1.2rem;
		color: var(--color-light-pink);
		line-height: 1;
		text-shadow: 0 0 8px var(--color-light-pink);
	}

	.label {
		font-family: var(--font-body);
		font-size: 1rem;
		color: var(--color-yellow);
		margin-top: 0.3rem;
	}

	.separator {
		font-family: var(--font-pixel);
		font-size: 1.2rem;
		color: var(--color-pink);
		margin-top: -1rem;
	}

	@media (max-width: 480px) {
		.number {
			font-size: 0.9rem;
		}
	}
</style>
