<script lang="ts">
	import Nav from '#lib/components/Nav.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	// @ts-ignore
	import {
		ghostCursor,
		fairyDustCursor
	} from 'cursor-effects';

	let { children } = $props();

	onMount(() => {
		const cursor = new fairyDustCursor({});
		return () => cursor.destroy?.();
	});
</script>

<Nav />
<main>
	{@render children()}
</main>
<Footer />

<style>
	main {
		min-height: calc(
			100vh - var(--nav-height) - 160px
		);
	}
</style>
