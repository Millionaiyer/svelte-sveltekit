import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// console.log('loads everytime');
	const products = await (await import('$lib/dummy-products.json')).default;
	// console.log(products, 'prod');

	return { products };
};
