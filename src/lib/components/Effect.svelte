<script lang="ts">
	import { untrack } from 'svelte';

	let randomNumber = $state(Math.floor(Math.random() * 10));
	// let doubleRandomNumber = $state();
	let doubleRandomNumber = $derived(randomNumber * 2);

	let history: number[] = $state([untrack(() => randomNumber)]);

	// $effect(() => {
	// 	// doubleRandomNumber = randomNumber * 2;
	// 	randomNumber;
	// 	untrack(() => {
	// 		history.push(randomNumber);
	// 	});
	// });
</script>

<h3>The random number is {randomNumber}</h3>
<h3>Double random number is {doubleRandomNumber}</h3>
<p>history {history}</p>

<button
	onclick={() => {
		randomNumber = Math.floor(Math.random() * 10);
		history.push(randomNumber);
		console.log(randomNumber, doubleRandomNumber);
	}}>Generate</button
>
