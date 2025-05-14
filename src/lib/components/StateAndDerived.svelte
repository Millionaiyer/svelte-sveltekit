<script>
	const src = 'https://picsum.photos/250/300';
	let firstName = $state('suraj');
	let lastName = $state('aiyer');
	// let fullname = $derived(`${firstName} ${lastName}`);
	let fullName = $derived.by(() => {
		console.log('fullname derived');
		return `${firstName} ${lastName}`;
	});
	let username = $state('');

	// Reference
	// const name = 'Suraj aiyer';

	$effect(() => {
		if (username || fullName) {
			console.log('exists');
		}
	});
</script>

<div>
	<button
		onclick={() => {
			console.log(fullName);
		}}>Get Full Name</button
	>
	<input type="text" bind:value={username} />
	<input
		type="text"
		value={firstName}
		oninput={(e) => {
			firstName = e.currentTarget.value;
			console.log(fullName, 'full name');
		}}
	/>
	<input type="text" bind:value={lastName} />
	<h1>Welcome {username || fullName}</h1>
	<!-- <img {src} alt="a phot of {fullname}" /> -->
</div>
