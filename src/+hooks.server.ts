import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const sessionId = event.cookies.get('idToken');
	const accessToken = event.cookies.get('accessToken');
	const pathName = event.url.pathname;
	// console.log(pathName, 'path');
	const response = await resolve(event);
	console.log(event, 'event');

	// return response;
	return response;
};
// a;
