import type { Handle } from '@sveltejs/kit/hooks';
import { SESSION_COOKIE, isValidSession } from '#lib/server/auth.ts';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname === '/login') {
		return resolve(event);
	}

	if (await isValidSession(event.cookies.get(SESSION_COOKIE))) {
		return resolve(event);
	}

	const redirectTo = event.url.pathname + event.url.search;
	return new Response(null, {
		status: 303,
		headers: { location: `/login?redirectTo=${encodeURIComponent(redirectTo)}` }
	});
};
