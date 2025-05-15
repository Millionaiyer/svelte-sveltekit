<script>
</script>

<div class="container">
	<div class="form-container">
		<h2>Sign In</h2>
		<form action="?/login" method="POST" class="form-action">
			<label for="email" style="font-size: 20px;">Email</label>
			<input id="email" name="email" type="email" required placeholder="Enter your email" />

			<label for="password" style="font-size: 20px;">Password</label>
			<input
				id="password"
				name="password"
				type="password"
				required
				placeholder="Enter your password"
			/>

			<button type="submit">Sign In</button>
		</form>
	</div>
</div>

<style>
	.form-action {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.container {
		display: flex;
		height: 100vh;
		justify-content: center;
		align-items: center;
	}
	.form-container {
		background-color: #fff;
		padding: 20px;
		border-radius: 8px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
		width: 100%;
		max-width: 400px;
	}

	h2 {
		text-align: center;
		margin-bottom: 20px;
		color: #333;
	}

	label {
		display: block;
		margin-bottom: 10px;
		font-size: 14px;
		color: #333;
	}

	input {
		width: 100%;
		padding: 12px;
		margin-top: 5px;
		border: 1px solid #ddd;
		border-radius: 5px;
		font-size: 16px;
		box-sizing: border-box;
		transition: border-color 0.3s ease;
	}

	input:focus {
		border-color: #4caf50;
		outline: none;
	}

	button {
		width: 100%;
		padding: 12px;
		background-color: #4caf50;
		color: #fff;
		border: none;
		border-radius: 5px;
		font-size: 16px;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	button:hover {
		background-color: #45a049;
	}
</style>
