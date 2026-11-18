import adapter from '@sveltejs/adapter-cloudflare';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename
						.split(/[/\\]/)
						.includes('node_modules')
						? undefined
						: true
			},
			adapter: adapter()
		})
	],
	// better-sqlite3 is a native Node module and breaks when bundled. Remove once RSVPs move to Supabase.
	ssr: {
		external: ['better-sqlite3'],
		// Pre-bundling creates a second copy of Kit, so `redirect`/`fail` from app code aren't recognized in dev.
		optimizeDeps: {
			exclude: ['@sveltejs/kit']
		}
	}
});
