import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		// Cloudflare Pages: build output is `.svelte-kit/cloudflare` (SSR + routes in one Worker).
		// https://kit.svelte.dev/docs/adapter-cloudflare
		adapter: adapter()
	}
};

export default config;
