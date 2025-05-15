// import type { Action } from "@sveltejs/kit"
import type { Actions } from './$types';

export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const username = data.get('email');
		const password = data.get('password');

		console.log(username, password, 'credentials');
	}
} satisfies Actions;
