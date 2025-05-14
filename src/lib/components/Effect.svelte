<script lang="ts">
	import { tick, untrack } from 'svelte';

	let randomNumber = $state(Math.floor(Math.random() * 10));
	// let doubleRandomNumber = $state();
	let doubleRandomNumber = $derived(randomNumber * 2);

	let history: number[] = $state([untrack(() => randomNumber)]);
	let historyPTag: HTMLParagraphElement;

	$effect.pre(() => {
		history.length;
		console.log('$effect.pre', historyPTag?.innerText);
		tick().then(() => {
			console.log('After tick $effect.pre', historyPTag?.innerText);
		});
		return () => {
			console.log('clean up pre');
		};
	});

	$effect(() => {
		history.length;
		console.log('$effect', historyPTag.innerText);
		return () => {
			console.log('clean up effect');
		};
	});
</script>

<h3>The random number is {randomNumber}</h3>
<h3>Double random number is {doubleRandomNumber}</h3>
<p bind:this={historyPTag}>history {history}</p>

<button
	onclick={() => {
		randomNumber = Math.floor(Math.random() * 10);
		history.push(randomNumber);
		console.log(randomNumber, doubleRandomNumber);
	}}>Generate</button
>
