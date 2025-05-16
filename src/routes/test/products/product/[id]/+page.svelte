<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: product = data.product;
</script>

<p>{product?.title}</p>
<img src={product?.thumbnail} alt={product?.title} />
