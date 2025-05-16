import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
	cookies.delete('idToken', { path: '/' });
	cookies.delete('accessToken', { path: '/' });
	cookies.delete('refreshToken', { path: '/' });

	throw redirect(303, '/login');
};
