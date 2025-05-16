import { redirect } from '@sveltejs/kit';
import { jwtDecode, type JwtPayload } from 'jwt-decode';
import type { PageServerLoad } from './$types';

interface JwtGroups extends JwtPayload {
	'cognito:groups'?: string[];
}

export const load: PageServerLoad = async ({ cookies }) => {
	const idToken = cookies.get('idToken');

	if (!idToken) {
		throw redirect(303, '/unauthorized');
	}

	try {
		const decoded: JwtGroups = jwtDecode(idToken);
		const groups = decoded['cognito:groups'];

		if (!groups?.includes('Partner')) {
			throw redirect(303, '/unauthorized');
		}
	} catch (err) {
		throw redirect(303, '/login');
	}

	return {};
};
