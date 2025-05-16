import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const products = await (await import('$lib/dummy-products.json')).default;
	const product = products.products.find((p) => p.id === +params.id);

	if (!product) {
		throw error(404, 'product not found');
	}
	return { product };
};
