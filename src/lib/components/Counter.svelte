<script lang="ts">
	import { onMount } from 'svelte';

	let count = $state(0);
	let frequency = $state(1000);
	let paused = $state(false);

	// $effect(() => {
	// 	let interval: ReturnType<typeof setInterval>;
	// 	if (!paused) {
	// 		interval = setInterval(() => {
	// 			count += 1;
	// 		}, frequency);
	// 	}
	// 	return () => {
	// 		clearInterval(interval);
	// 	};
	// });

	function updateFrequency(updateFrequency: number) {
		frequency = updateFrequency;
		createInterval();
	}

	let interval: ReturnType<typeof setInterval>;
	const createInterval = () => {
		clearInterval(interval);
		if (!paused) {
			interval = setInterval(() => {
				count += 1;
			}, frequency);
		}
	};

	function togglePlayState() {
		if (!paused) {
			paused = true;
			clearInterval(interval);
		} else {
			paused = false;
			createInterval();
		}
	}

	onMount(() => {
		createInterval();
		return () => {
			clearInterval(interval);
		};
	});
</script>

<h1>{count}</h1>
<button
	onclick={() => {
		updateFrequency(frequency / 2);
	}}>faster</button
>

<button onclick={() => updateFrequency(frequency * 2)}> slower </button>
<button onclick={togglePlayState}>{paused ? 'Play' : 'Pause'}</button>
<button
	onclick={() => {
		count = 0;
		const originalFrequency = frequency;
		frequency = 0;
		frequency = originalFrequency;
	}}
	>reset
</button>
