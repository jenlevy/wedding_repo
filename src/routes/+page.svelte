<script lang="ts">
	import HeroTop from '$lib/components/HeroTop.svelte';
	import HeroBottom from '$lib/components/HeroBottom.svelte';
	import ja1 from '$lib/assets/ja_1.jpg';
	import ja2 from '$lib/assets/ja_2.jpg';
	import ja4 from '$lib/assets/ja_4.jpg';
    import ja5 from '$lib/assets/ja_5.jpg';
    import ja6 from '$lib/assets/ja_6.jpg';
    import ja7 from '$lib/assets/ja_7.jpg';
    import ja8 from '$lib/assets/ja_8.jpg';
    import ja9 from '$lib/assets/ja_9.jpg';




	const slides = [
		{ src: ja1, alt: 'Jenna and Adrian playing pool', file: 'ja_pool.jpg' },
		{ src: ja2, alt: 'Jenna and Adrian at the bar', file: 'ja_chess.jpg' },
		{ src: ja4, alt: 'Jenna and Adrian on the couch', file: 'ja_couch.jpg' },
        { src: ja5, alt: 'Jenna and Adrian on the porch', file: 'ja_porch.jpg'},
        { src: ja6, alt: 'Jenna and Adrian at the pool hall', file: 'ja_pool.jpg'},
        { src: ja7, alt: 'Jenna and Adrian playing at the pool hall', file: 'ja_pool_2.jpg'},
        { src: ja8, alt: 'Jenna and Adrian eating pool balls', file: 'ja_pool_balls.jpg'},
        { src: ja9, alt: 'Jenna and Adrian in the flowers', file: 'ja_flowers.jpg'}

	];  

	let current = $state(0);

	function prev() {
		current = (current - 1 + slides.length) % slides.length;
	}

	function next() {
		current = (current + 1) % slides.length;
	}
</script>

<svelte:head>
	<title>~*~ J & A Wedding ~*~</title>
</svelte:head>

<section class="hero-section container page-section">
	<div class="retro-box hero-box">
		<HeroTop />

		<div class="crt-wrap">
			<button class="slide-btn prev" onclick={prev} aria-label="Previous photo">&lt;&lt;</button>

			<div class="crt-monitor">
				<div class="crt-top-bar">
					<span class="crt-dots">
						<span class="dot red"></span>
						<span class="dot yellow"></span>
						<span class="dot green"></span>
					</span>
					<span class="crt-title">{slides[current].file}</span>
				</div>
				<div class="crt-screen">
					{#key current}
						<img src={slides[current].src} alt={slides[current].alt} class="couple-photo" />
					{/key}
				</div>
				<div class="crt-bottom">
					<span class="crt-label">[{current + 1} / {slides.length}]  &#9829; j+a.exe &#9829;</span>
				</div>
			</div>

			<button class="slide-btn next" onclick={next} aria-label="Next photo">&gt;&gt;</button>
		</div>

		<div class="slide-pips">
			{#each slides as _, i}
				<button
					class="pip"
					class:active={i === current}
					onclick={() => (current = i)}
					aria-label="Go to slide {i + 1}"
				></button>
			{/each}
		</div>

		<HeroBottom />
	</div>
</section>

<section class="welcome container page-section">
	<div class="retro-box welcome-box">
		<h2 class="page-title">&#9733; Welcome! &#9733;</h2>
		<div class="divider"></div>
		<p class="welcome-text">
			We are SO excited to share this special day with you!! Browse our site to learn more about
			our story, see photos, and let us know if you can make it!
		</p>
		<p class="under-construction">&#9888; Some pages still under construction &#9888;</p>
		<a href="/rsvp" class="rsvp-btn">&gt;&gt; RSVP Now &lt;&lt;</a>
	</div>
</section>

<style>
	.hero-section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.hero-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
		width: 100%;
		max-width: 900px;
	}

	.crt-wrap {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	.slide-btn {
		font-family: var(--font-pixel);
		font-size: 1.2rem;
		color: var(--color-yellow);
		background: var(--color-magenta);
		border: 3px outset var(--color-magenta);
		padding: 1.5rem 1rem;
		cursor: pointer;
		transition: all 0.15s;
		border-radius: 4px;
		line-height: 1;
	}

	.slide-btn:hover {
		background: var(--color-pink);
		border-color: var(--color-pink);
		transform: scale(1.1);
		color: var(--color-bg);
	}

	.slide-btn:active {
		transform: scale(0.95);
		border-style: inset;
	}

	.crt-monitor {
		width: min(700px, 70vw);
		border: 4px solid var(--color-magenta);
		border-radius: 12px;
		background: #1a1a2a;
		box-shadow:
			6px 6px 0 var(--color-purple),
			0 0 30px rgba(221, 123, 223, 0.15);
		overflow: hidden;
	}

	.crt-top-bar {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.5rem 0.75rem;
		background: var(--color-magenta);
	}

	.crt-dots {
		display: flex;
		gap: 5px;
	}

	.dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
	}

	.dot.red { background: #ff5f57; }
	.dot.yellow { background: var(--color-yellow); }
	.dot.green { background: #28c840; }

	.crt-title {
		font-family: var(--font-pixel);
		font-size: 0.45rem;
		color: var(--color-yellow);
	}

	.crt-screen {
		position: relative;
		padding: 0.75rem;
		background: #0a0a1a;
	}

	.couple-photo {
		width: 100%;
		aspect-ratio: 3 / 2;
		object-fit: cover;
		border-radius: 2px;
		display: block;
	}

	.crt-bottom {
		padding: 0.4rem;
		text-align: center;
		background: var(--color-magenta);
	}

	.crt-label {
		font-family: var(--font-pixel);
		font-size: 0.4rem;
		color: var(--color-yellow);
	}

	.slide-pips {
		display: flex;
		gap: 0.5rem;
		justify-content: center;
	}

	.pip {
		width: 14px;
		height: 14px;
		border: 2px solid var(--color-pink);
		background: transparent;
		cursor: pointer;
		transition: all 0.15s;
		padding: 0;
	}

	.pip.active {
		background: var(--color-pink);
		box-shadow: 0 0 8px var(--color-pink);
	}

	.pip:hover {
		background: var(--color-yellow);
		border-color: var(--color-yellow);
	}

	@media (max-width: 480px) {
		.crt-monitor {
			width: 85vw;
		}

		.slide-btn {
			font-size: 0.8rem;
			padding: 1rem 0.6rem;
		}
	}

	.welcome {
		text-align: center;
		max-width: 800px;
	}

	.welcome-box {
		text-align: center;
	}

	.welcome-text {
		font-family: var(--font-body);
		font-size: 1.3rem;
		color: var(--color-cyan);
		line-height: 1.6;
		margin-bottom: 1rem;
	}

	.under-construction {
		font-family: var(--font-body);
		font-size: 1.1rem;
		color: var(--color-yellow);
		animation: blink 1s step-end infinite;
		margin-bottom: 1.5rem;
	}

	.rsvp-btn {
		display: inline-block;
		padding: 0.75rem 2rem;
		background: var(--color-lime);
		color: var(--color-bg);
		font-family: var(--font-pixel);
		font-size: 0.65rem;
		text-decoration: none;
		border: 3px outset var(--color-lime);
		cursor: pointer;
		transition: all 0.1s;
	}

	.rsvp-btn:hover {
		background: var(--color-pink);
		border-color: var(--color-pink);
		color: var(--color-bg);
		transform: scale(1.05);
	}
</style>
