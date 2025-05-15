<script lang="ts">
	import type { PageProps } from './$types';

	// console.log(PageProps, 'page props');

	let { data }: PageProps = $props();
	console.log(data, 'data');
</script>

<h1>{data?.title}</h1>
<div>{@html data?.content}</div>
<!-- 


-->
