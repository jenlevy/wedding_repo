<script lang="ts">
	let { form } = $props();

	// This page ships without SvelteKit's client JS (csr = false), so the show/hide toggle is a
	// standalone inline script. The button stays hidden if JS is unavailable.
	const togglePasswordScript = `<script>
		(() => {
			const input = document.getElementById('password');
			const toggle = document.getElementById('toggle-password');
			toggle.hidden = false;
			toggle.addEventListener('click', () => {
				const show = input.type === 'password';
				input.type = show ? 'text' : 'password';
				toggle.setAttribute('aria-pressed', String(show));
				input.focus();
			});
		})();
	<\/script>`;
</script>

<svelte:head>
	<title>Welcome — ~*~ J & A ~*~</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="container page-section">
	<h1 class="page-title">&#9829; J & A &#9829;</h1>
	<div class="divider"></div>

	<form method="POST" class="login retro-box">
		<p class="sparkles">&#10023; &#10023; &#10023;</p>
		<label for="password">Enter the password from your save the date</label>
		<div class="password-field">
			<input
				id="password"
				name="password"
				type="password"
				autocomplete="current-password"
				autocapitalize="off"
				spellcheck="false"
				required
			/>
			<button
				type="button"
				id="toggle-password"
				class="toggle"
				aria-controls="password"
				aria-label="Show password"
				aria-pressed="false"
				hidden
			>
				<svg class="eye-closed" viewBox="0 0 24 24" aria-hidden="true">
					<path d="M2 10c2.5 4 6 6 10 6s7.5-2 10-6" />
					<path d="M5 13.5 3 16M9.5 15.5 9 18.5M14.5 15.5l.5 3M19 13.5l2 2.5" />
				</svg>
				<svg class="eye-open" viewBox="0 0 24 24" aria-hidden="true">
					<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
					<circle cx="12" cy="12" r="3" />
				</svg>
			</button>
		</div>
		{#if form?.incorrect}
			<p class="error">&#9888; That password didn't work, try again!</p>
		{/if}
		<button type="submit">&gt;&gt; Enter &lt;&lt;</button>
	</form>
</section>

{@html togglePasswordScript}

<style>
	.login {
		max-width: 460px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		text-align: center;
	}

	.sparkles {
		font-size: 1.5rem;
		color: var(--color-yellow);
	}

	label {
		font-family: var(--font-body);
		font-size: 1.3rem;
		color: var(--color-light-pink);
	}

	.password-field {
		position: relative;
		width: 100%;
	}

	input {
		width: 100%;
		padding: 0.6rem 3rem 0.6rem 0.8rem;
		font-family: var(--font-body);
		font-size: 1.3rem;
		color: var(--color-bg);
		background: var(--color-white);
		border: 3px solid var(--color-pink);
	}

	input:focus {
		outline: 3px solid var(--color-yellow);
		outline-offset: 2px;
	}

	.error {
		font-family: var(--font-body);
		font-size: 1.2rem;
		color: var(--color-yellow);
	}

	button[type='submit'] {
		font-family: var(--font-pixel);
		font-size: 0.65rem;
		color: var(--color-bg);
		background: var(--color-light-pink);
		border: 3px solid var(--color-pink);
		box-shadow: 4px 4px 0 var(--color-magenta);
		padding: 0.75rem 1.25rem;
		cursor: pointer;
	}

	button[type='submit']:hover {
		background: var(--color-yellow);
	}

	.toggle {
		position: absolute;
		top: 50%;
		right: 0.5rem;
		transform: translateY(-50%);
		display: flex;
		color: var(--color-magenta);
		background: none;
		border: none;
		padding: 0.25rem;
		cursor: pointer;
	}

	.toggle:hover {
		color: var(--color-pink);
		transform: translateY(-50%) scale(1.15);
	}

	.toggle svg {
		width: 1.6rem;
		height: 1.6rem;
		fill: none;
		stroke: currentColor;
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	/* aria-pressed is flipped by the inline script, so Svelte can't see the 'true' state. */
	.toggle:global([aria-pressed='true']) .eye-closed,
	.toggle[aria-pressed='false'] .eye-open {
		display: none;
	}

	.toggle[hidden] {
		display: none;
	}
</style>
