<script>
	export let inputValue = 0;
</script>

{inputValue}
<input bind:value={inputValue} type="range" min="0" max="255"/>
