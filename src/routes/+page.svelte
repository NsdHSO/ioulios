<script>
    let count = 0
    $: double = count + 2;

    function increment() {
        count += 1;
    }
</script>

<button on:mouseenter={increment}>
	clicks: {count}
</button>
<a href="/dashboard">About my site</a>

