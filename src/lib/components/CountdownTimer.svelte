<script lang="ts">
	import { PUBLIC_WEDDING_DATETIME } from '$env/static/public';

	interface TimeLeft {
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
	}

	const weddingDate = new Date(PUBLIC_WEDDING_DATETIME);

	let timeLeft: TimeLeft = $state({ days: 0, hours: 0, minutes: 0, seconds: 0 });

	function calculateTimeLeft(): TimeLeft {
		let diff = weddingDate.getTime() - Date.now();
		if (diff >= 0) {
			let daysLeft = Math.floor(diff / 86400000);
			diff = diff % 86400000;

			let hoursLeft = Math.floor(diff / 3600000);
			diff = diff % 3600000;

			let minutesLeft = Math.floor(diff / 60000);
			diff = diff % 60000;

			let secondsLeft = Math.floor(diff / 1000);
			return { days: daysLeft, hours: hoursLeft, minutes: minutesLeft, seconds: secondsLeft };
		} else {
			return { days: 0, hours: 0, minutes: 0, seconds: 0 };
		}
	}

	$effect(() => {
		timeLeft = calculateTimeLeft();
		const interval = setInterval(() => {
			timeLeft = calculateTimeLeft();
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
		border: 2px dashed var(--color-cyan);
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
		color: var(--color-lime);
		line-height: 1;
		text-shadow: 0 0 8px var(--color-lime);
	}

	.label {
		font-family: var(--font-body);
		font-size: 1rem;
		color: var(--color-cyan);
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
