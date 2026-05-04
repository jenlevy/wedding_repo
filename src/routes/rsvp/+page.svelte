<script lang="ts">
	import { enhance } from '$app/forms';

	let { form } = $props();
</script>

<svelte:head>
	<title>RSVP — ~*~ J & A ~*~</title>
</svelte:head>

<section class="container page-section">
	<h1 class="page-title">&gt;&gt; RSVP &lt;&lt;</h1>
	<div class="divider"></div>
	<p class="page-subtitle">Let us know if you can make it!</p>

	{#if form?.success}
		<div class="success-box retro-box">
			<p class="success-stars">&#9733; &#9733; &#9733;</p>
			<h2>RSVP Received!!</h2>
			<p>Thank you so much! We can't wait to celebrate with you.</p>
			<p class="success-stars">&#9733; &#9733; &#9733;</p>
		</div>
	{:else}
		<form method="POST" use:enhance class="rsvp-form retro-box">
			{#if form?.error}
				<div class="error-msg">!! {form.error} !!</div>
			{/if}

			<div class="field">
				<label for="name">&gt; Your Name *</label>
				<input type="text" id="name" name="name" value={form?.name ?? ''} required />
			</div>

			<div class="field">
				<label for="email">&gt; Email</label>
				<input type="email" id="email" name="email" value={form?.email ?? ''} />
			</div>

			<fieldset class="field">
				<legend>&gt; Will you attend? *</legend>
				<div class="radio-group">
					<label class="radio-label">
						<input type="radio" name="attending" value="yes" checked={form?.attending === 'yes'} />
						Yes, I'll be there!
					</label>
					<label class="radio-label">
						<input type="radio" name="attending" value="no" checked={form?.attending === 'no'} />
						Sorry, can't make it
					</label>
				</div>
			</fieldset>

			<div class="field">
				<label for="meal_choice">&gt; Meal Preference</label>
				<select id="meal_choice" name="meal_choice">
					<option value="">-- Select --</option>
					<option value="chicken">Chicken</option>
					<option value="fish">Fish</option>
					<option value="vegetarian">Vegetarian</option>
					<option value="vegan">Vegan</option>
				</select>
			</div>

			<div class="field">
				<label for="dietary_restrictions">&gt; Dietary Restrictions</label>
				<input type="text" id="dietary_restrictions" name="dietary_restrictions" value={form?.dietary_restrictions ?? ''} placeholder="Allergies, preferences, etc." />
			</div>

			<div class="field">
				<label for="plus_one_name">&gt; Plus One Name</label>
				<input type="text" id="plus_one_name" name="plus_one_name" value={form?.plus_one_name ?? ''} placeholder="If applicable" />
			</div>

			<div class="field">
				<label for="message">&gt; Leave us a message!</label>
				<textarea id="message" name="message" rows="3">{form?.message ?? ''}</textarea>
			</div>

			<button type="submit" class="submit-btn">&gt;&gt; Submit RSVP &lt;&lt;</button>
		</form>
	{/if}
</section>

<style>
	.rsvp-form {
		max-width: 650px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		border: none;
		padding: 0;
	}

	label, legend {
		font-family: var(--font-body);
		font-size: 1.2rem;
		color: var(--color-lime);
	}

	input[type="text"],
	input[type="email"],
	select,
	textarea {
		font-family: var(--font-body);
		font-size: 1.15rem;
		background: rgba(0, 0, 0, 0.4);
		border: 2px solid var(--color-cyan);
		color: var(--color-white);
		padding: 0.6rem 0.75rem;
		outline: none;
		transition: border-color 0.15s;
	}

	input:focus,
	select:focus,
	textarea:focus {
		border-color: var(--color-pink);
		box-shadow: 0 0 8px var(--color-pink);
	}

	select {
		cursor: pointer;
	}

	select option {
		background: var(--color-bg-alt);
		color: var(--color-cyan);
	}

	.radio-group {
		display: flex;
		gap: 1.5rem;
		margin-top: 0.3rem;
	}

	.radio-label {
		font-size: 1.15rem;
		color: var(--color-cyan);
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 0.4rem;
	}

	input[type="radio"] {
		accent-color: var(--color-pink);
		width: 16px;
		height: 16px;
	}

	textarea {
		resize: vertical;
		min-height: 80px;
	}

	.submit-btn {
		font-family: var(--font-pixel);
		font-size: 0.6rem;
		padding: 0.85rem 2rem;
		background: var(--color-lime);
		color: var(--color-bg);
		border: 3px outset var(--color-lime);
		cursor: pointer;
		align-self: center;
		margin-top: 0.5rem;
		transition: all 0.15s;
	}

	.submit-btn:hover {
		background: var(--color-pink);
		border-color: var(--color-pink);
		transform: scale(1.05);
	}

	.error-msg {
		font-family: var(--font-pixel);
		font-size: 0.55rem;
		color: var(--color-yellow);
		background: rgba(255, 0, 0, 0.2);
		border: 2px solid red;
		padding: 0.75rem;
		text-align: center;
	}

	.success-box {
		max-width: 650px;
		margin: 0 auto;
		text-align: center;
	}

	.success-box h2 {
		font-size: 0.9rem;
		color: var(--color-lime);
		margin-bottom: 0.75rem;
		text-shadow: 2px 2px var(--color-magenta);
	}

	.success-box p {
		font-family: var(--font-body);
		font-size: 1.3rem;
		color: var(--color-cyan);
	}

	.success-stars {
		font-size: 1.5rem;
		color: var(--color-yellow);
		animation: rainbow 3s linear infinite;
		margin: 0.5rem 0;
	}
</style>
