<script lang="ts">
	import Rock from './../../components/Rock.svelte';

	export let data;

	function getRandomNumber(min: number = 0, max: number = 100): number {
		if (min >= max) {
			throw new Error('Min value must be less than max value');
		}
		// Generate a random number between 0 (inclusive) and 1 (exclusive)
		const randomFraction = Math.random();
	}

	let number = 0;
</script>

<Rock toasts={data.toasts} />
