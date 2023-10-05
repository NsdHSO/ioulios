<script>
	import { extractRounded, extractVariation } from './../utils/Variation-Button.js';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function clickEvent() {
		dispatch('marian');
	}

	/**
	 *  @type {number}
	 */
	export let roundedButton = 1;

	/**
	 *  @type {number}
	 */
	export let typeButton = 0;
</script>

<button
	on:click={clickEvent}
	class={`${extractRounded(roundedButton)} ${extractVariation(typeButton)}`}
>
	<slot />
</button>
