// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
/// <reference types="@cloudflare/workers-types" />

declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // Cloudflare bindings (KV, D1, etc.): extend `env` when you add them in wrangler.toml
    // interface Platform {}
  }
}

export {};
