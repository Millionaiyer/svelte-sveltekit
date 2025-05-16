<script lang="ts">
	let { children } = $props();
</script>

<nav class="header">
	<a href="/">Home</a>
	<a href="/login">Login</a>
	<a href="/partner">partner</a>
	<a href="/payout">payout</a>
	<a href="/managemnet">managemnet</a>
	<a href="/logout">Logout</a>
</nav>
<main>
	{@render children()}
</main>

<style>
	.header {
		display: flex;
		gap: 10px;
		font-size: 20px;
		padding: 10px;
		border-radius: 12px;
	}
	.header a {
		text-decoration: none;
	}
</style>
