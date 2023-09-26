<script lang="ts">
	import Rock from './../../components/Rock.svelte';

	function getRandomNumber(min: number = 0, max: number = 100): number {
		if (min >= max) {
			throw new Error('Min value must be less than max value');
		}
		// Generate a random number between 0 (inclusive) and 1 (exclusive)
		const randomFraction = Math.random();
		// Scale the random number to fit within the specified range
		return min + randomFraction * (max - min);
	}

  let number = 0
	setInterval(()=>{
    number = getRandomNumber().toFixed(2)
	},1000)
</script>

<Rock randomNumber={number} />
<form method="POST">
	<label>
		Email
		<input name="email" type="email" />
	</label>
	<label>
		Password
		<input name="password" type="password" />
	</label>
	<button>Log in</button>
</form>
