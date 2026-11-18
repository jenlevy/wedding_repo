import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import {
	SESSION_COOKIE,
	SESSION_MAX_AGE,
	createSessionToken,
	isCorrectPassword,
	isValidSession
} from '#lib/server/auth.ts';

// Only allow redirects back to pages on this site.
function redirectTarget(url: URL): string {
	const target = new URL(url.searchParams.get('redirectTo') ?? '/', url.origin);
	return target.origin === url.origin ? target.pathname + target.search : '/';
}

export const load: PageServerLoad = async ({ cookies, url }) => {
	if (await isValidSession(cookies.get(SESSION_COOKIE))) {
		redirect(303, redirectTarget(url));
	}
};

export const actions = {
	default: async ({ request, cookies, url }) => {
		const data = await request.formData();
		const password = data.get('password')?.toString() ?? '';

		if (!(await isCorrectPassword(password))) {
			return fail(401, { incorrect: true });
		}

		cookies.set(SESSION_COOKIE, await createSessionToken(), {
			path: '/',
			httpOnly: true,
			sameSite: 'lax',
			maxAge: SESSION_MAX_AGE
		});
		redirect(303, redirectTarget(url));
	}
} satisfies Actions;
