<script>
	import Button from '../components/Button.svelte';
	let count = 0;
	$: double = count + 2;

	function increment() {
		count += 1;
	}
</script>

{count}
<Button on:marian={increment}>Press Me</Button>
