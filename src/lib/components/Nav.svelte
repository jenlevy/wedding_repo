<script lang="ts">
	import { page } from '$app/state';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/our-story', label: 'Our Story' },
		{ href: '/photos', label: 'Photos' },
		{ href: '/qa', label: 'Q + A' },
		{ href: '/registry', label: 'Registry' },
		{ href: '/things-to-do', label: 'Things to Do' },
		{ href: '/rsvp', label: 'RSVP' }
	];

	let mobileOpen = $state(false);

	function closeMobile() {
		mobileOpen = false;
	}
</script>

<nav class="nav">
	<div class="nav-inner">
		<a href="/" class="monogram">~ J & A ~</a>

		<button
			class="hamburger"
			aria-label="Toggle menu"
			aria-expanded={mobileOpen}
			onclick={() => (mobileOpen = !mobileOpen)}
		>
			<span class="bar" class:open={mobileOpen}></span>
			<span class="bar" class:open={mobileOpen}></span>
			<span class="bar" class:open={mobileOpen}></span>
		</button>

		<ul class="links" class:show={mobileOpen}>
			{#each links as link}
				<li>
					<a href={link.href} class:active={page.url.pathname === link.href} onclick={closeMobile}>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<div class="marquee-bar">
	<div class="marquee-text">&#9829; Welcome to our wedding website! &#9829;</div>
</div>

<style>
	.nav {
		position: sticky;
		top: 0;
		z-index: 100;
		background: var(--color-bg-alt);
		border-bottom: 3px solid var(--color-pink);
		height: var(--nav-height);
		display: flex;
		align-items: center;
	}

	.nav-inner {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 0 1rem;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.monogram {
		font-family: var(--font-pixel);
		font-size: 0.85rem;
		color: var(--color-yellow);
		text-decoration: none;
		text-shadow: 2px 2px var(--color-pink);
	}

	.monogram:hover {
		color: var(--color-cyan);
	}

	.links {
		display: flex;
		list-style: none;
		gap: 0.25rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	.links a {
		font-family: var(--font-body);
		font-size: 1.1rem;
		color: var(--color-cyan);
		text-decoration: none;
		padding: 0.25rem 0.5rem;
		border: 1px solid transparent;
		transition: all 0.15s;
	}

	.links a:hover {
		color: var(--color-bg);
		background: var(--color-cyan);
		border-color: var(--color-cyan);
	}

	.links a.active {
		color: var(--color-bg);
		background: var(--color-pink);
		border-color: var(--color-pink);
	}

	.hamburger {
		display: none;
		background: none;
		border: 2px solid var(--color-cyan);
		cursor: pointer;
		padding: 0.4rem;
		flex-direction: column;
		gap: 4px;
	}

	.bar {
		display: block;
		width: 20px;
		height: 2px;
		background: var(--color-cyan);
		transition:
			transform 0.3s,
			opacity 0.3s;
	}

	.bar.open:nth-child(1) {
		transform: rotate(45deg) translate(4px, 4px);
	}
	.bar.open:nth-child(2) {
		opacity: 0;
	}
	.bar.open:nth-child(3) {
		transform: rotate(-45deg) translate(4px, -4px);
	}

	.marquee-bar {
		background: var(--color-pink);
		overflow: hidden;
		white-space: nowrap;
		padding: 0.2rem 0;
	}

	.marquee-text {
		display: inline-block;
		animation: marquee 40s linear infinite;
		font-family: var(--font-body);
		font-size: 1rem;
		color: var(--color-bg);
		font-weight: bold;
	}

	@keyframes marquee {
		from {
			transform: translateX(100vw);
		}
		to {
			transform: translateX(-100%);
		}
	}

	@media (max-width: 768px) {
		.hamburger {
			display: flex;
		}

		.links {
			display: none;
			position: absolute;
			top: var(--nav-height);
			left: 0;
			right: 0;
			background: var(--color-bg-alt);
			flex-direction: column;
			padding: 1rem;
			gap: 0.25rem;
			border-bottom: 3px solid var(--color-pink);
			z-index: 100;
		}

		.links.show {
			display: flex;
		}
	}
</style>
