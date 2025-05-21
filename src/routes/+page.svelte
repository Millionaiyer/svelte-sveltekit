<script lang='ts'>
	import Button from '$lib/Button.svelte';
	import { AlarmCheck, Calendar, Search } from '@lucide/svelte';

</script>
<h1>hello world</h1>
<!-- 
{#snippet leftIcon(isHovered:boolean)}
{#if isHovered}
<Search/>
{:else}
<AlarmCheck/>
{/if}

{/snippet}

{#snippet rightIcon()}
<Calendar/>
{/snippet}

<Button left={leftIcon} right={rightIcon} size='sm' >click me</Button> -->


<Button size="lg" disabled>
	{#snippet left(isHovered)}
		{#if isHovered}
			<Search />
		{:else}
			<AlarmCheck />
		{/if}
	{/snippet}
	Text
	{#snippet right()}
		<AlarmCheck />
	{/snippet}
</Button>