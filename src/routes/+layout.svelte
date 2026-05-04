<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	// @ts-ignore
	import { ghostCursor, fairyDustCursor } from 'cursor-effects';

	let { children } = $props();

	onMount(() => {
		const cursor = new fairyDustCursor(
  {}
  );
		return () => cursor.destroy?.();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>~*~ J & A Wedding ~*~</title>
</svelte:head>

<Nav />
<main>
	{@render children()}
</main>
<Footer />

<style>
	main {
		min-height: calc(100vh - var(--nav-height) - 160px);
	}
</style>
