// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';
import { jwtDecode, type JwtPayload } from 'jwt-decode';
import { redirect } from '@sveltejs/kit';
import { protectedRoutes } from './routes/(auth)/protectedRoutes';

interface JwtGroups extends JwtPayload {
	'cognito:groups'?: string[];
}

export const handle: Handle = async ({ event, resolve }) => {
	const { cookies, url } = event;
	const pathname = url.pathname;

	const idToken = cookies.get('idToken');

	// Check if current route is protected
	for (const [protectedPath, allowedRoles] of Object.entries(protectedRoutes)) {
		if (pathname.startsWith(protectedPath)) {
			if (!idToken) {
				throw redirect(303, '/unauthorized');
			}

			try {
				const decoded = jwtDecode<JwtGroups>(idToken);
				const groups = decoded['cognito:groups'] || [];

				const hasAccess = groups.some((role) => allowedRoles.includes(role));
				if (!hasAccess) {
					throw redirect(303, '/unauthorized');
				}
			} catch (error) {
				console.error('Token decode failed:', error);
				throw redirect(303, '/unauthorized');
			}
		}
	}

	return resolve(event);
};
