import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	if (params?.slug === 'blog-post') {
		return {
			title: 'Blog Post no 1',
			content: 'Welcome to the first blog post'
		};
	}

	error(404, 'page not found');
};
