<script>
	import Button from '../components/Button.svelte';
	let count = 0;
	$: double = count + 2;

	function increment() {
		count += 1;
	}
</script>

<button on:mouseenter={increment}>
	clicks: {count}
</button>
<a class="bg-blue-500" href="/dashboard">About my site</a>
<Button>Press Me</Button>
