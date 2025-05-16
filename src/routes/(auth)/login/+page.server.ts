// import type { Action } from "@sveltejs/kit"
import { jwtDecode, type JwtPayload } from 'jwt-decode';
import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

interface JwtGroups extends JwtPayload {
	'cognito:groups'?: string[];
}

export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const userEmail = data.get('userEmail');
		const password = data.get('password');

		const loginData = {
			userEmail: userEmail,
			password: password
		};
		const response = await fetch('https://dev-unbadgedserver.flipopay.com/api/v1/users/sign-in', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(loginData)
		});

		const loginResponse = await response.json();

		cookies.set('accessToken', loginResponse?.data?.[0]?.accessToken, { path: '/' });
		cookies.set('idToken', loginResponse?.data?.[0]?.idToken, { path: '/' });
		cookies.set('refreshToken', loginResponse?.data?.[0]?.refreshToken, { path: '/' });

		const idToken = cookies.get('idToken');
		if (idToken) {
			const decodedIdToken: JwtGroups = jwtDecode(idToken);

			const groups = decodedIdToken?.['cognito:groups'];

			const role = groups?.[0];
			if (role === 'Partner') {
				redirect(303, '/partner');
			} else if (role === 'Payout') {
				redirect(303, '/payout');
			}
		}

		return loginResponse.data;
	}
} satisfies Actions;
