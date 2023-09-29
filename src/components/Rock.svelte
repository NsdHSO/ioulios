<script>
	import { writable } from 'svelte/store';
	import Toast from './Toast.svelte';
	let inputName = '';

	/**
	 * The debounce time in milliseconds.
	 * @type string
	 */
	let debounceValue;

	/**
	 * The debounce time in milliseconds.
	 * @type {any}
	 */
	let debounceTime;
	/**
	 * @type {import('svelte/store').Writable<boolean>}
	 */
	let duplicate = writable(false);

	/**
	 * @type {import('svelte/store').Writable<string[]>}
	 */
	let users = writable([]);

	/**
	 *
	 * @param {Event & { currentTarget: HTMLInputElement} }inputEvent
	 */
	function handleDebounceTime(inputEvent) {
		clearTimeout(debounceTime);
		inputName = inputEvent.currentTarget.value;
		debounceTime = setTimeout(() => {
			debounceValue = inputName;
			duplicate.set(
				$users.filter((v) => v.toLowerCase() === debounceValue.toLowerCase()).length >= 1
			);
		}, 500);
	}
	function submit() {
		if (
			inputName.length >= 3 &&
			typeof inputName === 'string' &&
			!($users.filter((v) => v.toLowerCase() === inputName.toLowerCase()).length >= 1)
		) {
			users.update((arr) => [...arr, inputName]);
			inputName = '';
		} else {
		}
	}
	/**
	 *
	 * @param event {Event & {key: string}}
	 */
	function handleKeyDown(event) {
		if (event.key === 'Enter') {
			submit();
		}
	}
	/**
	 *
	 * @param {{detail: {id: number}}}index
	 */
	function removeElement(index) {
		users.update(vmx=> vmx.filter((v,idx) => idx !== index.detail.id))
	}
</script>

<div class="flex gap-4">
	<div>
		<input
			type="text"
			bind:value={inputName}
			class="border focus:border-amber-500 border-blue-500"
			on:keypress={handleKeyDown}
			on:input={handleDebounceTime}
		/>

		{#if $duplicate}
			<div class="w-40 text-red-500">You introduce a duplicate key</div>
		{/if}
		{#each $users as user, index}
			<Toast {user} {index} on:elementRemove={(res) => removeElement(res)} />
		{:else}
			<div class="w-40">Please can you add users? For the moment you don't have add noting</div>
		{/each}
	</div>
	<div>
		<button on:click={submit} class="bg-blue-500 border border-amber-500 text-white px-4 h-10">
			Add user
		</button>
	</div>
</div>
