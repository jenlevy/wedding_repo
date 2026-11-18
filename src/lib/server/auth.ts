import { SITE_PASSWORD } from '$app/env/private';

export const SESSION_COOKIE = 'site_session';
export const SESSION_MAX_AGE = 60 * 60 * 24 * 365;

const encoder = new TextEncoder();

async function hmac(key: string, message: string): Promise<Uint8Array> {
	const cryptoKey = await crypto.subtle.importKey(
		'raw',
		encoder.encode(key),
		{ name: 'HMAC', hash: 'SHA-256' },
		false,
		['sign']
	);
	return new Uint8Array(await crypto.subtle.sign('HMAC', cryptoKey, encoder.encode(message)));
}

function timingSafeEqual(a: Uint8Array, b: Uint8Array): boolean {
	if (a.length !== b.length) return false;
	let diff = 0;
	for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
	return diff === 0;
}

function toBase64Url(bytes: Uint8Array): string {
	return btoa(String.fromCharCode(...bytes))
		.replace(/\+/g, '-')
		.replace(/\//g, '_')
		.replace(/=+$/, '');
}

function requirePassword(): string {
	if (!SITE_PASSWORD) throw new Error('SITE_PASSWORD is not set');
	return SITE_PASSWORD;
}

// Signed with the password itself, so changing SITE_PASSWORD logs everyone out.
export async function createSessionToken(): Promise<string> {
	return toBase64Url(await hmac(requirePassword(), 'site-session-v1'));
}

export async function isValidSession(token: string | undefined): Promise<boolean> {
	if (!token || !SITE_PASSWORD) return false;
	return timingSafeEqual(encoder.encode(token), encoder.encode(await createSessionToken()));
}

export async function isCorrectPassword(attempt: string): Promise<boolean> {
	if (!SITE_PASSWORD) return false;
	// Comparing digests keeps the comparison constant-time regardless of input length.
	const [a, b] = await Promise.all([
		hmac('password-check', attempt),
		hmac('password-check', SITE_PASSWORD)
	]);
	return timingSafeEqual(a, b);
}
