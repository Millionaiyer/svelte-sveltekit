<script lang="ts">
	let { children } = $props();
</script>

<nav class="flex gap-10">
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/blog">Blog</a>
</nav>

{@render children()}
