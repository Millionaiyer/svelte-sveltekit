import { error } from '@sveltejs/kit';

export function load({ params }) {
	// Simulate an error with a custom message and status
	if (params?.slug === 'blog-post') {
		return {
			title: 'Blog Post no 1',
			content: 'Welcome to the first blog post'
		};
	} else {
		throw error(404, 'The page you are tying to access does not exists');
	}
}
