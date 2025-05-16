<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	// console.log(data.products, 'data');

	export const actualData = data.products;

	let products = data.products.products;
	console.log(products, 'products');

	// let filteredData = data.products;
</script>

<h1>
	{#each products as product}
		<div class="flex">
			{product.title}
			{product.id}
		</div>
	{/each}
</h1>
